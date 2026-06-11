"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/*
  Carport-Kostenrechner — parametric estimate.
  Figures are Richtwerte synthesized from German cost guides (Stand: Juni 2026):
  base structure by type/material, +20% for Satteldach, foundation and assembly
  by size, optional PV roof (~1.250–1.750 €/kWp), and a ~25 % Ballungsraum
  surcharge on labour-/material-driven items. Output is a rounded range, not a
  quote.
*/

type Type = "einzel" | "doppel" | "gross";
type Material = "holz" | "stahl" | "alu";
type Roof = "flach" | "sattel";
type Foundation = "keines" | "punkt" | "platte";
type Assembly = "selbst" | "fach";

const SIZE_LABEL: Record<Type, string> = {
  einzel: "Einzel · ~15 m²",
  doppel: "Doppel · ~30 m²",
  gross: "Groß · ~45 m²",
};

// Base structure, delivered, flat roof, no foundation/assembly/extras.
const BASE: Record<Material, Record<Type, number>> = {
  holz: { einzel: 2000, doppel: 3400, gross: 5000 },
  stahl: { einzel: 2600, doppel: 4400, gross: 6400 },
  alu: { einzel: 3600, doppel: 6000, gross: 8600 },
};

const FOUNDATION: Record<Foundation, Record<Type, number>> = {
  keines: { einzel: 0, doppel: 0, gross: 0 },
  punkt: { einzel: 600, doppel: 1000, gross: 1400 },
  platte: { einzel: 1800, doppel: 2800, gross: 3800 },
};

const ASSEMBLY: Record<Type, number> = { einzel: 1000, doppel: 1500, gross: 2000 };

// Extras that scale with size.
const SOLAR: Record<Type, number> = { einzel: 6500, doppel: 10500, gross: 14000 };
const GREEN: Record<Type, number> = { einzel: 700, doppel: 1300, gross: 1900 };
const WALLS: Record<Type, number> = { einzel: 800, doppel: 1400, gross: 2000 };
const STORAGE = 1500; // Geräteraum
const POWER = 500; // Strom & Beleuchtung
const PERMIT = 250; // Baugenehmigung
const REGION_SURCHARGE = 0.25;
const SATTEL_FACTOR = 1.2;

const nf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const round100 = (n: number) => Math.round(n / 100) * 100;
const eur = (n: number) => `${nf.format(round100(n))} €`;

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="label text-ink-soft">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`border px-3.5 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-accent bg-accent text-paper"
                  : "border-line bg-paper text-ink-soft hover:border-ink/40"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2.5 border px-3.5 py-2 text-left text-sm transition-colors ${
        checked
          ? "border-accent bg-accent/10 text-ink"
          : "border-line bg-paper text-ink-soft hover:border-ink/40"
      }`}
    >
      <span
        aria-hidden
        className={`grid h-4 w-4 shrink-0 place-items-center border text-[0.7rem] font-bold ${
          checked
            ? "border-accent bg-accent text-paper"
            : "border-line-strong text-transparent"
        }`}
      >
        ✓
      </span>
      <span>
        {label}
        {hint && <span className="ml-1 text-xs text-ink-soft/60">{hint}</span>}
      </span>
    </button>
  );
}

export function CarportCalculator() {
  const [type, setType] = useState<Type>("einzel");
  const [material, setMaterial] = useState<Material>("holz");
  const [roof, setRoof] = useState<Roof>("flach");
  const [foundation, setFoundation] = useState<Foundation>("punkt");
  const [assembly, setAssembly] = useState<Assembly>("fach");
  const [storage, setStorage] = useState(false);
  const [power, setPower] = useState(false);
  const [green, setGreen] = useState(false);
  const [solar, setSolar] = useState(false);
  const [walls, setWalls] = useState(false);
  const [region, setRegion] = useState(true);
  const [permit, setPermit] = useState(false);

  const calc = useMemo(() => {
    const structure = BASE[material][type] * (roof === "sattel" ? SATTEL_FACTOR : 1);
    const fundament = FOUNDATION[foundation][type];
    const aufbau = assembly === "fach" ? ASSEMBLY[type] : 0;
    const ausstattung =
      (storage ? STORAGE : 0) +
      (power ? POWER : 0) +
      (green ? GREEN[type] : 0) +
      (walls ? WALLS[type] : 0);

    // Labour-/material-driven items carry the regional surcharge.
    const regional = structure + fundament + aufbau + ausstattung;
    const regionDelta = region ? regional * REGION_SURCHARGE : 0;

    // PV (commodity pricing) and permit fees are not regionally scaled.
    const solarCost = solar ? SOLAR[type] : 0;
    const permitCost = permit ? PERMIT : 0;

    const total = regional + regionDelta + solarCost + permitCost;

    const rows: { label: string; value: number }[] = [
      { label: "Grundpreis (Carport + Dach)", value: structure },
      ...(fundament ? [{ label: "Fundament", value: fundament }] : []),
      ...(aufbau ? [{ label: "Aufbau durch Fachbetrieb", value: aufbau }] : []),
      ...(ausstattung ? [{ label: "Ausstattung", value: ausstattung }] : []),
      ...(solarCost ? [{ label: "Solar-/PV-Dach", value: solarCost }] : []),
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
      ...(permitCost ? [{ label: "Baugenehmigung", value: permitCost }] : []),
    ];

    return { total, low: total * 0.9, high: total * 1.15, rows };
  }, [
    type,
    material,
    roof,
    foundation,
    assembly,
    storage,
    power,
    green,
    solar,
    walls,
    region,
    permit,
  ]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Type>
          label="Carport-Typ"
          value={type}
          onChange={setType}
          options={[
            { value: "einzel", label: SIZE_LABEL.einzel },
            { value: "doppel", label: SIZE_LABEL.doppel },
            { value: "gross", label: SIZE_LABEL.gross },
          ]}
        />
        <Segmented<Material>
          label="Material"
          value={material}
          onChange={setMaterial}
          options={[
            { value: "holz", label: "Holz" },
            { value: "stahl", label: "Stahl" },
            { value: "alu", label: "Aluminium" },
          ]}
        />
        <Segmented<Roof>
          label="Dachform"
          value={roof}
          onChange={setRoof}
          options={[
            { value: "flach", label: "Flachdach" },
            { value: "sattel", label: "Satteldach" },
          ]}
        />
        <Segmented<Foundation>
          label="Fundament"
          value={foundation}
          onChange={setFoundation}
          options={[
            { value: "keines", label: "Vorhanden" },
            { value: "punkt", label: "Punktfundament" },
            { value: "platte", label: "Bodenplatte" },
          ]}
        />
        <Segmented<Assembly>
          label="Aufbau"
          value={assembly}
          onChange={setAssembly}
          options={[
            { value: "fach", label: "Vom Fachbetrieb" },
            { value: "selbst", label: "Selbstaufbau" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Ausstattung</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle label="Geräteraum" checked={storage} onChange={setStorage} />
            <Toggle label="Strom & Licht" checked={power} onChange={setPower} />
            <Toggle label="Dachbegrünung" checked={green} onChange={setGreen} />
            <Toggle label="Seitenwände" checked={walls} onChange={setWalls} />
            <Toggle
              label="Solar-Dach"
              hint="PV"
              checked={solar}
              onChange={setSolar}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="label text-ink-soft">Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle
              label="Ballungsraum"
              hint="z. B. Hamburg"
              checked={region}
              onChange={setRegion}
            />
            <Toggle
              label="Baugenehmigung einplanen"
              checked={permit}
              onChange={setPermit}
            />
          </div>
        </fieldset>
      </div>

      {/* Result */}
      <div className="flex flex-col bg-ink p-6 text-paper sm:p-8">
        <p className="label text-accent">Geschätzte Kosten</p>
        <p className="mt-3 font-display text-3xl font-extrabold leading-none sm:text-4xl">
          {eur(calc.low)}
          <span className="text-paper/50"> – </span>
          {eur(calc.high)}
        </p>
        <p className="mt-2 text-xs text-paper/50">
          Richtwert: {eur(calc.total)} · inkl. gewählter Optionen
        </p>

        <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
          {calc.rows.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-4">
              <dt className="text-paper/60">{r.label}</dt>
              <dd className="font-medium tabular-nums">{eur(r.value)}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/#kontakt"
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Passende Angebote anfragen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Unverbindliche Schätzung (Stand: Juni 2026), kein Angebot. Reale Preise
          hängen von Ausführung, Untergrund und Region ab.
        </p>
      </div>
    </div>
  );
}

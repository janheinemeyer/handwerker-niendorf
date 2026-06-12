"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Segmented, Toggle, eur, round100 } from "@/components/calculator-ui";

/*
  Terrassenüberdachung-Kostenrechner — parametric estimate.
  Richtwerte synthesized from German cost guides (Stand: Juni 2026): construction
  €/m² by frame + roofing, assembly and foundation by area, optional extras, and
  a ~20 % Ballungsraum surcharge on labour-/material-driven items. Output is a
  rounded range, not a quote.
*/

type Width = "3" | "4" | "5" | "6";
type Depth = "2.5" | "3" | "3.5" | "4";
type Build = "holz-poly" | "alu-poly" | "alu-glas" | "lamelle";
type Assembly = "fach" | "selbst";
type Foundation = "vorhanden" | "punkt" | "platte";

// Construction (frame + roofing), delivered, €/m².
const BUILD_PRICE: Record<Build, number> = {
  "holz-poly": 160,
  "alu-poly": 260,
  "alu-glas": 440,
  lamelle: 900,
};

const MARKISE = 2000;
const LED = 500;
const WAENDE = 1800;
const HEIZUNG = 800;
const PERMIT = 200;
const REGION_SURCHARGE = 0.2;

const nfArea = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });

export function TerrassenCalculator() {
  const [width, setWidth] = useState<Width>("4");
  const [depth, setDepth] = useState<Depth>("3");
  const [build, setBuild] = useState<Build>("alu-poly");
  const [assembly, setAssembly] = useState<Assembly>("fach");
  const [foundation, setFoundation] = useState<Foundation>("punkt");
  const [markise, setMarkise] = useState(false);
  const [led, setLed] = useState(false);
  const [waende, setWaende] = useState(false);
  const [heizung, setHeizung] = useState(false);
  const [region, setRegion] = useState(true);
  const [permit, setPermit] = useState(false);

  const calc = useMemo(() => {
    const area = parseFloat(width) * parseFloat(depth);

    const konstruktion = area * BUILD_PRICE[build];
    const montage = assembly === "fach" ? Math.max(700, area * 60) : 0;
    const fundament =
      foundation === "platte" ? area * 130 : foundation === "punkt" ? 600 : 0;
    const ausstattung =
      (markise ? MARKISE : 0) +
      (led ? LED : 0) +
      (waende ? WAENDE : 0) +
      (heizung ? HEIZUNG : 0);

    const regional = konstruktion + montage + fundament + ausstattung;
    const regionDelta = region ? regional * REGION_SURCHARGE : 0;
    const permitCost = permit ? PERMIT : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: "Konstruktion (Gestell + Dach)", value: konstruktion },
      ...(montage ? [{ label: "Montage durch Fachbetrieb", value: montage }] : []),
      ...(fundament ? [{ label: "Fundament", value: fundament }] : []),
      ...(ausstattung ? [{ label: "Ausstattung", value: ausstattung }] : []),
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
      ...(permitCost ? [{ label: "Baugenehmigung", value: permitCost }] : []),
    ];

    // Round each row to €100 and derive the total from the rounded rows so the
    // breakdown always sums to the displayed Richtwert.
    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { area, total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [
    width,
    depth,
    build,
    assembly,
    foundation,
    markise,
    led,
    waende,
    heizung,
    region,
    permit,
  ]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Width>
          label="Breite"
          value={width}
          onChange={setWidth}
          options={[
            { value: "3", label: "3 m" },
            { value: "4", label: "4 m" },
            { value: "5", label: "5 m" },
            { value: "6", label: "6 m" },
          ]}
        />
        <Segmented<Depth>
          label="Tiefe"
          value={depth}
          onChange={setDepth}
          options={[
            { value: "2.5", label: "2,5 m" },
            { value: "3", label: "3 m" },
            { value: "3.5", label: "3,5 m" },
            { value: "4", label: "4 m" },
          ]}
        />
        <Segmented<Build>
          label="Material & Eindeckung"
          value={build}
          onChange={setBuild}
          options={[
            { value: "holz-poly", label: "Holz + Polycarbonat" },
            { value: "alu-poly", label: "Alu + Polycarbonat" },
            { value: "alu-glas", label: "Alu + Glas (VSG)" },
            { value: "lamelle", label: "Lamellendach" },
          ]}
        />
        <Segmented<Foundation>
          label="Fundament"
          value={foundation}
          onChange={setFoundation}
          options={[
            { value: "vorhanden", label: "Vorhanden" },
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
            <Toggle label="Markise / Beschattung" checked={markise} onChange={setMarkise} />
            <Toggle label="LED-Beleuchtung" checked={led} onChange={setLed} />
            <Toggle label="Seitenwände" checked={waende} onChange={setWaende} />
            <Toggle label="Heizstrahler" checked={heizung} onChange={setHeizung} />
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
        <div role="status" aria-live="polite">
          <p className="mt-3 font-display text-3xl font-extrabold leading-none sm:text-4xl">
            {eur(calc.low)}
            <span className="text-paper/50"> – </span>
            {eur(calc.high)}
          </p>
          <p className="mt-2 text-xs text-paper/50">
            Richtwert: {eur(calc.total)} · {nfArea.format(calc.area)} m² · inkl.
            gewählter Optionen
          </p>
        </div>

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
          hängen von Ausführung, Statik, Untergrund und Region ab.
        </p>
      </div>
    </div>
  );
}

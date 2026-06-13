"use client";

import { useMemo, useState } from "react";
import { RequestButton } from "@/components/request/request-button";
import { Segmented, Toggle, round100, eur } from "@/components/calculator-ui";

/*
  Wintergarten-Kostenrechner — parametric estimate.
  Richtwerte synthesized from German cost guides (Stand: Juni 2026). The
  defining driver is Kalt- vs. Warmwintergarten (~500–1.000 €/m² vs.
  ~2.000–5.500 €/m²), then material and size, plus glazing, foundation,
  shading and the (in Hamburg always required) building permit. The Ballungsraum
  surcharge applies +20 % only to the labour share (~60 %) → ~12 % on the total;
  the permit is a fixed fee and is not regionally scaled. Output is a rounded
  range, not a quote.
*/

type Typ = "kalt" | "warm";
type Size = "klein" | "mittel" | "gross";
type Material = "kunststoff" | "holz" | "alu";
type Glazing = "zweifach" | "dreifach";

const SIZE_LABEL: Record<Size, string> = {
  klein: "Klein · ~12 m²",
  mittel: "Mittel · ~20 m²",
  gross: "Groß · ~30 m²",
};
const SIZE_NAME: Record<Size, string> = {
  klein: "klein (~12 m²)",
  mittel: "mittel (~20 m²)",
  gross: "groß (~30 m²)",
};
const TYP_NAME: Record<Typ, string> = {
  kalt: "Kaltwintergarten",
  warm: "Warmwintergarten (Wohnwintergarten)",
};
const MATERIAL_NAME: Record<Material, string> = {
  kunststoff: "Kunststoff",
  holz: "Holz",
  alu: "Aluminium",
};

const SIZE_M2: Record<Size, number> = { klein: 12, mittel: 20, gross: 30 };

// Base €/m² by type and frame material.
const BASE_PER_M2: Record<Typ, Record<Material, number>> = {
  kalt: { kunststoff: 600, holz: 850, alu: 1000 },
  warm: { kunststoff: 2200, holz: 2900, alu: 3600 },
};
const GLAZING_PER_M2: Record<Glazing, number> = { zweifach: 0, dreifach: 100 };
const FUNDAMENT_PER_M2 = 120; // neue Bodenplatte/Fundament
const BESCHATTUNG = 2500; // Markise/Beschattung
const PERMIT = 1500; // Baugenehmigung (in Hamburg immer erforderlich)
const REGION_SURCHARGE = 0.2; // Hamburg premium on labour…
const LABOUR_SHARE = 0.6; // …which is ~60 % → ~12 % on the total

export function WintergartenCalculator() {
  const [typ, setTyp] = useState<Typ>("kalt");
  const [size, setSize] = useState<Size>("mittel");
  const [material, setMaterial] = useState<Material>("kunststoff");
  const [glazing, setGlazing] = useState<Glazing>("zweifach");
  const [fundament, setFundament] = useState(false);
  const [beschattung, setBeschattung] = useState(false);
  const [permit, setPermit] = useState(true);
  const [region, setRegion] = useState(true);

  const calc = useMemo(() => {
    const m2 = SIZE_M2[size];
    const base = BASE_PER_M2[typ][material] * m2;
    const glaz = GLAZING_PER_M2[glazing] * m2;
    const fund = fundament ? FUNDAMENT_PER_M2 * m2 : 0;
    const besch = beschattung ? BESCHATTUNG : 0;

    // Labour-/material-driven items carry the regional surcharge (on the labour
    // share); the permit is a fixed authority fee and is not regionally scaled.
    const regional = base + glaz + fund + besch;
    const regionDelta = region ? regional * LABOUR_SHARE * REGION_SURCHARGE : 0;
    const permitCost = permit ? PERMIT : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: `Grundpreis (${TYP_NAME[typ].split(" ")[0]}, ${MATERIAL_NAME[material]})`, value: base },
      ...(glaz ? [{ label: "3-fach-Verglasung", value: glaz }] : []),
      ...(fund ? [{ label: "Fundament / Bodenplatte", value: fund }] : []),
      ...(besch ? [{ label: "Beschattung", value: besch }] : []),
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
      ...(permitCost ? [{ label: "Baugenehmigung", value: permitCost }] : []),
    ];

    // Round each row to €100 and derive the total from the rounded rows, so the
    // breakdown always adds up exactly to the shown Richtwert.
    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [typ, size, material, glazing, fundament, beschattung, permit, region]);

  const request = useMemo(() => {
    const extras = [
      glazing === "dreifach" && "3-fach-Verglasung",
      fundament && "Fundament",
      beschattung && "Beschattung",
      permit && "inkl. Baugenehmigung",
    ].filter(Boolean) as string[];
    const parts = [TYP_NAME[typ], SIZE_NAME[size], MATERIAL_NAME[material]];
    if (extras.length) parts.push(extras.join(", "));
    if (region) parts.push("Ballungsraum");
    return {
      service: "Wintergarten",
      source: "wintergarten-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { typ, size, material, glazing, fundament, beschattung, permit, region },
    };
  }, [typ, size, material, glazing, fundament, beschattung, permit, region, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Typ>
          label="Typ"
          value={typ}
          onChange={setTyp}
          options={[
            { value: "kalt", label: "Kaltwintergarten" },
            { value: "warm", label: "Warmwintergarten" },
          ]}
        />
        <Segmented<Size>
          label="Größe"
          value={size}
          onChange={setSize}
          options={[
            { value: "klein", label: SIZE_LABEL.klein },
            { value: "mittel", label: SIZE_LABEL.mittel },
            { value: "gross", label: SIZE_LABEL.gross },
          ]}
        />
        <Segmented<Material>
          label="Material"
          value={material}
          onChange={setMaterial}
          options={[
            { value: "kunststoff", label: "Kunststoff" },
            { value: "holz", label: "Holz" },
            { value: "alu", label: "Aluminium" },
          ]}
        />
        <Segmented<Glazing>
          label="Verglasung"
          value={glazing}
          onChange={setGlazing}
          options={[
            { value: "zweifach", label: "2-fach" },
            { value: "dreifach", label: "3-fach" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Ausstattung & Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle
              label="Fundament / Bodenplatte"
              checked={fundament}
              onChange={setFundament}
            />
            <Toggle label="Beschattung" checked={beschattung} onChange={setBeschattung} />
            <Toggle
              label="Baugenehmigung"
              hint="in HH Pflicht"
              checked={permit}
              onChange={setPermit}
            />
            <Toggle
              label="Ballungsraum"
              hint="z. B. Hamburg"
              checked={region}
              onChange={setRegion}
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
            Richtwert: {eur(calc.total)} · inkl. gewählter Optionen
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

        <RequestButton
          context={request}
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Passende Angebote anfragen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Unverbindliche Schätzung (Stand: Juni 2026), kein Angebot. Reale Preise
          hängen von Ausführung, Statik, Verglasung und Region ab.
        </p>
      </div>
    </div>
  );
}

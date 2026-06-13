"use client";

import { useMemo, useState } from "react";
import { RequestButton } from "@/components/request/request-button";
import { Segmented, Toggle, round100, eur } from "@/components/calculator-ui";

/*
  Einfahrt-Pflastern-Kostenrechner — parametric estimate.
  The differentiator is the itemised breakdown: ~40–50 % of a paving job is the
  "hidden" sub-base (Aushub, Tragschicht, Pflasterbett, Randsteine, Entsorgung)
  that most online prices lump into "Material + Arbeit". A driveway also needs a
  thicker, frost-proof sub-base when it carries cars (PKW-befahrbar). The
  Ballungsraum surcharge applies +20 % only to the labour share (~60 %) → ~12 %
  on the total. Richtwerte Stand Juni 2026. Output is a rounded range, not a quote.
*/

type Size = "klein" | "mittel" | "gross";
type Material = "beton" | "premium" | "naturstein" | "versickerung";
type Nutzung = "begehbar" | "befahrbar";

const SIZE_LABEL: Record<Size, string> = {
  klein: "Klein · ~20 m²",
  mittel: "Mittel · ~40 m²",
  gross: "Groß · ~60 m²",
};
const SIZE_NAME: Record<Size, string> = {
  klein: "~20 m²",
  mittel: "~40 m²",
  gross: "~60 m²",
};
const MATERIAL_NAME: Record<Material, string> = {
  beton: "Beton-Standard",
  premium: "Beton-Premium",
  naturstein: "Naturstein",
  versickerung: "Versickerungspflaster",
};
const NUTZUNG_NAME: Record<Nutzung, string> = {
  begehbar: "begehbar",
  befahrbar: "PKW-befahrbar",
};

const SIZE_M2: Record<Size, number> = { klein: 20, mittel: 40, gross: 60 };

// Per m² Richtwerte.
const AUSHUB: Record<Nutzung, number> = { begehbar: 12, befahrbar: 18 };
const UNTERBAU: Record<Nutzung, number> = { begehbar: 25, befahrbar: 42 }; // frostsichere Tragschicht
const PFLASTERBETT = 8;
const MATERIAL_PER_M2: Record<Material, number> = {
  beton: 20,
  premium: 42,
  naturstein: 85,
  versickerung: 30,
};
const VERLEGUNG: Record<Material, number> = {
  beton: 40,
  premium: 45,
  naturstein: 60,
  versickerung: 42,
};
const ENTSORGUNG = 8;
const RANDSTEINE_PER_M2 = 12;
const ALTE_FLAECHE_PER_M2 = 14; // alten Belag entfernen & entsorgen
const REGION_SURCHARGE = 0.2;
const LABOUR_SHARE = 0.6;

export function EinfahrtPflasternCalculator() {
  const [size, setSize] = useState<Size>("mittel");
  const [material, setMaterial] = useState<Material>("beton");
  const [nutzung, setNutzung] = useState<Nutzung>("befahrbar");
  const [randsteine, setRandsteine] = useState(true);
  const [alteFlaeche, setAlteFlaeche] = useState(false);
  const [region, setRegion] = useState(true);

  const calc = useMemo(() => {
    const m2 = SIZE_M2[size];
    const aushub = (AUSHUB[nutzung] + (alteFlaeche ? ALTE_FLAECHE_PER_M2 : 0)) * m2;
    const unterbau = UNTERBAU[nutzung] * m2;
    const bett = PFLASTERBETT * m2;
    const mat = MATERIAL_PER_M2[material] * m2;
    const verleg = VERLEGUNG[material] * m2;
    const rand = randsteine ? RANDSTEINE_PER_M2 * m2 : 0;
    const entsorgung = ENTSORGUNG * m2;

    const regional = aushub + unterbau + bett + mat + verleg + rand + entsorgung;
    const regionDelta = region ? regional * LABOUR_SHARE * REGION_SURCHARGE : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: "Aushub & Erdarbeiten", value: aushub },
      { label: "Unterbau / Tragschicht", value: unterbau },
      { label: "Pflasterbett", value: bett },
      { label: `Pflastermaterial (${MATERIAL_NAME[material]})`, value: mat },
      { label: "Verlegung", value: verleg },
      ...(rand ? [{ label: "Randsteine / Einfassung", value: rand }] : []),
      { label: "Entsorgung", value: entsorgung },
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
    ];

    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [size, material, nutzung, randsteine, alteFlaeche, region]);

  const request = useMemo(() => {
    const extras = [
      randsteine && "Randsteine",
      alteFlaeche && "alte Fläche entfernen",
    ].filter(Boolean) as string[];
    const parts = [
      `Einfahrt ${SIZE_NAME[size]}`,
      MATERIAL_NAME[material],
      NUTZUNG_NAME[nutzung],
    ];
    if (extras.length) parts.push(extras.join(", "));
    if (region) parts.push("Ballungsraum");
    return {
      service: "Pflasterarbeiten",
      source: "einfahrt-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { size, material, nutzung, randsteine, alteFlaeche, region },
    };
  }, [size, material, nutzung, randsteine, alteFlaeche, region, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Size>
          label="Fläche"
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
            { value: "beton", label: "Beton" },
            { value: "premium", label: "Beton-Premium" },
            { value: "naturstein", label: "Naturstein" },
            { value: "versickerung", label: "Versickerung" },
          ]}
        />
        <Segmented<Nutzung>
          label="Nutzung"
          value={nutzung}
          onChange={setNutzung}
          options={[
            { value: "begehbar", label: "Begehbar (Weg)" },
            { value: "befahrbar", label: "PKW-befahrbar" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Ausstattung & Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle label="Randsteine / Einfassung" checked={randsteine} onChange={setRandsteine} />
            <Toggle
              label="Alte Fläche entfernen"
              checked={alteFlaeche}
              onChange={setAlteFlaeche}
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
            Richtwert: {eur(calc.total)} · inkl. Unterbau & Nebenkosten
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
          hängen von Untergrund, Verlegemuster, Material und Region ab.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { RequestButton } from "@/components/request/request-button";
import { Segmented, Toggle, round100, eur } from "@/components/calculator-ui";

/*
  Bad-/Badsanierungs-Kostenrechner — parametric estimate.
  Richtwerte synthesized from German cost guides (Stand: Juni 2026): a base
  €/m² driven by scope (Teil-/Komplettsanierung) × Ausstattungsniveau, plus
  cost drivers that competitors usually hide (moving plumbing/electrics, walk-in
  shower, bathtub, underfloor heating, barrier-free conversion). The Ballungsraum
  surcharge applies +20 % only to the labour share (~60 % of a bathroom; material
  and sanitary objects cost the same nationally) → ~12 % on the total. Moving
  plumbing/layout is a complete-renovation item and is ignored for a partial
  renovation. Output is a rounded range, not a quote.
*/

type Size = "klein" | "mittel" | "gross";
type Scope = "teil" | "komplett";
type Level = "standard" | "gehoben" | "premium";

const SIZE_LABEL: Record<Size, string> = {
  klein: "Klein · ~4 m²",
  mittel: "Mittel · ~8 m²",
  gross: "Groß · ~12 m²",
};
const SIZE_NAME: Record<Size, string> = {
  klein: "kleines Bad (~4 m²)",
  mittel: "mittleres Bad (~8 m²)",
  gross: "großes Bad (~12 m²)",
};
const SCOPE_NAME: Record<Scope, string> = {
  teil: "Teilrenovierung",
  komplett: "Komplettsanierung",
};
const LEVEL_NAME: Record<Level, string> = {
  standard: "Standard",
  gehoben: "Gehoben",
  premium: "Premium",
};

const SIZE_M2: Record<Size, number> = { klein: 4, mittel: 8, gross: 12 };

// Base price per m² by scope and fit-out level.
const BASE_PER_M2: Record<Scope, Record<Level, number>> = {
  teil: { standard: 850, gehoben: 1200, premium: 1700 },
  komplett: { standard: 1600, gehoben: 2300, premium: 3200 },
};

const LEITUNGEN_PER_M2 = 250; // Grundriss/Leitungen verlegen
const DUSCHE = 1500; // bodengleiche Dusche (Abdichtung, Gefälle, Ablauf)
const WANNE = 1200; // Badewanne inkl. Einbau
const FBH_PER_M2 = 120; // Fußbodenheizung
const BARRIEREFREI = 2500; // altersgerechter Umbau
const REGION_SURCHARGE = 0.2; // Hamburg premium on labour…
const LABOUR_SHARE = 0.6; // …which is ~60 % of a bathroom → ~12 % on the total

export function BadCalculator() {
  const [size, setSize] = useState<Size>("mittel");
  const [scope, setScope] = useState<Scope>("komplett");
  const [level, setLevel] = useState<Level>("gehoben");
  const [leitungen, setLeitungen] = useState(false);
  const [dusche, setDusche] = useState(true);
  const [wanne, setWanne] = useState(false);
  const [fbh, setFbh] = useState(false);
  const [barrierefrei, setBarrierefrei] = useState(false);
  const [region, setRegion] = useState(true);

  const calc = useMemo(() => {
    const m2 = SIZE_M2[size];
    const base = BASE_PER_M2[scope][level] * m2;
    // Moving lines/layout only applies to a complete renovation — by definition
    // a partial renovation leaves the installation in place.
    const leit = leitungen && scope === "komplett" ? LEITUNGEN_PER_M2 * m2 : 0;
    const duscheCost = dusche ? DUSCHE : 0;
    const wanneCost = wanne ? WANNE : 0;
    const fbhCost = fbh ? FBH_PER_M2 * m2 : 0;
    const bfCost = barrierefrei ? BARRIEREFREI : 0;

    const subtotal = base + leit + duscheCost + wanneCost + fbhCost + bfCost;
    // +20 % on the labour share (~60 %) — material/sanitary cost the same nationally.
    const regionDelta = region ? subtotal * LABOUR_SHARE * REGION_SURCHARGE : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: `Grundpreis (${SCOPE_NAME[scope]})`, value: base },
      ...(leit ? [{ label: "Leitungen & Grundriss", value: leit }] : []),
      ...(duscheCost
        ? [{ label: "Bodengleiche Dusche", value: duscheCost }]
        : []),
      ...(wanneCost ? [{ label: "Badewanne", value: wanneCost }] : []),
      ...(fbhCost ? [{ label: "Fußbodenheizung", value: fbhCost }] : []),
      ...(bfCost ? [{ label: "Barrierefreier Umbau", value: bfCost }] : []),
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
    ];

    // Round each row to €100 and derive the total from the rounded rows, so the
    // breakdown always adds up exactly to the shown Richtwert.
    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [size, scope, level, leitungen, dusche, wanne, fbh, barrierefrei, region]);

  const request = useMemo(() => {
    const extras = [
      leitungen && scope === "komplett" && "Leitungen/Grundriss",
      dusche && "bodengleiche Dusche",
      wanne && "Badewanne",
      fbh && "Fußbodenheizung",
      barrierefrei && "barrierefrei",
    ].filter(Boolean) as string[];
    const parts = [SIZE_NAME[size], SCOPE_NAME[scope], LEVEL_NAME[level]];
    if (extras.length) parts.push(extras.join(", "));
    if (region) parts.push("Ballungsraum");
    return {
      service: "Fliesen & Bad",
      source: "bad-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { size, scope, level, leitungen, dusche, wanne, fbh, barrierefrei, region },
    };
  }, [size, scope, level, leitungen, dusche, wanne, fbh, barrierefrei, region, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Size>
          label="Badgröße"
          value={size}
          onChange={setSize}
          options={[
            { value: "klein", label: SIZE_LABEL.klein },
            { value: "mittel", label: SIZE_LABEL.mittel },
            { value: "gross", label: SIZE_LABEL.gross },
          ]}
        />
        <Segmented<Scope>
          label="Umfang"
          value={scope}
          onChange={setScope}
          options={[
            { value: "teil", label: "Teilrenovierung" },
            { value: "komplett", label: "Komplettsanierung" },
          ]}
        />
        <Segmented<Level>
          label="Ausstattung"
          value={level}
          onChange={setLevel}
          options={[
            { value: "standard", label: "Standard" },
            { value: "gehoben", label: "Gehoben" },
            { value: "premium", label: "Premium" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Ausstattung & Arbeiten</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {scope === "komplett" && (
              <Toggle
                label="Leitungen/Grundriss ändern"
                checked={leitungen}
                onChange={setLeitungen}
              />
            )}
            <Toggle label="Bodengleiche Dusche" checked={dusche} onChange={setDusche} />
            <Toggle label="Badewanne" checked={wanne} onChange={setWanne} />
            <Toggle label="Fußbodenheizung" checked={fbh} onChange={setFbh} />
            <Toggle
              label="Barrierefrei"
              hint="altersgerecht"
              checked={barrierefrei}
              onChange={setBarrierefrei}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="label text-ink-soft">Region</legend>
          <div className="mt-2 flex flex-wrap gap-2">
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
          hängen von Zustand, Ausstattung, Leitungsführung und Region ab.
        </p>
      </div>
    </div>
  );
}

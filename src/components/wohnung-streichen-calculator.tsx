"use client";

import { useMemo, useState } from "react";
import { RequestButton } from "@/components/request/request-button";
import { Segmented, Toggle, round100, eur } from "@/components/calculator-ui";

/*
  Maler-/Wohnung-streichen-Kostenrechner — parametric estimate.
  Modelled per m² Wohnfläche (not Wandfläche), because that is how the
  size-specific competitor pages quote and it avoids a brittle wall-area
  conversion. Rates are calibrated so a complete job (Wände + Decken, inkl.
  Material) matches the published ranges: ~1.000 € (30 m²) … ~3.200 € (100 m²).
  Painting is labour-heavy, so the Ballungsraum surcharge applies +20 % to the
  labour share (~70 %) → ~14 % on the total. Richtwerte Stand Juni 2026.
  Output is a rounded range, not a quote.
*/

type Size = "klein" | "mittel" | "gross";
type Umfang = "waende" | "waende-decken";

const SIZE_LABEL: Record<Size, string> = {
  klein: "Klein · ~30 m²",
  mittel: "Mittel · ~60 m²",
  gross: "Groß · ~100 m²",
};
const SIZE_NAME: Record<Size, string> = {
  klein: "~30 m²",
  mittel: "~60 m²",
  gross: "~100 m²",
};
const SIZE_M2: Record<Size, number> = { klein: 30, mittel: 60, gross: 100 };

const UMFANG_NAME: Record<Umfang, string> = {
  waende: "nur Wände",
  "waende-decken": "Wände + Decken",
};

// Per m² Wohnfläche (Stand Juni 2026).
const WAND_ARBEIT = 12;
const WAND_MATERIAL = 6;
const DECKE_ARBEIT = 8;
const DECKE_MATERIAL = 3;
const TAPETE = 7; // Tapete entfernen & entsorgen
const SPACHTELN = 6; // Untergrund spachteln / vorbereiten
const REGION_SURCHARGE = 0.2;
const LABOUR_SHARE = 0.7;

export function WohnungStreichenCalculator() {
  const [size, setSize] = useState<Size>("mittel");
  const [umfang, setUmfang] = useState<Umfang>("waende-decken");
  const [material, setMaterial] = useState(true);
  const [tapete, setTapete] = useState(false);
  const [spachteln, setSpachteln] = useState(false);
  const [region, setRegion] = useState(true);

  const calc = useMemo(() => {
    const m2 = SIZE_M2[size];
    const decken = umfang === "waende-decken";

    const waende = (WAND_ARBEIT + (material ? WAND_MATERIAL : 0)) * m2;
    const decke = decken ? (DECKE_ARBEIT + (material ? DECKE_MATERIAL : 0)) * m2 : 0;
    const tapeteWeg = tapete ? TAPETE * m2 : 0;
    const untergrund = spachteln ? SPACHTELN * m2 : 0;

    const base = waende + decke + tapeteWeg + untergrund;
    const regionDelta = region ? base * LABOUR_SHARE * REGION_SURCHARGE : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: "Wände streichen", value: waende },
      ...(decke ? [{ label: "Decken streichen", value: decke }] : []),
      ...(tapeteWeg ? [{ label: "Tapete entfernen", value: tapeteWeg }] : []),
      ...(untergrund ? [{ label: "Untergrund spachteln", value: untergrund }] : []),
      ...(regionDelta ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }] : []),
    ];

    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [size, umfang, material, tapete, spachteln, region]);

  const request = useMemo(() => {
    const extras = [
      tapete && "Tapete entfernen",
      spachteln && "spachteln",
    ].filter(Boolean) as string[];
    const parts = [
      `Wohnung ${SIZE_NAME[size]}`,
      UMFANG_NAME[umfang],
      material ? "inkl. Material" : "reine Arbeit",
    ];
    if (extras.length) parts.push(extras.join(", "));
    if (region) parts.push("Ballungsraum");
    return {
      service: "Malerarbeiten",
      source: "wohnung-streichen-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { size, umfang, material, tapete, spachteln, region },
    };
  }, [size, umfang, material, tapete, spachteln, region, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Size>
          label="Wohnfläche"
          value={size}
          onChange={setSize}
          options={[
            { value: "klein", label: SIZE_LABEL.klein },
            { value: "mittel", label: SIZE_LABEL.mittel },
            { value: "gross", label: SIZE_LABEL.gross },
          ]}
        />
        <Segmented<Umfang>
          label="Umfang"
          value={umfang}
          onChange={setUmfang}
          options={[
            { value: "waende", label: "Nur Wände" },
            { value: "waende-decken", label: "Wände + Decken" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Material & Vorarbeiten</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle
              label="Inkl. Material"
              hint="Farbe & Zubehör"
              checked={material}
              onChange={setMaterial}
            />
            <Toggle label="Tapete entfernen" checked={tapete} onChange={setTapete} />
            <Toggle
              label="Untergrund spachteln"
              checked={spachteln}
              onChange={setSpachteln}
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
            Richtwert: {eur(calc.total)} · {material ? "inkl. Material" : "reine Arbeit"}
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
          hängen von Untergrund, Anzahl der Anstriche, Farbton und Region ab.
        </p>
      </div>
    </div>
  );
}

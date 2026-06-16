"use client";

import { useMemo, useState } from "react";
import { Segmented, Toggle, eur, round100 } from "@/components/calculator-ui";
import { RequestButton } from "@/components/request/request-button";

/*
  KNX-Kostenrechner — Umfangs-Konfigurator, kein €/m²-Modell (KNX wird nach
  Gewerken kalkuliert, nicht nach Fläche). Richtwerte (Stand: Juni 2026) sind so
  kalibriert, dass sie in den auf der Seite dokumentierten Bändern liegen:
    • Wohnung, Licht + Beschattung, Neubau   → ~3.000–6.000 €
    • EFH, Licht + Beschattung + Heizung      → ~8.000–15.000 €
    • Großes Haus, alle Gewerke               → ab ~20.000 €
  Jedes Gewerk umfasst Hardware + Installation für diese Funktion, skaliert nach
  Hausgröße. Programmierung/Inbetriebnahme (ETS) = 15 % darauf. Bauart wirkt als
  Aufschlag (Bestand/Funk teurer). Ausgabe ist eine gerundete Range, kein Angebot.
*/

type Bauart = "neubau" | "sanierung" | "nachruesten";
type Groesse = "wohnung" | "efh" | "grosshaus";
type Gewerk = "beschattung" | "heizung" | "sicherheit" | "multimedia" | "visu" | "energie";

const GROESSE_LABEL: Record<Groesse, string> = {
  wohnung: "Wohnung (2–3 Zi.)",
  efh: "Einfamilienhaus (4–5 Zi.)",
  grosshaus: "Großes Haus (6+ Zi.)",
};

const BAUART_LABEL: Record<Bauart, string> = {
  neubau: "Neubau",
  sanierung: "Kernsanierung",
  nachruesten: "Nachrüsten (Bestand)",
};

const BAUART_SURCHARGE_LABEL: Record<Bauart, string> = {
  neubau: "",
  sanierung: "Aufschlag Kernsanierung",
  nachruesten: "Aufschlag Bestand (Funk/KNX RF)",
};

const GEWERK_LABEL: Record<Gewerk, string> = {
  beschattung: "Beschattung / Jalousien",
  heizung: "Heizung (Einzelraumregelung)",
  sicherheit: "Sicherheit (Präsenz, Alarm)",
  multimedia: "Multimedia / Audio",
  visu: "Visualisierung / App & Server",
  energie: "Energie (Wallbox-/PV-Anbindung)",
};

// Grundausstattung: Bus, Spannungsversorgung, Verteiler/Schaltschrank.
const BASE: Record<Groesse, number> = { wohnung: 1800, efh: 2800, grosshaus: 4200 };
// Lichtsteuerung ist immer enthalten (Basis jeder KNX-Anlage).
const LICHT: Record<Groesse, number> = { wohnung: 1500, efh: 3000, grosshaus: 4800 };
// Optionale Gewerke: Hardware + Installation je Funktion, nach Hausgröße.
const GEWERK: Record<Gewerk, Record<Groesse, number>> = {
  beschattung: { wohnung: 1000, efh: 2200, grosshaus: 3600 },
  heizung: { wohnung: 800, efh: 1800, grosshaus: 3000 },
  sicherheit: { wohnung: 1200, efh: 2200, grosshaus: 3500 },
  multimedia: { wohnung: 1200, efh: 2400, grosshaus: 4000 },
  visu: { wohnung: 900, efh: 1400, grosshaus: 2200 },
  energie: { wohnung: 700, efh: 1100, grosshaus: 1600 },
};
const BAUART_FACTOR: Record<Bauart, number> = { neubau: 1, sanierung: 1.1, nachruesten: 1.35 };
const PROG_FACTOR = 0.15; // Programmierung/Inbetriebnahme (ETS) als Anteil von Hardware+Installation.

export function KnxKostenRechner() {
  const [bauart, setBauart] = useState<Bauart>("neubau");
  const [groesse, setGroesse] = useState<Groesse>("efh");
  const [beschattung, setBeschattung] = useState(true);
  const [heizung, setHeizung] = useState(true);
  const [sicherheit, setSicherheit] = useState(false);
  const [multimedia, setMultimedia] = useState(false);
  const [visu, setVisu] = useState(false);
  const [energie, setEnergie] = useState(false);

  const selected = useMemo<Record<Gewerk, boolean>>(
    () => ({ beschattung, heizung, sicherheit, multimedia, visu, energie }),
    [beschattung, heizung, sicherheit, multimedia, visu, energie],
  );

  const calc = useMemo(() => {
    const components: { label: string; value: number }[] = [
      { label: "Grundausstattung (Bus, Verteiler)", value: BASE[groesse] },
      { label: "Lichtsteuerung", value: LICHT[groesse] },
      ...(Object.keys(GEWERK) as Gewerk[])
        .filter((k) => selected[k])
        .map((k) => ({ label: GEWERK_LABEL[k], value: GEWERK[k][groesse] })),
    ];

    const hwInstall = components.reduce((sum, r) => sum + r.value, 0);
    const prog = hwInstall * PROG_FACTOR;
    const subtotal = hwInstall + prog;
    const surcharge = subtotal * (BAUART_FACTOR[bauart] - 1);

    const rawRows = [
      ...components,
      { label: "Programmierung & Inbetriebnahme (ETS)", value: prog },
      ...(surcharge > 0
        ? [{ label: BAUART_SURCHARGE_LABEL[bauart], value: surcharge }]
        : []),
    ];

    // Round each row to €100 so the breakdown adds up exactly to the Richtwert.
    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [groesse, bauart, selected]);

  const request = useMemo(() => {
    const gewerke = [
      "Licht",
      ...(Object.keys(GEWERK) as Gewerk[])
        .filter((k) => selected[k])
        .map((k) => GEWERK_LABEL[k]),
    ];
    return {
      service: "Smart Home / KNX",
      source: "knx-kosten-rechner",
      summary: `${GROESSE_LABEL[groesse]} · ${BAUART_LABEL[bauart]} · Gewerke: ${gewerke.join(", ")}`,
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { groesse, bauart, ...selected },
    };
  }, [groesse, bauart, selected, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Bauart>
          label="Bauart"
          value={bauart}
          onChange={setBauart}
          options={[
            { value: "neubau", label: BAUART_LABEL.neubau },
            { value: "sanierung", label: BAUART_LABEL.sanierung },
            { value: "nachruesten", label: BAUART_LABEL.nachruesten },
          ]}
        />
        <Segmented<Groesse>
          label="Größe"
          value={groesse}
          onChange={setGroesse}
          options={[
            { value: "wohnung", label: GROESSE_LABEL.wohnung },
            { value: "efh", label: GROESSE_LABEL.efh },
            { value: "grosshaus", label: GROESSE_LABEL.grosshaus },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Gewerke</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle label="Beschattung / Jalousien" checked={beschattung} onChange={setBeschattung} />
            <Toggle label="Heizung" hint="Einzelraum" checked={heizung} onChange={setHeizung} />
            <Toggle label="Sicherheit" checked={sicherheit} onChange={setSicherheit} />
            <Toggle label="Multimedia / Audio" checked={multimedia} onChange={setMultimedia} />
            <Toggle label="Visualisierung / App" checked={visu} onChange={setVisu} />
            <Toggle label="Energie" hint="Wallbox/PV" checked={energie} onChange={setEnergie} />
          </div>
          <p className="mt-2 text-xs text-ink-soft/60">
            Lichtsteuerung ist als Basis jeder KNX-Anlage immer enthalten.
          </p>
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
            Richtwert: {eur(calc.total)} · inkl. Material, Installation &amp; Programmierung
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
          hängen von Funktionsumfang, Aktorenzahl und Programmieraufwand ab.
        </p>
      </div>
    </div>
  );
}

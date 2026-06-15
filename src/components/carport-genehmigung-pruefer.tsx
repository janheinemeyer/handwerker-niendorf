"use client";

import { useId, useMemo, useState } from "react";
import { RequestButton } from "@/components/request/request-button";
import { Segmented } from "@/components/calculator-ui";
import {
  pruefeCarport,
  type Standort,
  type Tendenz,
} from "@/lib/carport-genehmigung";

/*
  Carport-Genehmigungs-Prüfer — interactive orientation tool for Hamburg.
  Captures the facts that drive § 61 / § 6 / § 62 HBauO and renders the tendency
  from `pruefeCarport`. All legal branching lives in `@/lib/carport-genehmigung`;
  this component only collects intent and shows the result + disclaimer + CTA.
*/

// Leading symbol per tendency — on-brand, no new colour tokens.
const TENDENZ_SYMBOL: Record<Tendenz, string> = {
  verfahrensfrei: "✓",
  abweichung: "!",
  genehmigung: "!",
  pruefen: "?",
};

const STANDORT_NAME: Record<Standort, string> = {
  innenbereich: "Innenbereich",
  aussenbereich: "Außenbereich",
  unsicher: "unklar",
};

function NumberField({
  label,
  hint,
  value,
  onChange,
  unit = "m²",
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  return (
    <div>
      <label htmlFor={id} className="label text-ink-soft">
        {label}
      </label>
      {hint && (
        <span
          id={hintId}
          className="mt-0.5 block text-xs font-normal normal-case tracking-normal text-ink-soft/60"
        >
          {hint}
        </span>
      )}
      <div className="mt-2 flex items-stretch border border-line focus-within:border-ink/40">
        <input
          id={id}
          aria-describedby={hint ? hintId : undefined}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
          className="w-full bg-paper px-3.5 py-2 text-sm tabular-nums outline-none"
        />
        <span className="grid place-items-center border-l border-line bg-paper-2 px-3 text-sm text-ink-soft">
          {unit}
        </span>
      </div>
    </div>
  );
}

/**
 * Parse a German-formatted number ("2,5" or "2.5"). Empty/invalid → NaN (not 0),
 * so the lib can tell a missing measurement from a real zero and avoid showing a
 * green result for an unknown value. Note `Number("")` is 0, hence the empty guard.
 */
function parseNum(v: string): number {
  const t = v.replace(",", ".").trim();
  if (t === "") return NaN;
  const n = Number(t);
  return Number.isFinite(n) ? n : NaN;
}

export function CarportGenehmigungPruefer() {
  const [standort, setStandort] = useState<Standort>("innenbereich");
  const [hauptgebaeude, setHauptgebaeude] = useState(true);
  const [flaecheCarport, setFlaecheCarport] = useState("18");
  const [flaecheStellplaetze, setFlaecheStellplaetze] = useState("0");
  const [wandhoehe, setWandhoehe] = useState("2,5");
  const [anGrenze, setAnGrenze] = useState(false);
  const [laengeAnGrenze, setLaengeAnGrenze] = useState("5");
  const [bestandGrenzeLaenge, setBestandGrenzeLaenge] = useState("0");

  const eingabe = useMemo(
    () => ({
      standort,
      hauptgebaeude,
      flaecheCarport: parseNum(flaecheCarport),
      flaecheStellplaetze: parseNum(flaecheStellplaetze),
      wandhoehe: parseNum(wandhoehe),
      anGrenze,
      laengeAnGrenze: parseNum(laengeAnGrenze),
      bestandGrenzeLaenge: parseNum(bestandGrenzeLaenge),
    }),
    [standort, hauptgebaeude, flaecheCarport, flaecheStellplaetze, wandhoehe, anGrenze, laengeAnGrenze, bestandGrenzeLaenge],
  );

  const ergebnis = useMemo(() => pruefeCarport(eingabe), [eingabe]);

  const request = useMemo(() => {
    const parts = [
      `Standort: ${STANDORT_NAME[standort]}`,
      hauptgebaeude ? "mit Hauptgebäude" : "ohne Hauptgebäude",
      `${fmtIn(flaecheCarport)} m² Carport`,
      `+ ${fmtIn(flaecheStellplaetze)} m² Stellplätze`,
      `${fmtIn(wandhoehe)} m hoch`,
      anGrenze
        ? `an Grenze (${fmtIn(laengeAnGrenze)} m, Bestand ${fmtIn(bestandGrenzeLaenge)} m)`
        : "nicht an Grenze",
    ];
    return {
      service: "Carport",
      source: "carport-genehmigung-pruefer",
      summary: `${parts.join(" · ")} → Tendenz: ${ergebnis.titel}`,
    };
  }, [standort, hauptgebaeude, flaecheCarport, flaecheStellplaetze, wandhoehe, anGrenze, laengeAnGrenze, bestandGrenzeLaenge, ergebnis.titel]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Standort>
          label="Wo steht der Carport?"
          value={standort}
          onChange={setStandort}
          options={[
            { value: "innenbereich", label: "Innenbereich" },
            { value: "aussenbereich", label: "Außenbereich" },
            { value: "unsicher", label: "Weiß nicht" },
          ]}
        />
        <Segmented<"ja" | "nein">
          label="Steht auf dem Grundstück ein zugehöriges Wohnhaus?"
          value={hauptgebaeude ? "ja" : "nein"}
          onChange={(v) => setHauptgebaeude(v === "ja")}
          options={[
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
          ]}
        />

        <div className="grid items-end gap-5 sm:grid-cols-2">
          <NumberField
            label="Überdachte Fläche"
            hint="Carport"
            value={flaecheCarport}
            onChange={setFlaecheCarport}
          />
          <NumberField
            label="Vorhandene Stellplätze"
            hint="werden angerechnet"
            value={flaecheStellplaetze}
            onChange={setFlaecheStellplaetze}
          />
          <NumberField
            label="Wandhöhe"
            value={wandhoehe}
            onChange={setWandhoehe}
            unit="m"
          />
        </div>

        <Segmented<"ja" | "nein">
          label="Direkt an die Grundstücksgrenze?"
          value={anGrenze ? "ja" : "nein"}
          onChange={(v) => setAnGrenze(v === "ja")}
          options={[
            { value: "nein", label: "Nein" },
            { value: "ja", label: "Ja" },
          ]}
        />
        {anGrenze && (
          <div className="grid max-w-md items-end gap-5 sm:grid-cols-2">
            <NumberField
              label="Länge entlang der Grenze"
              value={laengeAnGrenze}
              onChange={setLaengeAnGrenze}
              unit="m"
            />
            <NumberField
              label="Bestehende grenznahe Bauten"
              hint="z. B. Garage, werden angerechnet"
              value={bestandGrenzeLaenge}
              onChange={setBestandGrenzeLaenge}
              unit="m"
            />
          </div>
        )}
      </div>

      {/* Result */}
      <div className="flex flex-col bg-ink p-6 text-paper sm:p-8">
        <p className="label text-accent">Erste Einordnung</p>
        <div role="status" aria-live="polite">
          <p className="mt-3 flex items-start gap-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            <span aria-hidden className="text-accent">
              {TENDENZ_SYMBOL[ergebnis.tendenz]}
            </span>
            <span>{ergebnis.titel}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paper/70">
            {ergebnis.begruendung.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-sm text-paper/60">
          <p className="label text-paper/40">Immer zu beachten</p>
          <ul className="mt-2 space-y-1.5">
            <li>Ein Bebauungsplan kann strengere Vorgaben machen – auch unterhalb dieser Grenzen.</li>
            <li>Niederschlagswasser muss auf dem Grundstück bleiben oder ordnungsgemäß abgeleitet werden.</li>
            <li>Verbindlich ist nur die Auskunft des Bauamts – für Niendorf das Bezirksamt Eimsbüttel.</li>
          </ul>
        </div>

        <RequestButton
          context={request}
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Betrieb anfragen, der das mitklärt
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Diese Einschätzung dient ausschließlich der allgemeinen Orientierung
          (Stand: Juni 2026, neue HBauO seit 01.01.2026). Sie ersetzt keine
          baurechtliche Prüfung, keine Rechtsberatung und keine Abstimmung mit der
          zuständigen Behörde. Der Einzelfall kann abweichen – verbindlich ist die
          Auskunft des Bezirksamts.
        </p>
      </div>
    </div>
  );
}

const inNf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });
const fmtIn = (v: string) => {
  const n = parseNum(v);
  return inNf.format(Number.isFinite(n) ? n : 0);
};

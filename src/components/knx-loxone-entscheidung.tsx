"use client";

import { useMemo, useState } from "react";
import { Segmented } from "@/components/calculator-ui";
import { RequestButton } from "@/components/request/request-button";

/*
  KNX-vs-Loxone-Entscheidungshilfe — gewichtetes Mini-Quiz, kein Kostenrechner.
  Jede Frage lehnt sich Richtung KNX (+2), neutral (0) oder Loxone (−2); die Summe
  ergibt eine Tendenz. Bewusst neutral gehalten (wir vermitteln, verkaufen kein
  System) und an den Vergleich auf der Seite gekoppelt: KNX = offen/flexibel/
  langlebig, Loxone = günstig/schnell/Komplettsystem.
*/

type Lean = "knx" | "neutral" | "loxone";

const SCORE: Record<Lean, number> = { knx: 2, neutral: 0, loxone: -2 };

const QUESTIONS: {
  id: string;
  label: string;
  knx: string;
  neutral: string;
  loxone: string;
}[] = [
  {
    id: "unabhaengigkeit",
    label: "Herstellerunabhängigkeit & freie Gerätewahl",
    knx: "Sehr wichtig",
    neutral: "Teils/teils",
    loxone: "Zweitrangig",
  },
  {
    id: "budget",
    label: "Budget",
    knx: "Premium, zweitrangig",
    neutral: "Ausgewogen",
    loxone: "Möglichst günstig",
  },
  {
    id: "umsetzung",
    label: "Umsetzung & Bedienung",
    knx: "Maximale Flexibilität",
    neutral: "Ausgewogen",
    loxone: "Schnell, alles aus einer Hand",
  },
  {
    id: "groesse",
    label: "Projektgröße",
    knx: "Großes Haus / viele Gewerke",
    neutral: "Mittel",
    loxone: "Wohnung / kompaktes EFH",
  },
  {
    id: "zeithorizont",
    label: "Zeithorizont",
    knx: "Soll über Jahrzehnte wachsen",
    neutral: "Mittelfristig",
    loxone: "Jetzt fertig & überschaubar",
  },
];

function verdictFor(score: number): { key: Lean; title: string; text: string } {
  if (score >= 6)
    return {
      key: "knx",
      title: "Klare Tendenz: KNX",
      text: "Unabhängigkeit, Flexibilität und Langlebigkeit stehen bei Ihnen klar im Vordergrund – das spricht für den offenen KNX-Standard.",
    };
  if (score >= 2)
    return {
      key: "knx",
      title: "Tendenz: KNX",
      text: "Ihr Profil neigt zu KNX – vor allem wegen Erweiterbarkeit und freier Gerätewahl. Eine neutrale Beratung schärft das Bild.",
    };
  if (score <= -6)
    return {
      key: "loxone",
      title: "Klare Tendenz: Loxone",
      text: "Schnelle Umsetzung, Budget und ein Komplettsystem aus einer Hand stehen im Vordergrund – das spricht für Loxone.",
    };
  if (score <= -2)
    return {
      key: "loxone",
      title: "Tendenz: Loxone",
      text: "Ihr Profil neigt zu Loxone – vor allem wegen Preis und einfacher Umsetzung. Eine neutrale Beratung schärft das Bild.",
    };
  return {
    key: "neutral",
    title: "Ausgeglichen – beide passen",
    text: "Beide Systeme passen zu Ihrem Profil. Oft ist sogar eine Kombination sinnvoll (KNX-Geräteebene + Loxone Miniserver). Eine neutrale Beratung bringt Klarheit.",
  };
}

export function KnxLoxoneEntscheidung() {
  const [answers, setAnswers] = useState<Record<string, Lean>>(() =>
    Object.fromEntries(QUESTIONS.map((q) => [q.id, "neutral"])),
  );

  const set = (id: string) => (v: Lean) =>
    setAnswers((prev) => ({ ...prev, [id]: v }));

  const score = useMemo(
    () => QUESTIONS.reduce((sum, q) => sum + SCORE[answers[q.id]], 0),
    [answers],
  );

  const verdict = verdictFor(score);
  // KNX links (+10) … Loxone rechts (−10); Marker in Prozent der Skala.
  const markerPct = ((10 - score) / 20) * 100;

  const request = useMemo(
    () => ({
      service: "Smart Home / KNX",
      source: "knx-loxone-entscheidungshilfe",
      summary: `Entscheidungshilfe: ${verdict.title}`,
      details: { ...answers, score },
    }),
    [answers, score, verdict.title],
  );

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Fragen */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        {QUESTIONS.map((q) => (
          <Segmented<Lean>
            key={q.id}
            label={q.label}
            value={answers[q.id]}
            onChange={set(q.id)}
            options={[
              { value: "knx", label: q.knx },
              { value: "neutral", label: q.neutral },
              { value: "loxone", label: q.loxone },
            ]}
          />
        ))}
      </div>

      {/* Empfehlung */}
      <div className="flex flex-col bg-ink p-6 text-paper sm:p-8">
        <p className="label text-accent">Empfehlung</p>
        <div role="status" aria-live="polite">
          <p className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            {verdict.title}
          </p>

          {/* KNX ←→ Loxone Tendenz-Skala */}
          <div className="mt-5">
            <div className="flex justify-between text-xs font-medium text-paper/60">
              <span>KNX</span>
              <span>Loxone</span>
            </div>
            <div className="relative mt-1.5 h-1.5 rounded-full bg-white/15">
              <span
                className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-2 ring-ink"
                style={{ left: `${markerPct}%` }}
                aria-hidden
              />
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-paper/70">
            {verdict.text}
          </p>
        </div>

        <RequestButton
          context={request}
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Neutral beraten lassen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Unverbindliche Orientierung, keine Festlegung. Die finale Entscheidung
          trifft ein Fachbetrieb anhand Ihres konkreten Projekts.
        </p>
      </div>
    </div>
  );
}

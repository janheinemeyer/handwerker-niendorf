"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Segmented, Toggle } from "@/components/calculator-ui";
import { RequestButton } from "@/components/request/request-button";
import {
  berechneCarportMasse,
  formatFlaeche,
  formatMasse,
  formatMeter,
  type Anordnung,
  type Autos,
  type Fahrzeug,
} from "@/lib/carport-masse";

/*
  Carport-Maße-Rechner — captures the inputs and renders the result of
  `berechneCarportMasse` (src/lib/carport-masse.ts), which also holds the
  Hamburg thresholds. No sizing or legal logic lives here.
*/

const FAHRZEUG_NAME: Record<Fahrzeug, string> = {
  kompakt: "Kleinwagen / Kompakt",
  mittel: "Kombi / Mittelklasse",
  gross: "SUV / Van",
};

export function CarportMasseRechner() {
  const [autos, setAutos] = useState<Autos>(2);
  const [anordnung, setAnordnung] = useState<Anordnung>("nebeneinander");
  const [fahrzeug, setFahrzeug] = useState<Fahrzeug>("mittel");
  const [abstellraum, setAbstellraum] = useState(false);
  const [hochdach, setHochdach] = useState(false);

  const r = useMemo(
    () => berechneCarportMasse({ autos, anordnung, fahrzeug, abstellraum, hochdach }),
    [autos, anordnung, fahrzeug, abstellraum, hochdach],
  );

  const request = useMemo(() => {
    const parts = [
      autos === 2 ? `2 Autos ${anordnung}` : `${autos} ${autos === 1 ? "Auto" : "Autos"}`,
      FAHRZEUG_NAME[fahrzeug],
    ];
    if (abstellraum) parts.push("mit Abstellraum");
    if (hochdach) parts.push("Dachbox / Hochdach");
    // Dimensions go into the summary: `estimate` is rendered as „Geschätzte Kosten“.
    parts.push(`Maße ca. ${formatMasse(r)} (${formatFlaeche(r.flaeche)})`);
    return {
      service: "Carport",
      source: "carport-masse-rechner",
      summary: parts.join(" · "),
      details: { autos, anordnung, fahrzeug, abstellraum, hochdach },
    };
  }, [autos, anordnung, fahrzeug, abstellraum, hochdach, r]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<"1" | "2" | "3">
          label="Anzahl Autos"
          value={String(autos) as "1" | "2" | "3"}
          onChange={(v) => {
            setAutos(Number(v) as Autos);
            // The arrangement control only exists for 2 cars; don't let a
            // hidden "hintereinander" leak into the submitted lead.
            if (v !== "2") setAnordnung("nebeneinander");
          }}
          options={[
            { value: "1", label: "1 Auto" },
            { value: "2", label: "2 Autos" },
            { value: "3", label: "3 Autos" },
          ]}
        />
        {autos === 2 && (
          <Segmented<Anordnung>
            label="Anordnung"
            value={anordnung}
            onChange={setAnordnung}
            options={[
              { value: "nebeneinander", label: "nebeneinander" },
              { value: "hintereinander", label: "hintereinander" },
            ]}
          />
        )}
        <Segmented<Fahrzeug>
          label="Größtes Fahrzeug"
          value={fahrzeug}
          onChange={setFahrzeug}
          options={[
            { value: "kompakt", label: FAHRZEUG_NAME.kompakt },
            { value: "mittel", label: FAHRZEUG_NAME.mittel },
            { value: "gross", label: FAHRZEUG_NAME.gross },
          ]}
        />
        <fieldset>
          <legend className="label text-ink-soft">Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle
              label="Abstellraum hinten"
              hint="+1,5 m Länge"
              checked={abstellraum}
              onChange={setAbstellraum}
            />
            <Toggle
              label="Dachbox / Hochdach"
              hint="+0,5 m Höhe"
              checked={hochdach}
              onChange={setHochdach}
            />
          </div>
        </fieldset>
      </div>

      {/* Result */}
      <div className="flex flex-col bg-ink p-6 text-paper sm:p-8">
        <p className="label text-accent">Empfohlene Maße</p>
        <div role="status" aria-live="polite">
          <p className="mt-3 font-display text-3xl font-extrabold leading-none sm:text-4xl">
            {formatMasse(r)}
          </p>
          <p className="mt-2 text-xs text-paper/50">
            Breite × Länge · {formatFlaeche(r.flaeche)} · Durchfahrtshöhe ab{" "}
            {formatMeter(r.durchfahrtshoehe)}
          </p>

          <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-paper/60">
                Hamburg: verfahrensfrei bis 50 m² &amp; 3 m Wandhöhe
              </dt>
              <dd className="shrink-0 font-medium">
                {r.verfahrensfreiMoeglich ? "✓ passt" : "✗ darüber"}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-paper/60">
                Mit der Längsseite an der Grenze: max. 9 m
              </dt>
              <dd className="shrink-0 font-medium">
                {r.laengsseiteAnGrenzeMoeglich ? "✓ passt" : "✗ nur mit Abstand"}
              </dd>
            </div>
          </dl>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-paper/50">
          Vorhandene Stellplätze zählen zu den 50 m² mit. Steht nur die
          Stirnseite an der Grenze, zählt nur deren Breite. Für Ihr Grundstück
          prüfen:{" "}
          <Link
            href="/ratgeber/carport-baugenehmigung-hamburg#pruefer"
            className="text-accent underline-offset-2 hover:underline"
          >
            Genehmigungs-Prüfer
          </Link>
          .
        </p>

        <RequestButton
          context={request}
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Carport in diesen Maßen anfragen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Planungs-Richtwerte (Stand: Oktober 2026), keine Rechtsauskunft.
          Messen Sie Ihr Fahrzeug inkl. Außenspiegel nach.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Segmented, Toggle, eur, round100 } from "@/components/calculator-ui";
import { RequestButton } from "@/components/request/request-button";

/*
  Wallbox-Kostenrechner — parametric estimate.
  Richtwerte synthesized from German cost guides (Stand: Juni 2026): device price
  by power + type, installation by cable run, plus optional jobs (stand, wall
  breakthrough, Zählerschrank) and a ~15 % Ballungsraum surcharge on labour. The
  device price is not regionally scaled (commodity). Output is a rounded range.
*/

type Power = "11" | "22";
type Type = "basis" | "smart";
type Cable = "kurz" | "mittel" | "lang";
type Mount = "wand" | "stand";

// Device price by power × type.
const DEVICE: Record<Power, Record<Type, number>> = {
  "11": { basis: 500, smart: 900 },
  "22": { basis: 700, smart: 1100 },
};

// Installation base by cable run (Sicherungskasten → Stellplatz).
const INSTALL: Record<Cable, number> = { kurz: 600, mittel: 1000, lang: 1600 };

const STAND = 400; // freistehender Standfuß
const BREAKTHROUGH = 400; // Wanddurchbruch / Außenverlegung
const PANEL = 1500; // Zählerschrank modernisieren
const REGION_SURCHARGE = 0.15;

// Readable names for the request summary.
const TYPE_NAME: Record<Type, string> = { basis: "Basis", smart: "Smart (App / PV)" };
const CABLE_NAME: Record<Cable, string> = {
  kurz: "Kabelweg kurz (< 5 m)",
  mittel: "Kabelweg mittel (5–15 m)",
  lang: "Kabelweg lang (15–30 m)",
};
const MOUNT_NAME: Record<Mount, string> = {
  wand: "Wandmontage",
  stand: "Standfuß (freistehend)",
};

export function WallboxCalculator() {
  const [power, setPower] = useState<Power>("11");
  const [type, setType] = useState<Type>("smart");
  const [cable, setCable] = useState<Cable>("mittel");
  const [mount, setMount] = useState<Mount>("wand");
  const [breakthrough, setBreakthrough] = useState(false);
  const [panel, setPanel] = useState(false);
  const [region, setRegion] = useState(true);

  const calc = useMemo(() => {
    const device = DEVICE[power][type];
    const install = INSTALL[cable];
    const stand = mount === "stand" ? STAND : 0;
    const extras = (breakthrough ? BREAKTHROUGH : 0) + (panel ? PANEL : 0);

    // Labour-/material-driven items carry the regional surcharge; the device
    // (commodity) does not.
    const labour = install + stand + extras;
    const regionDelta = region ? labour * REGION_SURCHARGE : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: "Wallbox (Gerät)", value: device },
      { label: "Installation (Elektriker)", value: install },
      ...(stand ? [{ label: "Standfuß (freistehend)", value: stand }] : []),
      ...(breakthrough
        ? [{ label: "Wanddurchbruch / Außenverlegung", value: BREAKTHROUGH }]
        : []),
      ...(panel ? [{ label: "Zählerschrank modernisieren", value: PANEL }] : []),
      ...(regionDelta
        ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }]
        : []),
    ];

    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    return { total, low: round100(total * 0.9), high: round100(total * 1.15), rows };
  }, [power, type, cable, mount, breakthrough, panel, region]);

  const request = useMemo(() => {
    const extras = [
      breakthrough && "Wanddurchbruch / Außenverlegung",
      panel && "Zählerschrank modernisieren",
    ].filter(Boolean) as string[];
    const parts = [
      `${power} kW · ${TYPE_NAME[type]}`,
      CABLE_NAME[cable],
      MOUNT_NAME[mount],
    ];
    if (extras.length) parts.push(extras.join(", "));
    if (region) parts.push("Ballungsraum");
    return {
      service: "Wallbox / Ladestation",
      source: "wallbox-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)}`,
      details: { power, type, cable, mount, breakthrough, panel, region },
    };
  }, [power, type, cable, mount, breakthrough, panel, region, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <Segmented<Power>
          label="Ladeleistung"
          value={power}
          onChange={setPower}
          options={[
            { value: "11", label: "11 kW" },
            { value: "22", label: "22 kW" },
          ]}
        />
        <Segmented<Type>
          label="Ausstattung"
          value={type}
          onChange={setType}
          options={[
            { value: "basis", label: "Basis" },
            { value: "smart", label: "Smart (App / PV)" },
          ]}
        />
        <Segmented<Cable>
          label="Kabelweg (Sicherungskasten → Stellplatz)"
          value={cable}
          onChange={setCable}
          options={[
            { value: "kurz", label: "kurz (< 5 m)" },
            { value: "mittel", label: "mittel (5–15 m)" },
            { value: "lang", label: "lang (15–30 m)" },
          ]}
        />
        <Segmented<Mount>
          label="Montageort"
          value={mount}
          onChange={setMount}
          options={[
            { value: "wand", label: "Wandmontage" },
            { value: "stand", label: "Standfuß (freistehend)" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle
              label="Wanddurchbruch / Außenverlegung"
              checked={breakthrough}
              onChange={setBreakthrough}
            />
            <Toggle
              label="Zählerschrank modernisieren"
              hint="oft bei Altbau"
              checked={panel}
              onChange={setPanel}
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
            Richtwert: {eur(calc.total)} · inkl. Gerät, Montage &amp; Optionen
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
          Passende Elektriker anfragen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Unverbindliche Schätzung (Stand: Juni 2026), kein Angebot. Reale Preise
          hängen von Kabelweg, Zustand der Hausinstallation und Region ab.
        </p>
      </div>
    </div>
  );
}

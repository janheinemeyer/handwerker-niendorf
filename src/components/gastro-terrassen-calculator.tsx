"use client";

import { useMemo, useState } from "react";
import {
  NumberField,
  Segmented,
  Toggle,
  clampNumber,
  eur,
  round100,
} from "@/components/calculator-ui";
import { RequestButton } from "@/components/request/request-button";

/*
  Gastro-Terrassenüberdachung — Kosten- & Amortisationsrechner.
  Richtwerte synthesized from commercial supplier price lists and gastro guides
  (Stand: September 2026). Unlike the private TerrassenCalculator all prices are
  NET (zzgl. MwSt.) — businesses reclaim input VAT. Gastro systems are priced
  higher per m² than private ones: higher wind resistance class, public-traffic
  statics and a permit are the norm. The payback part is a contribution-margin
  estimate (extra usable days × seats × spend × margin), not a business plan.
*/

type System = "glas" | "faltdach" | "lamelle";
type Mount = "wand" | "frei";
type Sides = "offen" | "zip" | "glas";
type Days = "30" | "60" | "90";
type Spend = "15" | "25" | "40";

// Roof system incl. frame, drainage and assembly, net €/m².
const SYSTEM_PRICE: Record<System, number> = {
  glas: 600,
  faltdach: 750,
  lamelle: 1000,
};
// Side enclosure per running metre of open side, net.
const SIDES_PRICE: Record<Sides, number> = {
  offen: 0,
  zip: 650,
  glas: 1100,
};
const FREESTANDING_SURCHARGE = 0.15;
const POST_FOUNDATION = 400; // per post
const POST_SPACING = 3; // m between posts along the width
const HEATER = 700; // per unit incl. electrics, one per ~12 m²
const HEATER_AREA = 12;
const LED_PER_M2 = 35;
const SHADE_PER_M2 = 90; // under-glass awning, glass roof only
const PLANNING = 2500; // Statik + Bauantrag + Gebühren
const REGION_SURCHARGE = 0.15;

// Payback assumptions.
const M2_PER_SEAT = 1.5;
const GUESTS_PER_SEAT_DAY = 1; // ≈ 2 turns × 50 % occupancy
const MARGIN = 0.3; // contribution margin on extra revenue

const SYSTEM_NAME: Record<System, string> = {
  glas: "Glasdach (Alu + VSG)",
  faltdach: "Faltdach (Textil)",
  lamelle: "Lamellendach",
};
const SIDES_NAME: Record<Sides, string> = {
  offen: "Seiten offen",
  zip: "ZIP-Screens",
  glas: "Glas-Schiebeelemente",
};
const MOUNT_NAME: Record<Mount, string> = {
  wand: "Wandmontage",
  frei: "Freistehend",
};

// Bounds for the free-form measurements: below these a roof isn't a gastro
// project, above them the per-m² Richtwerte stop being defensible.
const WIDTH_MIN = 2;
const WIDTH_MAX = 25;
const DEPTH_MIN = 2;
const DEPTH_MAX = 8;

const nf1 = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });

export function GastroTerrassenCalculator() {
  const [width, setWidth] = useState("8");
  const [depth, setDepth] = useState("4");
  const [system, setSystem] = useState<System>("glas");
  const [mount, setMount] = useState<Mount>("wand");
  const [sides, setSides] = useState<Sides>("offen");
  const [heaters, setHeaters] = useState(false);
  const [led, setLed] = useState(true);
  const [shade, setShade] = useState(false);
  const [foundation, setFoundation] = useState(true);
  const [planning, setPlanning] = useState(true);
  const [region, setRegion] = useState(true);
  const [days, setDays] = useState<Days>("60");
  const [spend, setSpend] = useState<Spend>("25");

  const calc = useMemo(() => {
    const w = clampNumber(width, WIDTH_MIN, WIDTH_MAX);
    const d = clampNumber(depth, DEPTH_MIN, DEPTH_MAX);
    const area = w * d;
    const free = mount === "frei";

    const dach = area * SYSTEM_PRICE[system] * (free ? 1 + FREESTANDING_SURCHARGE : 1);
    // Wall-mounted: front + two ends are open; freestanding: all four sides.
    const openLength = free ? 2 * (w + d) : w + 2 * d;
    const seiten = openLength * SIDES_PRICE[sides];
    const postsPerRow = Math.ceil(w / POST_SPACING) + 1;
    const posts = free ? postsPerRow * 2 : postsPerRow;
    const fundament = foundation ? posts * POST_FOUNDATION : 0;
    const ausstattung =
      (heaters ? Math.ceil(area / HEATER_AREA) * HEATER : 0) +
      (led ? area * LED_PER_M2 : 0) +
      (shade && system === "glas" ? area * SHADE_PER_M2 : 0);

    const regional = dach + seiten + fundament + ausstattung;
    const regionDelta = region ? regional * REGION_SURCHARGE : 0;
    const planningCost = planning ? PLANNING : 0;

    const rawRows: { label: string; value: number }[] = [
      { label: "Dachsystem inkl. Montage", value: dach },
      ...(seiten ? [{ label: "Seitenelemente", value: seiten }] : []),
      ...(fundament ? [{ label: `Fundamente (${posts} Stützen)`, value: fundament }] : []),
      ...(ausstattung ? [{ label: "Ausstattung", value: ausstattung }] : []),
      ...(regionDelta ? [{ label: "Aufschlag Ballungsraum", value: regionDelta }] : []),
      ...(planningCost ? [{ label: "Statik & Bauantrag", value: planningCost }] : []),
    ];

    // Round each row to €100 and derive the total from the rounded rows so the
    // breakdown always sums to the displayed Richtwert.
    const rows = rawRows.map((r) => ({ label: r.label, value: round100(r.value) }));
    const total = rows.reduce((sum, r) => sum + r.value, 0);

    const seats = Math.floor(area / M2_PER_SEAT);
    const extraRevenue =
      seats * GUESTS_PER_SEAT_DAY * parseFloat(spend) * parseFloat(days);
    const margin = extraRevenue * MARGIN;
    const paybackYears = margin > 0 ? total / margin : Infinity;

    return {
      width: w,
      depth: d,
      area,
      total,
      low: round100(total * 0.9),
      high: round100(total * 1.2),
      rows,
      seats,
      extraRevenue,
      margin,
      paybackYears,
    };
  }, [width, depth, system, mount, sides, heaters, led, shade, foundation, planning, region, days, spend]);

  const request = useMemo(() => {
    const extras = [
      heaters && "Heizstrahler",
      led && "LED-Beleuchtung",
      shade && system === "glas" && "Unterglas-Beschattung",
    ].filter(Boolean) as string[];
    const parts = [
      `${nf1.format(calc.width)} × ${nf1.format(calc.depth)} m (${nf1.format(calc.area)} m², ca. ${calc.seats} Plätze)`,
      SYSTEM_NAME[system],
      MOUNT_NAME[mount],
      SIDES_NAME[sides],
    ];
    if (extras.length) parts.push("Ausstattung: " + extras.join(", "));
    if (foundation) parts.push("inkl. Fundamente");
    if (planning) parts.push("inkl. Statik & Bauantrag");
    if (region) parts.push("Ballungsraum");
    return {
      service: "Terrassenüberdachung Gastronomie",
      source: "gastro-terrassen-calculator",
      summary: parts.join(" · "),
      estimate: `${eur(calc.low)} – ${eur(calc.high)} netto`,
      details: {
        width: calc.width,
        depth: calc.depth,
        system,
        mount,
        sides,
        heaters,
        led,
        shade: shade && system === "glas",
        foundation,
        planning,
        region,
        days,
        spend,
      },
    };
  }, [system, mount, sides, heaters, led, shade, foundation, planning, region, days, spend, calc.width, calc.depth, calc.area, calc.seats, calc.low, calc.high]);

  return (
    <div className="mt-6 grid gap-px overflow-hidden border border-line-strong bg-line lg:grid-cols-[1.3fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6 bg-paper p-6 sm:p-8">
        <div className="flex flex-wrap gap-x-8 gap-y-6">
          <NumberField
            label="Breite (Front)"
            value={width}
            onChange={setWidth}
            min={WIDTH_MIN}
            max={WIDTH_MAX}
            unit="m"
            hint={`${WIDTH_MIN}–${WIDTH_MAX} m`}
          />
          <NumberField
            label="Tiefe"
            value={depth}
            onChange={setDepth}
            min={DEPTH_MIN}
            max={DEPTH_MAX}
            unit="m"
            hint={`${DEPTH_MIN}–${DEPTH_MAX} m`}
          />
        </div>
        <Segmented<System>
          label="Dachsystem"
          value={system}
          onChange={setSystem}
          options={[
            { value: "glas", label: "Glasdach (Alu + VSG)" },
            { value: "faltdach", label: "Faltdach (Textil)" },
            { value: "lamelle", label: "Lamellendach" },
          ]}
        />
        <Segmented<Mount>
          label="Montage"
          value={mount}
          onChange={setMount}
          options={[
            { value: "wand", label: "An der Fassade" },
            { value: "frei", label: "Freistehend" },
          ]}
        />
        <Segmented<Sides>
          label="Seitenelemente"
          value={sides}
          onChange={setSides}
          options={[
            { value: "offen", label: "Offen" },
            { value: "zip", label: "ZIP-Screens" },
            { value: "glas", label: "Glas-Schiebeelemente" },
          ]}
        />

        <fieldset>
          <legend className="label text-ink-soft">Ausstattung</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle label="Heizstrahler" checked={heaters} onChange={setHeaters} />
            <Toggle label="LED-Beleuchtung" checked={led} onChange={setLed} />
            {system === "glas" && (
              <Toggle label="Unterglas-Beschattung" checked={shade} onChange={setShade} />
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend className="label text-ink-soft">Weiteres</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Toggle label="Fundamente neu" checked={foundation} onChange={setFoundation} />
            <Toggle label="Statik & Bauantrag" checked={planning} onChange={setPlanning} />
            <Toggle label="Ballungsraum" hint="z. B. Hamburg" checked={region} onChange={setRegion} />
          </div>
        </fieldset>

        <div className="space-y-6 border-t border-line pt-6">
          <p className="label text-accent">Amortisation</p>
          <Segmented<Days>
            label="Zusätzliche Öffnungstage pro Jahr"
            value={days}
            onChange={setDays}
            options={[
              { value: "30", label: "30 Tage" },
              { value: "60", label: "60 Tage" },
              { value: "90", label: "90 Tage" },
            ]}
          />
          <Segmented<Spend>
            label="Umsatz pro Gast"
            value={spend}
            onChange={setSpend}
            options={[
              { value: "15", label: "15 € (Café)" },
              { value: "25", label: "25 € (Bistro)" },
              { value: "40", label: "40 € (Restaurant)" },
            ]}
          />
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col bg-ink p-6 text-paper sm:p-8">
        <p className="label text-accent">Geschätzte Investition (netto)</p>
        <div role="status" aria-live="polite">
          <p className="mt-3 font-display text-3xl font-extrabold leading-none sm:text-4xl">
            {eur(calc.low)}
            <span className="text-paper/50"> – </span>
            {eur(calc.high)}
          </p>
          <p className="mt-2 text-xs text-paper/50">
            Richtwert: {eur(calc.total)} zzgl. MwSt. · {nf1.format(calc.area)} m² ·
            ca. {calc.seats} Plätze
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

        <dl
          className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-paper/60">Mehrumsatz pro Jahr</dt>
            <dd className="font-medium tabular-nums">{eur(calc.extraRevenue)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-paper/60">Deckungsbeitrag (30 %)</dt>
            <dd className="font-medium tabular-nums">{eur(calc.margin)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-paper">Amortisiert nach ca.</dt>
            <dd className="font-display text-lg font-bold tabular-nums text-accent">
              {nf1.format(calc.paybackYears)} Jahren
            </dd>
          </div>
        </dl>

        <RequestButton
          context={request}
          className="group mt-7 inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Passende Angebote anfragen
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </RequestButton>
        <p className="mt-3 text-xs leading-relaxed text-paper/40">
          Unverbindliche Schätzung (Stand: September 2026), kein Angebot und keine
          Wirtschaftlichkeitsberechnung. Reale Preise hängen von Statik,
          Windlast, Untergrund und Genehmigung ab.
        </p>
      </div>
    </div>
  );
}

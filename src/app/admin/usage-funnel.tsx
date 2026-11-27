import { getUsageFunnel, type FunnelRow } from "@/lib/usage-events";

const pct = (part: number, whole: number) =>
  whole > 0 ? `${Math.round((part / whole) * 100)} %` : "–";

const COLUMNS = [
  "Quelle",
  "Gesehen",
  "Benutzt",
  "Nutzung",
  "Ergebnis",
  "Anfrage geklickt",
  "Anfragen",
  "Abschluss",
];

/** Funnel per source over the last 30 days (anonymous usage events + leads). */
export async function UsageFunnel() {
  let rows: FunnelRow[] | null = null;
  let errorMsg: string | null = null;
  try {
    rows = await getUsageFunnel();
  } catch (e) {
    errorMsg = e instanceof Error ? e.message : "Unbekannter Fehler.";
  }

  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Rechner &amp; CTAs
        </h2>
        <span className="label text-ink-soft">letzte 30 Tage</span>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-ink-soft">
        Gesehen = Rechner im Bild · Benutzt = erste Eingabe geändert · Ergebnis
        = Konfiguration beim Verlassen (nach erneuter Änderung auch mehrfach) ·
        Anfrage geklickt = Anfrage-Button
        (Rechner und CTA-Bänder) · Anfragen = abgesendete Formulare.
      </p>

      <div className="mt-6">
        {errorMsg ? (
          <p className="border border-line bg-paper-2/40 p-6 text-sm text-ink-soft">
            Nutzungsdaten nicht verfügbar: {errorMsg}
          </p>
        ) : !rows || rows.length === 0 ? (
          <p className="border border-line bg-paper-2/40 p-6 text-sm text-ink-soft">
            Noch keine Nutzungsdaten.
          </p>
        ) : (
          <div className="overflow-x-auto border border-line">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-paper-2/70 text-left">
                  {COLUMNS.map((h) => (
                    <th key={h} className="label px-3 py-3 text-ink-soft">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.source} className="border-t border-line">
                    <td className="px-3 py-2 font-medium">{r.source}</td>
                    <td className="px-3 py-2 tabular-nums">{r.view}</td>
                    <td className="px-3 py-2 tabular-nums">{r.start}</td>
                    <td className="px-3 py-2 tabular-nums text-ink-soft">
                      {pct(r.start, r.view)}
                    </td>
                    <td className="px-3 py-2 tabular-nums">{r.result}</td>
                    <td className="px-3 py-2 tabular-nums">{r.cta}</td>
                    <td className="px-3 py-2 tabular-nums">{r.leads}</td>
                    <td className="px-3 py-2 tabular-nums text-ink-soft">
                      {pct(r.leads, r.cta)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

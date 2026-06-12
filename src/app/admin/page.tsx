import { createAdminClient } from "@/lib/supabase";
import { logout } from "./actions";
import { LeadRow } from "./lead-row";
import type { Lead } from "./types";

// Reads live data and is auth-gated — never cache/prerender.
export const dynamic = "force-dynamic";

const PAGE_LIMIT = 200;

const df = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Berlin",
});

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-line bg-paper-2/40 p-8 text-center">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-ink-soft">{body}</p>
    </div>
  );
}

export default async function AdminPage() {
  let leads: Lead[] | null = null;
  let total = 0;
  let errorMsg: string | null = null;

  try {
    const supabase = createAdminClient();
    const { data, error, count } = await supabase
      .from("contact_submissions")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .limit(PAGE_LIMIT);
    if (error) errorMsg = error.message;
    else {
      leads = (data ?? []) as Lead[];
      total = count ?? leads.length;
    }
  } catch (e) {
    errorMsg = e instanceof Error ? e.message : "Unbekannter Fehler.";
  }

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line-strong bg-paper/90 px-5 py-4 backdrop-blur sm:px-8">
        <span className="font-display text-sm font-bold tracking-tight">
          ADMIN · HANDWERK<span className="text-accent">.</span>NIENDORF
        </span>
        <form action={logout}>
          <button className="label text-ink-soft transition-colors hover:text-accent">
            Abmelden
          </button>
        </form>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">Anfragen</h1>
          {leads && (
            <span className="label text-ink-soft">{total} gesamt</span>
          )}
        </div>

        <div className="mt-8">
          {errorMsg ? (
            <Notice title="Anfragen nicht verfügbar" body={errorMsg} />
          ) : !leads || leads.length === 0 ? (
            <Notice
              title="Noch keine Anfragen"
              body="Sobald jemand das Anfrageformular absendet, erscheint die Anfrage hier."
            />
          ) : (
            <div className="overflow-x-auto border border-line">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-paper-2/70 text-left">
                    {[
                      "Datum",
                      "Name",
                      "Kontakt",
                      "Ort",
                      "Leistung",
                      "Schätzung",
                      "Status",
                      "",
                    ].map((h, i) => (
                      <th key={h || i} className="label px-3 py-3 text-ink-soft">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l) => (
                    <LeadRow
                      key={l.id}
                      lead={l}
                      created={df.format(new Date(l.created_at))}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {leads && leads.length < total && (
            <p className="mt-3 text-xs text-ink-soft">
              Zeige die neuesten {leads.length} von {total} Anfragen.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

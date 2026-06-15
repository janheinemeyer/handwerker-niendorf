import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb, CtaBand } from "@/components/ratgeber";
import { PrintButton } from "@/components/print-button";
import { BEBAUUNGSPLAN_CHECKLISTE } from "../checkliste-items";

export const metadata: Metadata = {
  title: "Bebauungsplan-Checkliste fürs Carport (zum Abhaken & als PDF)",
  description:
    "Kostenlose Checkliste: Was steht in meinem Bebauungsplan? Baugrenze/Baufenster, GRZ, Dachform, Vorgarten, Stellplätze & Baulasten – Punkt für Punkt prüfen, abhaken und als PDF speichern oder ausdrucken.",
  alternates: { canonical: "/ratgeber/carport-bebauungsplan/checkliste" },
};

export default function CarportBebauungsplanChecklistePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1 border-t border-line-strong">
        <article className="mx-auto max-w-[52rem] px-5 py-14 sm:px-8 sm:py-20">
          <div className="no-print">
            <Breadcrumb
              items={[
                { name: "Start", href: "/" },
                { name: "Ratgeber", href: "/ratgeber" },
                {
                  name: "Carport & Bebauungsplan",
                  href: "/ratgeber/carport-bebauungsplan",
                },
                {
                  name: "Checkliste",
                  href: "/ratgeber/carport-bebauungsplan/checkliste",
                },
              ]}
            />
          </div>

          <h1 className="mt-6 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold uppercase leading-[0.98]">
            Bebauungsplan-Checkliste fürs Carport
          </h1>
          <p className="mt-4 max-w-prose text-ink-soft">
            Bevor Sie planen oder Material bestellen: Gehen Sie Ihren
            Bebauungsplan (bzw. Baustufenplan) Punkt für Punkt durch, haken Sie
            ab und notieren Sie, was gilt. Speichern Sie die Liste als PDF oder
            drucken Sie sie aus.
          </p>

          <div className="no-print mt-6 flex flex-wrap gap-3">
            <PrintButton className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-ink">
              Drucken / als PDF speichern
            </PrintButton>
            <Link
              href="/ratgeber/carport-bebauungsplan"
              className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink/40"
            >
              ← Zum Ratgeber
            </Link>
          </div>

          <ol className="mt-10 space-y-4">
            {BEBAUUNGSPLAN_CHECKLISTE.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 border border-line bg-paper p-4"
              >
                <input
                  type="checkbox"
                  aria-label={item.title}
                  className="mt-1 h-5 w-5 shrink-0 accent-accent"
                />
                <div className="min-w-0">
                  <p className="font-semibold leading-tight">{item.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                  <p className="mt-3 border-b border-dashed border-line-strong pb-5 text-[0.7rem] uppercase tracking-wide text-ink-soft/40">
                    Notiz
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="no-print">
            <CtaBand
              headline="Bebauungsplan beim Carport mitprüfen lassen?"
              text="Unsicher bei einem Punkt? Wir bringen Sie mit geprüften Carport-Betrieben aus Hamburg und Umgebung zusammen, die Baugrenzen, Bebauungsplan und – falls nötig – einen Befreiungsantrag gleich mitdenken."
              ctaLabel="Carport-Angebote anfragen"
              service="Carport"
              source="carport-bebauungsplan-checkliste"
            />
          </div>

          <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
            Diese Checkliste dient der allgemeinen Orientierung (Stand Juni 2026)
            und ersetzt keine baurechtliche Prüfung und keine Auskunft des
            zuständigen Bauamts. Was Ihr Bebauungsplan konkret zulässt, hängt vom
            Einzelfall ab.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

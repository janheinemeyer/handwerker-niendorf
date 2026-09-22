import Link from "next/link";
import { ratgeberByCluster } from "@/lib/ratgeber";

export function SiteFooter() {
  const groups = ratgeberByCluster();

  return (
    <footer className="relative z-10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-64 lg:shrink-0">
            <Link href="/#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg font-extrabold text-paper">
                H
              </span>
              <span className="font-display text-sm font-bold tracking-tight">
                HANDWERK<span className="text-accent">.</span>NIENDORF
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Vermittlung von geprüften Handwerksbetrieben in Hamburg-Niendorf
              und Umgebung.
            </p>
          </div>

          {/* Ratgeber by category — columns come from the catalog's clusters,
              so a new page lands in its category without touching the footer. */}
          <nav aria-label="Ratgeber" className="flex-1">
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
              <p className="label text-paper/50">Ratgeber</p>
              <Link
                href="/ratgeber"
                className="label text-accent hover:text-paper"
              >
                Alle Ratgeber →
              </Link>
            </div>
            {/* Column flow, not a grid: the categories differ a lot in length
                (Energie has 14 entries, Terrasse 3), and a grid would leave a
                tall empty cell next to the longest one. */}
            <div className="mt-7 gap-x-10 sm:columns-2 lg:columns-3">
              {groups.map((g) => (
                <div key={g.cluster} className="mb-8 break-inside-avoid">
                  <p className="font-display text-sm font-bold text-paper">
                    {g.label}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-paper/60">
                    {g.pages.map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="hover:text-paper">
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Handwerk Niendorf. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-paper">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-paper">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

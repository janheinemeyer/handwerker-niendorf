import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div>
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

          <nav aria-label="Ratgeber">
            <p className="label text-paper/50">Ratgeber</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li>
                <Link href="/ratgeber/carport-bauen-lassen-kosten" className="hover:text-paper">
                  Carport-Kosten
                </Link>
              </li>
              <li>
                <Link href="/ratgeber/terrassenueberdachung-kosten" className="hover:text-paper">
                  Terrassenüberdachung-Kosten
                </Link>
              </li>
              <li>
                <Link href="/ratgeber/wallbox-installieren-kosten" className="hover:text-paper">
                  Wallbox installieren
                </Link>
              </li>
              <li>
                <Link href="/ratgeber" className="hover:text-paper">
                  Alle Ratgeber
                </Link>
              </li>
            </ul>
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

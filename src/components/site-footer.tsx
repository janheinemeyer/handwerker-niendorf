import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div>
            <Link href="#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg font-extrabold text-paper">
                H
              </span>
              <span className="font-display text-sm font-bold tracking-tight">
                HANDWERK<span className="text-accent">.</span>NIENDORF
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Meisterbetrieb für Renovierung, Sanierung und Montage in
              Hamburg-Niendorf.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="label text-paper/40">Adresse</p>
              <address className="mt-3 not-italic leading-relaxed text-paper/80">
                Musterstraße 12
                <br />
                22455 Hamburg
              </address>
            </div>
            <div>
              <p className="label text-paper/40">Kontakt</p>
              <ul className="mt-3 space-y-2 text-paper/80">
                <li>
                  <a href="tel:+4940123456" className="hover:text-accent">
                    040 123 456
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hallo@handwerk-niendorf.de"
                    className="hover:text-accent"
                  >
                    hallo@handwerk-niendorf.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Handwerk Niendorf. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-paper">
              Impressum
            </Link>
            <Link href="#" className="hover:text-paper">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

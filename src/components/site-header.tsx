import Link from "next/link";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#betrieb", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-strong bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg font-extrabold text-paper transition-transform group-hover:-rotate-6">
            H
          </span>
          <span className="font-display text-sm font-bold tracking-tight">
            HANDWERK
            <span className="text-accent">.</span>NIENDORF
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

/** Dark conversion band that funnels into the Anfrage flow. */
export function CtaBand({
  headline,
  text,
  ctaLabel = "Passende Angebote anfragen",
  ctaHref = "/#kontakt",
  note = "Kostenlos & unverbindlich · geprüfte Betriebe aus Hamburg & Umgebung",
}: {
  headline: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
}) {
  return (
    <div className="mt-10 border border-line-strong bg-ink p-7 text-paper sm:p-9">
      <h3 className="font-display text-xl font-bold sm:text-2xl">{headline}</h3>
      <p className="mt-3 max-w-xl text-paper/70">{text}</p>
      <Link
        href={ctaHref}
        className="group mt-6 inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        {ctaLabel}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
      {note && <p className="mt-3 text-xs text-paper/50">{note}</p>}
    </div>
  );
}

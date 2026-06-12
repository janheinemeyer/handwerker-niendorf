import { RequestButton } from "@/components/request/request-button";

/** Dark conversion band that opens the request modal, preset with the service. */
export function CtaBand({
  headline,
  text,
  ctaLabel = "Passende Angebote anfragen",
  service,
  source,
  note = "Kostenlos & unverbindlich · geprüfte Betriebe aus Hamburg & Umgebung",
}: {
  headline: string;
  text: string;
  ctaLabel?: string;
  service?: string;
  source?: string;
  note?: string;
}) {
  return (
    <div className="mt-10 border border-line-strong bg-ink p-7 text-paper sm:p-9">
      <h3 className="font-display text-xl font-bold sm:text-2xl">{headline}</h3>
      <p className="mt-3 max-w-xl text-paper/70">{text}</p>
      <RequestButton
        context={{ service, source }}
        className="group mt-6 inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        {ctaLabel}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </RequestButton>
      {note && <p className="mt-3 text-xs text-paper/50">{note}</p>}
    </div>
  );
}

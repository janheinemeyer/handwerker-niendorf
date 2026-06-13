import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line-strong">
      {/* Blueprint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 70% 10%, black 30%, transparent 75%)",
          maskImage:
            "radial-gradient(120% 90% at 70% 10%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:content-center lg:items-end lg:py-16 lg:min-h-[calc(100svh-4.0625rem)]">
        <div>
          <p
            className="rise label flex items-center gap-3 text-accent"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-px w-10 bg-accent" />
            Handwerker-Vermittlung · Hamburg-Niendorf
          </p>

          <h1
            className="rise mt-6 font-display text-[clamp(2.4rem,7vw,4.75rem)] font-extrabold uppercase leading-[0.92] tracking-tight"
            style={{ animationDelay: "0.12s" }}
          >
            Den richtigen
            <br />
            Handwerker
            <br />
            <span className="text-accent">finden.</span>
          </h1>

          <p
            className="rise mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.2s" }}
          >
            Wir vermitteln Ihnen passende, geprüfte Handwerksbetriebe aus Hamburg
            und Umgebung – für Renovierung, Maler-, Trockenbau-, Fliesen- und
            Montagearbeiten. Eine Anfrage, mehrere passende Betriebe.
          </p>

          <div
            className="rise mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.28s" }}
          >
            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-ink"
            >
              Anfrage starten
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#leistungen"
              className="inline-flex items-center gap-2 border-b-2 border-ink/30 py-2 font-sans text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>

        {/* Spec card */}
        <div
          className="rise relative border border-line-strong bg-paper-2/60"
          style={{ animationDelay: "0.36s" }}
        >
          <div className="absolute -top-3 left-6 bg-accent px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wider text-paper">
            unverbindlich
          </div>
          <dl className="divide-y divide-line">
            {[
              ["Für Anfragende", "kostenlos"],
              ["Vermittlungsgebiet", "Hamburg & Umgebung"],
              ["Reaktionszeit", "< 24 Std."],
              ["Betriebe", "geprüft"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 px-6 py-5"
              >
                <dt className="label text-ink-soft">{k}</dt>
                <dd className="font-display text-xl font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    no: "01",
    title: "Anfrage",
    body: "Sie schildern Ihr Vorhaben — online, telefonisch oder per Foto. Kostenlos und unverbindlich.",
  },
  {
    no: "02",
    title: "Wir vermitteln",
    body: "Wir leiten Ihre Anfrage an passende, geprüfte Betriebe aus der Region weiter.",
  },
  {
    no: "03",
    title: "Angebote vergleichen",
    body: "Die Betriebe melden sich bei Ihnen — Sie vergleichen Angebote und Termine in Ruhe.",
  },
  {
    no: "04",
    title: "Direkt beauftragen",
    body: "Sie beauftragen den Betrieb Ihrer Wahl. Vertrag und Ausführung liegen direkt beim Betrieb.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="border-b border-line-strong bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="label text-accent">02 — Ablauf</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
          In vier Schritten zum richtigen Betrieb
        </h2>

        <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.no} className="group relative bg-ink p-7">
              <span className="font-display text-5xl font-extrabold text-white/15 transition-colors group-hover:text-accent">
                {s.no}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

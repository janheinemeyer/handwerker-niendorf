const steps = [
  {
    no: "01",
    title: "Anfrage",
    body: "Sie schildern Ihr Vorhaben — online, telefonisch oder per Foto. Wir melden uns binnen 24 Stunden.",
  },
  {
    no: "02",
    title: "Termin vor Ort",
    body: "Wir schauen uns die Lage an, beraten ehrlich und nehmen alles Nötige auf.",
  },
  {
    no: "03",
    title: "Festpreis-Angebot",
    body: "Sie erhalten ein nachvollziehbares Angebot mit klarem Umfang und festem Preis.",
  },
  {
    no: "04",
    title: "Ausführung",
    body: "Sauber, termintreu und besenrein. Ein Ansprechpartner von Anfang bis Übergabe.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="border-b border-line-strong bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="label text-accent">02 — Ablauf</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
          In vier Schritten zur fertigen Arbeit
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

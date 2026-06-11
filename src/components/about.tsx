const values = [
  {
    title: "Geprüfte Betriebe",
    body: "Wir vermitteln nur Betriebe, die wir kennen und deren Qualifikation wir prüfen.",
  },
  {
    title: "Kostenlos & unverbindlich",
    body: "Anfrage und Vermittlung sind für Sie kostenlos. Ob und wen Sie beauftragen, entscheiden Sie frei.",
  },
  {
    title: "Direkt zum Betrieb",
    body: "Ihr Vertrag entsteht unmittelbar mit dem Betrieb Ihrer Wahl — ohne Aufschlag auf den Preis.",
  },
];

export function About() {
  return (
    <section id="betrieb">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="label text-accent">03 — Über uns</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
              Aus dem Viertel.
              <br />
              Für das Viertel.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Wir sind kein Handwerksbetrieb, sondern Ihre Vermittlung vor Ort:
              Wir kennen die Handwerksbetriebe in Hamburg-Niendorf und Umgebung
              und bringen Sie mit dem zusammen, der zu Ihrem Vorhaben passt.
              Kurze Wege, geprüfte Partner, unverbindlich.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-px border border-line bg-line">
              {[
                ["100 %", "unverbindlich"],
                ["0 €", "für Anfragende"],
                ["< 24 Std.", "Reaktionszeit"],
              ].map(([v, k]) => (
                <div key={k} className="bg-paper px-4 py-6 text-center">
                  <div className="font-display text-3xl font-extrabold text-accent">
                    {v}
                  </div>
                  <div className="mt-2 text-xs leading-tight text-ink-soft">
                    {k}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-px border border-line bg-line">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="flex gap-5 bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <span className="font-display text-sm font-bold text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

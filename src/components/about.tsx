const values = [
  {
    title: "Fester Ansprechpartner",
    body: "Kein Callcenter, keine wechselnden Trupps. Sie haben einen Namen und eine Nummer.",
  },
  {
    title: "Festpreis statt Überraschung",
    body: "Was im Angebot steht, gilt. Mehrarbeit wird vorher besprochen — nie hinterher berechnet.",
  },
  {
    title: "Besenreine Übergabe",
    body: "Wir hinterlassen die Baustelle so, wie wir sie selbst vorfinden möchten: sauber.",
  },
];

export function About() {
  return (
    <section id="betrieb">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="label text-accent">03 — Betrieb</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
              Aus dem Viertel.
              <br />
              Für das Viertel.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Wir sind ein kleiner Meisterbetrieb aus Hamburg-Niendorf. Kurze
              Wege, ehrliche Beratung und Arbeit, für die wir mit unserem Namen
              geradestehen — seit über 15 Jahren in der Nachbarschaft.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-px border border-line bg-line">
              {[
                ["15+", "Jahre Erfahrung"],
                ["1.800+", "Aufträge erledigt"],
                ["4,9", "Sterne im Schnitt"],
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

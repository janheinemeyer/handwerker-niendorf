import Link from "next/link";

const ratgeber = [
  ["Carport-Kosten", "/ratgeber/carport-bauen-lassen-kosten"],
  ["Terrassenüberdachung", "/ratgeber/terrassenueberdachung-kosten"],
  ["Wallbox installieren", "/ratgeber/wallbox-installieren-kosten"],
];

const services = [
  {
    no: "01",
    title: "Renovierung & Modernisierung",
    body: "Vom Altbau-Refresh bis zur Komplettrenovierung der Wohnung — passende Betriebe für jedes Gewerk.",
    tags: ["Wände", "Böden", "Decken"],
  },
  {
    no: "02",
    title: "Maler & Lackierer",
    body: "Streichen, Spachteln, Tapezieren und Lackieren. Saubere Kanten, gleichmäßige Flächen, geschützte Möbel.",
    tags: ["Innen", "Fassade", "Lack"],
  },
  {
    no: "03",
    title: "Trockenbau",
    body: "Trennwände, abgehängte Decken und Dämmung. Glatt verspachtelt und streichfertig übergeben.",
    tags: ["Wände", "Decken", "Akustik"],
  },
  {
    no: "04",
    title: "Fliesen & Bad",
    body: "Bäder und Böden neu verlegt oder saniert. Präzise Fugen, korrekte Abdichtung, langlebig.",
    tags: ["Bad", "Küche", "Boden"],
  },
  {
    no: "05",
    title: "Montage & Möbelaufbau",
    body: "Küchen, Einbauschränke, Türen und Beschläge. Millimetergenau ausgerichtet und befestigt.",
    tags: ["Küche", "Türen", "Schränke"],
  },
  {
    no: "06",
    title: "Reparaturen",
    body: "Auch für kleinere Aufträge finden wir den passenden Betrieb — schnell und fair.",
    tags: ["Schäden", "Wartung", "Notfall"],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="border-b border-line-strong">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-accent">01 — Leistungen</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
              Wofür wir vermitteln
            </h2>
          </div>
          <p className="max-w-xs text-ink-soft">
            Sechs Gewerke. Für jedes vermitteln wir Ihnen passende, geprüfte
            Betriebe aus der Region – auch für größere Vorhaben über mehrere
            Gewerke.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.no}
              className="group relative flex flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-accent">
                  {s.no}
                </span>
                <span className="text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border border-line bg-paper-2/40 p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="label text-accent">Kostenrechner & Ratgeber</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              Was kostet Ihr Vorhaben? Rechnen Sie es vorab durch – kostenlos und
              unverbindlich, mit konkreten Preisspannen für Hamburg.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 font-display text-sm font-bold sm:justify-end">
            {ratgeber.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-1.5 border-b-2 border-ink/20 pb-0.5 transition-colors hover:border-accent hover:text-accent"
                >
                  {label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

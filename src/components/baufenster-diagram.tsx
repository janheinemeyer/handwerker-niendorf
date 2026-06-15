/*
  Schematic top-down plan: Grundstück mit Baufenster (= überbaubare Fläche,
  umschlossen von den Baugrenzen), Haus innerhalb, Carport außerhalb des
  Baufensters. Illustriert § 23 Abs. 5 BauNVO auf der Bebauungsplan-Seite.

  Farben referenzieren die rohen Theme-CSS-Variablen (`--accent`, `--ink`, …)
  direkt – Tailwinds `fill-*`/`stroke-*`-Utilities werden unter `@theme inline`
  NICHT emittiert. Alle Text-Labels stehen dunkel (ink/ink-soft) auf hellem
  Grund (Kontrast ≥ 4.5:1); auf der Akzentfläche steht kein Text.
*/
export function BaufensterDiagram() {
  return (
    <figure className="mt-6 border border-line bg-paper p-4 sm:p-6">
      <svg
        viewBox="0 0 360 282"
        role="img"
        aria-labelledby="bf-title bf-desc"
        className="mx-auto block h-auto w-full max-w-md"
      >
        <title id="bf-title">Schema: Carport außerhalb des Baufensters</title>
        <desc id="bf-desc">
          Ein Grundstück, dessen überbaubare Fläche (Baufenster) von gestrichelten
          Baugrenzen umschlossen ist; das Haus steht im Baufenster, der Carport
          außerhalb, aber innerhalb der Grundstücksgrenze.
        </desc>

        {/* Grundstück */}
        <text x="12" y="22" fill="var(--ink-soft)" fontSize="11">
          Grundstücksgrenze
        </text>
        <rect
          x="10"
          y="30"
          width="340"
          height="210"
          rx="2"
          fill="var(--paper-2)"
          stroke="var(--line-strong)"
          strokeWidth="2"
        />

        {/* Baugrenze = die (gestrichelte) Linie, die das Baufenster begrenzt */}
        <text x="55" y="64" fill="var(--ink)" fontSize="11" fontWeight="600">
          Baugrenze (Linie)
        </text>
        <rect
          x="55"
          y="72"
          width="175"
          height="120"
          fill="var(--paper)"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="6 5"
        />

        {/* Haus */}
        <rect x="75" y="95" width="110" height="62" fill="var(--ink)" />
        <text
          x="130"
          y="130"
          textAnchor="middle"
          fill="var(--paper)"
          fontSize="13"
          fontWeight="600"
        >
          Haus
        </text>

        {/* Baufenster = die überbaubare Fläche innerhalb der Baugrenzen */}
        <text x="142" y="182" textAnchor="middle" fill="var(--ink)" fontSize="11">
          Baufenster (Fläche)
        </text>

        {/* Carport – außerhalb des Baufensters (Akzentfläche ohne Text) */}
        <rect x="262" y="95" width="74" height="95" fill="var(--accent)" />
        <text
          x="299"
          y="208"
          textAnchor="middle"
          fill="var(--ink)"
          fontSize="12"
          fontWeight="600"
        >
          Carport
        </text>

        {/* Straße */}
        <rect x="10" y="248" width="340" height="22" fill="var(--line)" />
        <text x="180" y="263" textAnchor="middle" fill="var(--ink-soft)" fontSize="11">
          Straße
        </text>
      </svg>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-soft">
        Schema: Das <strong>Baufenster</strong> ist die überbaubare Fläche, die von
        den <strong>Baugrenzen</strong> umschlossen wird (hier mit dem Haus). Ein{" "}
        <strong>Carport</strong> kann nach § 23 Abs. 5 BauNVO auch außerhalb des
        Baufensters <strong>zugelassen werden</strong> – soweit der Bebauungsplan
        nichts anderes festsetzt; das ist eine Ermessensentscheidung des Bauamts,
        kein Automatismus.
      </figcaption>
    </figure>
  );
}

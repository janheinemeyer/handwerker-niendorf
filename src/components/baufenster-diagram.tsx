/*
  Schematic top-down plan: Grundstück mit Baufenster (von Baugrenzen umschlossen),
  Haus innerhalb, Carport außerhalb des Baufensters. Illustriert § 23 Abs. 5 BauNVO
  auf der Bebauungsplan-Seite.

  Colours reference the raw theme CSS variables (`--accent`, `--ink`, …) directly
  via SVG presentation attributes. Tailwind's `fill-*`/`stroke-*` utilities are
  NOT emitted under this project's `@theme inline` setup, so using the variables
  keeps the diagram on-brand and robust.
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
          Ein Grundstück mit gestricheltem Baufenster, dem Wohnhaus darin und einem
          Carport außerhalb des Baufensters, aber innerhalb der Grundstücksgrenze.
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

        {/* Baufenster (Baugrenze) */}
        <text x="55" y="64" fill="var(--accent)" fontSize="11" fontWeight="600">
          Baufenster (Baugrenze)
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
        <rect x="75" y="95" width="110" height="72" fill="var(--ink)" />
        <text
          x="130"
          y="136"
          textAnchor="middle"
          fill="var(--paper)"
          fontSize="13"
          fontWeight="600"
        >
          Haus
        </text>

        {/* Carport – außerhalb des Baufensters */}
        <rect x="262" y="95" width="74" height="112" fill="var(--accent)" />
        <text
          x="299"
          y="146"
          textAnchor="middle"
          fill="var(--paper)"
          fontSize="13"
          fontWeight="600"
        >
          Carport
        </text>
        <text x="299" y="162" textAnchor="middle" fill="var(--paper)" fontSize="9">
          außerhalb
        </text>

        {/* Straße */}
        <rect x="10" y="252" width="340" height="22" fill="var(--line)" />
        <text x="180" y="267" textAnchor="middle" fill="var(--ink-soft)" fontSize="11">
          Straße
        </text>
      </svg>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-soft">
        Schema: Innerhalb der Baugrenzen liegt das <strong>Baufenster</strong>{" "}
        (hier mit dem Haus). Ein <strong>Carport</strong> darf nach § 23 Abs. 5
        BauNVO oft auch <strong>außerhalb des Baufensters</strong> stehen – soweit
        der Bebauungsplan nichts anderes festsetzt.
      </figcaption>
    </figure>
  );
}

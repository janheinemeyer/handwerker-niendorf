export type RatgeberPage = { href: string; title: string; blurb: string };

/**
 * Central catalog of Ratgeber cost pages — the single source of truth for
 * cross-linking. `RatgeberArticle` auto-renders an "Auch interessant" block
 * from this on every page listed here (linking to the other entries).
 *
 * To add a new Ratgeber page: add it here so siblings link to it and it links
 * back to them. A page not listed here renders no cross-links.
 */
export const RATGEBER_PAGES: RatgeberPage[] = [
  {
    href: "/ratgeber/carport-bauen-lassen-kosten",
    title: "Carport bauen lassen: Kosten",
    blurb: "Preise nach Größe, Material & Aufbau – inkl. Kostenrechner.",
  },
  {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung: Kosten",
    blurb: "Was eine Überdachung kostet – Material, Größe und Montage.",
  },
  {
    href: "/ratgeber/wallbox-installieren-kosten",
    title: "Wallbox installieren: Kosten",
    blurb: "Installationskosten, Förderung und Technik im Überblick.",
  },
];

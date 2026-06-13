export type RatgeberPage = {
  href: string;
  title: string;
  blurb: string;
  /** Short topic name — feeds the Organization `knowsAbout` schema. */
  topic: string;
};

/**
 * Central catalog of Ratgeber cost pages — the single source of truth for
 * cross-linking AND the Organization `knowsAbout` schema. `RatgeberArticle`
 * auto-renders an "Auch interessant" block from this on every page listed here,
 * and `organizationSchema()` derives the company's areas of expertise from the
 * `topic`s — so both update automatically when a page is added here.
 *
 * To add a new Ratgeber page: add it here so siblings link to it, it links back,
 * and its topic appears in the Organization schema. A page not listed renders no
 * cross-links.
 */
export const RATGEBER_PAGES: RatgeberPage[] = [
  {
    href: "/ratgeber/carport-bauen-lassen-kosten",
    title: "Carport bauen lassen: Kosten",
    blurb: "Preise nach Größe, Material & Aufbau – inkl. Kostenrechner.",
    topic: "Carport-Bau",
  },
  {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung: Kosten",
    blurb: "Was eine Überdachung kostet – Material, Größe und Montage.",
    topic: "Terrassenüberdachung",
  },
  {
    href: "/ratgeber/wallbox-installieren-kosten",
    title: "Wallbox installieren: Kosten",
    blurb: "Installationskosten, Förderung und Technik im Überblick.",
    topic: "Wallbox-Installation",
  },
];

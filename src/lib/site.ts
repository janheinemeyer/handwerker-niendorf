/** Canonical production origin. Used for metadataBase, sitemap and robots. */
export const SITE_URL = "https://handwerker-niendorf.de";

/**
 * Real NAP for the business — the single source for the LocalBusiness schema
 * and the on-page local-relevance block. (Phone/email are still placeholders,
 * so they're intentionally omitted here rather than faked.)
 */
export const BUSINESS = {
  name: "Handwerk Niendorf",
  streetAddress: "Margaretha-Rothe-Weg 11",
  postalCode: "22455",
  addressLocality: "Hamburg",
  /** Stadtteil — the local anchor (22455 is the Niendorf postal code). */
  district: "Hamburg-Niendorf",
  /** Angrenzende Stadtteile im Einzugsgebiet (Bezirk Eimsbüttel und Umgebung). */
  neighboringDistricts: [
    "Lokstedt",
    "Schnelsen",
    "Eidelstedt",
    "Stellingen",
    "Groß Borstel",
  ],
} as const;

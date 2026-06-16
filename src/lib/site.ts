/** Canonical production origin. Used for metadataBase, sitemap and robots. */
export const SITE_URL = "https://handwerker-niendorf.de";

/**
 * Real NAP for the business — the single source for the LocalBusiness schema,
 * the Impressum/Datenschutz pages and the on-page local-relevance block.
 */
export const BUSINESS = {
  name: "Handwerk Niendorf",
  streetAddress: "Margaretha-Rothe-Weg 11",
  postalCode: "22455",
  addressLocality: "Hamburg",
  /** Festnetz Hamburg (Vorwahl 040), internationales Format für Schema & Anzeige. */
  phone: "+49 40 57201166",
  /** Mail-Domain ist handwerk-niendorf.de (ohne „er"), Website handwerker-niendorf.de. */
  email: "info@handwerk-niendorf.de",
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

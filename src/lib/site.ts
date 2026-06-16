/** Canonical production origin. Used for metadataBase, sitemap and robots. */
export const SITE_URL = "https://handwerker-niendorf.de";

/**
 * Real NAP for the business — the single source for the LocalBusiness schema,
 * the Impressum and the on-page local-relevance block. (Email is still a
 * placeholder, so it's intentionally omitted here rather than faked.)
 */
export const BUSINESS = {
  name: "Handwerk Niendorf",
  streetAddress: "Margaretha-Rothe-Weg 11",
  postalCode: "22455",
  addressLocality: "Hamburg",
  /** Festnetz Hamburg (Vorwahl 040), internationales Format für Schema & Anzeige. */
  phone: "+49 40 57201166",
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

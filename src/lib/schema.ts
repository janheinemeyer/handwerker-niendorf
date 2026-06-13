import { SITE_URL } from "./site";
import { RATGEBER_PAGES } from "./ratgeber";

/**
 * Organization JSON-LD for the site root — the entity signal AI search engines
 * and Google's Knowledge Graph use to understand who/what/where we are.
 *
 * `knowsAbout` is derived from the Ratgeber catalog, so the listed areas of
 * expertise grow automatically as new SEO pages are registered in
 * RATGEBER_PAGES — no need to touch this file.
 *
 * Intentionally `Organization`, not `LocalBusiness`: the latter needs a real
 * postal address/phone, and placeholder NAP data is worse than none. Promote to
 * `LocalBusiness` once real contact data exists.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Handwerk Niendorf",
    url: SITE_URL,
    description:
      "Vermittlung von geprüften Handwerksbetrieben in Hamburg-Niendorf und Umgebung – kostenlos und unverbindlich.",
    areaServed: { "@type": "City", name: "Hamburg" },
    knowsAbout: [
      "Handwerker-Vermittlung",
      ...RATGEBER_PAGES.map((p) => p.topic),
    ],
  };
}

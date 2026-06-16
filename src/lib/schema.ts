import { SITE_URL, BUSINESS } from "./site";
import { RATGEBER_PAGES } from "./ratgeber";

/**
 * LocalBusiness JSON-LD for the site root — the entity signal AI search engines
 * and Google's Knowledge Graph use to understand who/what/where we are.
 *
 * `knowsAbout` is derived from the Ratgeber catalog, so the listed areas of
 * expertise grow automatically as new SEO pages are registered in
 * RATGEBER_PAGES — no need to touch this file.
 *
 * `LocalBusiness` (was `Organization`) now that a real postal address and phone
 * exist. `areaServed` names Niendorf and the neighbouring Stadtteile to anchor
 * local intent ("… Niendorf", "in der Nähe").
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description:
      "Vermittlung von geprüften Handwerksbetrieben in Hamburg-Niendorf und Umgebung – kostenlos und unverbindlich.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: "Hamburg",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: BUSINESS.district },
      ...BUSINESS.neighboringDistricts.map((name) => ({
        "@type": "AdministrativeArea" as const,
        name,
      })),
      { "@type": "City", name: "Hamburg" },
    ],
    knowsAbout: [
      "Handwerker-Vermittlung",
      ...RATGEBER_PAGES.map((p) => p.topic),
    ],
  };
}

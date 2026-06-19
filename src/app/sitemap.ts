import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { RATGEBER_PAGES } from "@/lib/ratgeber";

// Static public routes with their last meaningful change date (ISO). The
// Ratgeber detail pages come from the catalog and carry their own `updated`
// date, so a new SEO page added to RATGEBER_PAGES appears here automatically.
// /admin is intentionally excluded (gated, noindex). The Bebauungsplan-
// Checkliste is a utility sub-page (not a catalog article), so it's listed here.
const staticPaths: { path: string; updated: string }[] = [
  { path: "", updated: "2026-06-19" },
  { path: "/ratgeber", updated: "2026-06-19" },
  { path: "/ratgeber/carport-bebauungsplan/checkliste", updated: "2026-06-15" },
  { path: "/impressum", updated: "2026-06-16" },
  { path: "/datenschutz", updated: "2026-06-16" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...staticPaths,
    ...RATGEBER_PAGES.map((p) => ({ path: p.href, updated: p.updated })),
  ];
  return entries.map(({ path, updated }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(updated),
  }));
}

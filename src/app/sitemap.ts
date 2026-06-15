import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { RATGEBER_PAGES } from "@/lib/ratgeber";

// Static public routes. The Ratgeber detail pages come from the catalog, so a
// new SEO page added to RATGEBER_PAGES appears here automatically. /admin is
// intentionally excluded (gated, noindex). The Bebauungsplan-Checkliste is a
// utility sub-page (not a catalog article), so it's listed explicitly.
const staticPaths = [
  "",
  "/ratgeber",
  "/ratgeber/carport-bebauungsplan/checkliste",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...staticPaths, ...RATGEBER_PAGES.map((p) => p.href)];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Public, indexable routes. /admin is intentionally excluded (gated, noindex).
const paths = [
  "",
  "/ratgeber",
  "/ratgeber/carport-bauen-lassen-kosten",
  "/ratgeber/terrassenueberdachung-kosten",
  "/ratgeber/wallbox-installieren-kosten",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}

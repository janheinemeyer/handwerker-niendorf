import { RATGEBER_PAGES } from "@/lib/ratgeber";
import { BUSINESS } from "@/lib/site";

/**
 * "Region" — local-relevance block anchoring the page to Hamburg-Niendorf and
 * the neighbouring Stadtteile. Rendered by `RatgeberArticle` for carport-cluster
 * pages only (where local service intent — "Carport Niendorf", "in der Nähe" —
 * is realistically winnable against national aggregators). Driven by the catalog
 * `cluster`, so it stays in one place rather than copied per page.
 *
 * The named districts mirror `areaServed` in the LocalBusiness schema, so the
 * on-page signal and the structured data agree.
 */
export function RegionNote({ currentHref }: { currentHref?: string }) {
  const current = RATGEBER_PAGES.find((p) => p.href === currentHref);
  if (!current || current.cluster !== "carport") return null;

  const districts = [
    ...BUSINESS.neighboringDistricts.slice(0, -1),
    `und ${BUSINESS.neighboringDistricts.at(-1)}`,
  ].join(", ");

  return (
    <aside
      aria-label="Einzugsgebiet"
      className="mt-12 border border-line bg-paper-2 p-6 sm:p-7"
    >
      <p className="label text-accent">Region</p>
      <p className="mt-3 font-display text-lg font-bold leading-tight">
        Carport-Vermittlung in {BUSINESS.district} und Umgebung
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {BUSINESS.name} sitzt am {BUSINESS.streetAddress} in{" "}
        {BUSINESS.postalCode} {BUSINESS.district} und vermittelt geprüfte
        Carport-Betriebe in Niendorf und den angrenzenden Stadtteilen {districts}{" "}
        – im Bezirk Eimsbüttel und darüber hinaus in ganz Hamburg.
      </p>
    </aside>
  );
}

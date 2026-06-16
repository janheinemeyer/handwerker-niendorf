import { RATGEBER_PAGES, type Cluster } from "@/lib/ratgeber";
import { BUSINESS } from "@/lib/site";

/**
 * Per-cluster wording for the local-relevance block. Only clusters listed here
 * render a `RegionNote` — the ones where local service intent ("… Niendorf",
 * "in der Nähe") is realistically winnable against national aggregators.
 * `vermittlung` fills the heading, `betriebe` the sentence.
 */
const REGION_COPY: Partial<Record<Cluster, { vermittlung: string; betriebe: string }>> = {
  carport: { vermittlung: "Carport-Vermittlung", betriebe: "Carport-Betriebe" },
  smarthome: {
    vermittlung: "Smart-Home- & KNX-Vermittlung",
    betriebe: "Smart-Home- und KNX-Fachbetriebe",
  },
};

/**
 * "Region" — local-relevance block anchoring the page to Hamburg-Niendorf and
 * the neighbouring Stadtteile. Rendered by `RatgeberArticle` for the clusters in
 * `REGION_COPY`, driven by the catalog so it stays in one place rather than
 * copied per page. The named districts mirror `areaServed` in the LocalBusiness
 * schema, so the on-page signal and the structured data agree.
 */
export function RegionNote({ currentHref }: { currentHref?: string }) {
  const current = RATGEBER_PAGES.find((p) => p.href === currentHref);
  const copy = current && REGION_COPY[current.cluster];
  if (!copy) return null;

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
        {copy.vermittlung} in {BUSINESS.district} und Umgebung
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {BUSINESS.name} sitzt am {BUSINESS.streetAddress} in{" "}
        {BUSINESS.postalCode} {BUSINESS.district} und vermittelt geprüfte{" "}
        {copy.betriebe} in Niendorf und den angrenzenden Stadtteilen {districts}{" "}
        – im Bezirk Eimsbüttel und darüber hinaus in ganz Hamburg.
      </p>
    </aside>
  );
}

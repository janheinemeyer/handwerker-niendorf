import Link from "next/link";
import { RATGEBER_PAGES } from "@/lib/ratgeber";

/**
 * "Auch interessant" — automatic cross-links to sibling Ratgeber pages.
 * Rendered by `RatgeberArticle`. Shows nothing unless the current page is
 * itself a catalog entry (so the /ratgeber index, which lists everything
 * already, stays clean).
 */
export function RelatedRatgeber({ currentHref }: { currentHref?: string }) {
  const isCatalogPage = RATGEBER_PAGES.some((p) => p.href === currentHref);
  const items = RATGEBER_PAGES.filter((p) => p.href !== currentHref);
  if (!isCatalogPage || items.length === 0) return null;

  return (
    <aside
      aria-label="Verwandte Ratgeber"
      className="mt-14 border-t border-line-strong pt-10"
    >
      <p className="label text-accent">Auch interessant</p>
      <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="group flex flex-col bg-paper p-6 transition-colors hover:bg-paper-2"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="font-display text-lg font-bold leading-tight">
                {it.title}
              </span>
              <span
                aria-hidden
                className="text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </span>
            <span className="mt-2 text-sm leading-relaxed text-ink-soft">
              {it.blurb}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

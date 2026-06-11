export type Crumb = { name: string; href: string };

/**
 * Visible breadcrumb + matching BreadcrumbList JSON-LD from one source.
 * The last item is treated as the current page (highlighted, not a link).
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="label flex flex-wrap items-center gap-2 text-ink-soft"
      >
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <span key={c.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-accent">{c.name}</span>
              ) : (
                <a href={c.href} className="hover:text-accent">
                  {c.name}
                </a>
              )}
              {!last && <span className="text-line-strong">/</span>}
            </span>
          );
        })}
      </nav>
    </>
  );
}

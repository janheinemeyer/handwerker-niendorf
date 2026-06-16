import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb, type Crumb } from "./breadcrumb";
import { RelatedRatgeber } from "./related";
import { RegionNote } from "./region-note";

/**
 * Page shell for Ratgeber/SEO articles: header, breadcrumb (+ its JSON-LD),
 * H1, "Aktualisiert" date, and footer. A new page only needs metadata, a
 * `faqs` array, and its body — see the authoring guide in CLAUDE.md.
 */
export function RatgeberArticle({
  title,
  breadcrumb,
  updated,
  children,
}: {
  title: React.ReactNode;
  breadcrumb: Crumb[];
  updated?: string;
  children: React.ReactNode;
}) {
  // The current page is the last breadcrumb crumb; used to auto cross-link to
  // sibling Ratgeber pages (excluding this one).
  const currentHref = breadcrumb[breadcrumb.length - 1]?.href;

  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1 border-t border-line-strong">
        <article className="mx-auto max-w-[52rem] px-5 py-14 sm:px-8 sm:py-20">
          <Breadcrumb items={breadcrumb} />
          <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold uppercase leading-[0.98]">
            {title}
          </h1>
          {updated && (
            <p className="mt-4 text-sm text-ink-soft">Aktualisiert: {updated}</p>
          )}
          {children}
          <RegionNote currentHref={currentHref} />
          <RelatedRatgeber currentHref={currentHref} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

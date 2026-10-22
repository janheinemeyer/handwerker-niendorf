import { PREFERRED_SOURCE_URL } from "@/lib/site";

/**
 * "Google" — invites the reader to add the site as a Google preferred source,
 * so our pages surface more often in their Top Stories and get a "preferred"
 * badge in AI Overviews / AI Mode. Rendered by `RatgeberArticle` for every
 * Ratgeber page.
 */
export function PreferredSource() {
  return (
    <aside
      aria-label="Bevorzugte Quelle bei Google"
      className="mt-12 flex flex-col gap-4 border border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
    >
      <div>
        <p className="label text-accent">Google</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Unsere Ratgeber bei Google öfter sehen: Fügen Sie uns als bevorzugte
          Quelle hinzu.
        </p>
      </div>
      <a
        href={PREFERRED_SOURCE_URL}
        target="_blank"
        rel="noopener"
        className="label shrink-0 border border-line-strong px-4 py-3 text-center hover:border-accent hover:text-accent"
      >
        Als bevorzugte Quelle hinzufügen ↗
      </a>
    </aside>
  );
}

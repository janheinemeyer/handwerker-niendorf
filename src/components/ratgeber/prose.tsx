/*
  Shared prose primitives for Ratgeber/SEO pages.
  Keep headings as real <h2>/<h3> with ids so the in-page anchors and any
  table-of-contents stay stable.
*/

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 mb-4 scroll-mt-24 font-display text-2xl font-bold leading-tight sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 mb-2 font-display text-lg font-bold">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>;
}

/** Direct-answer summary box — featured-snippet / AI-answer bait. */
export function TlDr({
  label = "Kurz & knapp",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 border-l-4 border-accent bg-paper-2/50 p-6">
      <p className="label text-accent">{label}</p>
      <p className="mt-3 leading-relaxed">{children}</p>
    </div>
  );
}

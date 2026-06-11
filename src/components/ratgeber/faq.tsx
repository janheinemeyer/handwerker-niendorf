export type FaqItem = { q: string; a: string };

/**
 * Accordion FAQ + matching FAQPage JSON-LD from one `items` array, so the
 * structured data can never drift from what's rendered. Drop this anywhere in
 * a Ratgeber page body.
 */
export function Faq({
  items,
  heading = "Häufige Fragen",
  id = "faq",
}: {
  items: FaqItem[];
  heading?: string;
  id?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2
        id={id}
        className="mt-14 mb-4 scroll-mt-24 font-display text-2xl font-bold leading-tight sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {items.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold">
              {f.q}
              <span className="text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

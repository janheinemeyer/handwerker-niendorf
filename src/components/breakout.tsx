/**
 * Lets a block break out wider than the article's prose column (`max-w-3xl`) on
 * large screens, centered on the viewport, while the surrounding text stays
 * narrow. Used to give the interactive calculators more room.
 *
 * Below `lg` it is a no-op (the block stays within the column). At `lg`+ the
 * width is capped to `min(64rem, 100vw - 4rem)` and centered on the viewport via
 * `left-1/2` + `-translate-x-1/2` (which references the viewport center because
 * the article column is itself centered), so it never causes horizontal scroll.
 */
export function Breakout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:relative lg:left-1/2 lg:w-[min(64rem,100vw-4rem)] lg:-translate-x-1/2">
      {children}
    </div>
  );
}

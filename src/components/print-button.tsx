"use client";

/**
 * Triggers the browser's native print dialog (which includes "Save as PDF").
 * A thin Client Component so printable pages can stay Server Components.
 */
export function PrintButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      {children}
    </button>
  );
}

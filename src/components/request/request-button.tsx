"use client";

import { useRequest } from "@/lib/request-context";
import { sendUsageEvent } from "@/lib/use-usage-tracking";
import type { RequestPrefill } from "./types";

/**
 * Button that opens the request modal pre-filled with `context`. Records an
 * anonymous `cta` usage event for the context's `source`.
 */
export function RequestButton({
  context,
  className,
  children,
}: {
  context: RequestPrefill;
  className?: string;
  children: React.ReactNode;
}) {
  const { openRequest } = useRequest();
  const onClick = () => {
    // Deliberately without config/estimate: the request form stores those
    // next to the contact data, and the event must not be matchable to it.
    if (context.source) sendUsageEvent({ source: context.source, event: "cta" });
    openRequest(context);
  };
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

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
    if (context.source) {
      sendUsageEvent({
        source: context.source,
        event: "cta",
        estimate: context.estimate,
        config: context.details,
      });
    }
    openRequest(context);
  };
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

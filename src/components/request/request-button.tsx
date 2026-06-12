"use client";

import { useRequest } from "@/lib/request-context";
import type { RequestPrefill } from "./types";

/** Button that opens the request modal pre-filled with `context`. */
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
  return (
    <button type="button" onClick={() => openRequest(context)} className={className}>
      {children}
    </button>
  );
}

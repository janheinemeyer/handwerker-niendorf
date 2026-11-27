"use client";

import { useEffect, useRef } from "react";
import type { RequestPrefill } from "@/components/request/types";

/**
 * Client side of the anonymous usage tracking (see src/lib/usage-events.ts).
 * No cookies, no storage, no ids: each event is a fire-and-forget beacon.
 */

type UsageEventPayload = {
  source: string;
  event: "view" | "start" | "result" | "cta";
  estimate?: string;
  config?: Record<string, unknown>;
};

export function sendUsageEvent(payload: UsageEventPayload) {
  if (typeof window === "undefined") return;
  const body = JSON.stringify({ ...payload, page: window.location.pathname });
  try {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon?.("/api/track", blob)) return;
  } catch {
    // fall through to fetch
  }
  fetch("/api/track", {
    method: "POST",
    body,
    keepalive: true,
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});
}

/** Config snapshot of a tool: its structured details, else its summary. */
function configOf(request: RequestPrefill): Record<string, unknown> | undefined {
  if (request.details) return request.details;
  return request.summary ? { summary: request.summary } : undefined;
}

/**
 * Tracks one calculator/tool: `view` when it scrolls into view, `start` on the
 * first changed input, `result` (with the chosen config) when the visitor
 * leaves after using it. Pass the same `request` object the tool hands to its
 * RequestButton; attach the returned ref to the tool's root element. The `cta`
 * event is sent by RequestButton itself.
 */
export function useCalculatorTracking(request: RequestPrefill) {
  const ref = useRef<HTMLDivElement>(null);
  const latest = useRef(request);
  const started = useRef(false);
  const initialKey = useRef<string | null>(null);

  const source = request.source;
  const configKey = JSON.stringify(configOf(request) ?? null);

  useEffect(() => {
    latest.current = request;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || !source) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          sendUsageEvent({ source, event: "view" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [source]);

  useEffect(() => {
    if (initialKey.current === null) {
      initialKey.current = configKey;
      return;
    }
    if (!started.current && source && configKey !== initialKey.current) {
      started.current = true;
      sendUsageEvent({ source, event: "start" });
    }
  }, [configKey, source]);

  useEffect(() => {
    let sent = false;
    const sendResult = () => {
      const current = latest.current;
      if (sent || !started.current || !current.source) return;
      sent = true;
      sendUsageEvent({
        source: current.source,
        event: "result",
        estimate: current.estimate,
        config: configOf(current),
      });
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") sendResult();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", sendResult);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", sendResult);
      sendResult(); // client-side navigation unmounts the tool
    };
  }, []);

  return ref;
}

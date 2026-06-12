"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { RequestForm } from "@/components/request/request-form";
import type { RequestPrefill } from "@/components/request/types";

type RequestCtx = {
  openRequest: (prefill: RequestPrefill) => void;
  close: () => void;
};

const Ctx = createContext<RequestCtx | null>(null);

export function useRequest() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRequest must be used within a RequestProvider");
  return ctx;
}

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

function RequestDialog({
  open,
  prefill,
  onClose,
}: {
  open: boolean;
  prefill: RequestPrefill;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
      );

    const t = window.setTimeout(() => focusables()[0]?.focus(), 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const f = focusables();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-dialog-title"
        className="relative my-8 w-full max-w-xl border border-line-strong bg-paper p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-lg text-ink-soft transition-colors hover:text-accent"
        >
          ✕
        </button>
        <p className="label text-accent">Anfrage</p>
        <h2
          id="request-dialog-title"
          className="mt-2 font-display text-2xl font-bold"
        >
          Angebote anfragen
        </h2>
        <p className="mt-2 max-w-md text-sm text-ink-soft">
          Kostenlos &amp; unverbindlich. Wir vermitteln Ihnen passende, geprüfte
          Betriebe aus Hamburg und Umgebung.
        </p>
        <div className="mt-6">
          <RequestForm prefill={prefill} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<RequestPrefill>({});

  const openRequest = useCallback((p: RequestPrefill) => {
    setPrefill(p);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <Ctx.Provider value={{ openRequest, close }}>
      {children}
      <RequestDialog open={open} prefill={prefill} onClose={close} />
    </Ctx.Provider>
  );
}

"use client";

import { useRef } from "react";

/*
  Shared, accessible building blocks for the cost calculators.
  Segmented controls implement the radiogroup keyboard pattern (roving tabIndex
  + arrow keys); Toggle is an accessible checkbox button. Number formatting is
  rounded to €100 for consistent, defensible Richtwerte.
*/

const nf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
export const round100 = (n: number) => Math.round(n / 100) * 100;
export const eur = (n: number) => `${nf.format(round100(n))} €`;

export function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  const groupRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const next = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[
      e.key
    ];
    if (!next) return;
    e.preventDefault();
    const idx = options.findIndex((o) => o.value === value);
    const target = (idx + next + options.length) % options.length;
    onChange(options[target].value);
    groupRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="radio"]')
      [target]?.focus();
  };

  return (
    <fieldset>
      <legend className="label text-ink-soft">{label}</legend>
      <div
        ref={groupRef}
        className="mt-2 flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={label}
        onKeyDown={onKeyDown}
      >
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onChange(o.value)}
              className={`border px-3.5 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-accent bg-accent text-paper"
                  : "border-line bg-paper text-ink-soft hover:border-ink/40"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2.5 border px-3.5 py-2 text-left text-sm transition-colors ${
        checked
          ? "border-accent bg-accent/10 text-ink"
          : "border-line bg-paper text-ink-soft hover:border-ink/40"
      }`}
    >
      <span
        aria-hidden
        className={`grid h-4 w-4 shrink-0 place-items-center border text-[0.7rem] font-bold ${
          checked
            ? "border-accent bg-accent text-paper"
            : "border-line-strong text-transparent"
        }`}
      >
        ✓
      </span>
      <span>
        {label}
        {hint && <span className="ml-1 text-xs text-ink-soft/60">{hint}</span>}
      </span>
    </button>
  );
}

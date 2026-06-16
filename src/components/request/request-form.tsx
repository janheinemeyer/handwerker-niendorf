"use client";

import Link from "next/link";
import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";
import type { RequestPrefill } from "./types";

const initial: ContactState = { ok: false, message: "" };

const serviceOptions = [
  "Carport",
  "Terrassenüberdachung",
  "Wintergarten",
  "Pflasterarbeiten",
  "Wallbox / Ladestation",
  "Smart Home / KNX",
  "Renovierung & Modernisierung",
  "Maler & Lackierer",
  "Trockenbau",
  "Fliesen & Bad",
  "Montage & Möbelaufbau",
  "Reparatur",
  "Etwas anderes",
];

const zeitraumOptions = [
  "So schnell wie möglich",
  "In 1–3 Monaten",
  "In 3–6 Monaten",
  "Erst einmal nur informieren",
];

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs font-medium text-accent">{msg}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Wird gesendet…" : "Anfrage absenden"}
      {!pending && (
        <span className="transition-transform group-hover:translate-x-1">→</span>
      )}
    </button>
  );
}

const inputClass =
  "w-full border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent";

export function RequestForm({
  prefill = {},
  onClose,
}: {
  prefill?: RequestPrefill;
  onClose?: () => void;
}) {
  const [state, formAction] = useActionState(submitContact, initial);
  // Unique per form instance so the always-mounted homepage form and the modal
  // form don't share DOM ids (which would let a modal label focus a background
  // field and escape the focus trap).
  const uid = useId();

  if (state.ok) {
    return (
      <div className="flex min-h-[16rem] flex-col items-start justify-center border border-line-strong bg-paper-2/50 p-8">
        <span className="grid h-12 w-12 place-items-center bg-accent font-display text-2xl text-paper">
          ✓
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">Eingegangen.</h3>
        <p className="mt-3 max-w-sm text-ink-soft">{state.message}</p>
        {onClose && (
          // autoFocus keeps focus inside the dialog after the submit button
          // unmounts, preserving the focus trap.
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="mt-6 border-b-2 border-ink/30 py-1 font-sans text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Schließen
          </button>
        )}
      </div>
    );
  }

  const messagePrefill = prefill.summary
    ? `${prefill.service ? prefill.service + ": " : ""}${prefill.summary}${
        prefill.estimate ? `\nGeschätzte Kosten: ${prefill.estimate}` : ""
      }`
    : undefined;

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Firma
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Context carried from the CTA / calculator */}
      {prefill.service && (
        <input type="hidden" name="service" value={prefill.service} />
      )}
      {prefill.source && (
        <input type="hidden" name="source" value={prefill.source} />
      )}
      {prefill.estimate && (
        <input type="hidden" name="estimate" value={prefill.estimate} />
      )}
      {prefill.details && (
        <input
          type="hidden"
          name="details"
          value={JSON.stringify(prefill.details)}
        />
      )}

      {prefill.summary && (
        <div className="border border-line bg-paper-2/50 p-4">
          <p className="label text-accent">Ihre Auswahl</p>
          <p className="mt-2 text-sm leading-relaxed">
            {prefill.service && <strong>{prefill.service}: </strong>}
            {prefill.summary}
          </p>
          {prefill.estimate && (
            <p className="mt-1 text-sm">
              Geschätzte Kosten: <strong>{prefill.estimate}</strong>
            </p>
          )}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className="label mb-2 block text-ink-soft">
            Name *
          </label>
          <input id={`${uid}-name`} name="name" autoComplete="name" className={inputClass} />
          <FieldError msg={state.errors?.name} />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="label mb-2 block text-ink-soft">
            Telefon
          </label>
          <input id={`${uid}-phone`} name="phone" autoComplete="tel" className={inputClass} />
          <FieldError msg={state.errors?.phone} />
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-email`} className="label mb-2 block text-ink-soft">
          E-Mail *
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
        />
        <FieldError msg={state.errors?.email} />
      </div>

      {!prefill.service && (
        <div>
          <label htmlFor={`${uid}-service`} className="label mb-2 block text-ink-soft">
            Leistung
          </label>
          <select
            id={`${uid}-service`}
            name="service"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen…
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-plz`} className="label mb-2 block text-ink-soft">
            PLZ *
          </label>
          <input
            id={`${uid}-plz`}
            name="plz"
            inputMode="numeric"
            maxLength={5}
            autoComplete="postal-code"
            className={inputClass}
          />
          <FieldError msg={state.errors?.plz} />
        </div>
        <div>
          <label htmlFor={`${uid}-ort`} className="label mb-2 block text-ink-soft">
            Ort
          </label>
          <input
            id={`${uid}-ort`}
            name="ort"
            autoComplete="address-level2"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-zeitraum`} className="label mb-2 block text-ink-soft">
          Zeitraum
        </label>
        <select id={`${uid}-zeitraum`} name="zeitraum" className={inputClass} defaultValue="">
          <option value="">Bitte wählen…</option>
          {zeitraumOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className="label mb-2 block text-ink-soft">
          Ihr Vorhaben / Anmerkungen
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          defaultValue={messagePrefill}
          className={`${inputClass} resize-y`}
          placeholder="Was ist zu tun? Wo? Bis wann?"
        />
        <FieldError msg={state.errors?.message} />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          name="consent"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <span>
          Ich bin damit einverstanden, dass meine Angaben gespeichert und zur
          Bearbeitung meiner Anfrage an passende Dienstleister weitergegeben
          werden. Es gilt die{" "}
          <Link
            href="/datenschutz"
            target="_blank"
            className="text-accent underline-offset-2 hover:underline"
          >
            Datenschutzerklärung
          </Link>
          . *
        </span>
      </label>
      <FieldError msg={state.errors?.consent} />

      {!state.ok && state.message && (
        <p className="border-l-2 border-accent bg-accent/10 px-4 py-3 text-sm font-medium">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

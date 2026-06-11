"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";

const initial: ContactState = { ok: false, message: "" };

const serviceOptions = [
  "Renovierung & Modernisierung",
  "Maler & Lackierer",
  "Trockenbau",
  "Fliesen & Bad",
  "Montage & Möbelaufbau",
  "Reparatur",
  "Etwas anderes",
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

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="flex h-full min-h-[20rem] flex-col items-start justify-center border border-line-strong bg-paper-2/50 p-8">
        <span className="grid h-12 w-12 place-items-center bg-accent font-display text-2xl text-paper">
          ✓
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">Eingegangen.</h3>
        <p className="mt-3 max-w-sm text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Firma
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label mb-2 block text-ink-soft">
            Name *
          </label>
          <input id="name" name="name" autoComplete="name" className={inputClass} />
          <FieldError msg={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="phone" className="label mb-2 block text-ink-soft">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            className={inputClass}
          />
          <FieldError msg={state.errors?.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="label mb-2 block text-ink-soft">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
        />
        <FieldError msg={state.errors?.email} />
      </div>

      <div>
        <label htmlFor="service" className="label mb-2 block text-ink-soft">
          Leistung
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
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

      <div>
        <label htmlFor="message" className="label mb-2 block text-ink-soft">
          Ihr Vorhaben *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
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
          Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung der
          Anfrage einverstanden. *
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

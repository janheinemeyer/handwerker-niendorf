"use client";

import { useActionState } from "react";
import { login } from "../actions";
import type { LoginState } from "../types";

const initial: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction] = useActionState(login, initial);

  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-16">
      <form
        action={formAction}
        className="w-full max-w-sm border border-line-strong bg-paper p-8"
      >
        <p className="label text-accent">Admin</p>
        <h1 className="mt-2 font-display text-2xl font-bold">Anmelden</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Zugang zu den eingegangenen Anfragen.
        </p>

        <label
          htmlFor="password"
          className="label mt-7 mb-2 block text-ink-soft"
        >
          Passwort
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          className="w-full border border-line-strong bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
        {state.error && (
          <p className="mt-2 text-xs font-medium text-accent">{state.error}</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-ink"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
}

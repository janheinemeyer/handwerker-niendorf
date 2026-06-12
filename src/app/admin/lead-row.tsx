"use client";

import { useState, useTransition } from "react";
import { updateLeadStatus } from "./actions";
import { STATUS_LABEL, type Lead, type LeadStatus } from "./types";

const STATUSES: LeadStatus[] = ["new", "in_progress", "done"];
const COLSPAN = 8;

export function LeadRow({ lead, created }: { lead: Lead; created: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<LeadStatus>(
    STATUSES.includes(lead.status as LeadStatus)
      ? (lead.status as LeadStatus)
      : "new",
  );
  const [failed, setFailed] = useState(false);
  const [pending, startTransition] = useTransition();

  const onStatusChange = (next: LeadStatus) => {
    const previous = status;
    setStatus(next);
    setFailed(false);
    startTransition(async () => {
      const res = await updateLeadStatus(lead.id, next);
      if (!res.ok) {
        setStatus(previous); // roll back the optimistic change
        setFailed(true);
      }
    });
  };

  const hasDetails = lead.details && Object.keys(lead.details).length > 0;
  const expandable = !!lead.message || hasDetails;

  return (
    <>
      <tr className="border-t border-line align-top">
        <td className="whitespace-nowrap px-3 py-3 text-ink-soft">{created}</td>
        <td className="px-3 py-3 font-medium">{lead.name}</td>
        <td className="px-3 py-3">
          <a href={`mailto:${lead.email}`} className="hover:text-accent">
            {lead.email}
          </a>
          {lead.phone && (
            <div className="text-ink-soft">
              <a href={`tel:${lead.phone}`} className="hover:text-accent">
                {lead.phone}
              </a>
            </div>
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-3 text-ink-soft">
          {[lead.plz, lead.ort].filter(Boolean).join(" ") || "—"}
        </td>
        <td className="px-3 py-3">
          {lead.service ?? "—"}
          {lead.zeitraum && (
            <div className="text-xs text-ink-soft">{lead.zeitraum}</div>
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-3">
          {lead.estimate ?? "—"}
          {lead.source && (
            <div className="text-xs text-ink-soft">{lead.source}</div>
          )}
        </td>
        <td className="px-3 py-3">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value as LeadStatus)}
            disabled={pending}
            aria-label="Status"
            className="border border-line bg-paper px-2 py-1 text-sm outline-none focus:border-accent disabled:opacity-50"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]}
              </option>
            ))}
          </select>
          {failed && (
            <span className="ml-2 text-xs font-medium text-accent">
              nicht gespeichert
            </span>
          )}
        </td>
        <td className="px-3 py-3 text-right">
          {expandable && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="label text-accent transition-colors hover:text-ink"
            >
              {open ? "Weniger" : "Details"}
            </button>
          )}
        </td>
      </tr>

      {open && expandable && (
        <tr className="border-t border-line bg-paper-2/40">
          <td colSpan={COLSPAN} className="px-3 py-4">
            {lead.message && (
              <div className="mb-4">
                <p className="label text-ink-soft">Nachricht</p>
                <p className="mt-1 whitespace-pre-wrap text-sm">{lead.message}</p>
              </div>
            )}
            {hasDetails && (
              <div>
                <p className="label text-ink-soft">Konfiguration</p>
                <pre className="mt-1 overflow-x-auto border border-line bg-paper p-3 text-xs text-ink-soft">
                  {JSON.stringify(lead.details, null, 2)}
                </pre>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

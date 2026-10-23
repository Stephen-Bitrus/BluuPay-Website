"use client";

import { useState, type FormEvent } from "react";
import { btnPrimary } from "@/lib/ui";

type Kind = "demo" | "agent";

const copy = {
  demo: {
    title: "Book a demo",
    submit: "Request a demo",
    success: "Request received. We will reply from hello@bluupay.co.",
  },
  agent: {
    title: "Apply to be an agent",
    submit: "Send application",
    success: "Application received. We will reply from hello@bluupay.co.",
  },
} as const;

export function LeadForm({ kind, verticals }: { kind: Kind; verticals?: string[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data }),
      });
      const body = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !body.ok) {
        setStatus("error");
        setMessage(body.error || "We could not send that. Email hello@bluupay.co.");
        return;
      }
      setStatus("success");
      setMessage(copy[kind].success);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("We could not send that. Email hello@bluupay.co.");
    }
  }

  const field =
    "rounded-xl border border-line bg-paper px-3 py-3 text-base font-normal outline-none transition focus:border-blue focus:bg-white focus:ring-4 focus:ring-blue/10";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-[1.75rem] border border-line bg-white p-5 shadow-[0_24px_60px_-36px_rgba(16,20,40,0.75)] sm:p-8" noValidate={false}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          {kind === "demo" ? "Demo" : "Agents"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{copy[kind].title}</h2>
        <p className="mt-2 text-sm text-muted">
          Required fields are marked with <span className="text-danger">*</span>.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Name <span className="text-danger">*</span>
          <input required name="name" autoComplete="name" maxLength={120} className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Business name <span className="text-danger">*</span>
          <input required name="business" autoComplete="organization" maxLength={160} className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Phone <span className="text-danger">*</span>
          <input required name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email <span className="text-danger">*</span>
          <input required name="email" type="email" autoComplete="email" maxLength={160} className={field} />
        </label>
      </div>
      {kind === "demo" && verticals ? (
        <label className="grid gap-1.5 text-sm font-medium">
          Kind of business <span className="text-danger">*</span>
          <select name="vertical" required className={field} defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {verticals.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <label className="grid gap-1.5 text-sm font-medium">
          City <span className="text-danger">*</span>
          <input required name="city" autoComplete="address-level2" maxLength={80} className={field} />
        </label>
      )}
      <label className="grid gap-1.5 text-sm font-medium">
        {kind === "demo" ? "What do you want to see?" : "How do you reach merchants today?"}
        <textarea name="note" rows={4} maxLength={1000} className={field} />
      </label>
      <label className="trap-field" aria-hidden="true">
        Website
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} px-5 py-3 disabled:translate-y-0 disabled:opacity-60`}>
        {status === "sending" ? "Sending…" : copy[kind].submit}
      </button>
      {message ? (
        <p
          role="status"
          className={
            status === "error"
              ? "rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-danger"
              : "rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

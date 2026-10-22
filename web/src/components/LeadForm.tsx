"use client";

import { useState, type FormEvent } from "react";

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

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-white p-5 sm:p-8" noValidate={false}>
      <h2 className="text-xl font-semibold">{copy[kind].title}</h2>
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input required name="name" autoComplete="name" maxLength={120} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Business name
        <input required name="business" autoComplete="organization" maxLength={160} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Phone
        <input required name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input required name="email" type="email" autoComplete="email" maxLength={160} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
      </label>
      {kind === "demo" && verticals ? (
        <label className="grid gap-1 text-sm font-medium">
          Kind of business
          <select name="vertical" required className="rounded-lg border border-line px-3 py-3 text-base font-normal" defaultValue="">
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
        <label className="grid gap-1 text-sm font-medium">
          City
          <input required name="city" autoComplete="address-level2" maxLength={80} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
        </label>
      )}
      <label className="grid gap-1 text-sm font-medium">
        {kind === "demo" ? "What do you want to see?" : "How do you reach merchants today?"}
        <textarea name="note" rows={4} maxLength={1000} className="rounded-lg border border-line px-3 py-3 text-base font-normal" />
      </label>
      <label className="absolute left-[-9999px]" aria-hidden="true">
        Website
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : copy[kind].submit}
      </button>
      {message ? (
        <p role="status" className={status === "error" ? "text-sm text-soon" : "text-sm text-ink"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

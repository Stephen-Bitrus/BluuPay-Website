import { Resend } from "resend";
import { site } from "@/content/site";
import { getSanityWriter } from "@/sanity/client";

type Payload = {
  kind?: string;
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  vertical?: string;
  city?: string;
  note?: string;
  company_website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Send a complete form." }, { status: 400 });
  }

  if (payload.company_website) {
    return Response.json({ ok: true });
  }

  const kind = payload.kind === "agent" ? "agent" : payload.kind === "demo" ? "demo" : "";
  const name = clean(payload.name, 120);
  const business = clean(payload.business, 160);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 160);
  const extra = kind === "agent" ? clean(payload.city, 80) : clean(payload.vertical, 80);
  const note = clean(payload.note, 1000);

  if (!kind || !name || !business || !phone || !emailPattern.test(email) || !extra) {
    return Response.json({ ok: false, error: "Check the required fields and try again." }, { status: 400 });
  }

  const writer = getSanityWriter();
  if (!writer) {
    return Response.json(
      { ok: false, error: `This form is not connected yet. Write to ${site.emails.hello}.` },
      { status: 503 },
    );
  }

  try {
    await writer.create({
      _type: "lead",
      kind,
      name,
      business,
      phone,
      email,
      vertical: kind === "demo" ? extra : "",
      city: kind === "agent" ? extra : "",
      note,
      receivedAt: new Date().toISOString(),
    });
  } catch {
    return Response.json(
      { ok: false, error: `We could not save that. Email ${site.emails.hello}.` },
      { status: 502 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const subject = kind === "agent" ? `Agent application from ${name}` : `Demo request from ${name}`;
    const text = [
      `Kind: ${kind}`,
      `Name: ${name}`,
      `Business: ${business}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      kind === "agent" ? `City: ${extra}` : `Vertical: ${extra}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM || "BluuPay <hello@bluupay.co>",
        to: process.env.LEAD_TO || site.emails.hello,
        replyTo: email,
        subject,
        text,
      });
    } catch {
      // The submission is already stored. A mail failure should not reject it.
    }
  }

  return Response.json({ ok: true });
}

function clean(value: string | undefined, max: number): string {
  return (value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

import { Mark } from "@/components/Icons";

export function CollectionScene() {
  return (
    <div className="grid gap-4">
      <svg viewBox="0 0 440 168" className="h-auto w-full text-blue" fill="none" aria-hidden="true">
        <rect x="16" y="28" width="92" height="120" rx="16" stroke="currentColor" strokeWidth="2.4" />
        <path d="M34 52h56M34 68h36" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M42 96v22M70 96v22M36 106h40M36 116h40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path className="flow-line" d="M120 88h78" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M186 80l12 8-12 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <g className="float-y">
          <rect x="214" y="36" width="96" height="96" rx="22" stroke="currentColor" strokeWidth="2.4" />
          <path d="M238 58v52M274 58v52M230 76h52M230 92h52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        <path className="flow-line" d="M322 88h28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M342 80l12 8-12 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <g className="float-y" style={{ animationDelay: "0.8s" }}>
          <rect x="364" y="48" width="60" height="72" rx="14" stroke="currentColor" strokeWidth="2.4" />
          <path d="M378 70h32M378 84h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M386 100l6 8 12-16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <div className="stagger grid gap-3 sm:grid-cols-2">
        <article className="rounded-3xl border border-line bg-white p-4">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-soft text-blue">
            <Mark name="transfer" />
          </span>
          <h2 className="mt-3 text-base font-semibold">Bank transfer</h2>
          <p className="mt-1 text-sm leading-6 text-muted">A virtual account. Palmpay settles the next business day. Nomba MFB settles instantly.</p>
        </article>
        <article className="rounded-3xl border border-night bg-night p-4 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
            <Mark name="wallet" />
          </span>
          <h2 className="mt-3 text-base font-semibold">Wallet payment</h2>
          <p className="mt-1 text-sm leading-6 text-white/75">Settles instantly with Palmpay and with Nomba MFB.</p>
        </article>
      </div>
    </div>
  );
}

export function RecordScene({ className = "w-full" }: { className?: string }) {
  const steps = [
    ["pos", "Sale", "The product and the price"],
    ["boxes", "Stock", "The shelf updates"],
    ["chart", "Profit", "After the fee"],
  ] as const;
  return (
    <div className={`rounded-[1.75rem] border border-line bg-white p-4 shadow-[0_30px_80px_-36px_rgba(8,12,40,0.45)] sm:p-6 ${className}`}>
      <svg viewBox="0 0 360 36" className="mb-2 h-8 w-full text-blue" fill="none" aria-hidden="true">
        <path className="flow-line" d="M40 18h280" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="18" r="6" fill="currentColor" />
        <circle cx="180" cy="18" r="6" fill="currentColor" />
        <circle cx="320" cy="18" r="6" fill="currentColor" />
      </svg>
      <ol className="stagger grid gap-3 sm:grid-cols-3">
        {steps.map(([name, title, body]) => (
          <li key={title} className="rounded-2xl bg-paper px-3 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue text-white">
              <Mark name={name} className="h-4 w-4" />
            </span>
            <p className="mt-2 text-sm font-semibold">{title}</p>
            <p className="text-sm leading-5 text-muted">{body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function EmptyShelf() {
  return (
    <svg viewBox="0 0 280 160" className="float-y h-36 w-56 text-blue" fill="none" aria-hidden="true">
      <path d="M24 36h232M24 78h232M24 120h232" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M48 36v84M232 36v84" stroke="currentColor" strokeWidth="2.4" />
      <rect x="70" y="44" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="150" y="86" width="48" height="26" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M124 96c8-14 28-14 36 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

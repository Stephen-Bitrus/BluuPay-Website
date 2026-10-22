const lines = [
  ["Sale", "Tied to the product that left the shelf"],
  ["Payment", "Transfer, card, USSD, wallet, or cash"],
  ["Stock", "Updated for that outlet"],
  ["Profit", "Calculated from your cost and the fee"],
] as const;

export function ProductStage() {
  return (
    <aside className="relative" aria-label="What a recorded sale contains">
      <div className="absolute -left-6 top-8 hidden w-40 rounded-2xl border border-white/15 bg-night px-4 py-3 text-white shadow-xl lg:block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">One record</p>
        <p className="mt-1 text-sm font-semibold leading-5">Sale, payment, stock, and profit stay together.</p>
      </div>
      <div className="relative overflow-hidden rounded-[1.75rem] bg-night p-3 text-white shadow-[0_30px_80px_-36px_rgba(8,12,40,0.85)] sm:p-4">
        <div className="rounded-[1.25rem] border border-white/10 bg-[#12183a]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">Sample sale</p>
              <p className="text-sm font-semibold">What BluuPay writes down</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">Recorded</span>
          </div>
          <ol className="grid gap-0 px-4">
            {lines.map(([title, body], index) => (
              <li key={title} className="flex gap-3 border-b border-white/10 py-3.5 last:border-b-0">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] font-semibold tabular-nums">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{title}</span>
                  <span className="mt-0.5 block text-sm leading-5 text-white/65">{body}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-white/65">
            Staff, invoices, customers, expenses, and tax stay on the same record.
          </p>
        </div>
      </div>
    </aside>
  );
}

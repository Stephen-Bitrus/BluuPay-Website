import type { Provider } from "@/content/site";

function Table({
  caption,
  rows,
}: {
  caption: string;
  rows: { channel: string; fee: string; note: string }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <caption className="mb-3 text-left text-base font-semibold text-ink">{caption}</caption>
        <thead>
          <tr className="border-b border-line text-muted">
            <th scope="col" className="py-3 pr-4 font-medium">Channel</th>
            <th scope="col" className="py-3 pr-4 font-medium">BluuPay fee</th>
            <th scope="col" className="py-3 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.channel} className="border-b border-line align-top last:border-b-0">
              <th scope="row" className="py-4 pr-4 font-medium">{row.channel}</th>
              <td className="py-4 pr-4 text-base font-semibold tabular-nums text-ink">{row.fee}</td>
              <td className="py-4 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeeTables({ providers }: { providers: Provider[] }) {
  return (
    <div className="grid gap-8">
      {providers.map((provider) => {
        const instant = provider.id === "nomba";
        return (
          <section
            key={provider.id}
            id={provider.id}
            className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_-40px_rgba(16,20,40,0.8)]"
            aria-labelledby={`${provider.id}-title`}
          >
            <div className={`flex flex-wrap items-end justify-between gap-4 px-5 py-7 sm:px-8 ${instant ? "bg-night text-white" : "bg-blue-soft"}`}>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${instant ? "text-white/65" : "text-blue"}`}>
                  Settlement: {provider.settlement}
                </p>
                <h2 id={`${provider.id}-title`} className="mt-2 text-3xl font-semibold tracking-tight">
                  {provider.name}
                </h2>
                <p className={`mt-3 max-w-3xl leading-7 ${instant ? "text-white/75" : "text-ink/75"}`}>{provider.summary}</p>
              </div>
            </div>
            <div className="px-5 pt-6 sm:px-8">
              <h3 className="text-base font-semibold">Collections</h3>
            </div>
            <div className="grid gap-3 px-5 py-4 sm:grid-cols-3 sm:px-8">
              {provider.collections.map((row) => (
                <article key={row.channel} className="rounded-2xl bg-paper p-4">
                  <h3 className="text-sm font-medium text-muted">{row.channel}</h3>
                  <p className="mt-2 text-xl font-semibold tabular-nums tracking-tight">{row.fee}</p>
                  <p className="mt-2 text-sm leading-5 text-muted">{row.note}</p>
                </article>
              ))}
            </div>
            <div className="px-5 pb-6 sm:px-8">
              <Table caption={`${provider.name} payouts`} rows={provider.payouts} />
            </div>
          </section>
        );
      })}
    </div>
  );
}

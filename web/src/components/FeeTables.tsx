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
            <th scope="col" className="py-2 pr-4 font-medium">Channel</th>
            <th scope="col" className="py-2 pr-4 font-medium">BluuPay fee</th>
            <th scope="col" className="py-2 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.channel} className="border-b border-line align-top">
              <th scope="row" className="py-3 pr-4 font-medium">{row.channel}</th>
              <td className="py-3 pr-4 tabular-nums">{row.fee}</td>
              <td className="py-3 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeeTables({ providers }: { providers: Provider[] }) {
  return (
    <div className="grid gap-10">
      {providers.map((provider) => (
        <section key={provider.id} id={provider.id} className="rounded-2xl border border-line bg-white p-5 sm:p-8" aria-labelledby={`${provider.id}-title`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">Settlement: {provider.settlement}</p>
          <h2 id={`${provider.id}-title`} className="mt-2 text-2xl font-semibold tracking-tight">{provider.name}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">{provider.summary}</p>
          <div className="mt-6 grid gap-8">
            <Table caption={`${provider.name} collections`} rows={provider.collections} />
            <Table caption={`${provider.name} payouts`} rows={provider.payouts} />
          </div>
        </section>
      ))}
    </div>
  );
}

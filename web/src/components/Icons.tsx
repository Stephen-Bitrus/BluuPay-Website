import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Glyph({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const marks: Record<string, ReactNode> = {
  phone: (
    <>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M11 17.5h2" />
    </>
  ),
  pos: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M9 16v4M15 16v4" />
    </>
  ),
  transfer: (
    <>
      <path d="M7 8h11M14 5l4 3-4 3" />
      <path d="M17 16H6M10 13l-4 3 4 3" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  ussd: (
    <>
      <path d="M9 4v16M15 4v16M4 9h16M4 15h16" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  naira: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M9 8v8M15 8v8M8 11h8M8 14h8" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
    </>
  ),
  bolt: <path d="M13 2.5 5.5 13H12l-1 8.5L19 11h-6.5L13 2.5z" />,
  shield: (
    <>
      <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.7-7 8.8-4.2-2.1-7-4.6-7-8.8V6.5L12 3.5z" />
      <path d="M9 12.2 11 14l4-4" />
    </>
  ),
  shop: (
    <>
      <path d="M4 10h16l-1.2 3.2H5.2L4 10z" />
      <path d="M6 10V7.5h12V10M8 13.2V20M16 13.2V20M8 20h8" />
    </>
  ),
  shelf: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <path d="M8 6v12M16 6v6" />
    </>
  ),
  stall: (
    <>
      <path d="M3 10h18l-1.5 3.5H4.5L3 10z" />
      <path d="M6 10V6h12v4M7 13.5V20M17 13.5V20" />
    </>
  ),
  crates: (
    <>
      <rect x="3" y="8" width="8" height="8" rx="1" />
      <rect x="13" y="8" width="8" height="8" rx="1" />
      <path d="M3 12h8M13 12h8" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5.5h8V7M3 12h18" />
    </>
  ),
  counters: (
    <>
      <path d="M4 16V9h6v7M12 16V6h8v10" />
      <path d="M3 16h18" />
    </>
  ),
  kiosk: (
    <>
      <path d="M5 20V8h14v12" />
      <path d="M5 13h14M9 8V5h6v3" />
    </>
  ),
  hanger: (
    <>
      <circle cx="12" cy="5" r="1.4" />
      <path d="M12 6.5 5 13h14L12 6.5zM8 13v5h8v-5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.5M12 18v2.5M3.5 12H6M18 12h2.5M6.2 6.2l1.8 1.8M16 16l1.8 1.8M17.8 6.2 16 8M8 16l-1.8 1.8" />
    </>
  ),
  pharmacy: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  bowl: (
    <>
      <path d="M5 10h14c0 4.5-3 8-7 8s-7-3.5-7-8z" />
      <path d="M8 10c.4-2.5 7.6-2.5 8 0" />
    </>
  ),
  basket: (
    <>
      <path d="M6 9h12l-1 11H7L6 9z" />
      <path d="M9 9 10.5 5h3L15 9" />
    </>
  ),
  boxes: (
    <>
      <path d="M3 8.5 12 4.5l9 4-9 4-9-4z" />
      <path d="M3 8.5V16l9 4 9-4V8.5M12 12.5V20" />
    </>
  ),
  invoice: (
    <>
      <path d="M7 3.5h7l4 4V20.5H7z" />
      <path d="M14 3.5v4h4M9.5 12h5M9.5 16h3.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16" cy="9" r="1.8" />
      <path d="M4.5 18.5c.5-2.6 2.3-4 4.6-4s4 1.4 4.6 4M14 14.8c1.3-.4 2.5-.4 3.6 0 1.4.5 2.3 1.6 2.6 3.7" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3.5h12v17l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2v-17z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  percent: (
    <>
      <circle cx="8" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
      <path d="M17 6.5 7 17.5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 19c.8-2.8 2.8-4.2 6-4.2s5.2 1.4 6 4.2" />
    </>
  ),
  outlets: (
    <>
      <path d="M3 18V9l4-2 4 2v9M13 18V8l4-2 4 2v10" />
      <path d="M3 18h18" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15v-3M12 15V8M16 15V6" />
    </>
  ),
  report: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
  chat: <path d="M5 16.5V6.5A2 2 0 0 1 7 4.5h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9L5 18.2z" />,
  terminal: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="2" />
      <path d="M8 16v2.5h8V16M7 9h4M7 12h6" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  offline: (
    <>
      <path d="M5 10.5a10 10 0 0 1 14 0" />
      <path d="M8 13.5a6 6 0 0 1 8 0" />
      <path d="M12 17.5h.01" />
      <path d="M4.5 4.5 19.5 19.5" />
    </>
  ),
  devices: (
    <>
      <rect x="3" y="7" width="11" height="8" rx="1.5" />
      <rect x="16" y="5" width="5" height="12" rx="1.2" />
    </>
  ),
  split: (
    <>
      <path d="M12 4v16" />
      <circle cx="7.5" cy="12" r="2.6" />
      <circle cx="16.5" cy="12" r="2.6" />
    </>
  ),
  quote: (
    <path
      fill="currentColor"
      stroke="none"
      d="M7.2 17c-2.1 0-3.7-1.6-3.7-3.9C3.5 9.4 5.7 7.2 8.4 7.2v2.1c-1.2.2-2 1.1-2 2.2 0 .4.1.7.3.9.4-.3.9-.4 1.4-.4 1.4 0 2.4 1 2.4 2.4S9.5 17 8.1 17H7.2zm9.2 0c-2.1 0-3.7-1.6-3.7-3.9 0-3.7 2.2-5.9 4.9-5.9v2.1c-1.2.2-2 1.1-2 2.2 0 .4.1.7.3.9.4-.3.9-.4 1.4-.4 1.4 0 2.4 1 2.4 2.4S17.7 17 16.3 17h-.9z"
    />
  ),
};

const aliases: Record<string, string> = {
  Nigeria: "pin",
  "No terminal": "phone",
  Palmpay: "calendar",
  "Nomba MFB": "bolt",
  Register: "phone",
  Verify: "shield",
  "Set up shop": "shop",
  Sell: "pos",
  "Get paid": "naira",
  "Run the shop": "boxes",
  Grow: "chart",
  "Manage and grow": "chart",
  "Point of sale": "pos",
  Payments: "transfer",
  "Mobile app": "phone",
  "Palmpay, next business day": "calendar",
  "Nomba MFB, instant": "bolt",
  "Absorb the fee, or pass it on": "split",
  Inventory: "boxes",
  Invoicing: "invoice",
  Customers: "people",
  Expenses: "receipt",
  Tax: "percent",
  "Staff roles": "badge",
  Outlets: "outlets",
  Insights: "chart",
  Reports: "report",
  "Business verticals": "shop",
  WhatsApp: "chat",
  "PoS terminals": "terminal",
  "Desktop app": "monitor",
  "Offline selling": "offline",
  "BluuPay hardware": "devices",
  Products: "shelf",
  Sales: "chart",
  "Retail shops": "shelf",
  "Market traders": "stall",
  Wholesalers: "crates",
  "Service providers": "briefcase",
  "Growing SMEs": "counters",
  "Kiosks and mini-marts": "kiosk",
  Boutiques: "hanger",
  "Spare-parts shops": "gear",
  Pharmacies: "pharmacy",
  "Food vendors": "bowl",
  Supermarkets: "basket",
  transfer: "transfer",
  card: "card",
  ussd: "ussd",
  wallet: "wallet",
  cash: "naira",
  bank: "card",
  instant: "bolt",
  nextday: "calendar",
  quote: "quote",
};

export function Mark({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const key = aliases[name] ?? "shop";
  return <Glyph className={className}>{marks[key]}</Glyph>;
}

export function channelMark(channel: string) {
  const value = channel.toLowerCase();
  if (value.includes("wallet")) return "wallet";
  if (value.includes("ussd")) return "ussd";
  if (value.includes("transfer")) return "transfer";
  if (value.includes("card") || value.includes("gateway")) return "card";
  if (value.includes("bank") || value.includes("payroll") || value.includes("palmpay")) return "bank";
  return "cash";
}

export function ShopScene({ className = "h-40 w-56" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} fill="none" aria-hidden="true">
      <path d="M18 92h128l-10 24H28L18 92z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M34 92V62h96v30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M50 62v30M74 62v30M98 62v30M122 62v30" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <path d="M46 116v40M118 116v40M46 156h72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="138" y="28" width="78" height="132" rx="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M154 52h46M154 68h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M162 96v28M186 96v28M156 106h36M156 118h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M168 148h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GroupIcon({ group, className = "h-5 w-5" }: { group: string; className?: string }) {
  return <Mark name={group} className={className} />;
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M5 12.5 9.2 16.7 19 7.5" />
    </Glyph>
  );
}

export function ClockIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <Glyph className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </Glyph>
  );
}

export function PayRail() {
  const items = [
    ["transfer", "Bank transfer"],
    ["wallet", "Wallet"],
  ] as const;
  return (
    <ul className="stagger flex flex-wrap gap-2" aria-label="Priced collection channels">
      {items.map(([name, label]) => (
        <li
          key={name}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink"
        >
          <Mark name={name} className="h-4 w-4 text-blue" />
          {label}
        </li>
      ))}
    </ul>
  );
}

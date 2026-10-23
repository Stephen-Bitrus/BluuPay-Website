export const site = {
  name: "BluuPay",
  tagline: "Sell Smarter. Grow Faster.",
  headline: "Know your numbers. Grow your business.",
  url: "https://bluupay.co",
  dashboardUrl: "https://dashboard.bluupay.co",
  emails: {
    hello: "hello@bluupay.co",
    legal: "legal@bluupay.co",
    privacy: "privacy@bluupay.co",
  },
  sameAs: ["https://www.linkedin.com/company/bluupay"],
  description:
    "BluuPay is the business record for Nigerian merchants. Every payment is tied to the product sold, then stock, invoices, customers, expenses, tax, and profit stay in one place across your outlets.",
} as const;

export const journey = [
  {
    step: "01",
    title: "Register",
    body: "Create the business on your phone. No terminal is required to begin.",
  },
  {
    step: "02",
    title: "Verify",
    body: "Confirm the business so you can take payment and pay your team.",
  },
  {
    step: "03",
    title: "Set up shop",
    body: "Add products and prices, staff roles, and each outlet you sell from.",
  },
  {
    step: "04",
    title: "Sell",
    body: "Take the sale on the point of sale or in the mobile app, in the shop.",
  },
  {
    step: "05",
    title: "Get paid",
    body: "Settle next business day with Palmpay, or instantly with Nomba MFB.",
  },
  {
    step: "06",
    title: "Manage and grow",
    body: "Read profit, stock, invoices, expenses, tax, and reports from the same record.",
  },
] as const;

export type Feature = {
  title: string;
  body: string;
  group: "Sell" | "Get paid" | "Run the shop" | "Grow";
  status: "live" | "soon";
};

export const liveFeatures: Feature[] = [
  {
    group: "Sell",
    status: "live",
    title: "Point of sale",
    body: "Ring up the product, the price, and the payment from the counter. The sale lands on the business record immediately.",
  },
  {
    group: "Sell",
    status: "live",
    title: "Payments",
    body: "Record a bank transfer, USSD, a wallet payment, or cash against the product that was sold. Priced collections are bank transfer and wallet payment.",
  },
  {
    group: "Sell",
    status: "live",
    title: "Mobile app",
    body: "Sell and check the business from the phone your team already carries. Store listings are added here when they are public.",
  },
  {
    group: "Get paid",
    status: "live",
    title: "Palmpay, next business day",
    body: "Collections through Palmpay settle on the next business day (T+1). A Palmpay wallet payment is the exception and settles instantly.",
  },
  {
    group: "Get paid",
    status: "live",
    title: "Nomba MFB, instant",
    body: "Collections through Nomba MFB settle instantly, on bank transfer and wallet payment.",
  },
  {
    group: "Get paid",
    status: "live",
    title: "Absorb the fee, or pass it on",
    body: "You choose whether BluuPay’s collection fee stays with you or is passed through to the customer. The rate in the table is the same either way.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Inventory",
    body: "Stock moves when the sale is recorded, so you can see what is left and what to reorder.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Invoicing",
    body: "Send an invoice and keep it with the customer and the payment, instead of a separate notebook.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Customers",
    body: "A CRM for the people who buy from you, tied to what they bought and what they still owe.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Expenses",
    body: "Record money leaving the business so profit is not just sales minus a guess.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Tax",
    body: "Keep tax with the sales it belongs to, ready for the report you already run.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Staff roles",
    body: "Add the people who sell, and give each person a role. You can see who sold what.",
  },
  {
    group: "Run the shop",
    status: "live",
    title: "Outlets",
    body: "Run more than one location on the same business, with stock and sales separated by outlet.",
  },
  {
    group: "Grow",
    status: "live",
    title: "Insights",
    body: "See which products earn, which sit, and how the day actually went.",
  },
  {
    group: "Grow",
    status: "live",
    title: "Reports",
    body: "Daily and period reports for sales, stock, and profit, in a form you can share.",
  },
  {
    group: "Grow",
    status: "live",
    title: "Business verticals",
    body: "The same record serves retail, markets, wholesale, services, and the other shops listed on Solutions.",
  },
];

export const soonFeatures: Feature[] = [
  {
    group: "Sell",
    status: "soon",
    title: "WhatsApp",
    body: "Selling and support through WhatsApp are not available yet.",
  },
  {
    group: "Sell",
    status: "soon",
    title: "PoS terminals",
    body: "A BluuPay point-of-sale terminal is on the way. Today you sell from the phone and the point of sale in the app.",
  },
  {
    group: "Sell",
    status: "soon",
    title: "Desktop app",
    body: "A desktop application is not available yet. The dashboard on the web is available now.",
  },
  {
    group: "Sell",
    status: "soon",
    title: "Offline selling",
    body: "Selling without a connection is not available yet. BluuPay needs a connection for the sale to be recorded today.",
  },
  {
    group: "Sell",
    status: "soon",
    title: "BluuPay hardware",
    body: "Branded terminals, tablets, desktops, and phones are not on sale yet.",
  },
];

export const groups = ["Sell", "Get paid", "Run the shop", "Grow"] as const;

export const verticals = [
  {
    name: "Retail shops",
    body: "Track every item that leaves the shelf and the profit left after the fee.",
  },
  {
    name: "Market traders",
    body: "Keep the day’s sales on the phone, even when payment arrives as a transfer.",
  },
  {
    name: "Wholesalers",
    body: "Separate outlets, staff, and larger invoices without a second set of books.",
  },
  {
    name: "Service providers",
    body: "Invoice the job, record the payment, and see what the work actually earned.",
  },
  {
    name: "Growing SMEs",
    body: "Add staff roles and locations as the business adds counters.",
  },
  {
    name: "Kiosks and mini-marts",
    body: "Start on the phone you already have. A terminal is not required.",
  },
  {
    name: "Boutiques",
    body: "Know which pieces sold and which sizes are still in the shop.",
  },
  {
    name: "Spare-parts shops",
    body: "Tie a transfer to the exact part so stock and profit stay honest.",
  },
  {
    name: "Pharmacies",
    body: "Record the sale, the stock movement, and the day’s takings in one place.",
  },
  {
    name: "Food vendors",
    body: "See what sold out and what the counter made, without a notebook at close.",
  },
  {
    name: "Supermarkets",
    body: "Run more than one outlet, with reports that roll up to the business.",
  },
] as const;

export type FeeRow = {
  channel: string;
  fee: string;
  note: string;
};

export type Provider = {
  id: string;
  name: string;
  settlement: string;
  summary: string;
  collections: FeeRow[];
  payouts: FeeRow[];
};

export const providers: Provider[] = [
  {
    id: "palmpay",
    name: "Palmpay",
    settlement: "Next business day (T+1)",
    summary:
      "Palmpay collections settle on the next business day. A Palmpay wallet payment settles instantly. That exception is marked on the wallet row.",
    collections: [
      {
        channel: "Bank transfer (virtual account)",
        fee: "1.9% capped at ₦2,000",
        note: "API, SDK, or hosted checkout",
      },
      {
        channel: "Wallet payment",
        fee: "1.5% flat",
        note: "Instant settlement",
      },
    ],
    payouts: [
      {
        channel: "To a bank (other financial institutions)",
        fee: "₦35 up to ₦5,000",
        note: "₦55 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000",
      },
      {
        channel: "To Palmpay",
        fee: "₦30 up to ₦5,000",
        note: "₦50 from ₦5,001 to ₦50,000 · ₦95 above ₦50,000",
      },
      {
        channel: "Bulk or payroll, per account",
        fee: "₦20 up to ₦5,000",
        note: "₦40 from ₦5,001 to ₦50,000 · ₦60 above ₦50,000",
      },
    ],
  },
  {
    id: "nomba",
    name: "Nomba MFB",
    settlement: "Instant",
    summary:
      "Nomba MFB collections settle instantly on bank transfer and wallet payment.",
    collections: [
      {
        channel: "Bank transfer (virtual account)",
        fee: "2.2% capped at ₦2,000",
        note: "API, SDK, or hosted checkout",
      },
      {
        channel: "Wallet payment",
        fee: "2% flat",
        note: "Instant settlement",
      },
    ],
    payouts: [
      {
        channel: "To a bank (other financial institutions)",
        fee: "₦50 up to ₦5,000",
        note: "₦65 from ₦5,001 to ₦50,000 · ₦150 above ₦50,000",
      },
      {
        channel: "To Nomba MFB",
        fee: "₦40 up to ₦5,000",
        note: "₦60 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000",
      },
      {
        channel: "Bulk or payroll, per account",
        fee: "₦40 up to ₦5,000",
        note: "₦60 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000",
      },
    ],
  },
];

export const stories = [
  {
    quote:
      "I now know exactly how much profit I make every day. It has changed how I run my business.",
    name: "Mama Amaka",
    place: "Balogun Market",
  },
  {
    quote:
      "BluuPay tells me which drinks sell fastest every Friday. I restock with confidence. My business is sharper now.",
    name: "Emeka",
    place: "Computer Village",
  },
] as const;

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is BluuPay?",
    answer:
      "BluuPay is a business tool for Nigerian merchants. It ties each payment to the product sold, then keeps stock, invoices, customers, expenses, tax, and profit on one record.",
  },
  {
    question: "Who is BluuPay for?",
    answer:
      "Retail shops, market traders, wholesalers, service providers, growing SMEs, kiosks, mini-marts, boutiques, spare-parts shops, pharmacies, food vendors, and supermarkets.",
  },
  {
    question: "What can merchants use today?",
    answer:
      "Staff roles, invoicing, CRM, expenses, tax, reports, payments, insights, inventory, a choice to absorb fees or pass them on, more than one outlet, business verticals, point-of-sale selling, and the mobile app.",
  },
  {
    question: "What is not available yet?",
    answer:
      "WhatsApp, PoS terminals, the desktop app, offline selling, and BluuPay hardware (terminals, tablets, desktops, and phones) are coming soon. They are not part of the product a merchant can use today.",
  },
  {
    question: "How do I start?",
    answer:
      "Open dashboard.bluupay.co, create the business, add products, and start selling. Sign-up and sign-in both live on that dashboard.",
  },
  {
    question: "Do I need a POS terminal?",
    answer:
      "No. You can sell with the phone and the BluuPay mobile app. BluuPay terminals and other hardware are coming later and are not required.",
  },
  {
    question: "Does BluuPay work offline?",
    answer:
      "Not yet. Offline selling is coming soon. Today a sale is recorded while the device is online.",
  },
  {
    question: "Can several people use one business?",
    answer:
      "Yes. Add staff and assign roles so you can see who sold what.",
  },
  {
    question: "Can I run more than one outlet?",
    answer:
      "Yes. Location management keeps more than one outlet on the same business.",
  },
  {
    question: "Where does BluuPay operate?",
    answer: "BluuPay operates in Nigeria.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "How much does BluuPay charge?",
    answer:
      "Collection fees depend on the provider and the channel. With Palmpay, a bank transfer is 1.9% capped at ₦2,000 and a wallet payment is 1.5% flat. With Nomba MFB, a bank transfer is 2.2% capped at ₦2,000 and a wallet payment is 2% flat. Payout fees depend on the amount and where the money is sent. The tables on this page list every band.",
  },
  {
    question: "How does Palmpay settlement differ from Nomba?",
    answer:
      "Palmpay bank transfers settle on the next business day (T+1). A Palmpay wallet payment settles instantly, and that row is marked in the Palmpay table. Nomba MFB settles instantly on bank transfer and wallet.",
  },
  {
    question: "Can I pass the fee to my customer?",
    answer:
      "Yes. You can absorb BluuPay’s collection fee or pass it through to the customer. The rates in the tables are BluuPay’s fees either way.",
  },
  {
    question: "What does a payout cost?",
    answer:
      "With Palmpay, a bank payout is ₦35 up to ₦5,000, ₦55 from ₦5,001 to ₦50,000, and ₦100 above ₦50,000. With Nomba MFB, a bank payout is ₦50 up to ₦5,000, ₦65 from ₦5,001 to ₦50,000, and ₦150 above ₦50,000. Payouts to the provider’s own wallet, and bulk or payroll payouts, use the lower bands in each table.",
  },
];

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/mobile", label: "Mobile" },
  { href: "/agents", label: "Agents" },
] as const;

export const pages = [
  { path: "/", title: "Home" },
  { path: "/product", title: "Product" },
  { path: "/solutions", title: "Solutions" },
  { path: "/pricing", title: "Pricing" },
  { path: "/mobile", title: "Mobile" },
  { path: "/agents", title: "Agents" },
  { path: "/book-a-demo", title: "Book a demo" },
  { path: "/privacy-policy", title: "Privacy policy" },
  { path: "/terms-of-service", title: "Terms of service" },
] as const;

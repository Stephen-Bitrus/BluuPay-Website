export type PostSpan = { _type: "span"; _key: string; text: string; marks?: string[] };
export type PostMark = { _key: string; _type: "link"; href: string };
export type PostBlock = {
  _type: "block";
  _key: string;
  style?: "normal" | "h2" | "h3";
  listItem?: "bullet" | "number";
  level?: number;
  children: PostSpan[];
  markDefs?: PostMark[];
};

export type PostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  image: PostImage;
  body: PostBlock[];
};

type Piece = string | { text: string; href: string };

function block(key: string, pieces: Piece[], style: "normal" | "h2" | "h3" = "normal", listItem?: "bullet" | "number"): PostBlock {
  const markDefs: PostMark[] = [];
  const children: PostSpan[] = pieces.map((piece, index) => {
    if (typeof piece === "string") {
      return { _type: "span", _key: `${key}s${index}`, text: piece, marks: [] };
    }
    const mark = `${key}m${index}`;
    markDefs.push({ _key: mark, _type: "link", href: piece.href });
    return { _type: "span", _key: `${key}s${index}`, text: piece.text, marks: [mark] };
  });
  return {
    _type: "block",
    _key: key,
    style,
    ...(listItem ? { listItem, level: 1 } : {}),
    children,
    markDefs,
  };
}

export const posts: Post[] = [
  {
    title: "What a shop can use today",
    slug: "what-a-shop-can-use-today",
    excerpt: "Point of sale, payments, stock, and the mobile app are live. WhatsApp, terminals, the desktop app, offline selling, and BluuPay hardware are not.",
    publishedAt: "2026-10-28T09:00:00.000Z",
    author: "BluuPay",
    image: {
      src: "/blog/what-a-shop-can-use-today.webp",
      alt: "BluuPay point of sale on a phone, beside a note that stock and payments are on the phone.",
      width: 1600,
      height: 900,
    },
    body: [
      block("today-1", [
        "BluuPay is the business record for a Nigerian shop. A sale is tied to the product, and stock, invoices, customers, expenses, tax, and profit stay on that same record.",
      ]),
      block("today-2", ["Available now"], "h2"),
      block("today-3", ["Point of sale, on the counter or on the phone."], "normal", "bullet"),
      block("today-4", ["Bank transfer, USSD, wallet, and cash recorded against the product that was sold."], "normal", "bullet"),
      block("today-5", ["Inventory, invoicing, customers, expenses, and tax."], "normal", "bullet"),
      block("today-6", ["Staff roles and more than one outlet."], "normal", "bullet"),
      block("today-7", ["Insights and reports."], "normal", "bullet"),
      block("today-8", ["A choice to absorb the collection fee or pass it on."], "normal", "bullet"),
      block("today-9", ["Not available yet"], "h2"),
      block("today-10", [
        "WhatsApp selling and support, BluuPay point-of-sale terminals, the desktop app, offline selling, and BluuPay hardware are coming soon. They are named on the product page so a merchant does not expect them at the counter today.",
      ]),
      block("today-11", [
        "A terminal is not required to start. Sign up on the dashboard, add products, and record the next sale from the phone.",
      ]),
    ],
  },
  {
    title: "Palmpay settles the next business day. Nomba MFB settles instantly.",
    slug: "palmpay-or-nomba",
    excerpt: "Priced collections are a bank transfer to a virtual account, or a wallet payment. The rate depends on the provider.",
    publishedAt: "2026-10-22T09:00:00.000Z",
    author: "BluuPay",
    image: {
      src: "/blog/palmpay-or-nomba.webp",
      alt: "Palmpay bank transfer at 1.9% capped at ₦2,000, next business day, and Nomba MFB at 2.2% capped at ₦2,000, instant.",
      width: 1600,
      height: 900,
    },
    body: [
      block("pay-1", [
        "BluuPay prices two collection channels: bank transfer to a virtual account, and wallet payment. USSD and cash can be recorded on the sale. They are not collection-fee rows.",
      ]),
      block("pay-2", ["Palmpay"], "h2"),
      block("pay-3", [
        "A Palmpay bank transfer is 1.9% capped at ₦2,000 and settles on the next business day. A Palmpay wallet payment is 1.5% flat and settles instantly.",
      ]),
      block("pay-4", ["Nomba MFB"], "h2"),
      block("pay-5", [
        "A Nomba MFB bank transfer is 2.2% capped at ₦2,000. A Nomba MFB wallet payment is 2% flat. Both settle instantly.",
      ]),
      block("pay-6", [
        "You can absorb the collection fee or pass it through to the customer. The rate in the table is BluuPay’s fee either way. Payout bands, for a bank, the provider’s own wallet, and bulk or payroll, are on the ",
        { text: "pricing page", href: "/pricing" },
        ".",
      ]),
    ],
  },
  {
    title: "Record the payment against the product",
    slug: "record-the-payment",
    excerpt: "The point of sale keeps the product, the price, and the way the customer paid on one sale.",
    publishedAt: "2026-10-16T09:00:00.000Z",
    author: "BluuPay",
    image: {
      src: "/blog/record-the-payment.webp",
      alt: "BluuPay point of sale with product photos, prices, stock, and an empty current order.",
      width: 1600,
      height: 900,
    },
    body: [
      block("sale-1", [
        "At the counter, search the shelf, see the price and the stock, and add the product to the order. The sale lands on the business record when it is checked out.",
      ]),
      block("sale-2", [
        "The payment can be a bank transfer, USSD, a wallet payment, or cash. The two priced collection channels remain bank transfer to a virtual account and wallet payment.",
      ]),
      block("sale-3", [
        "Stock moves when the sale is recorded, so the catalogue shows what is left. The same products are available in the mobile app, which does not require a terminal.",
      ]),
    ],
  },
];

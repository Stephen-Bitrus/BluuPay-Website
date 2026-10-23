import Image from "next/image";
import { Mark } from "@/components/Icons";

const shots = [
  {
    id: "pos",
    src: "/product/pos.webp",
    width: 1800,
    height: 1125,
    title: "Point of sale",
    body: "Search the shelf, see the price and the stock, and build the order. The order on this screen is empty.",
    alt: "BluuPay point of sale with hair products, prices, stock counts, and an empty current order.",
  },
  {
    id: "products",
    src: "/product/products.webp",
    width: 1800,
    height: 1125,
    title: "Products",
    body: "The catalogue lists each product with its price and how many are in stock.",
    alt: "BluuPay product catalogue with prices and stock counts for hair products.",
  },
  {
    id: "sales",
    src: "/product/sales.webp",
    width: 1800,
    height: 1125,
    title: "Sales",
    body: "Sales insights show today, this week, and this month after returns and refunds.",
    alt: "BluuPay sales insights with net sales for today, this week, and this month.",
  },
] as const;

const frame =
  "overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_30px_80px_-36px_rgba(8,12,40,0.55)]";

export function ProductStage() {
  const shot = shots[0];
  return (
    <figure className={`${frame} rise-in`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority
        sizes="(min-width: 1024px) 540px, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="border-t border-line px-4 py-3 text-sm leading-6 text-muted">
        Dashboard point of sale. The order on this screen is empty.
      </figcaption>
    </figure>
  );
}

export function ProductGallery({ include = ["pos", "products", "sales"] }: { include?: readonly string[] }) {
  const visible = shots.filter((shot) => include.includes(shot.id));
  return (
    <section aria-labelledby="product-screens-title" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">In the dashboard</p>
        <h2 id="product-screens-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          The screens a shop opens
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          These are from a live BluuPay dashboard.
        </p>
        <ul className={`stagger mt-8 grid gap-6 ${visible.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {visible.map((shot) => (
            <li key={shot.id}>
              <figure className={frame}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes={visible.length > 2 ? "(min-width: 1024px) 360px, 100vw" : "(min-width: 1024px) 540px, 100vw"}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-line px-4 py-3">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Mark name={shot.title} className="h-4 w-4 text-blue" />
                    {shot.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{shot.body}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

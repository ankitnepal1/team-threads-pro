import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink, type Product } from "@/data/products";

const BASE_PRICE = 1299;
const STEP_PRICE = 300;

export function sizePrice(size: string): number {
  const order = ["S", "M", "L", "XL", "XXL"];
  const idx = Math.max(0, order.indexOf(size));
  return BASE_PRICE + idx * STEP_PRICE;
}

export function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0] ?? "S");
  const price = sizePrice(size);

  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wide text-muted-foreground">
            <span>{product.club} · {product.sport}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" /> In Stock
            </span>
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight">{product.name}</h3>
        </div>

        <p className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-primary">
            Rs. {price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={s === size}
              className={
                s === size
                  ? "h-8 w-9 rounded-md bg-primary text-xs font-semibold text-primary-foreground"
                  : "h-8 w-9 rounded-md border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              }
            >
              {s}
            </button>
          ))}
        </div>

        <a
          href={whatsappLink(`Hi Jersey Hub! I want to order: ${product.name} (Size ${size}) — Rs. ${price}`)}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order Now
        </a>
      </div>
    </article>
  );
}

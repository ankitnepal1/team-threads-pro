import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Featured() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="featured" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Featured products
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">This week's most wanted</h2>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

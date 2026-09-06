import { useMemo } from "react";
import { Search, RotateCcw } from "lucide-react";
import { clubs, countries, products, SIZES } from "@/data/products";
import { ProductCard } from "./ProductCard";

export type Filters = {
  query: string;
  club: string;
  country: string;
  sport: string;
  size: string;
};

export const emptyFilters: Filters = {
  query: "",
  club: "",
  country: "",
  sport: "",
  size: "",
};

const selectClass =
  "h-11 w-full rounded-xl border border-border bg-card px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

export function Shop({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (!q || `${p.name} ${p.club} ${p.country} ${p.sport}`.toLowerCase().includes(q)) &&
        (!filters.club || p.club === filters.club) &&
        (!filters.country || p.country === filters.country) &&
        (!filters.sport || p.sport === filters.sport) &&
        (!filters.size || p.sizes.includes(filters.size)),
    );
  }, [filters]);

  const update = (patch: Partial<Filters>) => setFilters({ ...filters, ...patch });

  return (
    <section id="products" className="scroll-mt-20 bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              All products
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Every jersey in stock</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {results.length} of {products.length} jerseys
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-border bg-card p-4 shadow-card">
          <div className="relative mb-3">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={filters.query}
              onChange={(e) => update({ query: e.target.value })}
              placeholder="Search jerseys, clubs or countries..."
              aria-label="Search jerseys"
              className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <select
              className={selectClass}
              aria-label="Filter by club"
              value={filters.club}
              onChange={(e) => update({ club: e.target.value })}
            >
              <option value="">All clubs</option>
              {clubs.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              className={selectClass}
              aria-label="Filter by country"
              value={filters.country}
              onChange={(e) => update({ country: e.target.value })}
            >
              <option value="">All countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              className={selectClass}
              aria-label="Filter by sport"
              value={filters.sport}
              onChange={(e) => update({ sport: e.target.value })}
            >
              <option value="">All sports</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
            </select>
            <select
              className={selectClass}
              aria-label="Filter by size"
              value={filters.size}
              onChange={(e) => update({ size: e.target.value })}
            >
              <option value="">All sizes</option>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  Size {s}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setFilters(emptyFilters)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-secondary text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
            </button>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            No jerseys match those filters. Try resetting them.
          </p>
        )}
      </div>
    </section>
  );
}

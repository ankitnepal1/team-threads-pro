import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function Categories({
  onSelect,
}: {
  onSelect: (filter: { sport?: string; club?: string }) => void;
}) {
  return (
    <section id="categories" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Shop by category
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Find your kit</h2>
          <p className="mt-3 text-muted-foreground">
            Club shirts, national colours, cricket kits and fully personalised jerseys.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <button
              key={c.title}
              type="button"
              onClick={() => {
                onSelect(c.filter);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="card-lift group relative overflow-hidden rounded-2xl bg-card text-left shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Shop now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ShoppingBag } from "lucide-react";
import { EMAIL_DISPLAY, LOCATION_DISPLAY, PHONE_DISPLAY } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-bold uppercase">Jersey Hub</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Football and cricket jerseys for fans in Nepal and around the world, with custom name
            and number printing.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            {["Categories", "Featured", "All Jerseys", "Delivery"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace("all jerseys", "products").replace(" ", "")}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Popular</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            {["Real Madrid", "Barcelona", "Manchester United", "Nepal National Team"].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li>{PHONE_DISPLAY}</li>
            <li>{EMAIL_DISPLAY}</li>
            <li>{LOCATION_DISPLAY}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Jersey Hub. All rights reserved.
      </div>
    </footer>
  );
}

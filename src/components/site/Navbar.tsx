import { useState } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { PHONE_DISPLAY } from "@/data/products";

const links = [
  { href: "#categories", label: "Categories" },
  { href: "#featured", label: "Featured" },
  { href: "#products", label: "All Jerseys" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="hidden bg-primary-dark/90 py-1.5 text-xs md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <span>Cash on Delivery all over Nepal · Free custom printing on orders over 3 jerseys</span>
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </span>
        </div>
      </div>

      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate font-display text-2xl font-bold uppercase tracking-tight">
            Jersey Hub
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-opacity after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            Shop Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-dark/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-primary-foreground/15 bg-primary-dark px-4 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-primary-foreground/10 py-3 text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

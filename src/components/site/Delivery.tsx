import { Truck, Wallet, PackageCheck, RefreshCcw } from "lucide-react";

const steps = [
  { icon: Wallet, title: "Cash on Delivery", text: "Pay the courier when your jersey arrives. No advance needed inside Nepal." },
  { icon: Truck, title: "Delivery Time", text: "Kathmandu valley 1–2 days, outside valley 2–4 days." },
  { icon: PackageCheck, title: "Delivery Charge", text: "Rs. 100 inside valley, Rs. 150 outside. Free above Rs. 5,000." },
  { icon: RefreshCcw, title: "Size Exchange", text: "Wrong size? Exchange within 3 days if tags are intact." },
];

export function Delivery() {
  return (
    <section id="delivery" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Delivery & COD
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Simple, safe ordering</h2>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

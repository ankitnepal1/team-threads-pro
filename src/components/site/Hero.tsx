import { MessageCircle, Truck, BadgeCheck, Shirt } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { whatsappLink } from "@/data/products";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-primary-dark">
      <img
        src={heroImage}
        alt="Football player in a jersey celebrating under stadium floodlights"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-36">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <Shirt className="h-3.5 w-3.5" aria-hidden="true" /> Football & Cricket Jerseys
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-[0.95] text-primary-foreground sm:text-6xl lg:text-7xl">
          Wear the shirt.
          <br />
          Feel the game.
        </h1>
        <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          Premium club, country and custom jerseys with your own name and number — delivered across
          Nepal with cash on delivery.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            Browse Jerseys
          </a>
          <a
            href={whatsappLink("Hi Jersey Hub! I want to order a jersey.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { icon: Truck, label: "Cash on Delivery", value: "Nationwide" },
            { icon: BadgeCheck, label: "Print Quality", value: "Heat-pressed" },
            { icon: Shirt, label: "Sizes", value: "S to XXL" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
            >
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <dt className="mt-2 text-xs uppercase tracking-wide text-primary-foreground/70">
                {label}
              </dt>
              <dd className="font-display text-lg font-semibold text-primary-foreground">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

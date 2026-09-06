import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import {
  EMAIL_DISPLAY,
  LOCATION_DISPLAY,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/data/products";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact & store
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Talk to us or visit the shop</h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Phone, label: "Phone", value: PHONE_DISPLAY },
              { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY },
              { icon: Mail, label: "Email", value: EMAIL_DISPLAY },
              { icon: Clock, label: "Opening hours", value: "Sun–Fri, 10:00 – 19:00" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:col-span-2">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                Store location
              </p>
              <p className="font-semibold">{LOCATION_DISPLAY}</p>
              <a
                href={whatsappLink("Hi Jersey Hub! Can you share your store location?")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Message us
              </a>
            </div>
          </div>

          <div className="min-h-64 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <div className="grid h-full min-h-64 place-items-center p-8 text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-display text-2xl font-semibold">Jersey Hub Store</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {LOCATION_DISPLAY}
                  <br />
                  Exact map pin will be added once the address is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

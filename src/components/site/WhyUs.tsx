import {
  PenLine,
  Ruler,
  Sparkles,
  Wallet,
  Gift,
  Headphones,
  Camera,
} from "lucide-react";

const points = [
  { icon: PenLine, title: "Custom Name & Number", text: "Any name, any number, pressed to last wash after wash." },
  { icon: Ruler, title: "Multiple Sizes", text: "Every kit stocked from S to XXL, kids sizes on request." },
  { icon: Sparkles, title: "High Quality Printing", text: "Sharp, crack-free heat-press printing on every jersey." },
  { icon: Wallet, title: "Cash On Delivery", text: "Pay when the parcel reaches your door, anywhere in Nepal." },
  { icon: Gift, title: "Attractive Packaging", text: "Gift-ready packaging that makes a great surprise." },
  { icon: Headphones, title: "Fast Customer Support", text: "Quick replies on WhatsApp, before and after you order." },
  { icon: Camera, title: "Real Photos & Videos", text: "What you see is what ships — we shoot our own stock." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Jersey Hub</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for real supporters</h2>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="card-lift rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
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

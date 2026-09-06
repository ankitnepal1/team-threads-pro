import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sujan Shrestha",
    place: "Kathmandu",
    text: "Ordered a Real Madrid jersey with my name printed. Quality is way better than I expected and it arrived in two days.",
  },
  {
    name: "Anita Gurung",
    place: "Pokhara",
    text: "Cash on delivery made it easy. The packaging looked like a gift box — my brother loved it.",
  },
  {
    name: "Bikash Thapa",
    place: "Biratnagar",
    text: "Bought cricket jerseys for our whole team. Sizes were accurate and the printing has not cracked at all.",
  },
  {
    name: "Rojina Karki",
    place: "Lalitpur",
    text: "They replied on WhatsApp within minutes and sent real photos before I paid. Very smooth experience.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-primary-dark py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Customer reviews
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Loved by 5,000+ fans</h2>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1.5"
            >
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name}
                <span className="block text-xs font-normal text-primary-foreground/60">
                  {r.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

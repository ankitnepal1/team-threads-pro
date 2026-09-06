import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Featured } from "@/components/site/Featured";
import { Shop, emptyFilters, type Filters } from "@/components/site/Shop";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Delivery } from "@/components/site/Delivery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const title = "Jersey Hub — Football & Cricket Jerseys in Nepal";
const description =
  "Buy premium football and cricket jerseys in Nepal: Real Madrid, Barcelona, Man United, Liverpool, PSG, Nepal national team and custom name & number printing with cash on delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories
          onSelect={(f) => setFilters({ ...emptyFilters, club: f.club ?? "", sport: f.sport ?? "" })}
        />
        <Featured />
        <Shop filters={filters} setFilters={setFilters} />
        <WhyUs />
        <Reviews />
        <Delivery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

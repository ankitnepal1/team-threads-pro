import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/products";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Jersey Hub! I'd like to order a jersey.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}

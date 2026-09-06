import jerseyWhite from "@/assets/jersey-white.jpg";
import jerseyBlue from "@/assets/jersey-blue.jpg";
import jerseyRed from "@/assets/jersey-red.jpg";
import jerseyBlack from "@/assets/jersey-black.jpg";
import jerseyCricket from "@/assets/jersey-cricket.jpg";
import jerseyCustom from "@/assets/jersey-custom.jpg";
import categoryFootball from "@/assets/category-football.jpg";
import categoryCricket from "@/assets/category-cricket.jpg";
import categoryNepal from "@/assets/category-nepal.jpg";
import categoryCustom from "@/assets/category-custom.jpg";

export const WHATSAPP_NUMBER = "9770000000000"; // placeholder — replace with real WhatsApp number
export const PHONE_DISPLAY = "+977 98XX-XXXXXX";
export const EMAIL_DISPLAY = "hello@jerseyhub.example";
export const LOCATION_DISPLAY = "Shop No. 00, Main Road, Kathmandu, Nepal";

export const SIZES = ["S", "M", "L", "XL", "XXL"] as const;

export type Product = {
  id: string;
  name: string;
  club: string;
  country: string;
  sport: "Football" | "Cricket";
  price: number;
  oldPrice?: number;
  sizes: string[];
  image: string;
  badge?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "rm-home",
    name: "Real Madrid Home Jersey",
    club: "Real Madrid",
    country: "Spain",
    sport: "Football",
    price: 1899,
    oldPrice: 2499,
    sizes: [...SIZES],
    image: jerseyWhite,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "bar-home",
    name: "Barcelona Home Jersey",
    club: "Barcelona",
    country: "Spain",
    sport: "Football",
    price: 1899,
    sizes: [...SIZES],
    image: jerseyBlue,
    featured: true,
  },
  {
    id: "mu-home",
    name: "Manchester United Home Jersey",
    club: "Manchester United",
    country: "England",
    sport: "Football",
    price: 1799,
    sizes: [...SIZES],
    image: jerseyRed,
    featured: true,
  },
  {
    id: "lfc-home",
    name: "Liverpool Home Jersey",
    club: "Liverpool",
    country: "England",
    sport: "Football",
    price: 1799,
    oldPrice: 2199,
    sizes: [...SIZES],
    image: jerseyRed,
  },
  {
    id: "psg-third",
    name: "PSG Third Jersey",
    club: "PSG",
    country: "France",
    sport: "Football",
    price: 1999,
    sizes: [...SIZES],
    image: jerseyBlue,
    badge: "New",
    featured: true,
  },
  {
    id: "nepal-home",
    name: "Nepal National Team Jersey",
    club: "Nepal National Team",
    country: "Nepal",
    sport: "Football",
    price: 1499,
    sizes: [...SIZES],
    image: categoryNepal,
    badge: "Local Favourite",
    featured: true,
  },
  {
    id: "intl-club",
    name: "International Club Jersey",
    club: "International Clubs",
    country: "Europe",
    sport: "Football",
    price: 1699,
    sizes: [...SIZES],
    image: jerseyBlack,
  },
  {
    id: "football-classic",
    name: "Classic Football Jersey",
    club: "Jersey Hub",
    country: "Nepal",
    sport: "Football",
    price: 1299,
    sizes: [...SIZES],
    image: categoryFootball,
  },
  {
    id: "cricket-nepal",
    name: "Nepal Cricket Jersey",
    club: "Nepal National Team",
    country: "Nepal",
    sport: "Cricket",
    price: 1599,
    sizes: [...SIZES],
    image: jerseyCricket,
    featured: true,
  },
  {
    id: "cricket-intl",
    name: "International Cricket Jersey",
    club: "International Clubs",
    country: "India",
    sport: "Cricket",
    price: 1699,
    sizes: [...SIZES],
    image: categoryCricket,
  },
  {
    id: "custom-name",
    name: "Custom Name & Number Jersey",
    club: "Jersey Hub",
    country: "Nepal",
    sport: "Football",
    price: 2099,
    sizes: [...SIZES],
    image: jerseyCustom,
    badge: "Personalised",
    featured: true,
  },
  {
    id: "custom-team",
    name: "Custom Team Kit (Bulk Order)",
    club: "Jersey Hub",
    country: "Nepal",
    sport: "Cricket",
    price: 1899,
    sizes: [...SIZES],
    image: categoryCustom,
  },
];

export const categories = [
  {
    title: "Football Jerseys",
    description: "Club & national kits from Europe and beyond",
    image: categoryFootball,
    filter: { sport: "Football" as const },
  },
  {
    title: "Cricket Jerseys",
    description: "Match and practice kits for every season",
    image: categoryCricket,
    filter: { sport: "Cricket" as const },
  },
  {
    title: "Nepal National Team",
    description: "Show your colours with pride",
    image: categoryNepal,
    filter: { club: "Nepal National Team" },
  },
  {
    title: "Custom Name & Number",
    description: "Your name, your number, pressed to last",
    image: categoryCustom,
    filter: { club: "Jersey Hub" },
  },
];

export const clubs = [
  "Real Madrid",
  "Barcelona",
  "Manchester United",
  "Liverpool",
  "PSG",
  "Nepal National Team",
  "International Clubs",
  "Jersey Hub",
];

export const countries = ["Nepal", "Spain", "England", "France", "India", "Europe"];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

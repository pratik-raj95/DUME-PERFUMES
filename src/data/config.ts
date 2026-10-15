export interface SiteConfig {
  brandName: string;
  tagline: string;
  whatsappNumber: string; // international format without spaces
  whatsappDisplay: string;
  email: string;
  location: string;
  hours: string;
  currency: string;
  currencySymbol: string;
  demoDisclaimer: string;
  freeShippingThreshold: number;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "DUME PERFUMES",
  tagline: "Scent Is Your Signature",
  whatsappNumber: "15551234567", // Configurable demo WhatsApp number
  whatsappDisplay: "+1 (555) 123-4567",
  email: "concierge@dumeperfumes.com",
  location: "Bespoke Fragrance Studio · Luxury Atelier",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM EST",
  currency: "USD",
  currencySymbol: "$",
  demoDisclaimer:
    "Demo Client Presentation: Fragrance inspirations are referenced for olfactory illustration. DUME Perfumes is an independent perfumery brand.",
  freeShippingThreshold: 150,
};

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dumeperfumes.com"),
  title: "DUME PERFUMES | Scent Is Your Signature · Luxury Extrait de Parfum",
  description:
    "Discover DUME PERFUMES — an extraordinary collection of five Extrait de Parfum creations. Handcrafted with high oil concentration, tactile wooden closures, and unforgettable sillage.",
  keywords: [
    "DUME Perfumes",
    "Luxury Fragrances",
    "Extrait de Parfum",
    "Rasasi Hawas Ice",
    "Creed Aventus",
    "Dior Sauvage",
    "CR7 Blue",
    "Yum Boujee Marshmallow",
    "Niche Perfumes",
    "Artisanal Fragrance",
  ],
  authors: [{ name: "DUME Perfumes Atelier" }],
  openGraph: {
    title: "DUME PERFUMES — Scent Is Your Signature",
    description:
      "Affordable luxury, sophisticated fragrances, and memorable personal style. Explore our five signature Extrait de Parfum flacons.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/creed-aventus.jpg",
        width: 1200,
        height: 630,
        alt: "DUME PERFUMES Luxury Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUME PERFUMES | Luxury Extrait de Parfum",
    description:
      "Experience high-concentration luxury fragrances with artisanal solid wood closures and lasting sillage.",
    images: ["/images/creed-aventus.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#070709] text-[#E8E5DD] font-sans selection:bg-[#D4AF37]/30 selection:text-[#FBF9F5] antialiased overflow-x-hidden">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

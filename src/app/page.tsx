import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BrandStory } from "@/components/BrandStory";
import { ProductCollection } from "@/components/ProductCollection";
import { FeaturedSpotlight } from "@/components/FeaturedSpotlight";
import { FragranceFinder } from "@/components/FragranceFinder";
import { WhyChooseDume } from "@/components/WhyChooseDume";
import { RitualBanner } from "@/components/RitualBanner";
import { ContactSection } from "@/components/ContactSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { ShoppingBagDrawer } from "@/components/ShoppingBagDrawer";
import { DemoCheckoutModal } from "@/components/DemoCheckoutModal";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { SearchModal } from "@/components/SearchModal";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#070709] text-[#E8E5DD] selection:bg-[#DFBA73]/30 selection:text-[#FFFDF9]">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Story & Craftsmanship Philosophy */}
      <BrandStory />

      {/* The Fragrance Collection (All 5 Flacons) */}
      <ProductCollection />

      {/* Featured Masterwork Spotlight */}
      <FeaturedSpotlight />

      {/* Interactive Scent Finder / Quiz */}
      <FragranceFinder />

      {/* Why Choose DUME Benefit Section */}
      <WhyChooseDume />

      {/* Extrait Sensory Application Ritual Banner */}
      <RitualBanner />

      {/* Concierge & Contact Section */}
      <ContactSection />

      {/* Private Reserve Newsletter Subscription */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays & Drawers */}
      <ShoppingBagDrawer />
      <DemoCheckoutModal />
      <ProductDetailsModal />
      <SearchModal />
    </main>
  );
}

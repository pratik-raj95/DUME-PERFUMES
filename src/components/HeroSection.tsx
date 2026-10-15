"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const HeroSection: React.FC = () => {
  const { openQuickView, addToCart } = useCart();
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(2); // Creed Aventus as default hero
  const featuredProduct = PRODUCTS[selectedHeroIndex];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#070709]"
    >
      {/* Ambient Lighting & Atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#DFBA73]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#9E7244]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(223,186,115,0.06)_0%,rgba(7,7,9,0)_70%)] pointer-events-none" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8 order-2 lg:order-1 pt-6 lg:pt-0">
            {/* Small Premium Brand Announcement */}
            <div className="inline-flex items-center space-x-3 w-fit">
              <span className="w-8 h-[1px] bg-[#DFBA73]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#DFBA73] font-medium">
                EXTRAIT DE PARFUM · ARTISANAL CRAFTSMANSHIP
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#F4F0E6]">
              SCENT IS YOUR <br />
              <span className="italic font-light text-gold-gradient">SIGNATURE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#BDB9AF] font-light max-w-xl leading-relaxed">
              Discover fragrances that leave an impression long after you&apos;ve left the room.
              Handcrafted in concentrated 50&nbsp;ml flacons crowned with turned solid beechwood
              closures, designed for intimate sillage and unforgettable distinction.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => handleScrollTo("collection")}
                className="btn-gold py-4 px-8 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-3 shadow-xl shadow-[#DFBA73]/10"
              >
                <span>EXPLORE THE COLLECTION</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("story")}
                className="btn-outline-gold py-4 px-8 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
              >
                <span>DISCOVER DUME</span>
              </button>
            </div>

            {/* Fragrance Fast Switcher / Quick Preview Bar */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8B83] mb-3">
                Select Featured Flacon:
              </div>
              <div className="flex flex-wrap gap-2">
                {PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedHeroIndex(idx)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-all duration-300 border ${
                      selectedHeroIndex === idx
                        ? "border-[#DFBA73] bg-[#DFBA73]/15 text-[#DFBA73] font-medium shadow-sm"
                        : "border-white/10 text-[#A6A39B] hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Art-Directed Photograph Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
            {/* Ambient Gold Radial Halo */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#DFBA73]/20 via-[#9E7244]/10 to-transparent blur-3xl pointer-events-none" />

            {/* Main Luxury Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-sm p-3 bg-gradient-to-b from-[#18181D] via-[#111114] to-[#0A0A0C] border border-[#DFBA73]/30 shadow-2xl shadow-black group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#DFBA73]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#DFBA73]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#DFBA73]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#DFBA73]" />

              {/* Product Photograph Container */}
              <div className="relative w-full h-full overflow-hidden bg-[#0A0A0C] flex items-center justify-center">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Shade at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent pointer-events-none" />

                {/* Floating Badge: Flacon Specifications */}
                <div className="absolute top-4 right-4 bg-[#0A0A0C]/85 backdrop-blur-md border border-[#DFBA73]/30 px-3 py-1.5 shadow-lg">
                  <div className="flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3 text-[#DFBA73]" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#DFBA73] font-medium">
                      50 ML EXTRAIT
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Info & Quick Actions */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#DFBA73]">
                        {featuredProduct.category}
                      </div>
                      <div className="font-serif text-lg text-[#F4F0E6] tracking-wide font-normal">
                        {featuredProduct.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] uppercase tracking-wider text-[#8C8A84]">
                        Sample Price
                      </div>
                      <div className="font-serif text-lg text-[#DFBA73]">
                        {featuredProduct.formattedPrice}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => openQuickView(featuredProduct)}
                      className="py-2 px-3 text-[10px] uppercase tracking-[0.16em] border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all text-center"
                    >
                      View Notes
                    </button>
                    <button
                      onClick={() => addToCart(featuredProduct)}
                      className="py-2 px-3 text-[10px] uppercase tracking-[0.16em] bg-[#DFBA73] hover:bg-[#F3D79B] text-[#08080a] font-semibold transition-all text-center"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 pb-4 flex flex-col items-center justify-center">
          <button
            onClick={() => handleScrollTo("story")}
            className="group flex flex-col items-center space-y-2 text-[#8C8A84] hover:text-[#DFBA73] transition-colors cursor-pointer"
            aria-label="Scroll to discover story"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-light">
              Scroll to Discover
            </span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1 group-hover:border-[#DFBA73]">
              <div className="w-1 h-2 bg-[#DFBA73] rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

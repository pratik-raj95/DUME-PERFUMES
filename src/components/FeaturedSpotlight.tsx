"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Clock, Compass, Plus, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const FeaturedSpotlight: React.FC = () => {
  const { addToCart, openQuickView } = useCart();
  const [selectedId, setSelectedId] = useState("creed-aventus");
  const [isAdded, setIsAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[2];

  const handleAdd = () => {
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0E] overflow-hidden border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#DFBA73]/8 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-5 sm:gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#DFBA73] font-medium mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATELIER SPOTLIGHT</span>
            </div>
            <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
              MASTERWORK IN FOCUS
            </h2>
          </div>

          {/* Quick Flacon Selectors */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em] transition-all border touch-target ${
                  p.id === selectedId
                    ? "border-[#DFBA73] bg-[#DFBA73] text-[#08080a] font-semibold"
                    : "border-white/10 text-[#A6A39B] hover:border-white/30 bg-[#0E0E12]"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Split Editorial Spotlight Card */}
        <div className="bg-[#101015] border border-[#DFBA73]/25 grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden rounded-sm">
          {/* Left Column: Flacon Photographic Presentation */}
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto min-h-[260px] sm:min-h-[360px] lg:min-h-[480px] bg-gradient-to-tr from-[#08080A] via-[#0E0E12] to-[#15151B] p-4 sm:p-8 flex items-center justify-center">
            {/* Spotlight Glow Ring */}
            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#DFBA73]/10 blur-2xl pointer-events-none" />

            <div className="relative w-full h-full max-h-[460px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 50vw"
                className="object-contain filter contrast-105"
              />
            </div>

            {/* Floating Quality Seal */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#08080A]/90 backdrop-blur-md border border-[#DFBA73]/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#DFBA73] font-medium">
                50 ML · EXTRAIT DE PARFUM
              </span>
            </div>
          </div>

          {/* Right Column: Olfactory Breakdown & Notes Pyramid */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 bg-[#111116]">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DFBA73]">
                  {product.category}
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#DFBA73]">
                  {product.formattedPrice}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F4F0E6] mt-2 font-normal leading-tight">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#BDB9AF] font-light mt-3 sm:mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Three Tier Olfactory Notes Pyramid */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8A84]">
                  Olfactory Pyramid
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="p-2.5 sm:p-3 bg-white/5 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-0.5 sm:mb-1">
                      Top Notes (Immediate Sensation)
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#E8E5DD] leading-relaxed">
                      {product.notes.top.join(" · ")}
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-white/5 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-0.5 sm:mb-1">
                      Heart Notes (The Signature Soul)
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#E8E5DD] leading-relaxed">
                      {product.notes.heart.join(" · ")}
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-white/5 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-0.5 sm:mb-1">
                      Base Notes (The Enduring Sillage)
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#E8E5DD] leading-relaxed">
                      {product.notes.base.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-[#A8A59D]">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBA73] shrink-0" />
                  <span>
                    Longevity: <strong className="text-white font-normal">{product.metrics.longevity}</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-[#A8A59D]">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBA73] shrink-0" />
                  <span>
                    Sillage: <strong className="text-white font-normal">{product.metrics.sillage}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar with 44px Touch Targets */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleAdd}
                className="btn-gold flex-1 py-3.5 px-6 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 touch-target"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-1 shrink-0" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-1 shrink-0" />
                    <span>Add Flacon to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => openQuickView(product)}
                className="btn-outline-gold py-3.5 px-6 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium text-center touch-target"
              >
                Inspect Flacon Ritual
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

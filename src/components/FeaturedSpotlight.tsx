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
    <section className="relative py-24 lg:py-32 bg-[#0A0A0E] overflow-hidden border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#DFBA73]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.28em] text-[#DFBA73] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATELIER SPOTLIGHT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F4F0E6] tracking-tight">
              MASTERWORK IN FOCUS
            </h2>
          </div>

          {/* Quick Flacon Selectors */}
          <div className="flex flex-wrap gap-2">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-all border ${
                  p.id === selectedId
                    ? "border-[#DFBA73] bg-[#DFBA73] text-[#08080a] font-semibold"
                    : "border-white/10 text-[#A6A39B] hover:border-white/30"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Split Editorial Spotlight Card */}
        <div className="bg-[#101015] border border-[#DFBA73]/25 grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden">
          {/* Left Column: Flacon Photographic Presentation */}
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto min-h-[420px] bg-gradient-to-tr from-[#08080A] via-[#0E0E12] to-[#15151B] p-8 flex items-center justify-center">
            {/* Spotlight Glow Ring */}
            <div className="absolute w-72 h-72 rounded-full bg-[#DFBA73]/10 blur-2xl pointer-events-none" />

            <div className="relative w-full h-full max-h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain filter contrast-105"
              />
            </div>

            {/* Floating Quality Seal */}
            <div className="absolute top-6 left-6 bg-[#08080A]/90 backdrop-blur-md border border-[#DFBA73]/30 px-3.5 py-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFBA73] font-medium">
                50 ML · EXTRAIT DE PARFUM
              </span>
            </div>
          </div>

          {/* Right Column: Olfactory Breakdown & Notes Pyramid */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#111116]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#DFBA73]">
                  {product.category}
                </span>
                <span className="font-serif text-2xl text-[#DFBA73]">
                  {product.formattedPrice}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E6] mt-2 font-normal">
                {product.name}
              </h3>

              <p className="text-sm text-[#BDB9AF] font-light mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Three Tier Olfactory Notes Pyramid */}
              <div className="mt-8 space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8C8A84]">
                  Olfactory Pyramid
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-white/5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-1">
                      Top Notes (Immediate Sensation)
                    </span>
                    <p className="text-xs text-[#E8E5DD]">{product.notes.top.join(" · ")}</p>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-1">
                      Heart Notes (The Signature Soul)
                    </span>
                    <p className="text-xs text-[#E8E5DD]">{product.notes.heart.join(" · ")}</p>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] font-medium block mb-1">
                      Base Notes (The Enduring Sillage)
                    </span>
                    <p className="text-xs text-[#E8E5DD]">{product.notes.base.join(" · ")}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs text-[#A8A59D]">
                  <Clock className="w-4 h-4 text-[#DFBA73]" />
                  <span>Longevity: <strong className="text-white font-normal">{product.metrics.longevity}</strong></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#A8A59D]">
                  <Compass className="w-4 h-4 text-[#DFBA73]" />
                  <span>Sillage: <strong className="text-white font-normal">{product.metrics.sillage}</strong></span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAdd}
                className="btn-gold flex-1 py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-1" />
                    <span>Add Flacon to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => openQuickView(product)}
                className="btn-outline-gold py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium text-center"
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

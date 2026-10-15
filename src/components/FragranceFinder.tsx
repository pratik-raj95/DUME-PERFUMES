"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, RotateCcw, Check, ShoppingBag, Eye } from "lucide-react";
import { PRODUCTS, PerfumeProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const FragranceFinder: React.FC = () => {
  const { addToCart, openQuickView } = useCart();

  // Interactive Quiz State
  const [selectedMood, setSelectedMood] = useState<string>("invigorating");
  const [selectedFamily, setSelectedFamily] = useState<string>("aquatic");
  const [selectedSetting, setSelectedSetting] = useState<string>("daily");
  const [isAdded, setIsAdded] = useState(false);

  // Compute best match based on interactive selections
  const getRecommendedProduct = (): PerfumeProduct => {
    if (selectedFamily === "aquatic" || selectedMood === "invigorating") {
      return PRODUCTS.find((p) => p.id === "rasasi-hawas-ice") || PRODUCTS[0];
    }
    if (selectedFamily === "gourmand" || selectedMood === "sweet") {
      return PRODUCTS.find((p) => p.id === "yum-boujee-marshmallow") || PRODUCTS[3];
    }
    if (selectedFamily === "woody" || selectedMood === "sovereign") {
      return PRODUCTS.find((p) => p.id === "creed-aventus") || PRODUCTS[2];
    }
    if (selectedFamily === "primal" || selectedMood === "magnetic") {
      return PRODUCTS.find((p) => p.id === "dior-sauvage") || PRODUCTS[4];
    }
    // energetic aromatic default
    return PRODUCTS.find((p) => p.id === "cr7-blue") || PRODUCTS[1];
  };

  const matchedProduct = getRecommendedProduct();

  const handleAddMatched = () => {
    addToCart(matchedProduct, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const resetFinder = () => {
    setSelectedMood("invigorating");
    setSelectedFamily("aquatic");
    setSelectedSetting("daily");
  };

  return (
    <section id="finder" className="relative py-24 lg:py-32 bg-[#09090C] border-t border-white/5">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#DFBA73]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#DFBA73] font-medium">
              OLFACTORY CONCIERGE
            </span>
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4F0E6] tracking-tight">
            FIND YOUR SIGNATURE SCENT
          </h2>

          <p className="text-sm sm:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Every aura demands a corresponding fragrance architecture. Select your desired aura and
            mood below to reveal your ideal Extrait de Parfum flacon.
          </p>
        </div>

        {/* Interactive Dual-Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Preferences Form */}
          <div className="lg:col-span-7 bg-[#101015] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              {/* Question 1: Desired Mood */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#DFBA73] font-medium mb-3">
                  1. Desired Atmosphere & Mood
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "invigorating", label: "Glacial Fresh & Clean", sub: "Icy citrus, sea mist & frosted bergamot" },
                    { id: "energetic", label: "Dynamic & Aromatic", sub: "Sea salt, crisp lavender & cedar" },
                    { id: "sovereign", label: "Commanding & Regal", sub: "Smoky birch, blackcurrant & pineapple" },
                    { id: "sweet", label: "Warm & Indulgent", sub: "Fluffy marshmallow, vanilla & pistachio" },
                    { id: "magnetic", label: "Nocturnal & Powerful", sub: "Sichuan pepper, ambroxan & dark vanilla" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedMood(item.id)}
                      className={`text-left p-3.5 border transition-all ${
                        selectedMood === item.id
                          ? "border-[#DFBA73] bg-[#DFBA73]/10 text-white"
                          : "border-white/5 bg-white/[0.02] text-[#A6A39B] hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-medium uppercase tracking-wider text-[#F4F0E6]">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#8C8A84] mt-1">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Scent Family Preference */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#DFBA73] font-medium mb-3">
                  2. Dominant Olfactory Family
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "aquatic", label: "Fresh / Aquatic" },
                    { id: "aromatic", label: "Fresh / Aromatic" },
                    { id: "woody", label: "Woody / Fruity" },
                    { id: "gourmand", label: "Sweet / Gourmand" },
                    { id: "primal", label: "Fresh / Woody" },
                  ].map((family) => (
                    <button
                      key={family.id}
                      onClick={() => setSelectedFamily(family.id)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-all ${
                        selectedFamily === family.id
                          ? "border-[#DFBA73] bg-[#DFBA73] text-[#08080a] font-semibold"
                          : "border-white/10 text-[#C8C5BD] hover:border-white/30"
                      }`}
                    >
                      {family.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Occasion */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#DFBA73] font-medium mb-3">
                  3. Primary Ritual / Occasion
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "daily", label: "Daily Signature" },
                    { id: "evening", label: "Gala & Black Tie" },
                    { id: "intimate", label: "Intimate Evenings" },
                    { id: "summer", label: "Sun & Coastal Travel" },
                    { id: "business", label: "Boardroom & Power" },
                    { id: "all", label: "Versatile All-Year" },
                  ].map((occ) => (
                    <button
                      key={occ.id}
                      onClick={() => setSelectedSetting(occ.id)}
                      className={`p-2.5 text-center text-xs uppercase tracking-[0.12em] border transition-all ${
                        selectedSetting === occ.id
                          ? "border-[#DFBA73] bg-[#DFBA73]/15 text-[#DFBA73] font-medium"
                          : "border-white/5 bg-white/[0.02] text-[#8C8A84] hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {occ.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-[#8C8A84] tracking-wider uppercase">
                Real-time Olfactory Recommendation
              </span>
              <button
                onClick={resetFinder}
                className="text-xs text-[#A6A39B] hover:text-[#DFBA73] flex items-center space-x-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Choices</span>
              </button>
            </div>
          </div>

          {/* Right Column: Matched Flacon Recommendation */}
          <div className="lg:col-span-5 bg-[#121217] border border-[#DFBA73]/30 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
            {/* Recommendation Ribbon */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2 text-[#DFBA73]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-[0.22em] font-medium">
                  YOUR COMPATIBLE SIGNATURE
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#DFBA73] bg-[#DFBA73]/10 px-2 py-0.5 border border-[#DFBA73]/20">
                98% Match
              </span>
            </div>

            {/* Matched Product Photo */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full my-4 bg-[#0A0A0E] border border-white/5 flex items-center justify-center overflow-hidden group">
              <Image
                src={matchedProduct.image}
                alt={matchedProduct.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 bg-[#08080a]/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#DFBA73]">
                Extrait de Parfum · 50 ML
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#DFBA73]">
                  {matchedProduct.category}
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E6] font-normal">
                    {matchedProduct.name}
                  </h3>
                  <span className="font-serif text-xl text-[#DFBA73]">
                    {matchedProduct.formattedPrice}
                  </span>
                </div>
                <p className="text-xs text-[#BDB9AF] font-light mt-2 leading-relaxed">
                  {matchedProduct.character}
                </p>
              </div>

              {/* Matched Highlights */}
              <div className="p-3 bg-white/5 border border-white/5 text-[11px] text-[#E8E5DD] space-y-1">
                <div>
                  <span className="text-[#DFBA73] font-medium mr-2">Core Notes:</span>
                  {matchedProduct.notes.top[0]}, {matchedProduct.notes.heart[0]}, {matchedProduct.notes.base[0]}
                </div>
                <div>
                  <span className="text-[#DFBA73] font-medium mr-2">Longevity:</span>
                  {matchedProduct.metrics.longevity} with {matchedProduct.metrics.sillage}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => openQuickView(matchedProduct)}
                  className="btn-outline-gold py-3 px-4 text-[10px] uppercase tracking-[0.16em] flex items-center justify-center space-x-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Notes</span>
                </button>
                <button
                  onClick={handleAddMatched}
                  className="btn-gold py-3 px-4 text-[10px] uppercase tracking-[0.16em] flex items-center justify-center space-x-1.5 font-bold"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add Match</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

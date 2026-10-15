"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const ProductCollection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.demoPrice - b.demoPrice);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.demoPrice - a.demoPrice);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <section id="collection" className="relative py-16 sm:py-24 lg:py-32 bg-[#08080A]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#DFBA73]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#9E7244]/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2.5 sm:space-x-3">
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#DFBA73] font-medium">
              CURATED ATELIER REPERTOIRE
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
            THE FRAGRANCE COLLECTION
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Five distinctive Extrait de Parfum expressions crafted for presence, longevity, and
            timeless distinction. Every flacon contains 50&nbsp;ml of high-concentration perfume essence.
          </p>

          <div className="pt-1 text-[10px] sm:text-[11px] text-[#8C8A84] tracking-widest uppercase">
            Shown with artisanal solid beechwood closures & European flint glass
          </div>
        </div>

        {/* Filter & Sort Controls */}
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-white/10">
          {/* Category Filter Pills (responsive wrap or swipeable) */}
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] transition-all duration-300 border touch-target ${
                  selectedCategory === cat
                    ? "border-[#DFBA73] bg-[#DFBA73]/15 text-[#DFBA73] font-medium shadow-sm"
                    : "border-white/10 text-[#A6A39B] hover:border-white/30 hover:text-white bg-[#0D0D11]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center justify-end space-x-2.5 sm:space-x-3 shrink-0 self-center md:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#DFBA73] shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8C8A84] shrink-0">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")
              }
              className="bg-[#121216] border border-white/15 text-[#E8E5DD] text-[11px] sm:text-xs uppercase tracking-[0.1em] px-2.5 sm:px-3 py-2 rounded-none focus:outline-none focus:border-[#DFBA73] cursor-pointer"
            >
              <option value="featured">Featured Atelier Order</option>
              <option value="price-asc">Demo Price: Low to High</option>
              <option value="price-desc">Demo Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Reset Filter if no products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 border border-white/10 bg-[#121217] p-6 sm:p-8 max-w-md mx-auto">
            <p className="font-serif text-lg sm:text-xl text-[#F4F0E6]">No fragrances in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 btn-gold px-6 py-2.5 text-xs uppercase tracking-[0.16em]"
            >
              Show All Five Flacons
            </button>
          </div>
        )}

        {/* Demo Pricing Disclosure Callout */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 border border-white/10 bg-[#111115] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-start sm:items-center space-x-3 text-left">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFBA73] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-[11px] sm:text-xs text-[#A8A59D] leading-relaxed">
              <strong className="text-[#DFBA73] font-medium uppercase tracking-wider block sm:inline mr-2">
                Sample Demonstration Pricing:
              </strong>
              Prices displayed above are configurable demonstration placeholders for this client preview.
              Verified business pricing will be connected upon commercial launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

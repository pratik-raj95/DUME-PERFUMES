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
    <section id="collection" className="relative py-24 lg:py-32 bg-[#08080A]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#DFBA73]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#9E7244]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#DFBA73] font-medium">
              CURATED ATELIER REPERTOIRE
            </span>
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4F0E6] tracking-tight">
            THE FRAGRANCE COLLECTION
          </h2>

          <p className="text-sm sm:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Five distinctive Extrait de Parfum expressions crafted for presence, longevity, and
            timeless distinction. Every flacon contains 50&nbsp;ml of high-concentration perfume essence.
          </p>

          <div className="pt-2 text-[11px] text-[#8C8A84] tracking-widest uppercase">
            Shown with artisanal solid beechwood closures & European flint glass
          </div>
        </div>

        {/* Filter & Sort Controls */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "border-[#DFBA73] bg-[#DFBA73]/15 text-[#DFBA73] font-medium shadow-sm"
                    : "border-white/10 text-[#A6A39B] hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-3 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#DFBA73]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C8A84]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")
              }
              className="bg-[#121216] border border-white/15 text-[#E8E5DD] text-xs uppercase tracking-[0.12em] px-3 py-2 rounded-none focus:outline-none focus:border-[#DFBA73] cursor-pointer"
            >
              <option value="featured">Featured Atelier Order</option>
              <option value="price-asc">Demo Price: Low to High</option>
              <option value="price-desc">Demo Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Reset Filter if no products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-white/10 bg-[#121217] p-8">
            <p className="font-serif text-xl text-[#F4F0E6]">No fragrances in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 btn-gold px-6 py-2.5 text-xs uppercase tracking-[0.16em]"
            >
              Show All Five Flacons
            </button>
          </div>
        )}

        {/* Demo Pricing Disclosure Callout */}
        <div className="mt-16 p-6 border border-white/10 bg-[#111115] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <Sparkles className="w-5 h-5 text-[#DFBA73] shrink-0" />
            <p className="text-xs text-[#A8A59D] leading-relaxed">
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

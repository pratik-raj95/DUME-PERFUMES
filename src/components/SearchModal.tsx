"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, openQuickView } = useCart();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const lower = query.toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(lower);
      const matchCategory = p.category.toLowerCase().includes(lower);
      const matchDesc = p.description.toLowerCase().includes(lower);
      const matchNotes = [
        ...p.notes.top,
        ...p.notes.heart,
        ...p.notes.base,
      ].some((note) => note.toLowerCase().includes(lower));

      return matchName || matchCategory || matchDesc || matchNotes;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 pt-20">
      {/* Dark Blur Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={closeSearch} />

      <div className="relative w-full max-w-2xl bg-[#0F0F14] border border-[#DFBA73]/30 shadow-2xl p-6 sm:p-8 z-10">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#DFBA73] font-medium">
            <Search className="w-3.5 h-3.5" />
            <span>DISCOVER FRAGRANCES & NOTES</span>
          </div>
          <button
            onClick={closeSearch}
            className="p-1.5 text-[#8C8A84] hover:text-white"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="relative mt-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DFBA73]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, scent accord, or note (e.g., Bergamot, Vanilla, Sea Salt)..."
            className="w-full bg-[#15151C] border border-white/20 pl-11 pr-4 py-3.5 text-xs text-white placeholder-[#686661] focus:outline-none focus:border-[#DFBA73]"
          />
        </div>

        {/* Note Suggestions Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-[10px] uppercase tracking-wider text-[#8C8A84] self-center mr-1">
            Try:
          </span>
          {["Bergamot", "Marshmallow", "Ambergris", "Smoky Birch", "Sea Salt", "Lavender"].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-[10px] px-2.5 py-1 bg-white/5 hover:bg-[#DFBA73]/10 text-[#C8C5BD] hover:text-[#DFBA73] border border-white/5 transition-colors"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results List */}
        <div className="mt-6 max-h-80 overflow-y-auto space-y-3">
          {searchResults.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#8C8A84]">
              No fragrances matching &ldquo;{query}&rdquo;. Try another search term.
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  closeSearch();
                  openQuickView(product);
                }}
                className="p-3 bg-[#131318] hover:bg-[#181820] border border-white/5 hover:border-[#DFBA73]/30 transition-all flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="relative w-12 h-14 bg-[#0A0A0C] border border-white/5 shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase tracking-wider text-[#DFBA73]">
                      {product.category}
                    </div>
                    <div className="font-serif text-sm text-[#F4F0E6] truncate group-hover:text-[#DFBA73] transition-colors">
                      {product.name}
                    </div>
                    <div className="text-[10px] text-[#8C8A84] truncate">
                      {product.notes.top.slice(0, 2).join(", ")}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className="font-serif text-sm text-[#DFBA73]">
                    {product.formattedPrice}
                  </span>
                  <div className="p-2 bg-white/5 group-hover:bg-[#DFBA73] group-hover:text-[#08080a] text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

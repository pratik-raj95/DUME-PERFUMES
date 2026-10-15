"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Eye, Check } from "lucide-react";
import { PerfumeProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: PerfumeProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, openQuickView } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative flex flex-col bg-[#0F0F13] border border-white/10 hover:border-[#DFBA73]/50 transition-all duration-500 rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#DFBA73]/5"
    >
      {/* Top Bar: Category & Concentration */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/5 bg-[#121217]">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBA73] font-medium">
          {product.category}
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C8A84] font-mono">
          50 ML · EXTRAIT
        </span>
      </div>

      {/* Image Container with Luxury Dark Frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#131318] via-[#0E0E12] to-[#0A0A0C] p-4 flex items-center justify-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(223,186,115,0.06)_0%,transparent_70%)] pointer-events-none" />

        <Image
          src={product.image}
          alt={`DUME Perfumes ${product.name} 50ml flacon`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02]"
        />

        {/* Hover Quick-Action Overlay (desktop) */}
        <div className="absolute inset-0 bg-[#08080A]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="p-3 bg-[#18181D] border border-white/20 hover:border-[#DFBA73] text-[#F4F0E6] hover:text-[#DFBA73] rounded-full transition-all shadow-xl"
            title="View Olfactory Profile"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={handleAddToCart}
            className="p-3 bg-[#DFBA73] hover:bg-[#F3D79B] text-[#08080a] font-bold rounded-full transition-all shadow-xl"
            title="Add to Shopping Bag"
            aria-label={`Add ${product.name} to bag`}
          >
            {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>

        {/* Longevity Badge */}
        <div className="absolute bottom-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#C8C5BD]">
          {product.metrics.longevity}
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4 bg-[#0F0F13]">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F4F0E6] group-hover:text-[#DFBA73] transition-colors leading-snug">
              {product.name}
            </h3>
            <div className="text-right shrink-0">
              <span className="font-serif text-lg text-[#DFBA73] font-medium">
                {product.formattedPrice}
              </span>
              <div className="text-[9px] uppercase tracking-wider text-[#8A8882]">
                Demo Price
              </div>
            </div>
          </div>

          <p className="text-xs text-[#A6A39B] font-light mt-2 line-clamp-2 leading-relaxed">
            {product.character}
          </p>

          {/* Key Notes Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
            {product.notes.top.slice(0, 2).concat(product.notes.base.slice(0, 1)).map((note) => (
              <span
                key={note}
                className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/5 text-[#BDB9AF]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile / Always-visible Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="py-2.5 px-3 text-[10px] uppercase tracking-[0.15em] border border-white/15 bg-transparent hover:bg-white/5 text-[#E8E5DD] transition-all text-center font-medium"
          >
            Inspect Notes
          </button>
          <button
            onClick={handleAddToCart}
            className={`py-2.5 px-3 text-[10px] uppercase tracking-[0.15em] transition-all text-center font-semibold flex items-center justify-center space-x-1 ${
              isAdded
                ? "bg-[#2E7D32] text-white"
                : "bg-[#DFBA73] hover:bg-[#F3D79B] text-[#08080a]"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

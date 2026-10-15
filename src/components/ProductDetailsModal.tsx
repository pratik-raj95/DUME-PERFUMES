"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Check, Clock, Compass, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const ProductDetailsModal: React.FC = () => {
  const { activeQuickViewProduct, closeQuickView, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!activeQuickViewProduct) return null;

  const product = activeQuickViewProduct;

  const handleAdd = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark Blur Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={closeQuickView} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#0F0F14] border border-[#DFBA73]/30 shadow-2xl overflow-hidden my-8 z-10">
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#08080A]/80 hover:bg-[#1A1A22] text-[#8C8A84] hover:text-white transition-all border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Photograph */}
          <div className="md:col-span-5 relative min-h-[350px] md:min-h-full bg-gradient-to-b from-[#15151B] via-[#0E0E12] to-[#08080A] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
            {/* Ambient Spotlight */}
            <div className="absolute w-56 h-56 rounded-full bg-[#DFBA73]/10 blur-2xl pointer-events-none" />

            <div className="relative w-full h-80 md:h-full max-h-[460px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain filter contrast-105"
              />
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-4 left-4 bg-[#08080A]/90 backdrop-blur-md border border-[#DFBA73]/30 px-3 py-1 text-[9px] uppercase tracking-widest text-[#DFBA73]">
              50 ML · EXTRAIT DE PARFUM
            </div>
          </div>

          {/* Right Column: Information, Olfactory Pyramid & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-[#0F0F14]">
            {/* Header */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#DFBA73] font-medium">
                {product.category}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F0E6] mt-1 font-normal">
                {product.name}
              </h2>
              <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-white/5">
                <span className="font-serif text-2xl text-[#DFBA73] font-medium">
                  {product.formattedPrice}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8C8A84]">
                  Demo Sample Price
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#BDB9AF] font-light leading-relaxed">
              {product.description}
            </p>

            {/* Olfactory Notes Pyramid */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#8C8A84] font-medium">
                Olfactory Composition
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 bg-white/5 border border-white/5">
                  <div className="text-[9px] uppercase tracking-wider text-[#DFBA73] font-medium mb-1">
                    Top
                  </div>
                  <div className="text-[#E8E5DD] text-[11px] leading-snug">
                    {product.notes.top.slice(0, 2).join(", ")}
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/5">
                  <div className="text-[9px] uppercase tracking-wider text-[#DFBA73] font-medium mb-1">
                    Heart
                  </div>
                  <div className="text-[#E8E5DD] text-[11px] leading-snug">
                    {product.notes.heart.slice(0, 2).join(", ")}
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/5">
                  <div className="text-[9px] uppercase tracking-wider text-[#DFBA73] font-medium mb-1">
                    Base
                  </div>
                  <div className="text-[#E8E5DD] text-[11px] leading-snug">
                    {product.notes.base.slice(0, 2).join(", ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5 text-xs text-[#A8A59D]">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#DFBA73]" />
                <span>
                  Longevity: <strong className="text-white font-normal">{product.metrics.longevity}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#DFBA73]" />
                <span>
                  Sillage: <strong className="text-white font-normal">{product.metrics.sillage}</strong>
                </span>
              </div>
            </div>

            {/* Tactile Flacon Highlights */}
            <div className="space-y-1.5 text-[11px] text-[#8C8A84]">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-[#DFBA73] rounded-full" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Bag */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Quantity Selector */}
              <div className="inline-flex items-center border border-white/20 bg-[#14141A] self-start sm:self-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-[#A6A39B] hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs font-mono text-[#F4F0E6]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-[#A6A39B] hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className="flex-1 btn-gold py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Add to Shopping Bag · ${(product.demoPrice * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

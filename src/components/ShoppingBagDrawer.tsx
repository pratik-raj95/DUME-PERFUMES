"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const ShoppingBagDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    openCheckout,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Blur Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-[420px] max-w-full bg-[#0D0D11] border-l border-white/10 shadow-2xl flex flex-col justify-between h-full">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#111116] gap-2">
            <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
              <ShoppingBag className="w-5 h-5 text-[#DFBA73] shrink-0" />
              <div className="min-w-0">
                <h3 className="font-serif text-base sm:text-lg text-[#F4F0E6] uppercase tracking-[0.14em] sm:tracking-[0.16em] truncate">
                  YOUR SHOPPING BAG
                </h3>
                <p className="text-[9px] sm:text-[10px] text-[#8C8A84] tracking-wider uppercase">
                  {totalItems} {totalItems === 1 ? "Flacon" : "Flacons"} Selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-[#A6A39B] hover:text-white hover:bg-white/5 transition-all touch-target flex items-center justify-center shrink-0"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                  <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-[#DFBA73]/60" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E6]">Your Shopping Bag Is Empty</h4>
                <p className="text-xs text-[#8C8A84] max-w-xs leading-relaxed">
                  Discover our five signature Extrait de Parfum creations and select a flacon to
                  begin your olfactory journey.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    const el = document.getElementById("collection");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-gold py-3 px-6 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold mt-3 touch-target"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3 sm:space-y-4">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-3 sm:p-4 bg-[#14141A] border border-white/5 flex gap-3 sm:gap-4 items-center relative group rounded-sm"
                    >
                      {/* Product Thumbnail with Real Photo */}
                      <div className="relative w-16 h-20 sm:w-20 sm:h-24 bg-[#0A0A0C] border border-white/5 shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </div>

                      {/* Info & Adjustments */}
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#DFBA73] truncate">
                          {product.category}
                        </div>
                        <h4 className="font-serif text-sm sm:text-base text-[#F4F0E6] truncate font-normal">
                          {product.name}
                        </h4>
                        <div className="text-[10px] sm:text-[11px] text-[#8C8A84] mt-0.5">
                          50 ML Extrait de Parfum
                        </div>

                        <div className="flex items-center justify-between mt-2.5 sm:mt-3 gap-2">
                          {/* Quantity Controls */}
                          <div className="inline-flex items-center border border-white/15 bg-[#0C0C10]">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1.5 sm:p-2 text-[#A6A39B] hover:text-white transition-colors touch-target flex items-center justify-center"
                              aria-label={`Decrease quantity for ${product.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 sm:px-3 text-xs font-mono text-[#F4F0E6]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1.5 sm:p-2 text-[#A6A39B] hover:text-white transition-colors touch-target flex items-center justify-center"
                              aria-label={`Increase quantity for ${product.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right shrink-0">
                            <div className="font-serif text-sm sm:text-base text-[#DFBA73]">
                              ${(product.demoPrice * quantity).toFixed(2)}
                            </div>
                            <div className="text-[8px] sm:text-[9px] text-[#8C8A84]">
                              ${product.demoPrice}.00 each
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-[#6B6964] hover:text-[#E57373] transition-colors p-1.5 self-start touch-target flex items-center justify-center"
                        title="Remove product"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={clearCart}
                    className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C8A84] hover:text-[#E57373] transition-colors py-1"
                  >
                    Clear All Items
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Checkout Trigger */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#111116] space-y-3 sm:space-y-4">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex justify-between text-xs text-[#A6A39B]">
                  <span>Atelier Subtotal</span>
                  <span className="font-mono text-[#F4F0E6]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#A6A39B]">
                  <span>Shipping (Demo)</span>
                  <span className="text-[#DFBA73]">Complimentary White-Glove</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="font-serif text-sm sm:text-base uppercase text-[#F4F0E6]">Estimated Total</span>
                  <span className="font-serif text-xl sm:text-2xl text-[#DFBA73] font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={openCheckout}
                className="w-full btn-gold py-3.5 sm:py-4 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold flex items-center justify-center space-x-2 shadow-xl shadow-[#DFBA73]/10 touch-target"
              >
                <span>PROCEED TO DEMO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="text-[9px] sm:text-[10px] text-center text-[#8C8A84] leading-relaxed">
                Demo client demonstration · No real charges will be processed
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

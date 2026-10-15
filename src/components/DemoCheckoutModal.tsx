"use client";

import React, { useState } from "react";
import { X, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { SITE_CONFIG } from "@/data/config";

export const DemoCheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, items, subtotal, clearCart } = useCart();

  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "demo-card",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrder = `DUME-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsSubmitting(false);
      setStep("confirmed");
    }, 1200);
  };

  const handleFinish = () => {
    clearCart();
    setStep("form");
    closeCheckout();
  };

  // Build prefilled WhatsApp inquiry message
  const itemsText = items.map((i) => `${i.product.name} (x${i.quantity})`).join(", ");
  const whatsappOrderMessage = encodeURIComponent(
    `Hello DUME Perfumes Atelier, I would like to confirm my order #${orderNumber || "NEW"}: ${itemsText}. Total: $${subtotal.toFixed(2)}. Name: ${formData.name || "Collector"}.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={closeCheckout} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0F0F14] border border-[#DFBA73]/30 shadow-2xl p-6 sm:p-10 my-8 z-10">
        <button
          onClick={closeCheckout}
          className="absolute top-6 right-6 p-2 text-[#8C8A84] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="pb-6 border-b border-white/10">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#DFBA73] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DEMONSTRATION CHECKOUT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E6] mt-1 font-normal">
                COMPLETE YOUR BESPOKE ORDER
              </h3>
              <p className="text-xs text-[#8C8A84] mt-1">
                Provide delivery details below to preview the client ordering workflow.
              </p>
            </div>

            {/* Order Items Preview */}
            <div className="py-4 border-b border-white/10 max-h-40 overflow-y-auto space-y-2">
              {items.map((i) => (
                <div key={i.product.id} className="flex items-center justify-between text-xs">
                  <span className="text-[#E8E5DD]">
                    {i.product.name} <span className="text-[#DFBA73]">×{i.quantity}</span>
                  </span>
                  <span className="font-mono text-[#DFBA73]">
                    ${(i.product.demoPrice * i.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="pt-2 flex justify-between text-xs font-semibold text-[#F4F0E6] border-t border-white/5">
                <span>Total Amount:</span>
                <span className="font-serif text-base text-[#DFBA73]">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Vance"
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    City & Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="New York, NY"
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address, suite, or luxury residence"
                  className="w-full bg-[#15151C] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73]"
                />
              </div>

              {/* Payment Demo Mode */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                  Select Demo Checkout Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "demo-card", label: "Demo Card Payment", sub: "Instant simulation" },
                    { id: "whatsapp", label: "WhatsApp Direct", sub: "Send to concierge" },
                    { id: "cod", label: "Cash on Delivery", sub: "Courier on arrival" },
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                      className={`p-3 text-left border text-xs transition-all ${
                        formData.paymentMethod === m.id
                          ? "border-[#DFBA73] bg-[#DFBA73]/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-[#8C8A84]"
                      }`}
                    >
                      <div className="font-medium text-[#F4F0E6]">{m.label}</div>
                      <div className="text-[10px] text-[#A6A39B] mt-0.5">{m.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-4 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Securing Demo Reservation...</span>
                  ) : (
                    <>
                      <span>CONFIRM DEMO ORDER (${subtotal.toFixed(2)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#8C8A84]">
                This is a high-fidelity demonstration. No live card charges or merchant credentials are required.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#DFBA73]/10 border border-[#DFBA73]/40 flex items-center justify-center mx-auto text-[#DFBA73]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFBA73] font-medium">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-serif text-3xl text-[#F4F0E6] mt-1 font-normal">
                THANK YOU, {formData.name || "COLLECTOR"}
              </h3>
              <p className="text-sm text-[#A6A39B] mt-2 font-light">
                Your bespoke order has been registered in our demonstration ledger.
              </p>
            </div>

            <div className="p-5 bg-[#14141A] border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8A84]">Order Reference:</span>
                <span className="font-mono text-[#DFBA73] font-bold">{orderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8A84]">Flacons Reserved:</span>
                <span className="text-white">{items.length} items</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8A84]">Total (Demo):</span>
                <span className="font-serif text-base text-[#DFBA73]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8A84]">Destination:</span>
                <span className="text-white truncate max-w-[200px]">{formData.city || "Client Address"}</span>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Dispatch CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappOrderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-3.5 px-6 text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp Concierge</span>
              </a>

              <button
                onClick={handleFinish}
                className="btn-outline-gold py-3.5 px-6 text-xs uppercase tracking-[0.16em]"
              >
                Return to Atelier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

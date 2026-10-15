"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { PRODUCTS } from "@/data/products";

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    fragranceInterest: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", fragranceInterest: "general", message: "" });
    }, 1200);
  };

  const whatsappInquiryUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello DUME Perfumes Concierge, I would like to inquire regarding the 50 ML Extrait de Parfum collection."
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-[#08080A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2.5 sm:space-x-3">
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#DFBA73] font-medium">
              CONCIERGE & ATELIER
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
            CONNECT WITH DUME
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Have questions about a specific fragrance profile, bespoke gifting, or bulk sampling?
            Our fragrance advisors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Configurable Business Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#101015] border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 rounded-sm">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0E6] font-normal">
                Atelier Concierge
              </h3>

              <div className="space-y-4 text-xs text-[#C8C5BD]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8A84] block mb-0.5">
                      Studio & Atelier
                    </span>
                    <span>{SITE_CONFIG.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8A84] block mb-0.5">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="hover:text-[#DFBA73] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8A84] block mb-0.5">
                      Consultation Hours
                    </span>
                    <span>{SITE_CONFIG.hours}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Concierge Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold py-3.5 px-6 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#DFBA73]/10 touch-target"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp Concierge</span>
                </a>
                <p className="text-[10px] text-center text-[#787670] mt-2">
                  Instant live response during atelier hours · Configurable demo line
                </p>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-4 border border-white/5 bg-white/[0.02] text-[11px] text-[#8C8A84] leading-relaxed rounded-sm">
              <strong>Atelier Note:</strong> For production deployment, all telephone and WhatsApp
              endpoints can be configured in <code className="text-[#DFBA73]">src/data/config.ts</code> without modifying component source code.
            </div>
          </div>

          {/* Right Column: Inquiry Contact Form */}
          <div className="lg:col-span-7 bg-[#101015] border border-white/10 p-5 sm:p-8 lg:p-10 rounded-sm">
            <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0E6] mb-1.5 font-normal">
              Send a Bespoke Message
            </h3>
            <p className="text-xs text-[#8C8A84] mb-5 sm:mb-6">
              Our olfactory consultants respond within 24 hours.
            </p>

            {status === "sent" ? (
              <div className="py-10 sm:py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#DFBA73]/10 border border-[#DFBA73]/40 flex items-center justify-center mx-auto text-[#DFBA73]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#F4F0E6]">Inquiry Received</h4>
                <p className="text-xs text-[#A6A39B] max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting DUME PERFUMES. Our fragrance advisor has received your
                  message and will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline-gold py-2.5 px-6 text-xs uppercase tracking-[0.16em] mt-2 touch-target"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Lawrence Sterling"
                      className="w-full bg-[#15151C] border border-white/15 px-3.5 py-3 text-base sm:text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73] rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="lawrence@domain.com"
                      className="w-full bg-[#15151C] border border-white/15 px-3.5 py-3 text-base sm:text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73] rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Fragrance of Interest
                  </label>
                  <select
                    value={form.fragranceInterest}
                    onChange={(e) => setForm({ ...form, fragranceInterest: e.target.value })}
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-3 text-base sm:text-xs text-white focus:outline-none focus:border-[#DFBA73] rounded-none"
                  >
                    <option value="general">General Atelier Inquiry / Recommendation</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (50 ML Extrait)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your question or olfactory preferences..."
                    className="w-full bg-[#15151C] border border-white/15 px-3.5 py-3 text-base sm:text-xs text-white placeholder-[#5E5D59] focus:outline-none focus:border-[#DFBA73] rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-gold py-3.5 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 touch-target"
                >
                  {status === "submitting" ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-3.5 h-3.5 ml-1.5 shrink-0" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

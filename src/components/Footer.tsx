"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/data/config";
import { useCart } from "@/context/CartContext";

export const Footer: React.FC = () => {
  const { openQuickView } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#060608] text-[#9A9892] border-t border-white/10 pt-14 sm:pt-20 pb-10 sm:pb-12 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#DFBA73]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Info & Monogram */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DFBA73]/40 flex items-center justify-center bg-[#121216] shrink-0">
                <span className="font-serif text-base sm:text-lg text-[#DFBA73]">D</span>
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl tracking-[0.22em] sm:tracking-[0.25em] text-[#F4F0E6] uppercase block">
                  DUME
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.35em] text-[#DFBA73]/80 uppercase block">
                  PERFUMES
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8C8A84] leading-relaxed max-w-sm">
              Artisanal luxury perfumery crafting concentrated Extrait de Parfum creations.
              Distinguished by turned solid beechwood closures, heavy European flint glass flacons,
              and lingering sillage.
            </p>

            <div className="text-[11px] text-[#A6A39B] space-y-1">
              <div>
                <strong className="text-[#DFBA73] font-normal uppercase tracking-wider">
                  Concentration:
                </strong>{" "}
                Extrait de Parfum (50 ML)
              </div>
              <div>
                <strong className="text-[#DFBA73] font-normal uppercase tracking-wider">
                  Closures:
                </strong>{" "}
                Artisanal Turned Solid Beechwood
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#DFBA73] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              {[
                { label: "Home Atelier", id: "hero" },
                { label: "The Collection", id: "collection" },
                { label: "Brand Philosophy", id: "story" },
                { label: "Fragrance Finder", id: "finder" },
                { label: "Why DUME", id: "why-dume" },
                { label: "Atelier Concierge", id: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-[#DFBA73] transition-colors py-1 block text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* The 5 Flacons Directory */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#DFBA73] font-medium">
              The Five Flacons
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => openQuickView(p)}
                    className="hover:text-[#DFBA73] transition-colors text-left flex items-center justify-between w-full group py-1"
                  >
                    <span className="truncate group-hover:underline">{p.name}</span>
                    <span className="text-[10px] text-[#DFBA73]/70 font-mono ml-2 shrink-0">
                      50 ML
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Care & Atelier Dispatches */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#DFBA73] font-medium">
              Atelier Inquiries
            </h4>
            <p className="text-xs text-[#8C8A84] leading-relaxed">
              Available Monday through Saturday for bespoke guidance and discovery consultations.
            </p>
            <div className="text-xs text-[#C8C5BD] space-y-1">
              <div className="break-all">{SITE_CONFIG.email}</div>
              <div>{SITE_CONFIG.hours}</div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-[#DFBA73] hover:underline touch-target"
              >
                <span>WhatsApp Private Line</span>
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Brand Transparency */}
        <div className="py-6 sm:py-8 border-b border-white/5 text-[10px] sm:text-[11px] text-[#73716B] leading-relaxed space-y-2 sm:space-y-3">
          <p>
            <strong className="text-[#8C8A84] font-medium uppercase tracking-wider mr-1">
              Brand & Olfactory Disclosure:
            </strong>
            DUME PERFUMES is an independent luxury fragrance atelier. Product names visible on the
            supplied client photographs (Rasasi Hawas Ice, CR7 Blue, Creed Aventus, Yum Boujee
            Marshmallow, Dior Sauvage) are depicted faithfully from actual client product assets for
            commercial presentation. DUME does not claim official affiliation or trademark ownership
            with the referenced designer fragrance houses.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6C66] text-center sm:text-left">
          <div>
            © 2026 DUME PERFUMES Atelier. All rights reserved. Client demonstration version.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#A6A39B] hover:text-[#DFBA73] transition-colors group touch-target"
          >
            <span>Back to Top</span>
            <div className="p-2 rounded-full border border-white/10 group-hover:border-[#DFBA73] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

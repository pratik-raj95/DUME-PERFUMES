"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const RitualBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0C0C10] via-[#15151B] to-[#0C0C10] border-y border-[#DFBA73]/20 overflow-hidden">
      {/* Ambient decorative lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(223,186,115,0.05)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#DFBA73] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE EXTRAIT RITUAL</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F0E6] font-normal leading-snug">
              THE ART OF ENDURING SILLAGE & APPLICATION
            </h3>

            <p className="text-sm text-[#BDB9AF] font-light max-w-2xl leading-relaxed">
              Because DUME flacons contain Extrait de Parfum concentration, a single spray on
              warm pulse points (wrist pulse, clavicle, and the nape of the neck) creates a
              tenacious aura that blossoms over twelve hours. Never rub wrists together; allow the
              natural perfume oils to settle organically.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="p-4 bg-[#08080A]/70 border border-white/10 text-left">
              <div className="text-xs uppercase tracking-[0.16em] text-[#DFBA73] font-medium">
                Atelier Storage Note
              </div>
              <p className="text-xs text-[#8C8A84] mt-1 leading-relaxed">
                Preserve your flacon in ambient darkness at stable room temperature to maintain the
                integrity of natural oils.
              </p>
            </div>
            <div className="p-4 bg-[#08080A]/70 border border-white/10 text-left">
              <div className="text-xs uppercase tracking-[0.16em] text-[#DFBA73] font-medium">
                Solid Wood Tactile Seal
              </div>
              <p className="text-xs text-[#8C8A84] mt-1 leading-relaxed">
                Always reseat the beechwood closure firmly after application to secure the precision
                atomizer seal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

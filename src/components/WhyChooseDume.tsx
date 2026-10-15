"use client";

import React from "react";
import { Sparkles, Layers, Shield, Droplets } from "lucide-react";
import { BRAND_VALUES } from "@/data/products";

const ICONS = [Droplets, Layers, Sparkles, Shield];

export const WhyChooseDume: React.FC = () => {
  return (
    <section id="why-dume" className="relative py-16 sm:py-24 lg:py-32 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2.5 sm:space-x-3">
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#DFBA73] font-medium">
              THE ATELIER STANDARD
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
            WHY DISCERNING COLLECTORS CHOOSE DUME
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Crafted for connoisseurs who value tactile elegance, lingering projection, and memorable
            olfactory depth.
          </p>
        </div>

        {/* 4 Editorial Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BRAND_VALUES.map((val, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={val.title}
                className="bg-[#101014] border border-white/10 hover:border-[#DFBA73]/40 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/5">
                    <span className="font-mono text-xs text-[#DFBA73] tracking-widest">
                      {val.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#DFBA73]/70 group-hover:text-[#DFBA73] transition-colors shrink-0" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#F4F0E6] mt-4 sm:mt-6 group-hover:text-[#DFBA73] transition-colors leading-snug">
                    {val.title}
                  </h3>

                  <p className="text-xs text-[#A6A39B] font-light mt-2.5 sm:mt-3 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#DFBA73]/60 font-mono">
                  Standard of Excellence
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

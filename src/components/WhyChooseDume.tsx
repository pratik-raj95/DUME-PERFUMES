"use client";

import React from "react";
import { Sparkles, Layers, Shield, Droplets } from "lucide-react";
import { BRAND_VALUES } from "@/data/products";

const ICONS = [Droplets, Layers, Sparkles, Shield];

export const WhyChooseDume: React.FC = () => {
  return (
    <section id="why-dume" className="relative py-24 lg:py-32 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#DFBA73] font-medium">
              THE ATELIER STANDARD
            </span>
            <span className="w-8 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4F0E6] tracking-tight">
            WHY DISCERNING COLLECTORS CHOOSE DUME
          </h2>

          <p className="text-sm sm:text-base text-[#A8A59D] font-light max-w-xl mx-auto leading-relaxed">
            Crafted for connoisseurs who value tactile elegance, lingering projection, and memorable
            olfactory depth.
          </p>
        </div>

        {/* 4 Editorial Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((val, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={val.title}
                className="bg-[#101014] border border-white/10 hover:border-[#DFBA73]/40 p-8 flex flex-col justify-between space-y-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <span className="font-mono text-xs text-[#DFBA73] tracking-widest">
                      {val.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#DFBA73]/70 group-hover:text-[#DFBA73] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl text-[#F4F0E6] mt-6 group-hover:text-[#DFBA73] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-xs text-[#A6A39B] font-light mt-3 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-[#DFBA73]/60 font-mono">
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

"use client";

import React from "react";
import Image from "next/image";
import { Compass, Feather, Sparkles } from "lucide-react";

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative py-16 sm:py-24 lg:py-32 bg-[#0B0B0E] overflow-hidden border-y border-white/5">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#DFBA73]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#9E7244]/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2.5 sm:space-x-3">
            <span className="w-5 sm:w-6 h-[1px] bg-[#DFBA73]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#DFBA73] font-medium">
              THE PHILOSOPHY OF DUME
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-[#DFBA73]" />
          </div>

          <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
            MORE THAN A FRAGRANCE. <br />
            <span className="italic text-gold-gradient font-light">
              A PERSONAL SIGNATURE.
            </span>
          </h2>

          <div className="w-12 sm:w-16 h-[1px] bg-[#DFBA73]/40 mx-auto mt-4 sm:mt-6" />
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Frame & Tactile Wooden Cap Detail */}
          <div className="lg:col-span-6 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#DFBA73]/25 p-2 sm:p-3 bg-[#111115] shadow-2xl">
              <div className="relative w-full h-full overflow-hidden bg-[#070709]">
                <Image
                  src="/images/rasasi-hawas-ice.jpg"
                  alt="DUME Perfumes Extrait de Parfum flacon craftsmanship"
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 450px, 50vw"
                  className="object-contain p-3 sm:p-4 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Tactile Detail Card */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-[#0B0B0E]/90 backdrop-blur-md border border-[#DFBA73]/30">
                  <div className="flex items-start space-x-2.5 sm:space-x-3">
                    <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFBA73] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm text-[#F4F0E6] tracking-wide font-normal">
                        Turned Solid Beechwood Closure
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#A6A39B] mt-0.5 sm:mt-1 leading-relaxed">
                        Each bottle is capped with a hand-polished spherical wooden stopper,
                        grounding the sensory experience of every application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
            <div className="space-y-4 sm:space-y-6 text-[#C8C5BD] font-light leading-relaxed text-sm sm:text-base lg:text-lg">
              <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:text-[#DFBA73] first-letter:float-left first-letter:mr-2.5 sm:first-letter:mr-3 first-letter:leading-none">
                Fragrance is the most intimate form of memory. Long before you speak, and hours
                after you have departed, your olfactory trail remains — an invisible impression
                etched into the air and remembered by those who crossed your path.
              </p>

              <p>
                At <span className="text-[#F4F0E6] font-medium">DUME PERFUMES</span>, our conviction
                is simple: luxury should be felt in the weight of the glass, the tactile grain of
                the wooden closure, and the relentless endurance of true Extrait de Parfum
                concentration.
              </p>

              <p>
                Rather than diluted sprays that evaporate within hours, our formulations are
                developed with high oil density. Whether you gravitate toward the sub-zero oceanic
                vitality of <span className="text-[#DFBA73]">Rasasi Hawas Ice</span>, the sovereign
                smoky majesty of <span className="text-[#DFBA73]">Creed Aventus</span>, or the
                indulgent confectionery embrace of{" "}
                <span className="text-[#DFBA73]">Yum Boujee Marshmallow</span>, each creation is a
                deliberate statement of individuality.
              </p>
            </div>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-white/10">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-[#DFBA73]">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium">
                    Pure Extrait Concentration
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#8E8B83] leading-relaxed">
                  Generous perfume oil ratios formulated for depth, character, and 12+ hour presence.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-[#DFBA73]">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium">
                    Tactile Sensory Ritual
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#8E8B83] leading-relaxed">
                  Smooth turned wooden sphere, clear crystal flacon, and crisp atomization.
                </p>
              </div>
            </div>

            {/* Editorial Signature Quote */}
            <div className="p-4 sm:p-5 border-l-2 border-[#DFBA73] bg-[#121216] italic font-serif text-base sm:text-lg text-[#F4F0E6]">
              &ldquo;We do not create fragrances to blend into the background. We craft signatures
              that linger in memory.&rdquo;
              <div className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#DFBA73] not-italic mt-1.5 sm:mt-2">
                — DUME Atelier Direction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

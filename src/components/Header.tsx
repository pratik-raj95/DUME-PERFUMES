"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Header: React.FC = () => {
  const { totalItems, openCart, openSearch } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Fragrance Finder", href: "#finder" },
    { label: "Why DUME", href: "#why-dume" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl shadow-black/80"
            : "bg-transparent py-3 sm:py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-1 text-[#E8E5DD] hover:text-[#DFBA73] transition-colors touch-target flex items-center justify-center"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Brand Logo & Wordmark */}
            <Link
              href="#hero"
              className="flex items-center space-x-2 sm:space-x-3 group text-left shrink-0"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
            >
              {/* Luxury Monogram */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#DFBA73]/40 flex items-center justify-center bg-[#121215] group-hover:border-[#DFBA73] transition-all duration-300 shrink-0">
                <span className="font-serif text-base sm:text-lg font-light text-[#DFBA73] tracking-widest pl-0.5">
                  D
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-normal tracking-[0.22em] sm:tracking-[0.28em] text-[#F4F0E6] uppercase group-hover:text-[#DFBA73] transition-colors leading-tight">
                  DUME
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.35em] text-[#DFBA73]/80 uppercase font-light leading-none">
                  PERFUMES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs uppercase tracking-[0.18em] xl:tracking-[0.2em] text-[#C8C5BD] hover:text-[#DFBA73] transition-colors relative py-1 group font-light"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DFBA73] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Action Buttons: Search & Shopping Bag */}
            <div className="flex items-center space-x-1 sm:space-x-3 shrink-0">
              <button
                onClick={openSearch}
                className="p-2 text-[#C8C5BD] hover:text-[#DFBA73] transition-colors rounded-full hover:bg-white/5 touch-target flex items-center justify-center"
                aria-label="Search fragrances"
                title="Search fragrances"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={openCart}
                className="relative p-2 text-[#F4F0E6] hover:text-[#DFBA73] transition-colors rounded-full hover:bg-white/5 touch-target flex items-center justify-center"
                aria-label="View shopping bag"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItems > 0 && (
                  <span className="absolute 0 top-0.5 right-0.5 min-w-[18px] h-[18px] sm:min-w-[20px] sm:h-[20px] px-1 bg-[#DFBA73] text-[#08080a] text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNavClick("#collection")}
                className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.16em] px-3.5 py-2 border border-[#DFBA73]/40 text-[#DFBA73] hover:bg-[#DFBA73] hover:text-[#08080a] transition-all duration-300 font-medium"
              >
                <span>Curated Flacons</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[88%] max-w-sm bg-[#0E0E12] border-r border-[#DFBA73]/20 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full border border-[#DFBA73]/40 flex items-center justify-center bg-[#18181c]">
                  <span className="font-serif text-sm text-[#DFBA73]">D</span>
                </div>
                <div>
                  <div className="font-serif text-base tracking-[0.22em] text-[#F4F0E6]">DUME</div>
                  <div className="text-[8px] tracking-[0.3em] text-[#DFBA73]">PERFUMES</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#C8C5BD] hover:text-[#DFBA73] touch-target flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between py-3.5 px-1 text-left border-b border-white/5 text-xs sm:text-sm uppercase tracking-[0.16em] text-[#E8E5DD] hover:text-[#DFBA73] transition-colors touch-target"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-[10px] text-[#DFBA73]/60 font-mono">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBA73]/50" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full py-3.5 px-4 border border-[#DFBA73]/40 bg-[#DFBA73]/10 text-[#DFBA73] text-xs uppercase tracking-[0.18em] flex items-center justify-center space-x-2 font-medium touch-target"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shopping Bag ({totalItems})</span>
            </button>
            <p className="text-[10px] sm:text-[11px] text-[#8C8A84] text-center tracking-wider uppercase">
              50 ML Extrait de Parfum Atelier
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

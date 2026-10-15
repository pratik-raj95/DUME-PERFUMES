"use client";

import React, { useState } from "react";
import { Mail, Check, ArrowRight, Sparkles } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0A0E] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#DFBA73]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#DFBA73] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRIVATE ATELIER DISPATCHES</span>
        </div>

        <h2 className="font-serif text-fluid-h2 font-normal text-[#F4F0E6] tracking-tight">
          JOIN THE PRIVATE RESERVE
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-[#BDB9AF] font-light max-w-lg mx-auto leading-relaxed">
          Receive confidential announcements of new batch distillations, olfactory insights, and
          private collector invitations.
        </p>

        {status === "success" ? (
          <div className="p-5 sm:p-6 bg-[#121217] border border-[#DFBA73]/40 max-w-md mx-auto text-center space-y-2 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-[#DFBA73]/10 border border-[#DFBA73]/40 flex items-center justify-center mx-auto text-[#DFBA73]">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-[#F4F0E6]">Welcome to the Private Reserve</h4>
            <p className="text-xs text-[#A6A39B]">
              Your invitation has been registered. You will receive our next quarterly dispatch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8A84]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email address"
                  className="w-full bg-[#121217] border border-white/15 pl-11 pr-4 py-3 text-base sm:text-xs text-white placeholder-[#686661] focus:outline-none focus:border-[#DFBA73] transition-colors rounded-none touch-target"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold py-3 px-6 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 shrink-0 touch-target"
              >
                {status === "loading" ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" />
                  </>
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="text-[11px] text-[#E57373] text-left">{errorMessage}</p>
            )}

            <p className="text-[9px] sm:text-[10px] text-[#787670] tracking-wider uppercase">
              Respectful communication · Unsubscribe at any time
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowRight, Smartphone } from "lucide-react";

export default function AppBanner() {
  return (
    <section className="relative bg-[#050505] py-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 space-y-8">
              <div className="inline-block px-3 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
                Begin Your 30-Day Trial Now
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Logistics at your fingertips.{" "}
                  <span className="text-white/60">Download the app today.</span>
                </h2>

                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-lg">
                  Manage shipments, track cargo, and control logistics operations in real time with
                  one powerful mobile platform.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => alert("SWTS Mobile App available soon on iOS App Store and Google Play Store!")}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-md active:scale-95 group"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download App</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative lg:col-span-5 h-[360px] sm:h-[440px] lg:h-full min-h-[400px] overflow-hidden">
              {/* Emblem */}
              <div className="absolute top-6 right-6 z-10 flex gap-1">
                <div className="w-1.5 h-6 bg-white/80 transform -skew-x-12" />
                <div className="w-1.5 h-6 bg-white/60 transform -skew-x-12" />
                <div className="w-1.5 h-6 bg-white/40 transform -skew-x-12" />
              </div>

              <img
                src="/assets/14d9dde4e63b237208e67399cd4332b23ba64c16.png"
                alt="Logistics driver with tablet by delivery van"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0f0f0f] lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

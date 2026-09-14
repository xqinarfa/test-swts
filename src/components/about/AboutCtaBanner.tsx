"use client";

import React from "react";
import Link from "next/link";

export default function AboutCtaBanner() {
  return (
    <section className="relative bg-neutral-950 py-16 sm:py-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-14 lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#93c5fd] font-semibold block">
                Technical Support & Overhauls
              </span>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Reliable Engineering for Critical Operating Assets
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Coordinate component reconditioning, cryogenic pump overhauls, HVOF coating, or precision dynamic balancing directly with our workshop engineers in Singapore and Batam.
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-3">
                <Link
                  href="/#quote"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0C4B92] hover:bg-[#093a72] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  Request Technical Consultation
                </Link>

                <Link
                  href="/specializations"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs uppercase tracking-wider font-medium transition-colors"
                >
                  View Workshop Disciplines
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative lg:col-span-5 h-[320px] sm:h-[400px] lg:h-full min-h-[360px] overflow-hidden">
              <img
                src="/assets/specializations/hero-workshop.jpg"
                alt="SWTS Heavy Engineering Workshop"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-neutral-900 lg:via-transparent lg:to-transparent" />

              <div className="absolute top-5 right-5 bg-neutral-950/80 border border-neutral-700 px-3 py-1.5 rounded text-white">
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                  Singapore & Batam Workshops
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

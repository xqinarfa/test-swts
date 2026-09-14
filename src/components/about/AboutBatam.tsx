"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/content";

export default function AboutBatam() {
  const { batam } = ABOUT_DATA;

  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
              {batam.badge}
            </span>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
                {batam.title}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-800 leading-snug">
                {batam.subtitle}
              </p>
            </div>

            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              {batam.description}
            </p>

            <p className="text-base text-neutral-900 leading-relaxed font-medium pt-2 border-t border-neutral-200">
              {batam.subDescription}
            </p>

            {/* Targeted Sectors Grid */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Primary Industrial Sectors Supported:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {batam.sectors.map((sec: string, i: number) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-800"
                  >
                    {sec}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Workshop Facility Profile */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 shadow-md flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={batam.image}
                  alt="PT. SWTS Batam Workshop Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-300 block mb-0.5 font-medium">
                    Technical Service Center
                  </span>
                  <h3 className="font-bold text-lg text-white">
                    Batam Heavy Engineering Facility
                  </h3>
                </div>
              </div>

              {/* Specification Note */}
              <div className="p-5 bg-neutral-900 text-neutral-300 border-t border-neutral-800">
                <p className="text-xs leading-relaxed font-normal">
                  Equipped with multi-axis CNC turning, 8m horizontal honing benches, HVAF thermal spray cells, pulse laser deposition, and cryogenic testing facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

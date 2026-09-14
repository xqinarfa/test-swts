"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/content";

export default function AboutStory() {
  const { asia, singapore } = ABOUT_DATA;

  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section: SWTS Asia Overview & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Comprehensive Overview */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
                {asia.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
                {asia.title}
              </h2>

              <p className="text-lg sm:text-xl font-medium text-neutral-800 leading-snug">
                {asia.subtitle}
              </p>

              <p className="text-base text-neutral-700 leading-relaxed font-normal pt-1">
                {asia.description}
              </p>
            </div>
          </div>

          {/* Right Column: 4 Technical Engineering Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {asia.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all duration-200 flex flex-col gap-2.5"
              >
                <span className="text-xs font-semibold text-[#0C4B92] tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-base text-neutral-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: SWTS Singapore (50+ Years Heritage) */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Info */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                {singapore.badge}
              </span>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {singapore.title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-neutral-400 font-medium">
                  {singapore.headline}
                </p>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                {singapore.description}
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed pt-3 border-t border-neutral-800">
                {singapore.details}
              </p>
            </div>

            {/* Right Col: 4 Authentic Operational Metric Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {singapore.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between min-h-[120px]"
                >
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.value}
                    </span>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-semibold mt-1">
                      {item.label}
                    </h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed mt-2 pt-2 border-t border-neutral-800">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

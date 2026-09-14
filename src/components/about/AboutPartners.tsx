"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/content";

export default function AboutPartners() {
  const partnersList = ABOUT_DATA.partners?.list || [];

  if (partnersList.length === 0) return null;

  // Quadruple the array so that the 50% translation keyframe loops seamlessly
  const tickerItems = [
    ...partnersList,
    ...partnersList,
    ...partnersList,
    ...partnersList,
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-t border-neutral-200 overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-12 text-center space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold block">
          OEM & Strategic Technology Alliances
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
          Our Partners
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
          Authorized service, technical representation, and integrated engineering collaboration with world-leading equipment manufacturers.
        </p>
      </div>

      {/* Infinite Logo Ticker Strip with pause on hover & gentle magnification */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8 border-y border-neutral-100 bg-neutral-50/40">
        {/* Soft gradient edge masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Moving Ticker Track (slower duration: 52s, pauses on hover) */}
        <div
          className="flex animate-ticker w-max items-center hover:[animation-play-state:paused]"
          style={{ animationDuration: "52s" }}
        >
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center px-8 sm:px-14 shrink-0 select-none cursor-pointer"
              title={partner.name}
            >
              <div className="h-16 sm:h-20 w-36 sm:w-48 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-120 hover:drop-shadow-xs">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-11 sm:max-h-14 w-auto max-w-[140px] sm:max-w-[170px] object-contain transition-transform duration-300 pointer-events-auto"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

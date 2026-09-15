"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Ship, Anchor, Zap, Factory, Server } from "lucide-react";
import { SERVICES_SECTORS, SectorData } from "@/data/servicesData";

interface FiveServicesGridProps {
  onSelectSector: (sectorId: string) => void;
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  marine: Ship,
  offshore: Anchor,
  "power-plant": Zap,
  "process-industry": Factory,
  "data-center": Server,
};

export default function FiveServicesGrid({ onSelectSector }: FiveServicesGridProps) {
  return (
    <section id="five-core-services" className="relative w-full py-12 md:py-20 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0C4B92]/10 border border-[#0C4B92]/20">
              <span className="w-2 h-2 rounded-full bg-[#0C4B92]" />
              <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
                SERVICES (05) · Core Verticals
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Our 5 Core Engineering Sectors
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Specialized mechanical, electrical, and rotating equipment solutions engineered to maximize
              uptime and reliability for demanding marine, offshore, and industrial operations.
            </p>
          </div>

          <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
            Select a service to view technical scopes
          </div>
        </div>

        {/* 5 Cards Grid - Modeled after the Framer Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_SECTORS.map((sector, index) => {
            const Icon = SECTOR_ICONS[sector.id] || Ship;
            const isFifth = index === 4; // Data Center spans full width on md+ screens

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectSector(sector.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl select-none ${
                  isFifth ? "md:col-span-2 min-h-[440px] sm:min-h-[480px]" : "min-h-[460px] sm:min-h-[500px]"
                }`}
              >
                {/* Photographic Background */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-900">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Contrast Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:via-black/30 transition-colors duration-500" />
                </div>

                {/* Top-Right Red Circular Arrow Button (Signature Framer element) */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E53E3E] text-white flex items-center justify-center shadow-lg shadow-black/40 group-hover:bg-[#dc2626] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Top-Left Sector Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white">
                    <Icon className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                      {sector.serviceCount} Scopes
                    </span>
                  </div>
                </div>

                {/* Bottom Frosted Glass Caption Panel */}
                <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 z-20">
                  <div className="rounded-2xl bg-neutral-950/80 backdrop-blur-xl p-6 sm:p-7 border border-white/15 text-white space-y-3 group-hover:border-white/30 transition-colors duration-300 shadow-2xl">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-wider text-[#60a5fa] font-semibold">
                        {sector.name.toUpperCase()}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        PT. SWTS Batam
                      </span>
                    </div>

                    {/* Bold Punchy Statement */}
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white leading-snug">
                      {sector.cardHeadline}
                    </h3>

                    {/* Quick Preview Subtext */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {sector.tagline}
                    </p>

                    {/* Interactive Action Hint */}
                    <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-neutral-400 group-hover:text-white transition-colors">
                      <span>Click to explore all {sector.serviceCount} scopes</span>
                      <span className="font-semibold text-[#38bdf8] group-hover:text-white transition-colors">
                        View Technical Scopes
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

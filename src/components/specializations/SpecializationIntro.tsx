"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SpecializationIntro() {
  const introText =
    "PT. SWTS Batam delivers advanced precision engineering, surface restoration, and component reconditioning solutions. Our integrated workshop capabilities restore critical industrial parts to original performance standards, minimize equipment downtime, and extend operating life across demanding marine, offshore, energy, and process sectors.";

  const capabilitiesStats = [
    { target: 8000, isNumeric: true, formatThousands: true, unit: "mm", label: "Max Honing Length (8m)" },
    { target: 2000, isNumeric: true, formatThousands: true, unit: "kg", label: "Dynamic Rotor Capacity" },
    { target: 100, isNumeric: true, formatThousands: false, unit: "%", label: "In-House Workshop Control" },
    { isNumeric: false, displayValue: "0%", unit: "distortion", label: "Pulse Laser Thermal HAZ" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 text-neutral-950 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Statement Header with Scroll Scrub */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
            Engineering Excellence · PT. SWTS Batam
          </span>

          <div className="text-2xl sm:text-3xl md:text-[32px] leading-[1.35] font-semibold tracking-tight text-neutral-900">
            <ScrollScrubText text={introText} theme="light" />
          </div>
        </div>

        {/* 4-Stat Capability Strip */}
        <div className="pt-10 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {capabilitiesStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1">
                {stat.isNumeric ? (
                  <AnimatedCounter
                    from={0}
                    to={stat.target!}
                    formatThousands={stat.formatThousands}
                    duration={2}
                    delay={idx * 0.1}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
                    {stat.displayValue}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-medium text-neutral-500 uppercase">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SpecializationIntro() {
  const introText =
    "PT. SWTS Batam delivers advanced precision engineering, surface restoration, and component reconditioning solutions. Our integrated workshop capabilities restore critical industrial parts to original performance standards, minimize equipment downtime, and extend operating life across demanding marine, offshore, energy, and process sectors.";

  const capabilitiesStats = [
    { target: 8000, formatThousands: true, unit: "mm", label: "Max Honing Length (8m)" },
    { target: 2000, formatThousands: true, unit: "kg", label: "Dynamic Rotor Capacity" },
    { target: 100, formatThousands: false, unit: "%", label: "In-House Workshop Control" },
    { target: 0, formatThousands: false, unit: "distortion", label: "Pulse Laser Thermal HAZ" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 text-black bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header with Scroll Scrub Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex backdrop-blur-[5px] bg-[rgba(112,110,110,0.13)] px-3 py-1.5 rounded-[5px] w-fit">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black">
              Engineering Excellence · PT. SWTS Batam
            </span>
          </div>

          <div className="text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-semibold tracking-[-0.03em]">
            <ScrollScrubText text={introText} theme="light" />
          </div>
        </div>

        {/* 4-Stat Capability Strip */}
        <div className="pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {capabilitiesStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1 font-mono">
                <AnimatedCounter
                  from={0}
                  to={stat.target}
                  formatThousands={stat.formatThousands}
                  duration={2}
                  delay={idx * 0.12}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight"
                />
                <span className="text-xs sm:text-sm font-medium text-black/50 uppercase">
                  {stat.unit}
                </span>
              </div>
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-black/60 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

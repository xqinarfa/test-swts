"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Cpu, Factory, Server, Ship, Zap } from "lucide-react";

export default function ServicesHero() {
  const sectors = [
    { label: "Marine Services", count: "14 Scopes", icon: Ship },
    { label: "Offshore Engineering", count: "05 Scopes", icon: Anchor },
    { label: "Power Generation", count: "10 Scopes", icon: Zap },
    { label: "Process Industry", count: "05 Scopes", icon: Factory },
    { label: "Data Center Infrastructure", count: "03 Scopes", icon: Server },
  ];

  return (
    <section className="relative w-full h-screen flex items-end justify-start bg-neutral-950 overflow-hidden pb-20 md:pb-28 pt-36 px-6 sm:px-12 lg:px-16 select-none">
      {/* Background Image with Cinematic Contrast */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/assets/559afac3262a7ef3e039241ccd91d45723ab76cf.png"
          alt="SWTS Batam Industrial & Maritime Engineering"
          className="w-full h-full object-cover object-center"
        />
        {/* Darkening Gradients for High Text Legibility */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />
      </motion.div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col items-start gap-5">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
              PT. SWTS Batam · Industrial & Maritime Services
            </span>
          </motion.div>

          {/* Bold Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight text-white max-w-4xl"
          >
            Engineering, Maintenance & MRO{" "}
            <span className="text-neutral-300 font-normal">
              across Marine, Offshore, Power Plant, Process & Data Center assets.
            </span>
          </motion.h1>

          {/* 5 Sectors Indicator Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-3 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div
                  key={i}
                  className="bg-neutral-900/80 border border-neutral-700/80 px-3.5 py-1.5 rounded-md flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur-md"
                >
                  <Icon className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{sector.label}</span>
                  <span className="text-neutral-500 font-mono text-[10px]">
                    ({sector.count})
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SpecializationHero() {
  return (
    <section className="relative w-full h-screen flex items-end justify-start bg-black overflow-hidden pb-20 md:pb-28 pt-36 px-6 sm:px-12 lg:px-16 select-none">
      {/* Background Image with Cinematic Slow Zoom Entrance */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/assets/specializations/hero-workshop.jpg"
          alt="SWTS Heavy Engineering Workshop"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay with Ambient Vignette */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      </motion.div>

      {/* Grid Pattern SVG Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-35 overflow-hidden">
        <img
          src="/assets/about/grid-pattern.svg"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col items-start gap-5">
          {/* Glassmorphism Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-[6px] bg-white/12 border border-white/15 px-3 py-1.5 rounded-[6px] shadow-sm shadow-black/40 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-[12px] uppercase tracking-wider text-white font-semibold">
              PT. SWTS BATAM · SPECIALIZATIONS
            </span>
          </motion.div>

          {/* Staggered Two-Tone Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-[-0.03em] text-white max-w-4xl"
          >
            Precision Engineering & Refurbishment{" "}
            <span className="text-white/70">
              engineered for critical marine, offshore, and industrial environments.
            </span>
          </motion.h1>

          {/* Quick Technical Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-3 flex flex-wrap gap-2.5 sm:gap-3"
          >
            {[
              "10 In-House Capabilities",
              "Up to 800 mm Honing",
              "2-Tonne Balancing",
              "Zero-Distortion Laser Welding",
              "Batam Strategic Workshop",
            ].map((tag, i) => (
              <span
                key={i}
                className="backdrop-blur-md bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-white/90"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

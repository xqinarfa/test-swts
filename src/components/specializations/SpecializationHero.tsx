"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SpecializationHero() {
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
          src="/assets/specializations/hero-workshop.jpg"
          alt="SWTS Heavy Engineering Workshop"
          className="w-full h-full object-cover object-center"
        />
        {/* Darkening Gradients for High Text Legibility */}
        <div className="absolute inset-0 bg-neutral-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </motion.div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col items-start gap-5">
          {/* Authentic Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
              PT. SWTS Batam · Engineering Specializations
            </span>
          </motion.div>

          {/* Bold Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight text-white max-w-4xl"
          >
            Precision Engineering & Refurbishment{" "}
            <span className="text-neutral-300 font-normal">
              for mission-critical marine, offshore, and industrial operating assets.
            </span>
          </motion.h1>

          {/* Technical Specifications Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {[
              "10 In-House Disciplines",
              "800 mm Honing Diameter",
              "2,000 kg Dynamic Balancing",
              "Zero-Distortion Laser Deposition",
              "Batam Technology Service Center",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-neutral-900/80 border border-neutral-700/80 px-3 py-1 rounded-md text-xs font-medium tracking-wide text-neutral-200"
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

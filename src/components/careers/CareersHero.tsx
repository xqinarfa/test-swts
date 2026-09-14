"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREERS_DATA } from "@/data/content";

export default function CareersHero() {
  const { hero } = CAREERS_DATA;

  return (
    <section className="relative w-full h-screen flex items-end justify-start bg-black overflow-hidden pb-16 md:pb-24 pt-36 px-6 sm:px-12 lg:px-16">
      {/* Background Image with Cinematic Slow Zoom Entrance */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={hero.bgImage}
          alt="SWTS Engineering Workshop Facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Darkening Multi-Stop Gradients */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col items-start gap-4">
          {/* Authentic Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
              PT. SWTS Batam · Engineering Careers
            </span>
          </motion.div>

          {/* Staggered Two-Tone Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight text-white max-w-4xl"
          >
            {hero.titlePrefix}{" "}
            <span className="text-neutral-300 font-normal">{hero.titleSuffix}</span>
          </motion.h1>

          {/* Technical Culture Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {hero.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-neutral-900/80 border border-neutral-700/80 px-3 py-1 rounded-md text-xs font-medium tracking-wide text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Subtle Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex items-center gap-3 text-neutral-400 shrink-0 self-end pb-2"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Scroll to explore
          </span>
          <div className="w-8 h-px bg-neutral-600" />
        </motion.div>
      </div>
    </section>
  );
}

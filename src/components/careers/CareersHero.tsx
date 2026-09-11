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
          {/* Glassmorphism Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-[6px] bg-white/12 border border-white/15 px-3 py-1.5 rounded-[6px] shadow-sm shadow-black/40"
          >
            <span className="font-mono text-[12px] uppercase tracking-wider text-white font-semibold">
              {hero.badge}
            </span>
          </motion.div>

          {/* Staggered Two-Tone Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-[-0.03em] text-white max-w-4xl"
          >
            {hero.titlePrefix}{" "}
            <span className="text-white/70">{hero.titleSuffix}</span>
          </motion.h1>

          {/* Key Culture Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {hero.tags.map((tag, i) => (
              <span
                key={i}
                className="backdrop-blur-md bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-white/90"
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden md:flex items-center gap-3 text-white/50 shrink-0 self-end pb-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">
            Scroll to explore
          </span>
          <div className="w-8 h-px bg-white/30" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white/70"
          />
        </motion.div>
      </div>
    </section>
  );
}

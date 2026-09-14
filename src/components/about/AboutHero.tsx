"use client";

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/content";

export default function AboutHero() {
  const { hero } = ABOUT_DATA;

  return (
    <section className="relative w-full h-screen flex items-end justify-start bg-neutral-950 overflow-hidden pb-16 md:pb-24 pt-36 px-6 sm:px-12 lg:px-16">
      {/* Background Image with Deep Cinematic Contrast */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={hero.bgImage}
          alt="SWTS Heavy Engineering Workshop"
          className="w-full h-full object-cover object-center"
        />
        {/* Solid Darkening Gradients for High Text Legibility */}
        <div className="absolute inset-0 bg-neutral-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </motion.div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col items-start gap-5">
          {/* Authentic Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
              {hero.badge}
            </span>
          </motion.div>

          {/* Bold Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-white max-w-3xl"
          >
            {hero.titlePrefix}{" "}
            <span className="text-neutral-300">{hero.titleSuffix}</span>
          </motion.h1>

          {/* Subheadline */}
          {hero.subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>
          )}

          {/* Core Sector Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {hero.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="bg-neutral-900/80 border border-neutral-700/80 px-3 py-1 rounded-md text-xs font-mono tracking-wide text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Calm, Static Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex items-center gap-3 text-neutral-400 shrink-0 self-end pb-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            Scroll to explore
          </span>
          <div className="w-8 h-px bg-neutral-600" />
        </motion.div>
      </div>
    </section>
  );
}

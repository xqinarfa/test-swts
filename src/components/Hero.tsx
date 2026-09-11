"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_PHRASES = [
  "we deliver reliability.",
  "we power global movement.",
  "we move what matters.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-black pt-28 pb-16 sm:pb-24 select-none"
    >
      {/* Background Image Container with Cinematic Zoom Entrance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.14, opacity: 0.6 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/fb88174ed27fc99c5db0bd3184f00fa28e3eaeaf.png"
          alt="Container Cargo Ship at Sea"
          className="w-full h-full object-cover object-center"
          priority-hint="high"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45" />

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-repeat pointer-events-none">
          <img
            src="/assets/1d0b71b093524b3ceb42fe269f609bab2f055219.svg"
            alt="Technical grid overlay"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content with Staggered Entrance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-[5px] shadow-sm"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
              We are SWTS
            </span>
          </motion.div>

          {/* Heading with Animated Rotating Cycler */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            <span className="block opacity-90">More than transport,</span>
            <span className="block h-[1.15em] relative overflow-hidden mt-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  {ROTATING_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Supporting Micro-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed"
          >
            Engineered freight solutions across air, ocean, and land with precision telemetry, guaranteed SLAs, and global compliance.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#quote"
              className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-xl hover:shadow-2xl group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-md"
            >
              <span>Explore Services</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

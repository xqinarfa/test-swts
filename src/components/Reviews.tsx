"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TESTIMONIALS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="relative min-h-[880px] flex flex-col justify-between py-24 overflow-hidden bg-black text-white">
      {/* Background Truck Photo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/6fe63eb1daf017c7c66d81225110c22ea9dccc45.png"
          alt="Transport truck on highway at dusk"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none">
          <img
            src="/assets/bef6719f8cbfe2b023fcb786343c8a42527981c4.svg"
            alt="Technical grid overlay"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/15">
          <div className="inline-flex items-center">
            <span className="px-3 py-1.5 rounded bg-white/10 text-xs font-mono tracking-widest uppercase text-white/80">
              Customer Reviews
            </span>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all self-start sm:self-auto shadow-lg"
          >
            <span>Leave a Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Testimonial Quote with AnimatePresence */}
        <div className="py-16 md:py-24 max-w-4xl min-h-[360px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full space-y-10"
            >
              <blockquote className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-relaxed sm:leading-[1.25]">
                {current.quote}
              </blockquote>

              {/* Author Block */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/15">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{current.author}</h4>
                    <p className="text-xs font-mono tracking-wider text-white/60 uppercase">
                      {current.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <img
                    src={current.logo}
                    alt="Client Company Logo"
                    className="h-8 w-auto object-contain opacity-70 grayscale"
                  />

                  {/* Prev / Next controls */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={handlePrev}
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all shadow-sm"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={handleNext}
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all shadow-sm"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Tab Indicators */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/15">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className="group py-2 focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <motion.div
                animate={{
                  width: activeIdx === idx ? 56 : 28,
                  backgroundColor: activeIdx === idx ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="h-1 rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

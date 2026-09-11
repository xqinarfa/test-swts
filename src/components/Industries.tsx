"use client";

import React, { useState } from "react";
import { ArrowRight, Package, Ship, Navigation } from "lucide-react";
import { INDUSTRIES } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";

export default function Industries() {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);
  const [hoveredIndustryId, setHoveredIndustryId] = useState<string | null>(null);

  const currentId = hoveredIndustryId || activeIndustryId;
  const currentIndustry = INDUSTRIES.find((ind) => ind.id === currentId) || INDUSTRIES[0];

  return (
    <section id="industries" className="relative bg-[#050505] py-24 md:py-36 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Block 1: Industries We Support (2-Column Interactive Preview matching Framer) */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="inline-flex items-center">
              <span className="px-3 py-1.5 rounded bg-white/10 text-xs font-mono tracking-widest uppercase text-white/80">
                Industries We Support
              </span>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#quote"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all self-start sm:self-auto shadow-lg"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* 2-Column Content: Left List & Right Sticky Preview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-10">
            {/* Left Column: Numbered List of 7 Industries */}
            <div className="lg:col-span-7 divide-y divide-white/10">
              {INDUSTRIES.map((ind) => {
                const isSelected = ind.id === currentId;
                return (
                  <div
                    key={ind.id}
                    onMouseEnter={() => setHoveredIndustryId(ind.id)}
                    onMouseLeave={() => setHoveredIndustryId(null)}
                    onClick={() => setActiveIndustryId(ind.id)}
                    className="py-5 sm:py-7 flex items-center justify-between cursor-pointer group rounded-xl px-2 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-5 sm:gap-8">
                      {/* Number with active bullet */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`font-mono text-xs sm:text-sm transition-colors duration-200 ${
                            isSelected ? "text-white font-bold" : "text-white/40 group-hover:text-white/70"
                          }`}
                        >
                          {ind.id}
                        </span>
                      </div>

                      {/* Industry Name */}
                      <motion.h3
                        animate={{
                          x: isSelected ? 8 : 0,
                          color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight select-none"
                      >
                        {ind.name}
                      </motion.h3>
                    </div>

                    {/* Active indicator dot */}
                    {isSelected && (
                      <motion.div
                        layoutId="industryActiveDot"
                        className="w-2 h-2 rounded-full bg-white shadow-glow shrink-0 mr-2"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Preview Card with Framer Motion AnimatePresence Crossfade */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 self-start">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-md p-4 sm:p-5 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndustry.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    {/* Industry Image */}
                    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                      <img
                        src={currentIndustry.image}
                        alt={currentIndustry.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white">
                        {currentIndustry.id} / 07
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5 px-1 pb-1">
                      <h4 className="text-lg font-bold text-white">
                        {currentIndustry.name}
                      </h4>
                      <p className="text-sm text-white/75 font-light leading-relaxed">
                        {currentIndustry.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Seamless Logistics & Particle Earth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8 border-t border-white/10">
          {/* Left Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
                Seamless Logistics
              </div>

              <ScrollScrubText
                as="h2"
                theme="dark"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
                text="Move cargo faster, smarter, and safer with real-time tracking and reliable transport solutions."
              />
            </div>

            {/* Feature Points with Micro-hover */}
            <div className="space-y-6 pt-4 border-t border-white/10 divide-y divide-white/10">
              {/* Feature 1 */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="pt-6 flex items-start gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Providing reliable transport solutions to move cargo faster, reduce delays, and
                    keep supply chains running smoothly.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="pt-6 flex items-start gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Managing road, sea, and air logistics to help businesses deliver goods worldwide
                    with speed, accuracy, and full control.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="pt-6 flex items-start gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Using advanced tracking and logistics technology to optimize routes, improve
                    delivery times, and prevent disruptions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Holographic Earth Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl p-6 flex flex-col justify-between items-center group"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent pointer-events-none" />

              {/* Top Slanted Emblem */}
              <div className="relative z-10 self-center pt-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-7 bg-white/90 transform -skew-x-12" />
                  <div className="w-2 h-7 bg-white/70 transform -skew-x-12" />
                  <div className="w-2 h-7 bg-white/40 transform -skew-x-12" />
                </div>
              </div>

              {/* Particle Earth Image with Subtle Float */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.img
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  src="/assets/b088ac8d5426c6d7113927cc33915d2973c56214.png"
                  alt="Holographic particle globe"
                  className="w-full h-full object-contain max-h-[440px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

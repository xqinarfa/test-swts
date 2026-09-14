"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";
import AnimatedCounter from "@/components/AnimatedCounter";
import { CAREERS_DATA } from "@/data/content";

export default function CareersIntro() {
  const { intro } = CAREERS_DATA;

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 text-black bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Statement Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
            {intro.badge}
          </span>

          <div className="text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-semibold tracking-tight text-neutral-950">
            <ScrollScrubText text={intro.headline} theme="light" />
          </div>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl font-normal">
            {intro.subtext}
          </p>
        </div>

        {/* 4-Stat Capability Strip */}
        <div className="pt-10 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {intro.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1">
                {stat.isNumeric ? (
                  <AnimatedCounter
                    from={0}
                    to={stat.target!}
                    formatThousands={stat.formatThousands}
                    duration={2}
                    delay={idx * 0.1}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
                    {stat.displayValue}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-medium text-neutral-500 uppercase">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        {/* Header with Scroll Scrub Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex backdrop-blur-[5px] bg-black/5 border border-black/10 px-3 py-1.5 rounded-[5px] w-fit">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black/80">
              {intro.badge}
            </span>
          </div>

          <div className="text-2xl sm:text-3xl md:text-[36px] leading-[1.25] font-semibold tracking-[-0.03em] text-black">
            <ScrollScrubText text={intro.headline} theme="light" />
          </div>

          <p className="text-base sm:text-[17px] text-black/75 leading-[1.65] max-w-3xl font-sans">
            {intro.subtext}
          </p>
        </div>

        {/* 4-Stat Capability Strip */}
        <div className="pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {intro.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1.5 font-mono">
                <AnimatedCounter
                  from={0}
                  to={stat.target}
                  formatThousands={stat.formatThousands}
                  duration={2}
                  delay={idx * 0.12}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight"
                />
                <span className="text-xs sm:text-sm font-medium text-black/50 uppercase">
                  {stat.unit}
                </span>
              </div>
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-black/60 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

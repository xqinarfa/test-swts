"use client";

import React from "react";
import { motion } from "framer-motion";
import { METRICS_DATA } from "@/data/content";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutMetrics() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-black overflow-hidden bg-white border-t border-neutral-100">
      {/* Centered Top Badge & Section Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-3 mb-14 md:mb-20">
        <div className="backdrop-blur-[5px] bg-black/5 border border-black/10 px-3.5 py-1.5 rounded-[5px]">
          <span className="font-mono text-[12px] uppercase tracking-wider font-semibold text-black/80">
            {METRICS_DATA.badge}
          </span>
        </div>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight text-neutral-900">
          Operational Scale & Verified Reliability
        </h2>
      </div>

      {/* Dotted World Map Vector Background with Radial Fade */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-25 pointer-events-none select-none">
        <img
          src={METRICS_DATA.mapImage}
          alt=""
          className="w-full max-w-6xl object-contain scale-110"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,white_85%)]" />
      </div>

      {/* 4-Column High-Precision Telemetry Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-neutral-200/90 bg-white/75 backdrop-blur-sm shadow-xl shadow-neutral-900/5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 overflow-hidden">
        {METRICS_DATA.stats.map((stat, idx) => {
          const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10) || 0;
          const hasPlusPrefix = stat.value.startsWith("+");
          const prefix = hasPlusPrefix ? "+" : "";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              className="p-8 lg:p-10 flex flex-col justify-between gap-8 group cursor-default transition-colors duration-200"
            >
              {/* Top Indicator Line & Metric Code */}
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
                  KP-{String(idx + 1).padStart(2, "0")}
                </span>
                <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-red-600 transition-colors duration-300" />
              </div>

              {/* Main Number + Unit */}
              <div className="flex items-baseline gap-1 font-mono">
                <AnimatedCounter
                  from={0}
                  to={numericValue}
                  prefix={prefix}
                  duration={2}
                  delay={idx * 0.12}
                  className="text-6xl sm:text-7xl lg:text-[84px] leading-none font-semibold tracking-[-0.06em] text-neutral-950 group-hover:text-red-600 transition-colors duration-300"
                />
                <span className="text-3xl sm:text-4xl font-light text-neutral-400 tracking-tight ml-1">
                  {stat.unit}
                </span>
              </div>

            {/* Metric Descriptive Label */}
            <div className="pt-4 border-t border-neutral-200/60">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold leading-relaxed">
                {stat.label}
              </p>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}

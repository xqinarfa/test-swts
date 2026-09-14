"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Award, Anchor } from "lucide-react";
import { CAREERS_DATA } from "@/data/content";

export default function CareersCulture() {
  const { culture } = CAREERS_DATA;

  const pillarIcons = [
    <Cpu key="cpu" className="w-6 h-6 text-[#60a5fa]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-emerald-400" />,
    <Award key="award" className="w-6 h-6 text-amber-400" />,
    <Anchor key="anchor" className="w-6 h-6 text-cyan-400" />,
  ];

  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-white bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#93c5fd] font-semibold block">
            {culture.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {culture.headline}
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal">
            {culture.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {culture.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 flex flex-col justify-between gap-6 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>

                <h3 className="font-bold text-lg text-white tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

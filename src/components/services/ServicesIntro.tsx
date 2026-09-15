"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Compass, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServicesIntro() {
  const introText =
    "At PT. SWTS Batam, we combine 50+ years of regional engineering heritage with advanced diagnostic testing, precision workshop reconditioning, and 24/7 on-site field deployment. We deliver certified mechanical overhauls, in-situ machining, and electrical automation across marine propulsion, offshore installations, utility power plants, chemical refineries, and mission-critical data centers.";

  const capabilitiesStats = [
    { value: "5", unit: "Sectors", label: "Core Industry Verticals" },
    { value: "37", unit: "Disciplines", label: "Specialized Engineering Scopes" },
    { value: "50+", unit: "Years", label: "Regional Engineering Heritage" },
    { value: "24/7", unit: "Deployment", label: "Anchorage & Voyage Support" },
  ];

  const featureItems = [
    {
      icon: Wrench,
      title: "Reliable Field & Workshop Engineering",
      desc: "Turnkey engineering solutions to restore high-value rotating assets faster, reduce unplanned downtime, and maintain plant and vessel operating continuity.",
    },
    {
      icon: Compass,
      title: "Multidisciplinary MRO Coverage",
      desc: "Managing marine, offshore, power generation, process, and data center mechanical, hydraulic, and electrical systems with precision and OEM compliance.",
    },
    {
      icon: Activity,
      title: "Advanced Diagnostics & Precision Alignment",
      desc: "Vibration FFT analysis, high-resolution laser optical alignment, dynamic balancing, and condition assessment to eliminate failures before they occur.",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 text-neutral-950 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Editorial Statement Header - Clean, Solid Typography */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0C4B92]" />
            <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
              Multidisciplinary Engineering · PT. SWTS Batam
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[32px] leading-[1.35] font-semibold tracking-tight text-neutral-900">
            {introText}
          </h2>
        </div>

        {/* 4-Stat Capability Strip - Solid, Static Metrics */}
        <div className="pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {capabilitiesStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
                  {stat.value}
                </span>
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

        {/* Split Feature Section (Modeled after Framer Section 2) */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3 Feature Rows */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0C4B92]">
                ENGINEERED EXCELLENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug">
                Integrated Technical Capabilities Across the Entire Asset Lifecycle
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {featureItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 transition-colors flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 group-hover:bg-[#0C4B92] transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-neutral-950">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Tech Visual Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[420px]"
            >
              {/* World Map Dot Pattern Background */}
              <div className="absolute inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none">
                <img
                  src="/assets/about/world-map-dots.png"
                  alt="Global Maritime & Industrial Footprint"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white font-semibold uppercase tracking-wider">
                  Global Maritime & Industrial Hub
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Batam Service Center
                </span>
              </div>

              {/* Center Content */}
              <div className="relative z-10 my-auto py-8 space-y-3 max-w-md">
                <span className="text-xs text-[#38bdf8] font-semibold uppercase tracking-wider">
                  Strategic Singapore Straits Location
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Rapid Deployment to Anchorages, Shipyards & Industrial Estates
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Direct access to Malacca and Singapore Straits international maritime traffic and
                  Indonesia's primary industrial corridors.
                </p>
              </div>

              {/* Bottom Quick Badges */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] text-neutral-400 font-medium">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Batam Anchorage</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Singapore Boarding</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Voyage Repairs</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Offshore Mobilization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

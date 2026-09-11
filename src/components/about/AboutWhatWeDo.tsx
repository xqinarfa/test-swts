"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHAT_WE_DO_DATA } from "@/data/content";
import ScrollScrubText from "@/components/ScrollScrubText";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutWhatWeDo() {
  const data = WHAT_WE_DO_DATA;

  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-black bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Ocean Card with Floating CEO Frosted Glass Quote Card */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[4/3] lg:aspect-[1/1] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-950/20 bg-neutral-950 border border-neutral-200/60 group">
            {/* Background Ocean Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src={data.bgImage}
              alt="Global maritime logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Top Brand Glyph Icon */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2.5 backdrop-blur-md bg-black/40 border border-white/20 px-3 py-1.5 rounded-md">
              <img
                src="/assets/about/brand-glyph.png"
                alt=""
                className="h-4 w-auto object-contain"
              />
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">
                Executive Leadership
              </span>
            </div>

            {/* Frosted Glass Floating Quote Card */}
            <div className="absolute inset-x-5 sm:inset-x-8 bottom-6 sm:bottom-8 z-10 backdrop-blur-[20px] bg-black/65 border border-white/20 rounded-2xl p-6 md:p-7 text-white shadow-2xl">
              <span className="font-serif text-3xl leading-none text-red-500 select-none block mb-2">
                “
              </span>
              <p className="font-sans text-base sm:text-[16.5px] leading-[1.55] font-normal text-white/95 mb-6">
                Logistics should never be a limitation. At SWTS, we design transport solutions that are precise, efficient, and built for the speed of modern business.
              </p>

              {/* Author Row */}
              <div className="pt-4 border-t border-white/20 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shrink-0 bg-neutral-800 shadow-sm">
                  <img
                    src={data.authorImage}
                    alt={data.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-sm sm:text-[15px] text-white tracking-tight">
                    {data.author}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/65">
                    {data.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Heading, Scroll Scrub, Capabilities & Services CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex backdrop-blur-[5px] bg-black/5 border border-black/10 px-3 py-1.5 rounded-[5px] w-fit">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black/80">
                {data.badge}
              </span>
            </div>

            {/* Scroll Scrub Illuminating Heading */}
            <div className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] font-semibold tracking-[-0.03em] text-black">
              <ScrollScrubText
                text={data.headingPrefix}
                theme="light"
              />
            </div>

            {/* Supporting Explanation */}
            <p className="text-base sm:text-[17px] text-black/75 leading-[1.65] max-w-xl font-sans font-normal">
              {data.headingSuffix}
            </p>
          </div>

          {/* Core Operating Principles List */}
          <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              "Dynamic route optimization",
              "End-to-end telematics tracking",
              "Automated customs compliance",
              "Bonded multi-hub cross-docking",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                <span className="font-mono text-xs sm:text-[12.5px] text-neutral-700 tracking-wide font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 flex items-center">
            <Link href="/specializations">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 bg-neutral-950 hover:bg-neutral-800 text-white px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold shadow-md transition-all group"
              >
                <span>Explore Specializations</span>
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

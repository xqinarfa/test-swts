"use client";

import React, { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { PARTNERS } from "@/data/content";
import { motion } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="relative bg-white py-24 md:py-32 overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Partner Logos Infinite Smooth Marquee */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-[11px] font-mono uppercase tracking-widest text-neutral-800">
              Trusted by leading companies
            </span>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex items-center gap-16 py-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center grayscale contrast-150 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 px-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-9 w-auto max-w-[130px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full h-px bg-neutral-200" />
        </div>

        {/* Sub-block 1: About Us & Video Warehouse */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left info */}
          <div className="space-y-6">
            <div className="inline-block px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-wider uppercase text-neutral-800">
              About Us
            </div>

            <ScrollScrubText
              as="h2"
              theme="light"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight"
              text="We make global transport predictable from day one."
            />

            <ScrollScrubText
              as="p"
              theme="light"
              className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl"
              text="Our logistics system defines every route, load, and schedule before shipping begins, ensuring precision, safety, and on-time delivery."
            />

            {/* Stat */}
            <div className="pt-4 border-t border-neutral-200">
              <div className="flex items-baseline gap-1.5">
                <AnimatedCounter
                  from={0}
                  to={98}
                  prefix="+"
                  duration={2}
                  className="text-6xl sm:text-7xl font-bold text-neutral-950 tracking-tight font-mono"
                />
                <span className="text-3xl font-light text-neutral-500">%</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
                Delivery Success Rate
              </p>
            </div>

            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-xs font-mono uppercase tracking-wider text-neutral-900 transition-all group shadow-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

          {/* Right Image with Play Trigger */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden border border-neutral-200 group shadow-xl"
          >
            <img
              src="/assets/1a5fe57321eabe041adfd137aa387fe4b1cffb6b.png"
              alt="High-capacity logistics warehouse facility"
              className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Play Button Overlay */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsVideoOpen(true)}
              className="absolute bottom-6 right-6 flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all shadow-lg"
            >
              <span>Play Video</span>
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                <Play className="w-3 h-3 fill-black ml-0.5" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Sub-block 2: What We Do & Ocean Ripple Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          {/* Left Ocean Texture Card with Quote */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-neutral-300 shadow-2xl p-8 min-h-[460px] flex flex-col justify-between"
          >
            <img
              src="/assets/c5061fe27427e201b00c6edbf4a3f742ea9655b4.png"
              alt="Deep ocean water texture"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-brightness-90" />

            {/* Top Emblem */}
            <div className="relative z-10 flex justify-center pt-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-6 bg-white/80 transform -skew-x-12" />
                <div className="w-1.5 h-6 bg-white/60 transform -skew-x-12" />
                <div className="w-1.5 h-6 bg-white/40 transform -skew-x-12" />
              </div>
            </div>

            {/* Frosted Quote Box */}
            <div className="relative z-10 backdrop-blur-md bg-black/50 border border-white/15 rounded-xl p-6 space-y-4">
              <p className="text-white/95 text-sm sm:text-base leading-relaxed italic">
                “Logistics should never be a limitation. At MOVEX™, we design transport
                solutions that are precise, efficient, and built for the speed of modern business.”
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <img
                  src="/assets/6383db345eb8089994bc536f81ac07e054ed2fe1.png"
                  alt="Alexandra Reed portrait"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">Alexandra Reed</h4>
                  <p className="text-xs font-mono text-white/70">CEO, MOVEX™</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right text info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-wider uppercase text-neutral-800">
              What We Do
            </div>

            <ScrollScrubText
              as="h2"
              theme="light"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight"
              text="Shipping requires control, not assumptions."
            />

            <ScrollScrubText
              as="p"
              theme="light"
              className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl"
              text="We use real-time tracking, optimized routing, and advanced logistics planning to move cargo faster and safer across complex global corridors."
            />

            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-xs font-mono uppercase tracking-wider text-neutral-900 transition-all group shadow-sm"
              >
                <span>Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Demo */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl border border-white/20 overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center space-y-3 p-8">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white">MOVEX Global Operations Preview</h3>
              <p className="text-sm text-white/60 font-mono">
                Smart automated freight routing in action
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

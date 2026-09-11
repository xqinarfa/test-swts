"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/content";
import ScrollScrubText from "@/components/ScrollScrubText";
import VideoModal from "./VideoModal";

export default function AboutStory() {
  const { story } = ABOUT_DATA;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-black bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Scroll Scrub Story & Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex backdrop-blur-[5px] bg-black/5 border border-black/10 px-3 py-1.5 rounded-[5px] w-fit">
                <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black/80">
                  {story.badge}
                </span>
              </div>

              {/* Illuminating Headline */}
              <div className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] font-semibold tracking-[-0.03em] text-black">
                <ScrollScrubText
                  text={story.headlinePrefix}
                  theme="light"
                />
              </div>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-[17px] text-black/75 leading-[1.65] max-w-xl font-sans font-normal">
                {story.headlineSuffix}
              </p>
            </div>

            {/* Feature Capability Cards */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-5 rounded-xl border border-neutral-200/90 bg-neutral-50/80 hover:bg-neutral-100 hover:border-neutral-300 transition-all duration-200 flex flex-col gap-3 group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-xs group-hover:scale-105 transition-transform">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-sans text-[13.5px] leading-[1.5] text-neutral-700 font-medium">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Logistics Photo Card with Video Trigger */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1] max-h-[560px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 group bg-neutral-900 border border-neutral-200/50">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={story.image}
                alt="SWTS Logistics Team"
                className="w-full h-full object-cover"
              />

              {/* Top Industrial Header Badge */}
              <div className="absolute top-5 left-5 z-10 backdrop-blur-md bg-black/40 border border-white/20 px-3 py-1 rounded-md">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">
                  Global Hubs & Warehousing
                </span>
              </div>

              {/* Bottom Frosted Play Video Pill with Radar Wave */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsVideoOpen(true)}
                className="absolute bottom-5 right-5 z-10 backdrop-blur-[14px] bg-black/65 hover:bg-black/80 border border-white/25 text-white flex items-center gap-4 pl-5 pr-2.5 py-2.5 rounded-full shadow-2xl transition-all duration-300 focus:outline-none group/btn"
                aria-label="Play company overview video"
              >
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[12px] uppercase tracking-wider font-semibold text-white">
                    Watch Overview
                  </span>
                  <span className="font-mono text-[10px] text-white/60 tracking-wider">
                    Full Video (01:45)
                  </span>
                </div>

                <div className="relative w-10 h-10 rounded-full bg-white text-black flex items-center justify-center pl-0.5 shadow-md group-hover/btn:bg-red-600 group-hover/btn:text-white transition-colors duration-300">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-current" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={story.videoUrl}
        title="SWTS Logistics Overview"
      />
    </>
  );
}

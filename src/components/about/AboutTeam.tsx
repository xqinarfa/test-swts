"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutTeam() {
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0].id);
  const activeMember =
    TEAM_MEMBERS.find((m) => m.id === selectedId) || TEAM_MEMBERS[0];

  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-white bg-[#131313]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Top Header Bar */}
        <div className="flex items-center gap-6 w-full">
          {/* Glass Badge */}
          <div className="backdrop-blur-[5px] bg-white/12 border border-white/15 px-3 py-1.5 rounded-[5px] shrink-0">
            <span className="font-mono text-[12px] uppercase tracking-wider text-white font-semibold">
              The Team
            </span>
          </div>

          {/* Thin Divider Line */}
          <div className="flex-1 h-px bg-white/15" />

          {/* Join Us Button */}
          <Link href="/#contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white hover:bg-neutral-200 text-black px-5 sm:px-6 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold shrink-0 transition-colors shadow-sm"
            >
              Join Us
            </motion.div>
          </Link>
        </div>

        {/* Split Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Names List with Index & Role Subtitles */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {TEAM_MEMBERS.map((member, idx) => {
              const isSelected = member.id === selectedId;

              return (
                <div
                  key={member.id}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onMouseEnter={() => setSelectedId(member.id)}
                  onClick={() => setSelectedId(member.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(member.id);
                    }
                  }}
                  className="group cursor-pointer select-none py-6 sm:py-7 outline-none transition-all"
                >
                  <motion.div
                    animate={{
                      x: isSelected ? 12 : 0,
                      opacity: isSelected ? 1 : 0.45,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Numeric Index */}
                      <span
                        className={`font-mono text-xs sm:text-sm tracking-widest transition-colors ${
                          isSelected ? "text-[#60a5fa] font-bold" : "text-white/30"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="flex flex-col gap-1">
                        <span
                          className={`font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] transition-colors duration-200 ${
                            isSelected
                              ? "text-white"
                              : "text-white/50 group-hover:text-white/90"
                          }`}
                        >
                          {member.name}
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-medium">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Active Accent Arrow Pill */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-[#0C4B92] text-white shadow-lg shadow-blue-900/60 scale-100 opacity-100"
                          : "bg-white/5 text-white/30 scale-90 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Preview Card with AnimatePresence */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-28">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl shadow-black/90">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7"
                >
                  {/* Portrait Photo */}
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                  {/* Darkening Multi-Stop Gradient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 z-10" />

                  {/* Top Status Badge */}
                  <div className="relative z-20 flex items-center justify-between">
                    <div className="backdrop-blur-md bg-black/50 border border-white/20 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[10.5px] uppercase tracking-widest text-white/90">
                        Leadership Profile
                      </span>
                    </div>
                  </div>

                  {/* Bottom Card Info Overlay */}
                  <div className="relative z-20 space-y-3">
                    <div className="backdrop-blur-[8px] bg-white/15 px-3 py-1 rounded-[5px] w-fit border border-white/20">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-white font-medium">
                        {activeMember.role}
                      </span>
                    </div>

                    <h4 className="font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                      {activeMember.name}
                    </h4>

                    <p className="font-sans text-xs sm:text-[13.5px] text-white/80 leading-[1.6] pt-1 border-t border-white/15">
                      {activeMember.bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

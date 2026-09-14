"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/content";

export default function AboutVisionMission() {
  const { visionMission } = ABOUT_DATA;

  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-white bg-neutral-950">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Vision & Mission
            </h2>
          </div>

          <p className="text-xs uppercase tracking-wider text-neutral-400 max-w-xs font-normal">
            Guiding our engineering excellence and long-term client partnerships across Asia.
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Vision */}
          <div className="rounded-2xl p-8 sm:p-12 border border-neutral-800 bg-neutral-900/90 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  {visionMission.vision.badge}
                </span>
                <span className="text-xs text-neutral-500 font-semibold">01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {visionMission.vision.title}
              </h3>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-neutral-200 font-normal">
                {visionMission.vision.statement}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 text-xs uppercase tracking-wider text-neutral-400 font-medium">
              <span>Marine Propulsion • Power Plants • Heavy Process Infrastructure</span>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="rounded-2xl p-8 sm:p-12 border border-neutral-800 bg-neutral-900/90 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#93c5fd] font-semibold">
                  {visionMission.mission.badge}
                </span>
                <span className="text-xs text-neutral-500 font-semibold">02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {visionMission.mission.title}
              </h3>

              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-white tracking-tight">
                  {visionMission.mission.statement}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {visionMission.mission.detail}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 text-xs uppercase tracking-wider text-neutral-400 font-medium">
              <span className="text-neutral-300">Operational Uptime Priority</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

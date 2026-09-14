"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCapabilities() {
  const { capabilities } = ABOUT_DATA;

  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-neutral-50/50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
              {capabilities.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              {capabilities.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal">
              {capabilities.subtitle}
            </p>
          </div>

          <Link
            href="/specializations"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs shrink-0"
          >
            <span>Explore Technical Specs</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Core In-House Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.disciplines.map((item) => (
            <div
              key={item.code}
              className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0C4B92] tracking-wider">
                    {item.code}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <Link
                  href="/specializations"
                  className="text-xs font-semibold text-[#0C4B92] hover:underline"
                >
                  View full technical specifications
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Summary Note */}
        <div className="rounded-xl border border-neutral-200 bg-white p-8 sm:p-10">
          <div className="max-w-4xl mx-auto space-y-3 text-center">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block">
              Integrated Workshop Governance
            </span>
            <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed">
              {capabilities.summaryStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

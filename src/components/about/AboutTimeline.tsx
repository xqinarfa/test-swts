"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_DATA, TimelineItem } from "@/data/content";

function TimelineLogo({ type }: { type: TimelineItem["logoType"] }) {
  switch (type) {
    case "westinghouse":
      return (
        <div className="h-14 flex items-center justify-center">
          <svg viewBox="0 0 176 44" className="h-8 sm:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Westinghouse Circle Monogram */}
            <circle cx="20" cy="22" r="18" fill="#111827" />
            <circle cx="20" cy="22" r="15" stroke="#ffffff" strokeWidth="1.6" fill="none" />
            {/* Crown dots */}
            <circle cx="15.2" cy="13.5" r="1.4" fill="#ffffff" />
            <circle cx="20" cy="11.5" r="1.4" fill="#ffffff" />
            <circle cx="24.8" cy="13.5" r="1.4" fill="#ffffff" />
            {/* W paths */}
            <path
              d="M13 16 L16.5 28 L20 20 L23.5 28 L27 16"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Westinghouse Wordmark */}
            <text
              x="46"
              y="28"
              fill="#111827"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.02em"
            >
              Westinghouse
            </text>
          </svg>
        </div>
      );

    case "siemens":
      return (
        <div className="h-14 flex flex-col items-center justify-center">
          <div className="flex flex-col items-start leading-none">
            <span
              className="font-bold text-[17px] sm:text-[18px] tracking-[0.06em]"
              style={{ color: "#00646E", fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              SIEMENS
            </span>
            <div className="w-full h-[2.5px] bg-[#00646E] my-1" />
            <span
              className="text-[13px] sm:text-[14px] font-bold tracking-tight text-neutral-900"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Westinghouse
            </span>
          </div>
        </div>
      );

    case "privatised":
      return (
        <div className="h-14 flex items-center justify-center">
          <svg viewBox="0 0 150 48" className="h-9 sm:h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Aerodynamic Frame */}
            <path
              d="M26 6 C12 6, 6 15, 6 25 C6 37, 14 42, 28 42 L136 42 C146 42, 148 35, 148 30"
              stroke="#0C4B92"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 6 L138 6 C145 6, 148 9, 148 13"
              stroke="#0C4B92"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Italic SWTS */}
            <text
              x="76"
              y="32"
              textAnchor="middle"
              fill="#0C4B92"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fontSize="24"
              letterSpacing="-0.02em"
            >
              SWTS
            </text>
          </svg>
        </div>
      );

    case "pon":
      return (
        <div className="h-14 flex flex-col items-center justify-center">
          <svg viewBox="0 0 150 42" className="h-8 sm:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26 4 C12 4, 6 12, 6 22 C6 34, 14 38, 28 38 L136 38 C146 38, 148 31, 148 26"
              stroke="#0C4B92"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 4 L138 4 C145 4, 148 7, 148 11"
              stroke="#0C4B92"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <text
              x="76"
              y="28"
              textAnchor="middle"
              fill="#0C4B92"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fontSize="22"
              letterSpacing="-0.02em"
            >
              SWTS
            </text>
          </svg>
          <span
            className="text-[11px] font-medium tracking-wide text-neutral-600 -mt-0.5"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            a pon company
          </span>
        </div>
      );

    case "swts-company":
      return (
        <div className="h-14 flex flex-col items-center justify-center">
          <svg viewBox="0 0 150 42" className="h-8 sm:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26 4 C12 4, 6 12, 6 22 C6 34, 14 38, 28 38 L136 38 C146 38, 148 31, 148 26"
              stroke="#0C4B92"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 4 L138 4 C145 4, 148 7, 148 11"
              stroke="#0C4B92"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <text
              x="76"
              y="28"
              textAnchor="middle"
              fill="#0C4B92"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fontSize="22"
              letterSpacing="-0.02em"
            >
              SWTS
            </text>
          </svg>
          <span
            className="text-[10.5px] font-medium tracking-normal text-neutral-600 -mt-0.5"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            A SWTS Company
          </span>
        </div>
      );

    default:
      return null;
  }
}

export default function AboutTimeline() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Clean Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Our Timeline
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Five decades of engineering evolution, OEM integration, and regional service leadership.
          </p>
        </div>

        {/* 5 Milestone Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {TIMELINE_DATA.map((item, idx) => {
            const isTwoLineTitle = item.year === "2011";

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-transparent hover:border-neutral-200 hover:bg-neutral-50/70 transition-all duration-200 group"
              >
                {/* Year in Bold Primary Color */}
                <span className="font-bold text-lg sm:text-xl text-[#0C4B92] tracking-tight mb-2">
                  {item.year}
                </span>

                {/* Corporate Entity / Era Title */}
                <div className="h-10 flex items-center justify-center mb-4">
                  {isTwoLineTitle ? (
                    <div className="flex flex-col items-center leading-tight">
                      <span className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                        100% PON
                      </span>
                      <span className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                        HOLDINGS BV
                      </span>
                    </div>
                  ) : (
                    <h3 className="font-bold text-xs sm:text-[13px] uppercase tracking-wider text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                  )}
                </div>

                {/* Logo Presentation */}
                <div className="w-full flex items-center justify-center min-h-[72px] mb-4">
                  <TimelineLogo type={item.logoType} />
                </div>

                {/* Subtle Divider */}
                <div className="w-10 h-px bg-neutral-200 mb-3 group-hover:w-16 group-hover:bg-[#0C4B92]/40 transition-all duration-300" />

                {/* Factual Historical Context */}
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.note}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

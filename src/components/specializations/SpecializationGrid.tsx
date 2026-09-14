"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SPECIALIZATIONS_DATA, SpecializationItem } from "@/data/content";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import SpecializationDetailModal from "./SpecializationDetailModal";

export default function SpecializationGrid() {
  const [modalItem, setModalItem] = useState<SpecializationItem | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-black bg-[#FBFBFB] border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-4xl">
            <div className="space-y-3">
              <div className="inline-flex backdrop-blur-[5px] bg-[rgba(112,110,110,0.13)] px-3 py-1.5 rounded-[5px]">
                <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black">
                  Complete Capabilities Directory
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
                Comprehensive Engineering Solutions
              </h2>
            </div>
            <p className="font-sans text-sm text-black/60 max-w-sm">
              Review full service scopes, dimensional parameters, material specifications, and quality guarantees for all 10 divisions.
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SPECIALIZATIONS_DATA.map((item, idx) => {
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: (idx % 2) * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-black text-white font-semibold">
                        {item.number}
                      </span>
                      <span className="backdrop-blur-md bg-white/85 text-black font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <h3 className="font-bold text-xl sm:text-2xl text-black tracking-tight group-hover:text-[#0C4B92] transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-black/75 leading-relaxed">
                        {item.headline}
                      </p>

                      {/* Key Advantages Summary */}
                      <div className="space-y-2 pt-2">
                        {item.keyAdvantages
                          .slice(0, isExpanded ? item.keyAdvantages.length : 2)
                          .map((adv, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-black/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                              <span className="leading-snug">
                                <strong className="font-semibold text-black">
                                  {adv.title}:
                                </strong>{" "}
                                {adv.desc}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Expand / Collapse toggle for advantages */}
                      {item.keyAdvantages.length > 2 && (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="font-mono text-[11px] uppercase tracking-wider text-black/60 hover:text-black flex items-center gap-1 transition-colors pt-1"
                        >
                          <span>
                            {isExpanded
                              ? "Show Less Advantages"
                              : `+${item.keyAdvantages.length - 2} More Advantages`}
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}

                      {/* Specifications Badges */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {item.specifications.map((spec, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 text-black/70 border border-black/5"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-5 border-t border-black/10 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-black/40">
                        SWTS Batam Workshop
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setModalItem(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                      >
                        <span>Full Brochure</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Detail Modal */}
      <SpecializationDetailModal
        item={modalItem}
        isOpen={!!modalItem}
        onClose={() => setModalItem(null)}
      />
    </>
  );
}

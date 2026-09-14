"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SPECIALIZATIONS_DATA,
  SPECIALIZATION_CATEGORIES,
  SpecializationItem,
} from "@/data/content";
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import SpecializationDetailModal from "./SpecializationDetailModal";

export default function SpecializationShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeId, setActiveId] = useState(SPECIALIZATIONS_DATA[0].id);
  const [modalItem, setModalItem] = useState<SpecializationItem | null>(null);

  // Filter items based on selected category tab
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return SPECIALIZATIONS_DATA;
    return SPECIALIZATIONS_DATA.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  // Ensure active item is always in filtered list
  const activeItem = useMemo(() => {
    const found = filteredItems.find((item) => item.id === activeId);
    return found || filteredItems[0] || SPECIALIZATIONS_DATA[0];
  }, [filteredItems, activeId]);

  return (
    <>
      <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 lg:px-16 text-black bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10">
            <div className="space-y-3">
              <div className="inline-flex backdrop-blur-[5px] bg-[rgba(112,110,110,0.13)] px-3 py-1.5 rounded-[5px]">
                <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black">
                  Master Capabilities Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                10 Precision Engineering Disciplines
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-neutral-100 border border-black/10 max-w-full overflow-x-auto">
              {SPECIALIZATION_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      const firstOfCat =
                        cat === "All"
                          ? SPECIALIZATIONS_DATA[0]
                          : SPECIALIZATIONS_DATA.find((i) => i.category === cat);
                      if (firstOfCat) setActiveId(firstOfCat.id);
                    }}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isSelected ? "text-white" : "text-black/60 hover:text-black"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-black rounded-full z-0 shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Master-Detail Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: List of Specializations */}
            <div className="lg:col-span-6 flex flex-col gap-2">
              {filteredItems.map((item) => {
                const isActive = item.id === activeItem.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className={`relative z-10 px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-4 ${
                        isActive
                          ? "text-white"
                          : "text-black/80 hover:text-black hover:bg-neutral-100"
                      }`}
                    >
                      {/* Active Gliding Pill Background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSpecPill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                          className="absolute inset-0 bg-black rounded-xl z-0 shadow-md shadow-black/20"
                        />
                      )}

                      {/* Left: Number & Title */}
                      <div className="relative z-10 flex items-center gap-3.5 min-w-0">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded font-semibold shrink-0 transition-colors ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-black/5 text-black/60 group-hover:bg-black/10"
                          }`}
                        >
                          {item.number}
                        </span>

                        <div className="flex flex-col min-w-0">
                          <span className="font-sans font-semibold text-sm sm:text-base truncate">
                            {item.shortTitle}
                          </span>
                          <span
                            className={`font-mono text-[11px] uppercase tracking-wider truncate ${
                              isActive ? "text-white/70" : "text-black/50"
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Right: Active Indicator or Arrow */}
                      <div className="relative z-10 shrink-0">
                        {isActive ? (
                          <motion.div
                            initial={{ scale: 0.8, rotate: 0 }}
                            animate={{ scale: 1, rotate: 45 }}
                            className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-sm"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-black/30 group-hover:text-black/70 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Interactive Preview Card */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-900 text-white border border-black/10 shadow-2xl shadow-black/20 min-h-[580px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col h-full"
                  >
                    {/* Top Image Preview Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black shrink-0">
                      <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0C4B92] font-semibold text-white shadow-md">
                          {activeItem.number}
                        </span>
                        <span className="backdrop-blur-md bg-black/60 border border-white/20 font-mono text-[11px] uppercase tracking-wider text-white px-3 py-1 rounded-full">
                          {activeItem.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                          {activeItem.title}
                        </h3>

                        <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                          {activeItem.headline}
                        </p>

                        {/* Top Advantages */}
                        <div className="space-y-2 pt-2">
                          {activeItem.keyAdvantages.slice(0, 3).map((adv, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white/85"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="leading-snug">
                                <strong className="text-white font-medium">
                                  {adv.title}:
                                </strong>{" "}
                                {adv.desc}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Spec Pills */}
                        <div className="pt-2 flex flex-wrap gap-2">
                          {activeItem.specifications.slice(0, 3).map((spec, i) => (
                            <span
                              key={i}
                              className="text-[10.5px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Modal Trigger Button */}
                      <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                        <span className="font-mono text-[11px] text-white/50">
                          ISO & OEM Specification Compliant
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setModalItem(activeItem)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-md transition-colors"
                        >
                          <span>Full Specifications</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
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

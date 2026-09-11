"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SPECIALIZATIONS_DATA,
  SPECIALIZATION_CATEGORIES,
  SpecializationItem,
} from "@/data/content";
import {
  Search,
  X,
  LayoutGrid,
  Columns,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import SpecializationDetailModal from "./SpecializationDetailModal";

// Unique flagship highlights for Von Restorff Isolation Effect
const FLAGSHIP_BADGES: Record<string, string> = {
  "hvaf-coating": "Alternative to Hard Chrome",
  honing: "Up to 8m Length / 800mm ID",
  "dynamic-balancing": "2,000 kg Dynamic Capacity",
  "pulse-laser-welding": "Zero Thermal Distortion",
  "seal-manufacturing": "Custom CNC Turn <600mm",
  "navigation-equipment": "All Major Class Approvals",
  "engine-reconditioning": "Crankshafts, Heads & Liners",
  "cryogenic-workshop": "-196°C LNG Specialist",
  "chrome-liner": "Electrolytic Hard Chrome",
  "white-metal-babbitting": "ASTM B23 Centrifugal Cast",
};

export default function SpecializationCatalogue() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "master-detail">("grid");
  const [activeMasterId, setActiveMasterId] = useState(SPECIALIZATIONS_DATA[0].id);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<SpecializationItem | null>(null);

  const controlsRef = useRef<HTMLDivElement>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: SPECIALIZATIONS_DATA.length };
    SPECIALIZATIONS_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items dynamically based on search query and category
  const filteredItems = useMemo(() => {
    return SPECIALIZATIONS_DATA.filter((item) => {
      // Category match
      const matchCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      if (!matchCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchHeadline = item.headline.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSpecs = item.specifications.some((s) =>
        s.toLowerCase().includes(q)
      );
      const matchEquip =
        item.equipmentSupported?.some((e) => e.toLowerCase().includes(q)) ?? false;
      const matchFlagship =
        FLAGSHIP_BADGES[item.id]?.toLowerCase().includes(q) ?? false;

      return (
        matchTitle ||
        matchHeadline ||
        matchDesc ||
        matchSpecs ||
        matchEquip ||
        matchFlagship
      );
    });
  }, [searchQuery, selectedCategory]);

  // Active item for master-detail view
  const activeMasterItem = useMemo(() => {
    const found = filteredItems.find((i) => i.id === activeMasterId);
    return found || filteredItems[0] || SPECIALIZATIONS_DATA[0];
  }, [filteredItems, activeMasterId]);

  // Handle direct consultation request
  const handleInquire = (item: SpecializationItem) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("swts-select-service", {
          detail: item.shortTitle || item.title,
        })
      );
      const formEl = document.getElementById("assessment-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Scroll-driven trigger for Split View (Master-Detail mode)
  useEffect(() => {
    if (viewMode !== "master-detail") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const targetY = window.innerHeight * 0.42; // Focal center line
          let closestId = "";
          let closestDistance = Infinity;

          filteredItems.forEach((item) => {
            const el = document.getElementById(`split-item-${item.id}`);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            // Check vertical distance of element center to target line
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - targetY);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestId = item.id;
            }
          });

          if (closestId && closestId !== activeMasterId) {
            setActiveMasterId(closestId);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode, filteredItems, activeMasterId]);

  const scrollToItem = (id: string) => {
    setActiveMasterId(id);
    const el = document.getElementById(`split-item-${id}`);
    if (el) {
      const targetY = window.innerHeight * 0.42;
      const rect = el.getBoundingClientRect();
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const targetScroll = currentScroll + rect.top - targetY + rect.height / 2;
      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const currentMasterIndex = useMemo(() => {
    const idx = filteredItems.findIndex((i) => i.id === activeMasterItem.id);
    return idx >= 0 ? idx : 0;
  }, [filteredItems, activeMasterItem.id]);

  const handlePrevDiscipline = () => {
    if (currentMasterIndex > 0) {
      const prevItem = filteredItems[currentMasterIndex - 1];
      scrollToItem(prevItem.id);
    }
  };

  const handleNextDiscipline = () => {
    if (currentMasterIndex < filteredItems.length - 1) {
      const nextItem = filteredItems[currentMasterIndex + 1];
      scrollToItem(nextItem.id);
    }
  };

  return (
    <>
      <section
        id="catalogue"
        className="relative w-full py-16 md:py-24 px-4 sm:px-8 lg:px-12 text-black bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 backdrop-blur-[5px] bg-[rgba(112,110,110,0.13)] px-3 py-1.5 rounded-[5px]">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black">
                  Engineering Capabilities Directory
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
                10 Precision Engineering Disciplines
              </h2>
              <p className="font-sans text-sm sm:text-base text-black/70 leading-relaxed font-light">
                Search and explore certified surface treatment, bore machining, rotor balancing, marine navigation, and cryogenic overhaul services delivered at our Batam workshop.
              </p>
            </div>

            {/* View Switcher (Jakob's Law) */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-neutral-100 border border-black/10 self-start md:self-end">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-black shadow-sm"
                    : "text-black/60 hover:text-black"
                }`}
                title="Grid View"
                aria-label="Switch to Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("master-detail")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                  viewMode === "master-detail"
                    ? "bg-white text-black shadow-sm"
                    : "text-black/60 hover:text-black"
                }`}
                title="Master-Detail View"
                aria-label="Switch to Master-Detail View"
              >
                <Columns className="w-4 h-4" />
                <span className="hidden sm:inline">Split View</span>
              </button>
            </div>
          </div>

          {/* Interactive Controls Bar: Search & Category Pills (Fitts's Law) */}
          <div
            ref={controlsRef}
            className="sticky top-20 z-30 bg-white/95 backdrop-blur-md py-4 border-b border-black/10 flex flex-col gap-4 shadow-sm -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12"
          >
            {/* Top row: Search Bar & Match Indicator */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by process, component (e.g., crankshaft, LNG, honing)..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-100 border border-black/10 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:bg-white transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-black/40 hover:text-black transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 text-xs font-mono text-black/60 shrink-0">
                <span>
                  Showing <strong>{filteredItems.length}</strong> of{" "}
                  <strong>{SPECIALIZATIONS_DATA.length}</strong> disciplines
                </span>
                {(searchQuery || selectedCategory !== "All") && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Bottom row: Category Filter Pills with Item Count (Hick's Law & Miller's Law) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {SPECIALIZATION_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;

                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (viewMode === "master-detail") {
                        const firstOfCat =
                          cat === "All"
                            ? SPECIALIZATIONS_DATA[0]
                            : SPECIALIZATIONS_DATA.find((i) => i.category === cat);
                        if (firstOfCat) setActiveMasterId(firstOfCat.id);
                      }
                    }}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 shrink-0 ${
                      isSelected ? "text-white" : "text-black/70 hover:text-black bg-neutral-100 hover:bg-neutral-200"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="catalogueCatPill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-black rounded-full z-0 shadow-sm"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? "bg-white/20 text-white" : "bg-black/10 text-black/60"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Empty Search State */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center space-y-4 max-w-md mx-auto">
              <div className="w-14 h-14 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-black/40">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black">No matching disciplines</h3>
              <p className="text-sm text-black/60">
                We couldn&apos;t find any engineering services matching &ldquo;{searchQuery}&rdquo;. Try searching for general terms like &ldquo;coating&rdquo;, &ldquo;valve&rdquo;, or &ldquo;machining&rdquo;.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW MODE 1: GRID VIEW (Standard Industrial Engineering Cards)           */}
          {/* ========================================================================= */}
          {viewMode === "grid" && filteredItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredItems.map((item, idx) => {
                const isExpanded = expandedCardId === item.id;
                const flagshipBadge = FLAGSHIP_BADGES[item.id];

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (idx % 2) * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Top Image Banner with Visual Anchors */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-black text-white font-semibold">
                          {item.number}
                        </span>
                        <span className="backdrop-blur-md bg-white/90 text-black font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* Flagship Badge (Von Restorff Effect) */}
                      {flagshipBadge && (
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] bg-red-600/90 text-white font-mono text-[11px] uppercase tracking-wider font-semibold backdrop-blur-sm shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            <span>{flagshipBadge}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Title */}
                        <h3 className="font-bold text-xl sm:text-2xl text-black tracking-tight group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>

                        {/* Core Value Proposition (Miller's Law) */}
                        <p className="font-sans text-sm text-black/75 leading-relaxed">
                          {item.headline}
                        </p>

                        {/* Feasibility Metric Chips (Miller's Law Chunking) */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.specifications.slice(0, 3).map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="font-mono text-[11px] px-2.5 py-1 rounded bg-neutral-100 border border-black/5 text-black/80 font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Expandable Key Advantages Accordion */}
                        <div className="pt-2 border-t border-black/10">
                          <button
                            onClick={() =>
                              setExpandedCardId(isExpanded ? null : item.id)
                            }
                            className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider font-semibold text-black/70 hover:text-black py-2 cursor-pointer focus:outline-none"
                          >
                            <span>
                              {isExpanded ? "Hide Advantages" : `Key Advantages (${item.keyAdvantages.length})`}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden pt-2 space-y-2"
                              >
                                {item.keyAdvantages.map((adv, aIdx) => (
                                  <div
                                    key={aIdx}
                                    className="flex items-start gap-2.5 text-xs text-black/80 p-2 rounded-lg bg-neutral-50"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                    <div className="space-y-0.5">
                                      <span className="font-semibold text-black block">
                                        {adv.title}
                                      </span>
                                      <p className="text-black/65 text-[11px] leading-relaxed">
                                        {adv.desc}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Direct Actions (Fitts's Law) */}
                      <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => setModalItem(item)}
                          className="text-xs font-mono uppercase tracking-wider font-semibold text-black hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer py-1.5"
                        >
                          <span>Full Specifications</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleInquire(item)}
                          className="px-4 py-2 rounded-full bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                        >
                          <span>Inquire Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW MODE 2: MASTER-DETAIL VIEW (Scroll-Driven Interactive Showcase)      */}
          {/* ========================================================================= */}
          {viewMode === "master-detail" && filteredItems.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative pb-20">
              {/* Left Column: Natural Page Scroll Stream (Sleek Gliding Pill Rows) */}
              <div className="lg:col-span-6 flex flex-col gap-2 relative">
                {filteredItems.map((item) => {
                  const isActive = item.id === activeMasterItem.id;
                  const flagshipBadge = FLAGSHIP_BADGES[item.id];

                  return (
                    <div
                      key={item.id}
                      id={`split-item-${item.id}`}
                      onMouseEnter={() => setActiveMasterId(item.id)}
                      onClick={() => scrollToItem(item.id)}
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
                            layoutId="activeMasterPill"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                            className="absolute inset-0 bg-black rounded-xl z-0 shadow-md shadow-black/20"
                          />
                        )}

                        {/* Number & Title */}
                        <div className="relative z-10 flex items-center gap-3.5 min-w-0">
                          <span
                            className={`font-mono text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-black/10 text-black/70"
                            }`}
                          >
                            {item.number}
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-bold text-sm sm:text-base truncate leading-snug">
                              {item.shortTitle || item.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span
                                className={`text-[11px] font-mono uppercase tracking-wider ${
                                  isActive ? "text-white/60" : "text-black/50"
                                }`}
                              >
                                {item.category}
                              </span>
                              {flagshipBadge && (
                                <span
                                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                                    isActive
                                      ? "bg-red-600 text-white"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {flagshipBadge}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Active Indicator Arrow */}
                        <div className="relative z-10 shrink-0">
                          <motion.div
                            animate={{
                              scale: isActive ? 1 : 0.8,
                              opacity: isActive ? 1 : 0.3,
                            }}
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                              isActive ? "bg-red-600 text-white" : "text-black/40"
                            }`}
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Sticky / Fixed Preview Card */}
              <div className="lg:col-span-6 lg:sticky lg:top-[220px] lg:h-[calc(100vh-240px)] lg:min-h-[540px] lg:max-h-[660px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMasterItem.id}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full flex flex-col justify-between rounded-2xl border border-black/10 bg-neutral-50 overflow-hidden shadow-lg"
                  >
                    {/* Visual Card Photo */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 shrink-0">
                      <img
                        src={activeMasterItem.image}
                        alt={activeMasterItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-black text-white font-semibold">
                          {activeMasterItem.number}
                        </span>
                        <span className="backdrop-blur-md bg-white/90 text-black font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                          {activeMasterItem.category}
                        </span>
                      </div>

                      {FLAGSHIP_BADGES[activeMasterItem.id] && (
                        <div className="absolute bottom-3 left-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] bg-red-600 text-white font-mono text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            <span>{FLAGSHIP_BADGES[activeMasterItem.id]}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Technical Card Details */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4 overflow-y-auto">
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <h3 className="font-bold text-2xl text-black leading-snug">
                            {activeMasterItem.title}
                          </h3>
                          <p className="font-sans text-sm text-black/75 leading-relaxed">
                            {activeMasterItem.headline}
                          </p>
                        </div>

                        {/* Technical Parameter Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {activeMasterItem.specifications.map((spec, i) => (
                            <span
                              key={i}
                              className="font-mono text-[11px] px-2.5 py-1 rounded bg-white border border-black/10 text-black/80 font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Key Advantages */}
                        <div className="space-y-2 pt-2 border-t border-black/10">
                          <span className="font-mono text-xs uppercase tracking-wider text-black font-semibold block">
                            Key Advantages:
                          </span>
                          <div className="space-y-2">
                            {activeMasterItem.keyAdvantages.slice(0, 3).map((adv, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-black/80"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="leading-snug">
                                  <strong className="font-semibold text-black">
                                    {adv.title}:
                                  </strong>{" "}
                                  <span className="text-black/75">{adv.desc}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-3 shrink-0">
                        <button
                          onClick={() => setModalItem(activeMasterItem)}
                          className="text-xs font-mono uppercase tracking-wider font-semibold text-black hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                        >
                          <span>Full Specifications</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleInquire(activeMasterItem)}
                          className="px-5 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                        >
                          <span>Inquire Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Deep Dive Specification Modal (Progressive Disclosure) */}
      <SpecializationDetailModal
        item={modalItem}
        isOpen={!!modalItem}
        onClose={() => setModalItem(null)}
      />
    </>
  );
}

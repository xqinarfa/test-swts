"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SectorData, SERVICES_CATALOGUE, ServiceDetailItem } from "@/data/servicesData";

interface SectorDetailModalProps {
  sector: SectorData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SectorDetailModal({
  sector,
  isOpen,
  onClose,
}: SectorDetailModalProps) {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!sector) return null;

  const services = SERVICES_CATALOGUE.filter((s) => s.sectorId === sector.id);

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sector-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            key="sector-modal-card"
            initial={{ scale: 0.93, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto"
          >
            {/* Header with Visual Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0">
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-black/30" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title Overlay */}
              <div className="absolute bottom-5 left-6 right-6 z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0C4B92]/80 text-[#60a5fa] border border-[#0C4B92] font-mono text-[11px] font-semibold uppercase">
                    {sector.serviceCount} Technical Scopes
                  </span>
                  <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                    PT. SWTS Batam
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {sector.name}
                </h2>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-neutral-200">
              {/* Sector Overview Description */}
              <div className="space-y-3 bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8]">
                  Operational Overview
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  {sector.description}
                </p>
                {sector.secondaryDescription && (
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed border-l-2 border-[#0C4B92] pl-3">
                    {sector.secondaryDescription}
                  </p>
                )}
              </div>

              {/* List of Sub-Services */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#38bdf8]" />
                    <span>Specialized Scopes & Services ({services.length})</span>
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">
                    Click any scope to expand details
                  </span>
                </div>

                <div className="space-y-3">
                  {services.map((srv, idx) => {
                    const isExpanded = expandedServiceId === srv.id;
                    const hasSubItems = srv.subItems && srv.subItems.length > 0;

                    return (
                      <div
                        key={srv.id}
                        className="rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                      >
                        {/* Summary Header Row */}
                        <div
                          onClick={() => toggleExpand(srv.id)}
                          className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                        >
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                                {srv.code}
                              </span>
                              <span className="text-xs text-neutral-400 font-mono">
                                {srv.category}
                              </span>
                              <span
                                className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${
                                  srv.status === "Specialized Scope"
                                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                    : srv.status === "Brochure Certified"
                                    ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                                    : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                                }`}
                              >
                                {srv.status}
                              </span>
                            </div>

                            <h4 className="font-bold text-base sm:text-lg text-white">
                              {srv.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                              {srv.summary}
                            </p>
                          </div>

                          <div className="p-1 rounded-md bg-white/5 text-neutral-400 shrink-0 mt-1">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-white" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-white/10 bg-black/40 p-5 space-y-4"
                            >
                              {/* 7-point scope if exists (e.g. Pump services) */}
                              {hasSubItems && (
                                <div className="space-y-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                                  <div className="flex items-center gap-2 text-emerald-400">
                                    <Wrench className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase tracking-wider">
                                      Specialized 7-Stage Scope Methodology
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    {srv.subItems!.map((sub, sIdx) => (
                                      <div
                                        key={sIdx}
                                        className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1"
                                      >
                                        <div className="flex items-center gap-2 text-xs font-semibold text-white">
                                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono text-[10px]">
                                            {sub.number || sIdx + 1}
                                          </span>
                                          <span>{sub.title}</span>
                                        </div>
                                        {sub.desc && (
                                          <p className="text-[11px] text-neutral-400 pl-6 leading-relaxed">
                                            {sub.desc}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Technical Highlights */}
                              <div className="space-y-2">
                                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                                  Key Engineering Highlights
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {srv.highlights.map((h, hIdx) => (
                                    <div
                                      key={hIdx}
                                      className="flex items-start gap-2 text-xs text-neutral-300"
                                    >
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                                      <span>{h}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Specifications */}
                              {srv.specifications && srv.specifications.length > 0 && (
                                <div className="pt-2 border-t border-white/5 space-y-1.5">
                                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                                    Technical Standards
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {srv.specifications.map((spec, spIdx) => (
                                      <span
                                        key={spIdx}
                                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-neutral-300"
                                      >
                                        {spec}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="p-5 border-t border-white/10 bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Class Survey & OEM Factory Calibration Certified</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:engineering@swts.com?subject=Engineering Inquiry: ${encodeURIComponent(
                    sector.name
                  )} Services`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0C4B92] hover:bg-[#0e5bb3] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#0C4B92]/25"
                >
                  <span>Inquire {sector.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

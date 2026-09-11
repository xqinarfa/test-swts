"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { SpecializationItem } from "@/data/content";

interface SpecializationDetailModalProps {
  item: SpecializationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecializationDetailModal({
  item,
  isOpen,
  onClose,
}: SpecializationDetailModalProps) {
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

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="spec-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            key="spec-modal-card"
            initial={{ scale: 0.93, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616] shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/30 font-semibold">
                  {item.number}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                  {item.category}
                </span>
              </div>
              {/* Close Button & ESC Hint */}
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-mono text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded border border-white/10">
                  ESC to close
                </span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-white">
              {/* Image & Title Banner */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                    {item.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
                    {item.headline}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.specifications.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brochure Description Paragraphs */}
              <div className="space-y-4 pt-4 border-t border-white/10 font-sans text-sm text-white/75 leading-relaxed font-light">
                {item.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Key Technical Advantages */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Key Technical Advantages</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.keyAdvantages.map((adv, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <h4 className="font-semibold text-sm text-white">
                          {adv.title}
                        </h4>
                      </div>
                      <p className="text-xs text-white/70 pl-6 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Supported (if applicable) */}
              {item.equipmentSupported && item.equipmentSupported.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span>Equipment Supported & Coverage</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.equipmentSupported.map((eq, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Integrated Capabilities (if applicable) */}
              {item.integratedCapabilities && item.integratedCapabilities.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-amber-400" />
                    <span>Integrated In-House Repair Capabilities</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.integratedCapabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Action Row */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs text-white/60">
                  Location: PT. SWTS Batam Engineering Facility
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("swts-select-service", {
                            detail: item.shortTitle || item.title,
                          })
                        );
                        setTimeout(() => {
                          const formEl = document.getElementById("assessment-form");
                          if (formEl) {
                            formEl.scrollIntoView({ behavior: "smooth", block: "center" });
                          }
                        }, 120);
                      }
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Request Technical Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

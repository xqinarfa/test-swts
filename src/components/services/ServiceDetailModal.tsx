"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Cpu,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Layers,
  Settings,
} from "lucide-react";
import { ServiceDetailItem } from "@/data/servicesData";

interface ServiceDetailModalProps {
  item: ServiceDetailItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({
  item,
  isOpen,
  onClose,
}: ServiceDetailModalProps) {
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
          key="service-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            key="service-modal-card"
            initial={{ scale: 0.93, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616] shrink-0">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0C4B92]/30 text-[#60a5fa] border border-[#0C4B92]/50 font-semibold">
                  {item.code}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                  {item.sectorName} · {item.category}
                </span>
                <span
                  className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${
                    item.status === "Specialized Scope"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : item.status === "Brochure Certified"
                      ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-neutral-200">
              {/* Title & Headline */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {item.title}
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Specialized Sub-Items Breakdown (e.g. Pump 7-point scope) */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="space-y-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Wrench className="w-4 h-4" />
                    <h3 className="font-semibold text-xs tracking-wider uppercase">
                      Specialized Engineering Capabilities ({item.subItems.length} Key Scopes)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.subItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs flex items-center justify-center font-bold">
                            {sub.number || idx + 1}
                          </span>
                          <h4 className="font-semibold text-sm text-white">
                            {sub.title}
                          </h4>
                        </div>
                        {sub.desc && (
                          <p className="text-xs text-neutral-400 leading-relaxed pl-7">
                            {sub.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#60a5fa]">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="font-semibold text-xs tracking-wider uppercase">
                    Service Highlights & Deliverables
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.highlights.map((point, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-neutral-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {item.specifications && item.specifications.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Wrench className="w-4 h-4" />
                    <h3 className="font-semibold text-xs tracking-wider uppercase">
                      Technical Standards & Coverage
                    </h3>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.specifications.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="font-mono text-[11px] text-neutral-500">
                          [{i + 1}]
                        </span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applicable Assets */}
              {item.applicableAssets && item.applicableAssets.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Layers className="w-4 h-4" />
                    <h3 className="font-semibold text-xs tracking-wider uppercase">
                      Target Equipment & Asset Classes
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.applicableAssets.map((asset, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-neutral-300"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer action bar */}
            <div className="p-5 border-t border-white/10 bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Class Survey & OEM Factory Calibration Standards</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:engineering@swts.com?subject=Engineering Inquiry: ${item.code} - ${encodeURIComponent(item.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0C4B92] hover:bg-[#0e5bb3] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#0C4B92]/25"
                >
                  <span>Inquire Scope</span>
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

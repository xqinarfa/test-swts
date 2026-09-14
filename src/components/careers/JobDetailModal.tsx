"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Briefcase, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { JobPosition } from "@/data/content";

interface JobDetailModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: JobPosition) => void;
}

export default function JobDetailModal({
  job,
  isOpen,
  onClose,
  onApply,
}: JobDetailModalProps) {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="job-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            key="job-modal-card"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto text-white"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616] shrink-0">
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs px-2.5 py-1 rounded font-semibold ${job.badgeColor}`}>
                  {job.tag}
                </span>
                <span className="font-mono text-xs text-white/50 uppercase tracking-wider hidden sm:inline">
                  {job.department}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline">
                  ESC to close
                </span>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Title & Metadata Badges */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {job.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono">
                    <Briefcase className="w-3.5 h-3.5 text-white/70" />
                    <span>{job.type}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 text-white/70" />
                    <span>{job.location}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-white/70" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                  {job.summary}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#60a5fa] font-bold flex items-center gap-2">
                  <span>/// KEY RESPONSIBILITIES</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Requirements */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#60a5fa] font-bold flex items-center gap-2">
                  <span>/// QUALIFICATIONS & REQUIREMENTS</span>
                </h3>
                <ul className="space-y-2.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0C4B92] shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compensation & Benefits */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#60a5fa] font-bold flex items-center gap-2">
                  <span>/// COMPENSATION & WORKPLACE PERKS</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs text-white/90 font-mono">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#161616] border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-white/70">
                  Applications currently being reviewed
                </span>
              </div>

              <button
                onClick={() => onApply(job)}
                className="px-6 py-2.5 rounded-full bg-[#0C4B92] hover:bg-[#0a3d77] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-900/40 cursor-pointer active:scale-95"
              >
                <span>Apply for this Position</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

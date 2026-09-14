"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, UploadCloud, Send, FileText } from "lucide-react";
import { JobPosition } from "@/data/content";

interface JobApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobApplicationModal({
  job,
  isOpen,
  onClose,
}: JobApplicationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [coverNote, setCoverNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
      setIsSubmitting(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="job-app-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            key="job-app-card"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto text-white"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616] shrink-0">
              <div>
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">
                  Application Form · PT. SWTS Batam
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {job.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form or Success State */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[80vh]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight">
                      Application Submitted Successfully!
                    </h4>
                    <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{fullName}</span>. Our recruitment team at PT. SWTS Batam has received your application for <span className="text-white font-semibold">{job.title}</span>. We will review your profile and contact you via email or WhatsApp.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Budi Pratama"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#0C4B92] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. budi@example.com"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#0C4B92] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +62 812 3456 7890"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#0C4B92] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>

                    {/* LinkedIn / Portfolio */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="e.g. linkedin.com/in/username"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#0C4B92] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Resume / CV Upload */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                      Upload Resume / CV (PDF or DOCX) <span className="text-red-500">*</span>
                    </label>
                    <label className="border-2 border-dashed border-white/20 hover:border-white/40 rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer bg-white/5 transition-colors group">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {fileName ? (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <FileText className="w-5 h-5" />
                          <span className="text-sm font-mono font-medium">{fileName}</span>
                        </div>
                      ) : (
                        <>
                          <UploadCloud className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                          <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors">
                            Click to browse or drop your resume here
                          </span>
                          <span className="text-[11px] font-mono text-white/40">
                            Max file size: 10MB
                          </span>
                        </>
                      )}
                    </label>
                  </div>

                  {/* Brief Cover Note */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                      Brief Note / Technical Certifications (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Briefly state your relevant certifications (e.g., Welder 6G, SolidWorks Certified, ISO 1940 balancing experience)..."
                      className="w-full bg-white/5 border border-white/15 focus:border-[#0C4B92] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0C4B92] hover:bg-[#0a3d77] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-900/40 cursor-pointer active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

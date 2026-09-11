"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Check, Send } from "lucide-react";
import { CAREERS_DATA, JobPosition } from "@/data/content";
import JobDetailModal from "./JobDetailModal";
import JobApplicationModal from "./JobApplicationModal";

export default function CareersOpenings() {
  const { positions } = CAREERS_DATA;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalJob, setActiveModalJob] = useState<JobPosition | null>(null);
  const [activeApplyJob, setActiveApplyJob] = useState<JobPosition | null>(null);

  const categories = ["All", "Engineering", "Fabrication & Welding"];

  const filteredPositions = positions.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Engineering") return p.department.includes("Engineering");
    if (selectedFilter === "Fabrication & Welding") return p.department.includes("Fabrication");
    return true;
  });

  const handleOpenDetail = (job: JobPosition) => {
    setActiveModalJob(job);
  };

  const handleOpenApply = (job: JobPosition) => {
    setActiveModalJob(null);
    setActiveApplyJob(job);
  };

  return (
    <section id="openings" className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-black bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex backdrop-blur-[5px] bg-black/5 border border-black/10 px-3 py-1.5 rounded-[5px] w-fit">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-black/80">
                CURRENT OPENINGS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Join Our Batam Workshop Team
            </h2>

            <p className="text-base text-neutral-600 max-w-2xl font-sans">
              We are actively looking for skilled engineers and technical craftsmen who thrive on precision, safety, and continuous technical advancement.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-black text-white shadow-sm"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPositions.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-300 shadow-xl shadow-neutral-900/5 overflow-hidden flex flex-col justify-between p-7 sm:p-9 transition-all group"
            >
              <div className="space-y-6">
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between gap-4">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-[5px] ${job.badgeColor}`}>
                    <Sparkles className="w-3 h-3" />
                    <span>{job.tag}</span>
                  </span>

                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {job.department}
                  </span>
                </div>

                {/* Job Title & Location Specs */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight group-hover:text-red-600 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono">
                      <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{job.type}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed pt-1">
                    {job.summary}
                  </p>
                </div>

                {/* Key Qualifications Chips */}
                <div className="space-y-2 pt-2 border-t border-neutral-200/70">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Qualifications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {job.qualifications.map((q, qIdx) => (
                      <span
                        key={qIdx}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 font-medium"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{q}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-8 border-t border-neutral-200/70 flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => handleOpenDetail(job)}
                  className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleOpenApply(job)}
                  className="px-6 py-2.5 rounded-full bg-black hover:bg-red-600 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer group/btn"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spontaneous Application Banner */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-neutral-950 tracking-tight">
              Don't see your specific discipline?
            </h4>
            <p className="text-sm text-neutral-600 max-w-xl">
              We are constantly scouting for talented CNC machinists, NDT inspectors, thermal spray operators, and technical estimators. Submit an open inquiry to our engineering talent pool.
            </p>
          </div>

          <button
            onClick={() => handleOpenApply(positions[0])}
            className="px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shrink-0 transition-all shadow-sm cursor-pointer"
          >
            <span>General Application</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modals */}
      <JobDetailModal
        job={activeModalJob}
        isOpen={Boolean(activeModalJob)}
        onClose={() => setActiveModalJob(null)}
        onApply={handleOpenApply}
      />

      <JobApplicationModal
        job={activeApplyJob}
        isOpen={Boolean(activeApplyJob)}
        onClose={() => setActiveApplyJob(null)}
      />
    </section>
  );
}

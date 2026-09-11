"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Check, Send, Search, X, SearchX, RotateCcw } from "lucide-react";
import { CAREERS_DATA, JobPosition } from "@/data/content";
import JobDetailModal from "./JobDetailModal";
import JobApplicationModal from "./JobApplicationModal";

export default function CareersOpenings() {
  const { positions } = CAREERS_DATA;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalJob, setActiveModalJob] = useState<JobPosition | null>(null);
  const [activeApplyJob, setActiveApplyJob] = useState<JobPosition | null>(null);

  const categories = ["All", "Engineering", "Fabrication & Welding"];

  const filteredPositions = positions.filter((p) => {
    let matchesCategory = true;
    if (selectedFilter === "Engineering") matchesCategory = p.department.includes("Engineering");
    if (selectedFilter === "Fabrication & Welding") matchesCategory = p.department.includes("Fabrication");

    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchTitle = p.title.toLowerCase().includes(query);
    const matchDept = p.department.toLowerCase().includes(query);
    const matchSummary = p.summary.toLowerCase().includes(query);
    const matchLocation = p.location.toLowerCase().includes(query);
    const matchTag = p.tag.toLowerCase().includes(query);
    const matchType = p.type.toLowerCase().includes(query);
    const matchQualifications = p.qualifications.some((q) => q.toLowerCase().includes(query));
    const matchRequirements = p.requirements?.some((r) => r.toLowerCase().includes(query));

    return (
      matchTitle ||
      matchDept ||
      matchSummary ||
      matchLocation ||
      matchTag ||
      matchType ||
      matchQualifications ||
      Boolean(matchRequirements)
    );
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedFilter("All");
  };

  const handleOpenDetail = (job: JobPosition) => {
    setActiveModalJob(job);
  };

  const handleOpenApply = (job: JobPosition) => {
    setActiveModalJob(null);
    setActiveApplyJob(job);
  };

  const isFiltering = searchQuery.trim().length > 0 || selectedFilter !== "All";

  return (
    <section id="openings" className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-black bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
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

        {/* Search & Filter Toolbar */}
        <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input Box */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, skill, department, or keyword (e.g. Mechanical, Welder, CAD)..."
              className="w-full pl-11 pr-10 py-2.5 rounded-full border border-neutral-200/90 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills & Reset */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const isSelected = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-black text-white shadow-xs"
                        : "bg-white hover:bg-neutral-200/70 border border-neutral-200/80 text-neutral-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {isFiltering && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 px-1">
          <span>
            Showing <strong className="text-neutral-900 font-semibold">{filteredPositions.length}</strong> of {positions.length} available roles
            {searchQuery && (
              <> for &ldquo;<span className="text-neutral-900 font-medium">{searchQuery}</span>&rdquo;</>
            )}
          </span>

          {selectedFilter !== "All" && (
            <span className="hidden sm:inline-block text-neutral-400">
              Filtered by: <span className="text-neutral-700 font-medium">{selectedFilter}</span>
            </span>
          )}
        </div>

        {/* Job Cards Grid or Empty State */}
        {filteredPositions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <SearchX className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-neutral-900">
                No matching positions found
              </h3>
              <p className="text-sm text-neutral-500 max-w-md mx-auto">
                We couldn&apos;t find any openings matching &ldquo;{searchQuery}&rdquo; in {selectedFilter === "All" ? "any department" : selectedFilter}. Try adjusting your keywords or clearing the filter.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPositions.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
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
        )}

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

"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  Send,
  Search,
  X,
  SearchX,
  RotateCcw,
  ChevronDown,
  Filter,
  Layers,
} from "lucide-react";
import { CAREERS_DATA, JobPosition } from "@/data/content";
import JobDetailModal from "./JobDetailModal";
import JobApplicationModal from "./JobApplicationModal";

export default function CareersOpenings() {
  const { positions } = CAREERS_DATA;
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModalJob, setActiveModalJob] = useState<JobPosition | null>(null);
  const [activeApplyJob, setActiveApplyJob] = useState<JobPosition | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compute unique departments and counts
  const { departments, departmentCounts } = useMemo(() => {
    const counts: Record<string, number> = {};
    positions.forEach((p) => {
      counts[p.department] = (counts[p.department] || 0) + 1;
    });
    const depts = Object.keys(counts).sort();
    return { departments: depts, departmentCounts: counts };
  }, [positions]);

  // Top 3 featured departments for quick-access pills (Miller's Law: 4 items max including All)
  const quickFilterPills = useMemo(() => {
    return [
      "All",
      "Mechanical Engineering",
      "Thermal Spray & Surface Coating",
      "Precision Machining & Honing",
    ];
  }, []);

  // Filtered positions based on department and search query
  const filteredPositions = useMemo(() => {
    return positions.filter((p) => {
      // Department filter
      if (selectedDepartment !== "All" && p.department !== selectedDepartment) {
        return false;
      }

      // Search query filter (multi-field matching)
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
  }, [positions, selectedDepartment, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
    setIsDropdownOpen(false);
  };

  const handleSelectDepartment = (dept: string) => {
    setSelectedDepartment(dept);
    setIsDropdownOpen(false);
  };

  const handleOpenDetail = (job: JobPosition) => {
    setActiveModalJob(job);
  };

  const handleOpenApply = (job: JobPosition) => {
    setActiveModalJob(null);
    setActiveApplyJob(job);
  };

  const isFiltering = searchQuery.trim().length > 0 || selectedDepartment !== "All";

  return (
    <section id="openings" className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-black bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold block">
            Current Openings
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Join Our Batam Workshop Team
          </h2>

          <p className="text-base text-neutral-600 max-w-2xl font-normal">
            We are actively looking for skilled engineers and technical craftsmen who thrive on precision, safety, and continuous technical advancement.
          </p>
        </div>

        {/* Scalable Search & Category Filtering System */}
        <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-5 sm:p-6 space-y-4 shadow-xs">
          {/* Main Controls Row: Search Input + Category Dropdown */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, discipline, skill (e.g. HVAF, Machinist, Balancing, NDT)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-neutral-200/90 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-xs"
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

            {/* Department Dropdown Selector (Handles 6-12+ categories cleanly) */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl border font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-between gap-3 transition-all cursor-pointer ${
                  selectedDepartment !== "All"
                    ? "bg-black text-white border-black shadow-xs"
                    : "bg-white hover:bg-neutral-100 border-neutral-200/90 text-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5" />
                  <span>
                    {selectedDepartment === "All" ? "All Departments" : selectedDepartment}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                    selectedDepartment !== "All" ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-600"
                  }`}>
                    {selectedDepartment === "All" ? positions.length : departmentCounts[selectedDepartment] || 0}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Dropdown Menu Popover */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-full sm:w-80 max-h-80 overflow-y-auto z-40 bg-white rounded-xl border border-neutral-200 shadow-xl shadow-neutral-900/10 p-2 space-y-1"
                  >
                    <div className="px-3 py-2 text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 font-bold border-b border-neutral-100 flex items-center justify-between">
                      <span>Select Department</span>
                      <span>{departments.length} Disciplines</span>
                    </div>

                    {/* "All Departments" Option */}
                    <button
                      type="button"
                      onClick={() => handleSelectDepartment("All")}
                      className={`w-full px-3 py-2.5 rounded-lg text-left text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                        selectedDepartment === "All"
                          ? "bg-neutral-100 font-bold text-black"
                          : "hover:bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {selectedDepartment === "All" ? (
                          <Check className="w-3.5 h-3.5 text-black" />
                        ) : (
                          <span className="w-3.5" />
                        )}
                        <span>All Departments</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[10.5px]">
                        {positions.length}
                      </span>
                    </button>

                    {/* Department Specific Options */}
                    {departments.map((dept) => {
                      const isSelected = selectedDepartment === dept;
                      const count = departmentCounts[dept] || 0;
                      return (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => handleSelectDepartment(dept)}
                          className={`w-full px-3 py-2 rounded-lg text-left text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-neutral-100 font-bold text-black"
                              : "hover:bg-neutral-50 text-neutral-700"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            {isSelected ? (
                              <Check className="w-3.5 h-3.5 text-black shrink-0" />
                            ) : (
                              <span className="w-3.5 shrink-0" />
                            )}
                            <span className="truncate">{dept}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[10.5px] shrink-0">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Secondary Row: Quick Shortcut Pills (Miller's Law) & Active Filter Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-200/60">
            {/* Quick Filter Pills (Top 4 most common) */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                Quick Filter:
              </span>

              {quickFilterPills.map((pill) => {
                const isSelected = selectedDepartment === pill;
                const count = pill === "All" ? positions.length : departmentCounts[pill] || 0;
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => setSelectedDepartment(pill)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-neutral-900 text-white shadow-xs"
                        : "bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700"
                    }`}
                  >
                    <span>{pill === "All" ? "All" : pill.split(" ")[0]}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Reset All Button */}
            {isFiltering && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 px-1">
          <span>
            Showing <strong className="text-neutral-900 font-semibold">{filteredPositions.length}</strong> of {positions.length} available roles
            {searchQuery && (
              <> matching &ldquo;<span className="text-neutral-900 font-medium">{searchQuery}</span>&rdquo;</>
            )}
            {selectedDepartment !== "All" && (
              <> in <span className="text-neutral-900 font-medium">{selectedDepartment}</span></>
            )}
          </span>

          {selectedDepartment !== "All" && (
            <button
              onClick={() => setSelectedDepartment("All")}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <span>Clear category filter</span>
              <X className="w-3 h-3" />
            </button>
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
                We couldn&apos;t find any openings matching &ldquo;{searchQuery}&rdquo; in {selectedDepartment === "All" ? "any department" : selectedDepartment}. Try adjusting your keywords or clearing the filter.
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
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-neutral-200/90 bg-white hover:border-[#0C4B92]/50 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between p-7 sm:p-9 transition-all duration-200 group"
              >
                <div className="space-y-6">
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between gap-4">
                  <span className={`inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-[5px] ${job.badgeColor}`}>
                    <span>{job.tag}</span>
                  </span>

                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {job.department}
                  </span>
                </div>

                {/* Job Title & Location Specs */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight group-hover:text-[#0C4B92] transition-colors">
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
                  className="px-6 py-2.5 rounded-full bg-black hover:bg-[#0C4B92] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-sm cursor-pointer"
                >
                  Apply Now
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

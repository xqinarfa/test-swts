"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Wrench,
  SlidersHorizontal,
  RotateCcw,
  Ship,
  Anchor,
  Zap,
  Factory,
  Server,
  Layers,
} from "lucide-react";
import {
  SERVICES_SECTORS,
  SERVICES_CATALOGUE,
  ServiceDetailItem,
  SectorData,
} from "@/data/servicesData";
import ServiceDetailModal from "./ServiceDetailModal";

const SECTOR_ICONS: Record<string, React.ElementType> = {
  marine: Ship,
  offshore: Anchor,
  "power-plant": Zap,
  "process-industry": Factory,
  "data-center": Server,
};

interface ServicesCatalogueProps {
  activeSector?: string;
  onSectorChange?: (sectorId: string) => void;
}

export default function ServicesCatalogue({
  activeSector,
  onSectorChange,
}: ServicesCatalogueProps = {}) {
  const [internalSector, setInternalSector] = useState<string>("all");
  const selectedSector = activeSector !== undefined ? activeSector : internalSector;
  const setSelectedSector = (sec: string) => {
    if (onSectorChange) onSectorChange(sec);
    setInternalSector(sec);
  };
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceDetailItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_CATALOGUE.filter((item) => {
      // Sector filter
      if (selectedSector !== "all" && item.sectorId !== selectedSector) {
        return false;
      }
      // Status filter
      if (selectedStatus !== "all" && item.status !== selectedStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchCode = item.code.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchHighlights = item.highlights.some((h) => h.toLowerCase().includes(q));
        const matchSubItems = item.subItems?.some(
          (s) => s.title.toLowerCase().includes(q) || (s.desc && s.desc.toLowerCase().includes(q))
        );
        return matchTitle || matchCode || matchCategory || matchSummary || matchHighlights || matchSubItems;
      }
      return true;
    });
  }, [selectedSector, selectedStatus, searchQuery]);

  const activeSectorData = useMemo(() => {
    if (selectedSector === "all") return null;
    return SERVICES_SECTORS.find((s) => s.id === selectedSector) || null;
  }, [selectedSector]);

  const handleOpenModal = (item: ServiceDetailItem) => {
    setSelectedService(item);
    setIsModalOpen(true);
  };

  const resetFilters = () => {
    setSelectedSector("all");
    setSearchQuery("");
    setSelectedStatus("all");
  };

  return (
    <section id="services-catalogue" className="relative w-full py-12 md:py-20 px-6 sm:px-12 lg:px-16 text-neutral-900 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C4B92]" />
              <span className="text-xs uppercase tracking-widest text-[#0C4B92] font-semibold">
                Services Directory · 5 Sectors
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              Specialized Engineering Services
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Explore our certified engineering, precision workshop maintenance, and on-site field
              solutions tailored for mission-critical marine and heavy industrial operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 font-semibold border border-neutral-200">
              Showing {filteredServices.length} of {SERVICES_CATALOGUE.length} Scopes
            </span>
          </div>
        </div>

        {/* Sector Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedSector("all")}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 ${
              selectedSector === "all"
                ? "bg-[#0C4B92] text-white shadow-md shadow-[#0C4B92]/20"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Sectors</span>
            <span
              className={`font-mono text-[11px] px-1.5 py-0.2 rounded ${
                selectedSector === "all" ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-700"
              }`}
            >
              {SERVICES_CATALOGUE.length}
            </span>
          </button>

          {SERVICES_SECTORS.map((sector) => {
            const Icon = SECTOR_ICONS[sector.id] || Layers;
            const isActive = selectedSector === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0C4B92] text-white shadow-md shadow-[#0C4B92]/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sector.name}</span>
                <span
                  className={`font-mono text-[11px] px-1.5 py-0.2 rounded ${
                    isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {sector.serviceCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Overview Spotlight (Shown when a specific sector is selected) */}
        <AnimatePresence mode="wait">
          {activeSectorData && (
            <motion.div
              key={activeSectorData.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10 max-w-4xl space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#0C4B92]/40 text-[#60a5fa] border border-[#0C4B92]/60 font-mono text-xs font-semibold uppercase">
                    Sector Focus
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                    PT. SWTS Batam Engineering Scope
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {activeSectorData.name}
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {activeSectorData.description}
                </p>

                {activeSectorData.secondaryDescription && (
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed border-l-2 border-[#0C4B92] pl-3.5">
                    {activeSectorData.secondaryDescription}
                  </p>
                )}
              </div>

              {/* Decorative Subtle Background Glow */}
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0C4B92]/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search & Status Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scopes (e.g. Pump, Engine, Governor, Flange, Turbine)..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#0C4B92] focus:ring-1 focus:ring-[#0C4B92]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Filter Chips */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              Status:
            </span>
            {[
              { label: "All", value: "all" },
              { label: "Brochure Certified", value: "Brochure Certified" },
              { label: "Specialized Scope", value: "Specialized Scope" },
              { label: "Available on Request", value: "Available on Request" },
            ].map((chip) => (
              <button
                key={chip.value}
                onClick={() => setSelectedStatus(chip.value)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-medium transition-all shrink-0 ${
                  selectedStatus === chip.value
                    ? "bg-neutral-900 text-white font-semibold"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center space-y-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50">
            <p className="text-neutral-500 text-sm">
              No engineering services match your search or filter criteria.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const Icon = SECTOR_ICONS[service.sectorId] || Layers;
              const hasSubItems = service.subItems && service.subItems.length > 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                  className="group rounded-2xl border border-neutral-200 bg-white hover:border-[#0C4B92]/40 hover:shadow-xl hover:shadow-neutral-200/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6 space-y-5">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 font-semibold border border-neutral-200">
                          {service.code}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-neutral-500">
                          <Icon className="w-3 h-3 text-[#0C4B92]" />
                          <span>{service.sectorName}</span>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${
                          service.status === "Specialized Scope"
                            ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                            : service.status === "Brochure Certified"
                            ? "bg-sky-50 border-sky-300 text-sky-700"
                            : "bg-neutral-100 border-neutral-200 text-neutral-600"
                        }`}
                      >
                        {service.status}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#0C4B92] font-semibold">
                        {service.category}
                      </span>
                      <h3 className="font-bold text-lg text-neutral-950 group-hover:text-[#0C4B92] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Prominent Sub-Items Banner (e.g. 7 Pump Scopes) */}
                    {hasSubItems && (
                      <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-900 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                          <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                          <span>7 Specialized Pump Capabilities</span>
                        </div>
                        <p className="text-[11px] text-emerald-700 leading-normal">
                          Inspection, Maintenance, Overhaul, Laser Alignment, Installation, Repair & Testing.
                        </p>
                      </div>
                    )}

                    {/* Highlights List */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                      {service.highlights.slice(0, 3).map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0C4B92] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{point}</span>
                        </div>
                      ))}
                      {service.highlights.length > 3 && (
                        <p className="text-[11px] text-neutral-400 pl-5">
                          +{service.highlights.length - 3} more technical highlights
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="p-4 bg-neutral-50/80 border-t border-neutral-100">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white hover:bg-[#0C4B92] hover:text-white border border-neutral-200 hover:border-[#0C4B92] text-neutral-800 text-xs font-semibold uppercase tracking-wider transition-all duration-200 group/btn shadow-sm"
                    >
                      <span>Explore Scope & Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal Component */}
      <ServiceDetailModal
        item={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

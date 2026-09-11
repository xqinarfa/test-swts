"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Gauge, Flame, Snowflake, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SpecializationFacility() {
  const [submitted, setSubmitted] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    component: "",
    service: "HVAF Coating",
    details: "",
  });

  React.useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        const detail = customEvent.detail.toLowerCase();
        if (detail.includes("hvaf") || detail.includes("coating")) {
          setFormData((prev) => ({ ...prev, service: "HVAF Coating" }));
        } else if (detail.includes("honing")) {
          setFormData((prev) => ({ ...prev, service: "Precision Honing" }));
        } else if (detail.includes("balancing")) {
          setFormData((prev) => ({ ...prev, service: "Dynamic Balancing" }));
        } else if (detail.includes("laser") || detail.includes("welding")) {
          setFormData((prev) => ({ ...prev, service: "Pulse Laser Welding" }));
        } else if (detail.includes("seal")) {
          setFormData((prev) => ({ ...prev, service: "Seal Manufacturing" }));
        } else if (detail.includes("navigation") || detail.includes("marine")) {
          setFormData((prev) => ({ ...prev, service: "Navigation Equipment" }));
        } else if (detail.includes("engine") || detail.includes("crankshaft")) {
          setFormData((prev) => ({ ...prev, service: "Engine Reconditioning" }));
        } else if (detail.includes("cryogenic") || detail.includes("lng")) {
          setFormData((prev) => ({ ...prev, service: "Cryogenic Workshop" }));
        } else if (detail.includes("chrome") || detail.includes("liner")) {
          setFormData((prev) => ({ ...prev, service: "Chrome Liner" }));
        } else if (detail.includes("babbitt") || detail.includes("bearing")) {
          setFormData((prev) => ({ ...prev, service: "White Metal Babbitting" }));
        }
        setHighlightForm(true);
        setTimeout(() => setHighlightForm(false), 3000);
      }
    };

    window.addEventListener("swts-select-service", handleSelectService);
    return () =>
      window.removeEventListener("swts-select-service", handleSelectService);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const workshopHubs = [
    {
      icon: Flame,
      title: "Robotic HVAF Coating Booth",
      desc: "Sound-attenuated robotic thermal spray cell with supersonic particle velocity systems for dense, low-porosity Tungsten Carbide and NiCr coatings.",
      metric: "Sub-0.5% Porosity",
    },
    {
      icon: Wrench,
      title: "8-Meter Deep-Bore Honing Rig",
      desc: "Heavy-duty horizontal precision honing machinery supporting hydraulic cylinders, tubes, and marine liners up to 800 mm ID and 8m length.",
      metric: "Up to 800 mm Ø × 8m L",
    },
    {
      icon: Gauge,
      title: "2-Tonne Dynamic Balancing Bay",
      desc: "High-precision balancing machine equipped with dual-plane piezoelectric laser vibration analyzers conforming to ISO 1940 G1.0/G2.5 tolerances.",
      metric: "2,000 kg Rotor Capacity",
    },
    {
      icon: Snowflake,
      title: "Cryogenic Testing & Valve Bay",
      desc: "Controlled clean workshop for LNG submerged motor pumps, cryogenic control valves, safety relief valves, and hydrostatic pressure testing.",
      metric: "Down to -196°C Rated",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-12 lg:px-16 text-white bg-[#131313] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex backdrop-blur-[5px] bg-white/12 border border-white/15 px-3.5 py-1.5 rounded-[5px]">
            <span className="font-mono text-[12px] uppercase tracking-wider text-white font-semibold">
              In-House Workshop Infrastructure
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Integrated Engineering Facilities in Batam
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Our specialized workshop in Batam combines thermal spray cells, precision honing benches, dynamic balancing, and cryogenic overhaul facilities — eliminating overseas logistics delays and guaranteeing single-source quality control.
          </p>
        </div>

        {/* 4 Facility Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopHubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-white leading-snug">
                    {hub.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono text-xs text-emerald-400 font-medium">
                  {hub.metric}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Inquiry Interactive Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex backdrop-blur-md bg-red-600/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold">
              Fast-Track Engineering Assessment
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Need Component Refurbishment or Custom Sealing?
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed font-light">
              Submit your component dimensions, wear issues, or operating parameters directly to our technical engineering department in Batam for an evaluation and estimated turnaround time.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                "Complimentary dimensional & damage evaluation",
                "OEM tolerance restoration guarantee",
                "Emergency turnaround support for offshore & marine assets",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            id="assessment-form"
            className={`lg:col-span-6 bg-black/50 p-6 sm:p-8 rounded-2xl border transition-all duration-500 ${
              highlightForm
                ? "border-red-500 ring-2 ring-red-500/50 shadow-2xl shadow-red-500/20 scale-[1.01]"
                : "border-white/10"
            }`}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-white/70 max-w-sm mx-auto font-light">
                  Thank you! Our senior engineering team will review your specifications and get in touch promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. engineer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/15 text-white text-sm focus:outline-none focus:border-white/40"
                    >
                      <option value="HVAF Coating">HVAF Coating Technology</option>
                      <option value="Precision Honing">Precision Honing (up to 8m)</option>
                      <option value="Dynamic Balancing">Dynamic Balancing (up to 2T)</option>
                      <option value="Pulse Laser Welding">Pulse Laser Welding</option>
                      <option value="Seal Manufacturing">Custom Seal Manufacturing</option>
                      <option value="Navigation Equipment">Navigation Equipment Service</option>
                      <option value="Engine Reconditioning">Engine Component Reconditioning</option>
                      <option value="Cryogenic Workshop">Cryogenic Pump & Valve Repair</option>
                      <option value="Chrome Liner">Chrome Liner Repairs</option>
                      <option value="White Metal Babbitting">White Metal Babbitting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Component Name / Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hydraulic Cylinder 450mm ID"
                      value={formData.component}
                      onChange={(e) => setFormData({ ...formData, component: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                    Technical Specifications / Remarks
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter dimensions, operating conditions, material, or damage description..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Technical Request</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

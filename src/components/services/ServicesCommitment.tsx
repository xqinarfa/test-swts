"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Clock,
  Compass,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function ServicesCommitment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    sector: "Marine Services",
    serviceCode: "General Inquiry",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Class & OEM Compliance",
      desc: "Services aligned with major maritime classification societies (DNV, Lloyd's Register, ABS, ClassNK) and factory standards of Woodward, Heinzmann, Tritorc, and Bosch Rexroth.",
      badge: "Certified Engineering",
    },
    {
      icon: Clock,
      title: "24/7 Rapid Mobilization",
      desc: "Engineers and technicians ready for emergency voyage repairs, anchorage boarding, offshore hitch dispatch, and 24/7 shipyard attendance across Batam and Singapore straits.",
      badge: "Zero-Delay Response",
    },
    {
      icon: Compass,
      title: "Complete Integrated Workflow",
      desc: "From initial non-destructive testing and fault diagnostics to in-house precision reconditioning, machining, dynamic balancing, and final sea/plant commissioning.",
      badge: "End-to-End MRO",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-16 text-white bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#60a5fa] font-semibold">
            Quality Assurance · Field Reliability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineered for Continuous Operational Uptime
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Whether preventing catastrophic equipment failure offshore or restoring turbine efficiency
            during a high-pressure utility turnaround, our multidisciplinary teams deliver results.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#0C4B92] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#38bdf8] font-medium">
                  {pillar.badge}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fast-Track Consultation Inquiry Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Left information */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#93c5fd] font-semibold block">
              Fast-Track Service Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Need Field Support or Equipment Overhaul?
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
              Submit your project scope, equipment make/model, or urgent breakdown details. Our technical
              directors in Batam will review your requirements and provide an immediate assessment.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Direct review by lead mechanical & automation engineers",
                "Rapid mobilization across Batam anchorages & Singapore straits",
                "Genuine OEM replacement parts & authorized calibration warranty",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
                <span>+62 (778) 463-888 / +65 6861 3328</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <span>engineering@swts.com</span>
              </div>
            </div>
          </div>

          {/* Right interactive form */}
          <div className="lg:col-span-6 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Consultation Request Registered</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto font-normal leading-relaxed">
                  Your inquiry has been assigned to our Batam engineering desk. A designated technical specialist will review your specifications and respond within 24 operational hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Capt. Hendra / John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. superintendent@shipping.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Target Sector
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40"
                    >
                      <option value="Marine Services">Marine Services</option>
                      <option value="Offshore Services">Offshore Services</option>
                      <option value="Power Plant">Power Plant</option>
                      <option value="Process Industry">Process Industry</option>
                      <option value="Data Center">Data Center</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Company / Vessel / Facility
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tanker IMO 92345 / Batam CCPP"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                    Engineering Scope / Equipment Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on equipment model, operating issue, required turnaround, or shipyard attendance dates..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0C4B92] hover:bg-[#0e5bb3] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0C4B92]/25 cursor-pointer"
                >
                  <span>Submit Service Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

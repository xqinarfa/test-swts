"use client";

import React, { useState } from "react";
import { Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";

export default function ContactQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    goodsType: "",
    weightVolume: "",
    pickup: "",
    delivery: "",
    fullName: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative min-h-[960px] py-24 md:py-32 overflow-hidden bg-black text-white flex items-center">
      {/* Background Container Landscape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/a750434d0fc4fc086e53212e642962bb125619bb.png"
          alt="Cargo container on grassy landscape"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none">
          <img
            src="/assets/1d0b71b093524b3ceb42fe269f609bab2f055219.svg"
            alt="Technical grid pattern"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
                Request A Quote
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                We plan every shipment in advance{" "}
                <span className="text-white/60">
                  to ensure accurate routing, secure handling, and on-time delivery worldwide.
                </span>
              </h2>
            </div>

            {/* Direct Contacts Bar */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-5 text-sm font-mono">
              <a
                href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.primaryPhone}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Quote Form */}
          <div className="lg:col-span-7">
            <div className="backdrop-blur-xl bg-white/[0.04] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quote Request Received</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our freight coordination team is calculating your route and will contact you at{" "}
                    <span className="font-mono text-white">{formData.phone || "your phone"}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        goodsType: "",
                        weightVolume: "",
                        pickup: "",
                        delivery: "",
                        fullName: "",
                        phone: "",
                        notes: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category 1: Shipment Details */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/60 block">
                      Shipment Details
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Type of Goods (e.g. Electronics)"
                        required
                        value={formData.goodsType}
                        onChange={(e) => setFormData({ ...formData, goodsType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="text"
                        placeholder="Weight / Volume (e.g. 2,400 kg)"
                        required
                        value={formData.weightVolume}
                        onChange={(e) => setFormData({ ...formData, weightVolume: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Pickup Location (City / Country)"
                        required
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="text"
                        placeholder="Delivery Location (City / Country)"
                        required
                        value={formData.delivery}
                        onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>

                  {/* Category 2: Contact Information */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/60 block">
                      Contact Information
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>

                  {/* Category 3: Shipment Notes */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/60 block">
                      Shipment Notes
                    </span>
                    <textarea
                      rows={3}
                      placeholder="Additional details about your shipment, special handling requirements, timeline..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-white resize-none"
                    />
                  </div>

                  {/* Disclaimer & Submit Button */}
                  <div className="pt-2 space-y-4">
                    <p className="text-[10px] font-mono tracking-wider text-white/50 uppercase leading-normal">
                      By submitting this form, you agree to be contacted about your request.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-xl active:scale-95 group"
                    >
                      <span>Get Transport Quote</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

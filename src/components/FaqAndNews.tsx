"use client";

import React, { useState } from "react";
import { Plus, ArrowUpRight, Phone, Calendar, ArrowRight } from "lucide-react";
import { FAQS, NEWS_POSTS, CONTACT_INFO } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAndNews() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="news" className="relative bg-white py-24 md:py-36 overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* FAQ Section matching Framer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Support Info */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
            <div className="inline-block px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-wider uppercase text-neutral-800">
              Help & Support
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Not answered here?{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="underline decoration-neutral-400 underline-offset-8 hover:decoration-neutral-950 transition-colors"
              >
                Contact us via email.
              </a>
            </h2>

            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-xs font-mono tracking-wider text-neutral-900 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.primaryPhone}</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Pill Accordion Cards matching Framer */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  layout
                  className={`rounded-2xl border transition-all duration-200 p-5 sm:p-6 ${
                    isOpen
                      ? "bg-neutral-50/90 border-neutral-300 shadow-sm"
                      : "bg-[#f9f9f9] border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <Plus className="w-4 h-4 text-neutral-800" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pr-6 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent News Section */}
        <div className="space-y-12 pt-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200">
            <div className="inline-flex items-center">
              <span className="px-3 py-1.5 rounded bg-neutral-100 border border-neutral-200 text-xs font-mono tracking-widest uppercase text-neutral-800">
                Recent News
              </span>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#news"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-xs font-mono uppercase tracking-wider text-neutral-900 transition-all self-start sm:self-auto shadow-sm"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* News 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_POSTS.map((post) => (
              <motion.article
                key={post.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col space-y-4 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image Card with Red Arrow */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Red Action Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#ff2600] text-white flex items-center justify-center shadow-lg transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Date & Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-black transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

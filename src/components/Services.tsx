"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";
import { motion } from "framer-motion";
import ScrollScrubText from "@/components/ScrollScrubText";

export default function Services() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0].id);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      if (isClickScrolling.current) return;

      const viewportCenter = window.innerHeight * 0.45;
      let closestId = SERVICES_DATA[0].id;
      let minDistance = Infinity;

      SERVICES_DATA.forEach((service) => {
        const el = document.getElementById(`service-card-${service.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (dist < minDistance && rect.bottom > 120) {
            minDistance = dist;
            closestId = service.id;
          }
        }
      });

      setActiveService(closestId);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const scrollToService = (id: string) => {
    setActiveService(id);
    isClickScrolling.current = true;
    const el = document.getElementById(`service-card-${id}`);
    if (el) {
      const navOffset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <section id="services" className="relative bg-[#f2f2f2] py-24 md:py-36 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Category Navigation */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8 z-10">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-black/5 border border-black/10 text-[10px] font-mono tracking-wider uppercase text-neutral-800">
                Services
              </div>

              <ScrollScrubText
                as="h2"
                theme="light"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight"
                text="From cargo transit to warehousing, we offer unparalleled support."
              />

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Our team provides complete transport and warehousing solutions designed for speed,
                safety, and full operational control.
              </p>
            </div>

            {/* Service selector list with Animated Floating Active Pill */}
            <div className="relative bg-white rounded-2xl p-1.5 border border-neutral-200/90 shadow-xl max-w-[400px] flex flex-col gap-1">
              {SERVICES_DATA.map((service, index) => {
                const isActive = activeService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className={`relative w-full text-left px-5 py-4 flex items-center justify-between text-xs font-mono uppercase tracking-wider rounded-xl transition-colors duration-200 focus:outline-none z-10 ${
                      isActive ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServicePill"
                        className="absolute inset-0 bg-neutral-950 rounded-xl shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}

                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-neutral-400 font-normal" : "text-neutral-400"}>
                        0{index + 1}
                      </span>
                      <span>{service.title}</span>
                    </div>

                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`}
                      />
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4 Scrolling Image Cards */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-24">
            {SERVICES_DATA.map((service) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-neutral-300/80 group shadow-2xl transition-all duration-300 hover:border-neutral-400 bg-black"
              >
                {/* Background Image */}
                <div className="relative h-[440px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                </div>

                {/* Top-Right Red Action Button with Spring Hover */}
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.92 }}
                  href="#quote"
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#ff2600] text-white flex items-center justify-center shadow-xl transition-shadow"
                  aria-label={`Get quote for ${service.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                {/* Frosted Glass Caption Banner */}
                <div className="absolute bottom-4 inset-x-4 p-6 sm:p-7 backdrop-blur-xl bg-white/15 border border-white/25 rounded-xl text-white shadow-lg">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 block">
                      {service.tag}
                    </span>
                    <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

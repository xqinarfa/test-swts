"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_INFO, SERVICES_DATA } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/82b66b848e80164b05e8e4c9ecaca6890fa23e23.png"
                alt="SWTS Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug max-w-sm">
              We manage global transport with{" "}
              <span className="text-white/70">
                precision, reliability, and fully planned logistics from day one.
              </span>
            </h3>

            <div className="pt-2">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-md active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
              Navigation
            </span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-white/70">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/specializations" className="hover:text-white transition-colors">
                  Specializations
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-colors text-red-400 font-semibold">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Services <span className="text-white/40">(04)</span>
                </a>
              </li>
              <li>
                <a href="/#news" className="hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="/#quote" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
              Services
            </span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-white/70">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono tracking-wider uppercase text-white/80">
              Contact
            </span>
            <div className="space-y-3 text-xs font-mono text-white/70 leading-relaxed">
              <p>{CONTACT_INFO.footerAddress}</p>
              {CONTACT_INFO.phones.map((phone, idx) => (
                <p key={idx}>
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-white/50">
            © COPYRIGHT FLOWMANCE{" "}
            <a
              href="https://flowmance.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/30 hover:text-white transition-colors"
            >
              FLOWMANCE.COM
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs hover:bg-neutral-200 transition-colors"
              title="X (Twitter)"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-[10px] hover:bg-neutral-200 transition-colors"
              title="Instagram"
            >
              IG
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-[10px] hover:bg-neutral-200 transition-colors"
              title="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

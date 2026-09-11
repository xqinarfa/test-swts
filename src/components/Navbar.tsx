"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/content";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenSidebar: () => void;
}

export default function Navbar({ onOpenSidebar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[padding,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50"
          : "py-4 sm:py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[30px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group focus:outline-none">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center"
          >
            <img
              src="/assets/82b66b848e80164b05e8e4c9ecaca6890fa23e23.png"
              alt="SWTS Logo"
              className="h-[44px] sm:h-[53px] w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* Right Section: Desktop Nav Capsule + Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-[10px]">
          {/* Frosted Glass Nav Container (Figma 170:5122) */}
          <nav className="hidden lg:flex items-center gap-[24px] xl:gap-[30px] h-[59px] px-[20px] rounded-[5px] bg-white/20 backdrop-blur-[12.5px] border border-white/15 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname === link.href;

              // Extract count badge if format is like "SERVICES (04)"
              const countMatch = link.label.match(/\((.+?)\)/);
              const cleanLabel = countMatch
                ? link.label.replace(/\s*\(.+?\)/, "")
                : link.label;
              const countBadge = countMatch ? countMatch[1] : null;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative flex items-center gap-1.5 focus:outline-none py-1"
                >
                  <div className="flex flex-col items-start relative">
                    <span
                      className={`text-[13.8px] font-semibold uppercase tracking-[-0.3px] transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {cleanLabel}
                    </span>

                    {/* Underline indicator */}
                    <span
                      className={`h-px w-full mt-0.5 transition-all duration-200 ${
                        isActive
                          ? "bg-white"
                          : "bg-white/20 group-hover:bg-white/70"
                      }`}
                    />
                  </div>

                  {/* Count indicator (e.g. 04) */}
                  {countBadge && (
                    <span className="font-mono text-[11px] font-semibold text-white/60 uppercase tracking-tight -mt-1">
                      ({countBadge})
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Square Menu Toggle Button (Figma 170:5179) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenSidebar}
            className="size-[50px] sm:size-[59px] rounded-[5px] bg-white/20 hover:bg-white/25 backdrop-blur-[12.5px] border border-white/15 flex flex-col items-center justify-center gap-[5px] text-white transition-all shadow-sm focus:outline-none cursor-pointer group"
            aria-label="Open navigation drawer"
          >
            <span className="h-[2px] w-[24px] sm:w-[30px] bg-white transition-all duration-200 group-hover:w-[28px]" />
            <span className="h-[2px] w-[24px] sm:w-[30px] bg-white transition-all duration-200 group-hover:w-[22px]" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}

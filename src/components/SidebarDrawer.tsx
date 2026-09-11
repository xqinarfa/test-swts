"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com",
    maskSvg: "/assets/6dd648cdfd815a154c8a7b03867ed03d90075d46.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    maskSvg: "/assets/1205fcf8bcbab25d65c5510a1962f72d6a2312ad.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    maskSvg: "/assets/df7c4bd6ec4f2ced669882b37c3e6a2a6675cd04.svg",
  },
];

export default function SidebarDrawer({ isOpen, onClose }: SidebarDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Fade (Figma 170:5009) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[10px]"
          />

          {/* Slide Drawer with Diagonal Skew Curtain Edge (Figma 170:5010) */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 z-50 h-full flex items-stretch pointer-events-auto"
          >
            {/* Sidebar Skew Wrapper (Figma 170:5011) - Desktop only */}
            <div className="hidden md:block relative w-[70px] shrink-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-[120px] bg-black -skew-x-[12deg] origin-bottom-right" />
            </div>

            {/* Nav Content (Figma 170:5013) */}
            <div className="w-full sm:w-[485px] max-w-[100vw] bg-black h-full relative flex flex-col justify-between pt-[70px] sm:pt-[90px] pb-[40px] px-8 sm:px-[60px] overflow-y-auto border-l border-white/10 md:border-l-0 shadow-2xl">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2.5 rounded-[5px] bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/10 focus:outline-none z-10"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Information Groups */}
              <div className="space-y-[32px] relative z-10">
                {/* Location (Figma 170:5014) */}
                <div className="flex flex-col gap-[9px] items-start">
                  <div className="backdrop-blur-[5px] bg-white/12 px-[9px] py-[6px] rounded-[5px] inline-flex items-center">
                    <span className="font-mono font-semibold text-[12px] text-white tracking-[-0.1px] uppercase leading-none">
                      Location
                    </span>
                  </div>
                  <div className="text-[15.1px] font-medium text-white/70 leading-[21px] tracking-[-0.4px]">
                    <p>{CONTACT_INFO.address}</p>
                  </div>
                </div>

                {/* Call Center (Figma 170:5024) */}
                <div className="flex flex-col gap-[9px] items-start">
                  <div className="backdrop-blur-[5px] bg-white/12 px-[9px] py-[6px] rounded-[5px] inline-flex items-center">
                    <span className="font-mono font-semibold text-[12px] text-white tracking-[-0.1px] uppercase leading-none">
                      Call Center
                    </span>
                  </div>
                  <div className="space-y-1 text-[14.5px] font-medium text-white/70 leading-[21px] tracking-[-0.4px]">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <p key={idx}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="hover:text-white transition-colors"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Email (Figma 170:5038) */}
                <div className="flex flex-col gap-[9px] items-start">
                  <div className="backdrop-blur-[5px] bg-white/12 px-[9px] py-[6px] rounded-[5px] inline-flex items-center">
                    <span className="font-mono font-semibold text-[12px] text-white tracking-[-0.1px] uppercase leading-none">
                      Email
                    </span>
                  </div>
                  <div className="group inline-flex flex-col items-start">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-[13.5px] font-semibold text-white tracking-[-0.3px] leading-[16px] hover:text-white/90 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <span className="h-px w-full bg-white/20 group-hover:bg-white transition-colors mt-1" />
                  </div>
                </div>

                {/* Socials (Figma 170:5055) */}
                <div className="flex flex-col gap-[9px] items-start">
                  <div className="backdrop-blur-[5px] bg-white/12 px-[9px] py-[6px] rounded-[5px] inline-flex items-center">
                    <span className="font-mono font-semibold text-[12px] text-white tracking-[-0.1px] uppercase leading-none">
                      Follow Us
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px] pt-1">
                    {SOCIAL_LINKS.map((s) => (
                      <div key={s.name} className="relative group">
                        {/* Hover Tooltip (Figma 170:5070 - rotate 15deg) */}
                        <div className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 flex flex-col items-center">
                          <div className="rotate-12 bg-white text-black text-[10.8px] font-semibold px-2.5 py-1 rounded-[5px] shadow-xl whitespace-nowrap">
                            {s.name}
                          </div>
                          <img
                            src="/assets/b3bdf9d17db9defde0a423152d81a13a5fe01785.png"
                            alt=""
                            className="w-3 h-1.5 object-contain -mt-0.5"
                          />
                        </div>

                        {/* Social Square Button */}
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="size-[40px] rounded-[6px] bg-white text-black flex items-center justify-center shadow-sm hover:bg-neutral-200 transition-colors"
                          aria-label={s.name}
                        >
                          <div
                            className="size-[16px] bg-black"
                            style={{
                              maskImage: `url(${s.maskSvg})`,
                              WebkitMaskImage: `url(${s.maskSvg})`,
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                              maskPosition: "center",
                              WebkitMaskPosition: "center",
                              maskSize: "contain",
                              WebkitMaskSize: "contain",
                            }}
                          />
                        </motion.a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button & Watermark Logo */}
              <div className="pt-10 relative z-10">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/#contact"
                  onClick={onClose}
                  className="w-full h-[44px] px-[23px] rounded-[999px] bg-white text-black font-mono font-medium text-[14px] uppercase tracking-[-0.4px] flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg"
                >
                  Get a Free Quote
                </motion.a>
              </div>

              {/* Watermark Brand Logo (Figma 170:5113) */}
              <div className="absolute bottom-0 right-[-20px] w-[280px] sm:w-[320px] opacity-20 pointer-events-none select-none">
                <img
                  src="/assets/dcd1bb15a270675add7565f8b79ef2427c990fc3.png"
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

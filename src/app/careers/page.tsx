"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersCulture from "@/components/careers/CareersCulture";
import AppBanner from "@/components/AppBanner";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function CareersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothHeroProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.0005,
  });
  const heroY = useTransform(smoothHeroProgress, [0, 0.12], [0, 240]);
  const heroOpacity = useTransform(smoothHeroProgress, [0, 0.1], [1, 0.35]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Global Navigation & Sliding Contact Drawer */}
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Sections with Layered Skew Rectangle Curtain Animations */}
      <main className="flex-1 w-full relative">
        {/* Layer 0: Hero Section (Pinned/Sticky in background with smooth parallax) */}
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full h-full origin-top"
          >
            <CareersHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Intro & Openings Directory) */}
        {/* mt-[4.5vw] ensures skew rectangle starts exactly at/below 100vh, leaving hero 100% full-bleed at scroll 0 */}
        <ParallaxSection
          zIndex={10}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
          className="mt-[4.5vw]"
          disableContentParallax={true}
        >
          <CareersIntro />
          <CareersOpenings />
        </ParallaxSection>

        {/* Layer 2: Workshop Environment & Culture (Covers White Section with #131313 Skew Curtain) */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#131313]"
          skewColor="#131313"
          skewDirection="left-down"
        >
          <CareersCulture />
        </ParallaxSection>

        {/* Layer 3: Talent Pool Banner & Footer (Covers Culture with #050505 Skew Curtain) */}
        <ParallaxSection
          zIndex={30}
          bgClassName="bg-[#050505]"
          skewColor="#050505"
          skewDirection="left-down"
        >
          <AppBanner />
          <Footer />
        </ParallaxSection>
      </main>
    </div>
  );
}

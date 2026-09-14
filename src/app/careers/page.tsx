"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersCulture from "@/components/careers/CareersCulture";
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

      {/* Main Sections with Layered Skew Architecture */}
      <main className="flex-1 w-full relative">
        {/* Layer 0: Hero Section (Pinned background with gentle parallax) */}
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full h-full origin-top"
          >
            <CareersHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Intro & Openings Directory) */}
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

        {/* Layer 2: Workshop Environment, Culture & Footer */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#0a0a0a]"
          skewColor="#0a0a0a"
          skewDirection="left-down"
          disableContentParallax={true}
        >
          <CareersCulture />
          <Footer />
        </ParallaxSection>
      </main>
    </div>
  );
}

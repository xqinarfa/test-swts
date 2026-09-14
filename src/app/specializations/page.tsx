"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import SpecializationHero from "@/components/specializations/SpecializationHero";
import SpecializationIntro from "@/components/specializations/SpecializationIntro";
import SpecializationCatalogue from "@/components/specializations/SpecializationCatalogue";
import SpecializationFacility from "@/components/specializations/SpecializationFacility";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function SpecializationsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothHeroProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.0005,
  });
  const heroY = useTransform(smoothHeroProgress, [0, 0.12], [0, 160]);
  const heroOpacity = useTransform(smoothHeroProgress, [0, 0.05, 0.12], [1, 0.95, 0.4]);

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
            <SpecializationHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Intro & Unified Engineering Catalogue) */}
        <ParallaxSection
          zIndex={10}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
          className="mt-[4.5vw]"
          disableContentParallax={true}
        >
          <SpecializationIntro />
          <SpecializationCatalogue />
        </ParallaxSection>

        {/* Layer 2: Workshop Infrastructure, Assessment Inquiry & Footer */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#0a0a0a]"
          skewColor="#0a0a0a"
          skewDirection="left-down"
          disableContentParallax={true}
        >
          <SpecializationFacility />
          <Footer />
        </ParallaxSection>
      </main>
    </div>
  );
}

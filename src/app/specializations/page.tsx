"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import SpecializationHero from "@/components/specializations/SpecializationHero";
import SpecializationIntro from "@/components/specializations/SpecializationIntro";
import SpecializationCatalogue from "@/components/specializations/SpecializationCatalogue";
import SpecializationFacility from "@/components/specializations/SpecializationFacility";
import AppBanner from "@/components/AppBanner";
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

      {/* Main Sections with Layered Skew Rectangle Curtain Animations */}
      <main className="flex-1 w-full relative">
        {/* Layer 0: Hero Section (Pinned/Sticky in background with smooth parallax) */}
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full h-full origin-top"
          >
            <SpecializationHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Intro & Unified Engineering Catalogue) */}
        {/* mt-[4.5vw] ensures skew rectangle starts exactly at/below 100vh, leaving hero 100% full-bleed at scroll 0 */}
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

        {/* Layer 2: Workshop Infrastructure & Technical Inquiry (Covers White Section with #131313 Skew Curtain) */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#131313]"
          skewColor="#131313"
          skewDirection="left-down"
        >
          <SpecializationFacility />
        </ParallaxSection>

        {/* Layer 3: App Banner & Footer (Covers Workshop with #050505 Skew Curtain) */}
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

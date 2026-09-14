"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutBatam from "@/components/about/AboutBatam";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutPartners from "@/components/about/AboutPartners";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutCtaBanner from "@/components/about/AboutCtaBanner";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothHeroProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.0005,
  });
  const heroY = useTransform(smoothHeroProgress, [0, 0.12], [0, 200]);
  const heroOpacity = useTransform(smoothHeroProgress, [0, 0.1], [1, 0.4]);

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
            <AboutHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Overview, Timeline, Batam Facility, Core Disciplines & Strategic Partners) */}
        <ParallaxSection
          zIndex={10}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
          className="mt-[4.5vw]"
          disableContentParallax={true}
        >
          <AboutStory />
          <AboutTimeline />
          <AboutBatam />
          <AboutCapabilities />
          <AboutPartners />
        </ParallaxSection>

        {/* Layer 2: Strategic Vision, Consultation Banner & Footer */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#080808]"
          skewColor="#080808"
          skewDirection="left-down"
          disableContentParallax={true}
        >
          <AboutVisionMission />
          <AboutCtaBanner />
          <Footer />
        </ParallaxSection>
      </main>
    </div>
  );
}

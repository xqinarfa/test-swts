"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SidebarDrawer from "@/components/layout/SidebarDrawer";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Reviews from "@/components/home/Reviews";
import AppBanner from "@/components/home/AppBanner";
import FaqAndNews from "@/components/home/FaqAndNews";
import ContactQuote from "@/components/home/ContactQuote";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
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
      {/* Navigation & Sliding Drawer */}
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Sections with Layered Skew Rectangle Curtain Animations */}
      <main className="flex-1 w-full relative">
        {/* Layer 0: Hero Section (Pinned/Sticky in background with smooth parallax) */}
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full h-full origin-top">
            <Hero />
          </motion.div>
        </div>

        {/* Layer 1: About Us Section (Covers Hero with #ffffff Skew Rectangle + Parallax) */}
        {/* mt-[4.5vw] ensures skew rectangle starts exactly at/below 100vh, leaving hero 100% full-bleed at scroll 0 */}
        <ParallaxSection
          zIndex={10}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
          className="mt-[4.5vw]"
        >
          <AboutUs />
        </ParallaxSection>

        {/* Layer 2: Services Section (Covers About Us with #F2F2F2 Skew Rectangle + Parallax) */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#F2F2F2]"
          skewColor="#F2F2F2"
          skewDirection="left-down"
        >
          <Services />
        </ParallaxSection>

        {/* Layer 3: Industries & Reviews (Covers Services with #050505 Skew Rectangle + Parallax) */}
        <ParallaxSection
          zIndex={30}
          bgClassName="bg-[#050505]"
          skewColor="#050505"
          skewDirection="left-down"
        >
          <Industries />
          <Reviews />
        </ParallaxSection>

        {/* Layer 4: FAQ & Recent News (Covers Reviews with #ffffff Skew Rectangle + Parallax) */}
        <ParallaxSection
          zIndex={40}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
        >
          <FaqAndNews />
        </ParallaxSection>

        {/* Layer 5: Contact, App Banner & Footer (Covers FAQ with #050505 Skew Rectangle + Parallax) */}
        <ParallaxSection
          zIndex={50}
          bgClassName="bg-[#050505]"
          skewColor="#050505"
          skewDirection="left-down"
        >
          <ContactQuote />
          <AppBanner />
          <Footer />
        </ParallaxSection>
      </main>
    </div>
  );
}

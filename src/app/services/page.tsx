"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import FiveServicesGrid from "@/components/services/FiveServicesGrid";
import SectorDetailModal from "@/components/services/SectorDetailModal";
import ServicesCommitment from "@/components/services/ServicesCommitment";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SERVICES_SECTORS, SectorData } from "@/data/servicesData";

export default function ServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<SectorData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothHeroProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.0005,
  });
  const heroY = useTransform(smoothHeroProgress, [0, 0.12], [0, 160]);
  const heroOpacity = useTransform(smoothHeroProgress, [0, 0.05, 0.12], [1, 0.95, 0.4]);

  const handleSelectSector = (sectorId: string) => {
    const found = SERVICES_SECTORS.find((s) => s.id === sectorId);
    if (found) {
      setSelectedSector(found);
      setIsModalOpen(true);
    }
  };

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
            <ServicesHero />
          </motion.div>
        </div>

        {/* Layer 1: White Content Section (Intro & 5 Core Photographic Cards) */}
        <ParallaxSection
          zIndex={10}
          bgClassName="bg-white"
          skewColor="#ffffff"
          skewDirection="left-down"
          className="mt-[4.5vw]"
          disableContentParallax={true}
        >
          <ServicesIntro />
          <FiveServicesGrid onSelectSector={handleSelectSector} />
        </ParallaxSection>

        {/* Layer 2: Engineering Commitment, Quality Standards, Consultation & Global Footer */}
        <ParallaxSection
          zIndex={20}
          bgClassName="bg-[#0a0a0a]"
          skewColor="#0a0a0a"
          skewDirection="left-down"
          disableContentParallax={true}
        >
          <ServicesCommitment />
          <Footer />
        </ParallaxSection>
      </main>

      {/* Detailed Sector Scope Modal */}
      <SectorDetailModal
        sector={selectedSector}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

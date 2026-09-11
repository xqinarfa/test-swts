"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SkewRectangle from "@/components/SkewRectangle";

interface ParallaxSectionProps {
  children: React.ReactNode;
  skewColor?: string;
  skewDirection?: "left-down" | "right-down";
  zIndex: number;
  className?: string;
  bgClassName?: string;
  disableContentParallax?: boolean;
}

export default function ParallaxSection({
  children,
  skewColor,
  skewDirection = "left-down",
  zIndex,
  className = "",
  bgClassName = "",
  disableContentParallax = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track this section's relative scroll through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fluid spring smoothing:
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.0005,
  });

  // Smooth entrance and exit parallax:
  // - Starts slightly offset (-30px) as its SkewRectangle curtain glides into view
  // - Perfectly settled at 0px and full opacity (1) while active in the viewport
  // - Drifts downward (+60px) and dims gently to 0.65 as the NEXT section's SkewRectangle covers it
  const y = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [-30, 0, 0, 60]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.8, 1], [0.92, 1, 1, 0.65]);

  return (
    <div
      ref={containerRef}
      className={`relative shadow-2xl ${bgClassName} ${className}`}
      style={{ zIndex }}
    >
      {/* Skew Rectangle transition on top of this layer */}
      {skewColor && (
        <SkewRectangle color={skewColor} direction={skewDirection} />
      )}

      {/* Parallax Content Container */}
      {disableContentParallax ? (
        children
      ) : (
        <motion.div style={{ y, opacity }} className="w-full h-full">
          {children}
        </motion.div>
      )}
    </div>
  );
}

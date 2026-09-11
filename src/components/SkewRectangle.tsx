"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface SkewRectangleProps {
  color: string;
  direction?: "left-down" | "right-down";
  className?: string;
  zIndex?: number;
}

export default function SkewRectangle({
  color,
  direction = "left-down",
  className = "",
  zIndex = 20,
}: SkewRectangleProps) {
  const isLeftDown = direction === "left-down";
  const ref = useRef<HTMLDivElement>(null);
  
  // Add an elastic spring to the skew edge itself to make it feel organic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.0005,
  });
  
  // Slightly stretch the skew height with spring dynamics for a smooth elastic curtain effect
  const scaleY = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 1]);

  return (
    <div
      ref={ref}
      className={`absolute left-0 right-0 w-full pointer-events-none ${className}`}
      style={{
        zIndex,
        // ~4.5vw maintains the exact Framer skew angle (~2.6deg) across all viewports
        top: "-4.4vw",
        height: "4.5vw",
      }}
    >
      <motion.div
        className="w-full h-full origin-bottom"
        style={{
          backgroundColor: color,
          scaleY,
          clipPath: isLeftDown
            ? "polygon(0 0, 100% 100%, 0 100%)" // Higher on left, slopes down to right
            : "polygon(0 100%, 100% 0, 100% 100%)", // Higher on right, slopes down to left
        }}
      />
    </div>
  );
}

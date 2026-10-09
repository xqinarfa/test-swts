"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  formatThousands?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2.2,
  delay = 0,
  prefix = "",
  suffix = "",
  formatThousands = false,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, to, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth exponential ease-out
      });
    }
  }, [isInView, motionValue, to, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        const valStr = formatThousands
          ? latest.toLocaleString("en-US")
          : String(latest);
        ref.current.textContent = `${prefix}${valStr}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [rounded, prefix, suffix, formatThousands]);

  const initialVal = formatThousands ? from.toLocaleString("en-US") : from;

  return (
    <span ref={ref} className={className}>
      {prefix}{initialVal}{suffix}
    </span>
  );
}

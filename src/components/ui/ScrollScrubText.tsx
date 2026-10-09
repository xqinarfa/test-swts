"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ScrollScrubTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  theme?: "dark" | "light";
  offset?: [string, string];
}

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  theme: "dark" | "light";
}

function Word({ word, range, progress, theme }: WordProps) {
  const opacity = useTransform(progress, range, [theme === "dark" ? 0.22 : 0.2, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity, y }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function ScrollScrubText({
  text,
  className = "",
  as: Component = "p",
  theme = "light",
  offset = ["start 0.88", "start 0.3"],
}: ScrollScrubTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: offset as any,
  });

  // Wavefront spring smoothing:
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    restDelta: 0.0005,
  });

  const words = text.split(" ");
  const total = words.length;

  return (
    <Component ref={elementRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const start = i / total;
        const end = Math.min(1, start + (1.2 / total));
        return (
          <Word
            key={`${word}-${i}`}
            word={word}
            range={[start, end]}
            progress={smoothProgress}
            theme={theme}
          />
        );
      })}
    </Component>
  );
}

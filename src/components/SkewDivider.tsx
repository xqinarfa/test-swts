import React from "react";

interface SkewDividerProps {
  topColor?: string;
  bottomColor?: string;
  direction?: "left-to-right" | "right-to-left";
  height?: string;
}

export default function SkewDivider({
  topColor = "#050505",
  bottomColor = "#0a0a0a",
  direction = "left-to-right",
  height = "h-16 md:h-24",
}: SkewDividerProps) {
  const isLtr = direction === "left-to-right";

  return (
    <div
      className={`w-full ${height} relative overflow-hidden pointer-events-none select-none`}
      style={{ backgroundColor: topColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d={
            isLtr
              ? "M0 0L1440 80V120H0V0Z"
              : "M0 80L1440 0V120H0V80Z"
          }
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

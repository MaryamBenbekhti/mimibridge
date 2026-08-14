import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 54 }: LogoProps) {
  // Calculates width based on original aspect ratio (~3.8:1) to keep scale crisp
  const width = Math.round(height * 3.8);

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 380 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        {/* ========================================== */}
        {/* INTERLOCKING MB MONOGRAM MARK              */}
        {/* ========================================== */}
        <g id="Monogram">
          {/* Back/Main stem of M (Dark Plum) */}
          <path
            d="M 16 85 V 23 L 42 62 L 68 23 V 85"
            stroke="#2B103C"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interlocking Gold B (Overlaps M stem) */}
          <path
            d="M 36 55 H 70 C 82 55, 90 47, 90 38 C 90 28, 82 22, 70 22 H 48
               M 48 55 H 74 C 88 55, 96 63, 96 72 C 96 82, 88 88, 74 88 H 36"
            stroke="#C49A2A"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Interlocking visual overlap bridge */}
          <path
            d="M 42 45 L 42 65"
            stroke="#2B103C"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>

        {/* ========================================== */}
        {/* BRAND TYPOGRAPHY & TAGLINE                 */}
        {/* ========================================== */}
        {/* "Mimi" (Dark Plum) */}
        <text
          x="115"
          y="56"
          fill="#2B103C"
          fontFamily="Georgia, Cambria, 'Times New Roman', serif"
          fontSize="42"
          fontWeight="bold"
          letterSpacing="-0.5"
        >
          Mimi
        </text>

        {/* "Bridge" (Gold) */}
        <text
          x="225"
          y="56"
          fill="#C49A2A"
          fontFamily="Georgia, Cambria, 'Times New Roman', serif"
          fontSize="42"
          fontWeight="bold"
          letterSpacing="-0.5"
        >
          Bridge
        </text>

        {/* Tagline: TURKEY • SAUDI ARABIA */}
        <text
          x="117"
          y="82"
          fill="#6B5B75"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="4.5"
        >
          TURKEY • SAUDI ARABIA
        </text>
      </svg>
    </div>
  );
}
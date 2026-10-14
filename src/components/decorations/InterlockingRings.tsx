import React from 'react';

interface InterlockingRingsProps {
  className?: string;
  isAnimated?: boolean;
}

export const InterlockingRings: React.FC<InterlockingRingsProps> = ({ 
  className = "w-64 h-40 sm:w-80 sm:h-48 mx-auto",
  isAnimated = false
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`} 
      aria-hidden="true"
    >
      {/* Background Refined Deep-Maroon and Antique-Gold Ambient Vignette */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none scale-110 blur-xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198, 161, 91, 0.22) 0%, rgba(123, 30, 43, 0.12) 45%, rgba(255, 248, 239, 0) 75%)'
        }}
      />

      {/* Heroic Proportional SVG Canvas */}
      <svg 
        viewBox="0 0 280 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-md overflow-visible"
      >
        <defs>
          {/* Master 24K Gold Gradient for Groom's Band */}
          <linearGradient id="groom-24k-gold" x1="60" y1="40" x2="160" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="15%" stopColor="#FDE59C" />
            <stop offset="40%" stopColor="#D4A84B" />
            <stop offset="70%" stopColor="#A47B2B" />
            <stop offset="90%" stopColor="#7A551A" />
            <stop offset="100%" stopColor="#461219" />
          </linearGradient>

          {/* Master Antique Champagne Gold Gradient for Bride's Ring */}
          <linearGradient id="bride-antique-gold" x1="120" y1="40" x2="220" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#FBF0CF" />
            <stop offset="45%" stopColor="#D8B25E" />
            <stop offset="75%" stopColor="#9E7B35" />
            <stop offset="100%" stopColor="#58111D" />
          </linearGradient>

          {/* Inner Polished Rim Bevel for Rich Three-Dimensional Depth */}
          <linearGradient id="inner-rim-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F7E4B2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3D0A12" stopOpacity="0.65" />
          </linearGradient>

          {/* Solitaire Diamond Facet Shading */}
          <linearGradient id="diamond-facet-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EBF5FB" />
          </linearGradient>
          <linearGradient id="diamond-facet-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4E6F1" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Radial Aura for Golden Highlight Sweep */}
          <radialGradient id="glint-warm-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF4D0" />
            <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Ceremonial Halo Ring in Background */}
        <ellipse 
          cx="140" 
          cy="88" 
          rx="92" 
          ry="58" 
          stroke="#C6A15B" 
          strokeWidth="0.75" 
          strokeDasharray="4 6" 
          strokeOpacity="0.35" 
          fill="none" 
        />

        {/* ================= 1. GROOM'S GOLD BAND (LEFT RING) ================= */}
        {/* Controlled 0.0s-1.0s Approach & 1.0s-1.8s Union */}
        <g className={isAnimated ? "animate-cinematic-ring-left origin-center" : ""}>
          {/* Main 24K Gold Band */}
          <ellipse 
            cx="110" 
            cy="88" 
            rx="44" 
            ry="36" 
            stroke="url(#groom-24k-gold)" 
            strokeWidth="8" 
            fill="none" 
          />

          {/* Inner Comfort-Fit Polished Rim */}
          <ellipse 
            cx="110" 
            cy="88" 
            rx="40" 
            ry="32" 
            stroke="url(#inner-rim-glow)" 
            strokeWidth="1.2" 
            fill="none" 
          />

          {/* Outer Polished Bevel Rim */}
          <ellipse 
            cx="110" 
            cy="88" 
            rx="48" 
            ry="40" 
            stroke="#8E6E2D" 
            strokeWidth="0.75" 
            strokeOpacity="0.75" 
            fill="none" 
          />

          {/* Phase 3: Single Controlled Band Highlight Sweep (1.8s - 2.5s) */}
          {isAnimated && (
            <ellipse 
              cx="110" 
              cy="88" 
              rx="44" 
              ry="36" 
              stroke="#FFFFFF" 
              strokeWidth="3.2" 
              strokeDasharray="50 250" 
              fill="none" 
              className="animate-cinematic-sweep"
            />
          )}
        </g>

        {/* ================= 2. BRIDE'S SOLITAIRE DIAMOND RING (RIGHT RING) ================= */}
        {/* Controlled 0.0s-1.0s Approach & 1.0s-1.8s Union */}
        <g className={isAnimated ? "animate-cinematic-ring-right origin-center" : ""}>
          {/* Main Antique Gold Band */}
          <ellipse 
            cx="170" 
            cy="88" 
            rx="44" 
            ry="36" 
            stroke="url(#bride-antique-gold)" 
            strokeWidth="8" 
            fill="none" 
          />

          {/* Inner Polished Rim */}
          <ellipse 
            cx="170" 
            cy="88" 
            rx="40" 
            ry="32" 
            stroke="url(#inner-rim-glow)" 
            strokeWidth="1.2" 
            fill="none" 
          />

          {/* Outer Polished Bevel Rim */}
          <ellipse 
            cx="170" 
            cy="88" 
            rx="48" 
            ry="40" 
            stroke="#8E6E2D" 
            strokeWidth="0.75" 
            strokeOpacity="0.75" 
            fill="none" 
          />

          {/* Solitaire Diamond Setting & Crown (Mounted at cx=170, cy=52) */}
          <g transform="translate(170, 52)">
            {/* Setting Base Collar */}
            <rect x="-6" y="2" width="12" height="3" fill="#C6A15B" rx="1" />

            {/* Solitaire Gold/Platinum Prongs */}
            <path d="M -8 4 L -4 -4 L -1 -2" stroke="#E5C88A" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 8 4 L 4 -4 L 1 -2" stroke="#E5C88A" strokeWidth="1.5" strokeLinecap="round" />

            {/* Brilliant Diamond Pavilion & Crown */}
            <polygon 
              points="0,-14 10,-5 7,3 -7,3 -10,-5" 
              fill="url(#diamond-facet-a)" 
              stroke="#B38E3F" 
              strokeWidth="0.8" 
            />
            {/* Central Table Facet */}
            <polygon 
              points="0,-14 5,-5 0,2 -5,-5" 
              fill="#FFFFFF" 
              stroke="#D4AF37" 
              strokeWidth="0.5" 
            />
            {/* Facet Refractions */}
            <polygon points="-10,-5 -5,-5 0,2 -7,3" fill="url(#diamond-facet-b)" opacity="0.9" />
            <polygon points="10,-5 5,-5 0,2 7,3" fill="url(#diamond-facet-a)" opacity="0.9" />

            {/* Lower Culet Accent */}
            <polygon points="-6,3 6,3 0,6" fill="#A47B2B" opacity="0.7" />

            {/* Phase 3: Single Controlled Diamond Glint (1.8s - 2.5s) */}
            <g transform="translate(0, -10)">
              <g className={isAnimated ? "animate-cinematic-glint origin-center" : "opacity-0"}>
                {/* Primary 4-point Diamond Starburst */}
                <path 
                  d="M 0 -18 L 2.5 -2.5 L 18 0 L 2.5 2.5 L 0 18 L -2.5 2.5 L -18 0 L -2.5 -2.5 Z" 
                  fill="#FFFFFF" 
                />
                {/* Secondary Warm Golden Flare */}
                <path 
                  d="M -8 -8 L 0 -1.5 L 8 -8 L 1.5 0 L 8 8 L 0 1.5 L -8 8 L -1.5 0 Z" 
                  fill="#FFF4D0" 
                  opacity="0.85" 
                />
                {/* Center Core Spark */}
                <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
              </g>
            </g>
          </g>
        </g>

        {/* ================= 3. 3D INTERLOCKING OVERLAY ================= */}
        {/* At top intersection (x=140, y=61.7), Left ring cleanly weaves OVER Right ring.
            At bottom intersection (x=140, y=114.3), Right ring stays on top.
            Weave smoothly fades in as rings meet (1.3s - 1.8s) and holds rock-solid. */}
        <g className={isAnimated ? "animate-cinematic-ring-left origin-center" : ""}>
          <g className={isAnimated ? "animate-cinematic-weave" : ""}>
            {/* Overlapping Band Arc */}
            <path 
              d="M 128.5 55.4 A 44 36 0 0 1 148.1 70.0" 
              stroke="url(#groom-24k-gold)" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none" 
            />
            {/* Inner Rim Overlap */}
            <path 
              d="M 127 58 A 40 32 0 0 1 145 72" 
              stroke="url(#inner-rim-glow)" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              fill="none" 
            />
            {/* Outer Rim Overlap */}
            <path 
              d="M 130 53 A 48 40 0 0 1 150 68" 
              stroke="#8E6E2D" 
              strokeWidth="0.75" 
              strokeOpacity="0.75" 
              strokeLinecap="round" 
              fill="none" 
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

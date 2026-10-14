import React from 'react';

interface MandapamIllustrationProps {
  className?: string;
  isAnimated?: boolean;
}

export const MandapamIllustration: React.FC<MandapamIllustrationProps> = ({ 
  className = "w-full h-auto max-h-[300px] sm:max-h-[340px]",
  isAnimated = false
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} aria-hidden="true">
      {/* Background Soft Divine Warm Glow Stage (0.0s - 0.8s emerge softly, then settles) */}
      <div 
        className={`absolute inset-0 rounded-full blur-2xl pointer-events-none scale-110 ${
          isAnimated ? "animate-mandapam-stage" : "opacity-60"
        }`}
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, rgba(212, 175, 55, 0.35) 0%, rgba(229, 200, 138, 0.22) 40%, rgba(123, 30, 43, 0.08) 65%, rgba(255, 248, 239, 0) 80%)'
        }}
      />

      <svg 
        viewBox="0 0 560 360" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-md overflow-visible"
        aria-label="గ్రాండ్ కల్యాణ మండపం దృశ్యం"
      >
        <defs>
          {/* ================= METALLIC GOLD SHADERS ================= */}
          <linearGradient id="gold-tier-top" x1="160" y1="20" x2="400" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="25%" stopColor="#F5D77F" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#A67C1E" />
            <stop offset="100%" stopColor="#6E4F10" />
          </linearGradient>

          <linearGradient id="gold-pillar-grad" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9C7723" />
            <stop offset="20%" stopColor="#F7DF94" />
            <stop offset="50%" stopColor="#FFFDF5" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7A5812" />
          </linearGradient>

          <linearGradient id="gold-base-grad" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6E4F10" />
            <stop offset="30%" stopColor="#E5C88A" />
            <stop offset="60%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#8E6E2D" />
          </linearGradient>

          <linearGradient id="kuthu-vilakku-gold" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#875E14" />
            <stop offset="35%" stopColor="#FFECB3" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#5E3F0A" />
          </linearGradient>

          {/* ================= SACRED FLAME & RADIANCE GRADIENTS ================= */}
          <radialGradient id="lamp-steady-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF176" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FFB300" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#FF5722" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="homa-fire-aura" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FFF9C4" stopOpacity="1" />
            <stop offset="25%" stopColor="#FFCA28" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FF6F00" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#D84315" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#BF360C" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="fire-flame-grad" x1="0" y1="30" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF3D00" />
            <stop offset="30%" stopColor="#FF9100" />
            <stop offset="70%" stopColor="#FFEA00" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* ================= NATURAL FOLIAGE GRADIENTS ================= */}
          <linearGradient id="banana-leaf-grad" x1="0" y1="0" x2="50" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="45%" stopColor="#388E3C" />
            <stop offset="80%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          <linearGradient id="banana-stem-grad" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="40%" stopColor="#81C784" />
            <stop offset="70%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          <linearGradient id="mango-leaf-grad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#66BB6A" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          {/* ================= CEREMONIAL CARPET & HOMA KUNDAM ================= */}
          <linearGradient id="stage-carpet-grad" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8A1B29" />
            <stop offset="40%" stopColor="#7B1E2B" />
            <stop offset="100%" stopColor="#4A0E17" />
          </linearGradient>

          <linearGradient id="copper-kunda-grad" x1="0" y1="0" x2="80" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D47355" />
            <stop offset="35%" stopColor="#B34A26" />
            <stop offset="75%" stopColor="#822E12" />
            <stop offset="100%" stopColor="#571A07" />
          </linearGradient>
        </defs>

        {/* ================= 0. TEMPLE BACKDROP ARCH & AURA ================= */}
        <g opacity="0.45">
          {/* Outer Prabhavali / Temple Sunburst Arc */}
          <ellipse cx="280" cy="180" rx="180" ry="140" stroke="#E5C88A" strokeWidth="1" strokeDasharray="4,6" />
          <ellipse cx="280" cy="180" rx="150" ry="115" stroke="#C6A15B" strokeWidth="1.2" strokeDasharray="2,5" />
          
          {/* Temple Gopuram Silhouette in Distance */}
          <path 
            d="M 280 40 L 268 75 L 292 75 Z 
               M 264 75 L 254 105 L 306 105 L 296 75 Z 
               M 248 105 L 238 135 L 322 135 L 312 105 Z" 
            fill="#F4E8D3" 
            stroke="#D8C3A5" 
            strokeWidth="0.8" 
            opacity="0.55" 
          />
          {/* Sacred Temple Hanging Bells */}
          {[180, 230, 330, 380].map((x, i) => (
            <g key={`bell-${i}`} transform={`translate(${x}, 105)`}>
              <line x1="0" y1="0" x2="0" y2="28" stroke="#C6A15B" strokeWidth="1" strokeDasharray="1.5,1.5" />
              {/* Bell shape */}
              <path d="M -5 28 C -5 26, -3 24, 0 24 C 3 24, 5 26, 5 28 L 7 35 C 7 37, -7 37, -7 35 Z" fill="#D4AF37" stroke="#8E6E2D" strokeWidth="0.6" />
              <circle cx="0" cy="38" r="1.5" fill="#FFF2D6" />
            </g>
          ))}
        </g>

        {/* ================= 1. FLANKING SACRED BANANA TREES (ARATI CHETLU) ================= */}
        {/* Left Banana Tree with layered lush foliage */}
        <g id="left-banana-tree" transform="translate(18, 120)">
          {/* Main Trunk */}
          <path d="M 38 180 Q 36 80 46 0 Q 56 80 52 180 Z" fill="url(#banana-stem-grad)" stroke="#1B5E20" strokeWidth="0.8" />
          
          {/* Cascading Broad Leaves */}
          {/* Leaf 1: Arching Left */}
          <path 
            d="M 45 35 C 5 25, -25 55, -15 95 C 10 70, 30 65, 43 45 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="1" 
          />
          <path d="M 45 35 Q 0 55, -15 95" stroke="#A5D6A7" strokeWidth="1" fill="none" opacity="0.7" />

          {/* Leaf 2: High Sweeping Arch Left */}
          <path 
            d="M 46 15 C 20 -25, -20 -15, -10 35 C 15 15, 35 15, 45 20 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="1" 
          />
          <path d="M 46 15 Q 5 -10, -10 35" stroke="#A5D6A7" strokeWidth="1" fill="none" opacity="0.7" />

          {/* Leaf 3: Soft Upward Left */}
          <path 
            d="M 46 0 C 35 -40, 5 -55, 10 -15 C 25 -25, 40 -15, 46 0 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="0.8" 
          />

          {/* Auspicious Red/Maroon Blossom Bud (Arati Gola) */}
          <path d="M 42 65 C 38 75, 40 85, 44 92 C 48 85, 50 75, 46 65 Z" fill="#7B1E2B" stroke="#4A0E17" strokeWidth="0.8" />
          <circle cx="44" cy="94" r="1.5" fill="#FFC107" />
        </g>

        {/* Right Banana Tree with layered lush foliage */}
        <g id="right-banana-tree" transform="translate(488, 120) scale(-1, 1)">
          {/* Main Trunk */}
          <path d="M 38 180 Q 36 80 46 0 Q 56 80 52 180 Z" fill="url(#banana-stem-grad)" stroke="#1B5E20" strokeWidth="0.8" />
          
          {/* Cascading Broad Leaves */}
          <path 
            d="M 45 35 C 5 25, -25 55, -15 95 C 10 70, 30 65, 43 45 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="1" 
          />
          <path d="M 45 35 Q 0 55, -15 95" stroke="#A5D6A7" strokeWidth="1" fill="none" opacity="0.7" />

          <path 
            d="M 46 15 C 20 -25, -20 -15, -10 35 C 15 15, 35 15, 45 20 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="1" 
          />
          <path d="M 46 15 Q 5 -10, -10 35" stroke="#A5D6A7" strokeWidth="1" fill="none" opacity="0.7" />

          <path 
            d="M 46 0 C 35 -40, 5 -55, 10 -15 C 25 -25, 40 -15, 46 0 Z" 
            fill="url(#banana-leaf-grad)" 
            stroke="#1B5E20" 
            strokeWidth="0.8" 
          />

          {/* Auspicious Blossom */}
          <path d="M 42 65 C 38 75, 40 85, 44 92 C 48 85, 50 75, 46 65 Z" fill="#7B1E2B" stroke="#4A0E17" strokeWidth="0.8" />
          <circle cx="44" cy="94" r="1.5" fill="#FFC107" />
        </g>

        {/* ================= 2. GRAND MANDAPAM ARCHITECTURE & TIERED CANOPY (0.0s - 0.8s) ================= */}
        <g className={isAnimated ? "animate-mandapam-emerge origin-center" : ""}>
          {/* Main Elevated Mandapam Dais & Red Velvet Carpet Base */}
          <g id="mandapam-stage-base">
            {/* Outer Gold Trim Platform */}
            <rect x="75" y="285" width="410" height="24" rx="3" fill="#D4AF37" stroke="#8E6E2D" strokeWidth="1.5" />
            {/* Rich Ceremonial Maroon Carpet */}
            <rect x="85" y="288" width="390" height="18" rx="2" fill="url(#stage-carpet-grad)" />
            {/* Front Border Gold Filigree Dots */}
            {[...Array(35)].map((_, i) => (
              <circle key={`stage-dot-${i}`} cx={95 + i * 11} cy="297" r="1.5" fill="#FFF2D6" />
            ))}
            {/* Stepped Front Riser */}
            <path d="M 160 309 L 400 309 L 390 322 L 170 322 Z" fill="#8E6E2D" stroke="#6E4F10" strokeWidth="1" />
            <path d="M 175 311 L 385 311 L 380 320 L 180 320 Z" fill="#D4AF37" opacity="0.8" />
          </g>

          {/* ================= RECESSED REAR PILLARS (DEPTH) ================= */}
          <g id="rear-pillars" opacity="0.75">
            {/* Back Left Pillar */}
            <rect x="142" y="88" width="22" height="200" fill="url(#gold-pillar-grad)" stroke="#6E4F10" strokeWidth="1" />
            <rect x="138" y="82" width="30" height="8" rx="2" fill="#D4AF37" />
            {/* Back Right Pillar */}
            <rect x="396" y="88" width="22" height="200" fill="url(#gold-pillar-grad)" stroke="#6E4F10" strokeWidth="1" />
            <rect x="392" y="82" width="30" height="8" rx="2" fill="#D4AF37" />
          </g>

          {/* ================= FRONT ORNAMENTAL GOLD PILLARS ================= */}
          {/* Front Left Pillar */}
          <g id="front-left-pillar">
            {/* Base Pedestal (Stepped Dravidian Stone & Gold) */}
            <rect x="94" y="258" width="44" height="28" rx="2" fill="url(#gold-base-grad)" stroke="#6E4F10" strokeWidth="1.2" />
            <rect x="98" y="262" width="36" height="20" rx="1" fill="#7B1E2B" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="116" cy="272" r="3" fill="#FFD54F" />

            {/* Pillar Shaft with Cylindrical Shading & Floral Carving Rings */}
            <rect x="100" y="80" width="32" height="180" fill="url(#gold-pillar-grad)" stroke="#6E4F10" strokeWidth="1.2" />
            {/* Fluted Vertical Highlights */}
            <line x1="112" y1="80" x2="112" y2="260" stroke="#FFFDF5" strokeWidth="1.8" opacity="0.8" />
            <line x1="116" y1="80" x2="116" y2="260" stroke="#FFFDF5" strokeWidth="2.2" />
            <line x1="120" y1="80" x2="120" y2="260" stroke="#FFFDF5" strokeWidth="1.8" opacity="0.8" />

            {/* Traditional Carved Rings (Kalasam bands) */}
            {[105, 140, 175, 210, 245].map((y, idx) => (
              <g key={`l-ring-${idx}`}>
                <rect x="98" y={y} width="36" height="7" rx="1.5" fill="#6E4F10" />
                <rect x="99" y={y + 1} width="34" height="5" rx="1" fill="#F5D77F" />
                <circle cx="116" cy={y + 3.5} r="1.5" fill="#7B1E2B" />
              </g>
            ))}

            {/* Pillar Capital (Bodhikai bracket with lotus bud profile) */}
            <path d="M 94 80 L 138 80 L 146 64 L 86 64 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1.2" />
            <path d="M 90 74 Q 116 82 142 74" stroke="#7B1E2B" strokeWidth="2" fill="none" />
          </g>

          {/* Front Right Pillar */}
          <g id="front-right-pillar">
            {/* Base Pedestal */}
            <rect x="422" y="258" width="44" height="28" rx="2" fill="url(#gold-base-grad)" stroke="#6E4F10" strokeWidth="1.2" />
            <rect x="426" y="262" width="36" height="20" rx="1" fill="#7B1E2B" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="444" cy="272" r="3" fill="#FFD54F" />

            {/* Pillar Shaft */}
            <rect x="428" y="80" width="32" height="180" fill="url(#gold-pillar-grad)" stroke="#6E4F10" strokeWidth="1.2" />
            {/* Fluted Vertical Highlights */}
            <line x1="440" y1="80" x2="440" y2="260" stroke="#FFFDF5" strokeWidth="1.8" opacity="0.8" />
            <line x1="444" y1="80" x2="444" y2="260" stroke="#FFFDF5" strokeWidth="2.2" />
            <line x1="448" y1="80" x2="448" y2="260" stroke="#FFFDF5" strokeWidth="1.8" opacity="0.8" />

            {/* Traditional Carved Rings */}
            {[105, 140, 175, 210, 245].map((y, idx) => (
              <g key={`r-ring-${idx}`}>
                <rect x="426" y={y} width="36" height="7" rx="1.5" fill="#6E4F10" />
                <rect x="427" y={y + 1} width="34" height="5" rx="1" fill="#F5D77F" />
                <circle cx="444" cy={y + 3.5} r="1.5" fill="#7B1E2B" />
              </g>
            ))}

            {/* Pillar Capital */}
            <path d="M 422 80 L 466 80 L 474 64 L 414 64 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1.2" />
            <path d="M 418 74 Q 444 82 470 74" stroke="#7B1E2B" strokeWidth="2" fill="none" />
          </g>

          {/* ================= TIERED CANOPY & GOLD ROOF (VIMANA / GABLE) ================= */}
          <g id="mandapam-roof">
            {/* Lower Main Lintel Beam */}
            <rect x="80" y="55" width="400" height="15" rx="2" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1.5" />
            {/* Lintel Maroon Inset with Gold Rosettes */}
            <rect x="88" y="58" width="384" height="9" rx="1" fill="#7B1E2B" />
            {[...Array(25)].map((_, i) => (
              <circle key={`beam-flower-${i}`} cx={98 + i * 15.5} cy="62.5" r="2" fill="#F5D77F" />
            ))}

            {/* Stepped Tier 2 Roof */}
            <path d="M 105 55 L 455 55 L 435 38 L 125 38 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1.2" />
            <rect x="135" y="42" width="290" height="6" fill="#6E4F10" opacity="0.35" />

            {/* Stepped Tier 3 (Cupola Top) */}
            <path d="M 150 38 L 410 38 L 385 22 L 175 22 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1.2" />

            {/* Ornate Central Golden Kalasham (Maha Kumbham with Coconut & Mango Leaves) */}
            <g transform="translate(280, 22)">
              {/* Kalash Base */}
              <ellipse cx="0" cy="0" rx="14" ry="4" fill="#6E4F10" />
              <path d="M -12 0 C -15 -8, -12 -16, 0 -18 C 12 -16, 15 -8, 12 0 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="1" />
              {/* Mango leaves emerging from Kalash pot */}
              <path d="M 0 -18 L -9 -25 L -4 -18 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.5" />
              <path d="M 0 -18 L 9 -25 L 4 -18 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.5" />
              <path d="M 0 -18 L 0 -28 L 2 -18 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="0.5" />
              {/* Coconut & Gold Finial Spire */}
              <circle cx="0" cy="-24" r="5" fill="#8D4327" />
              <path d="M 0 -28 L 0 -38" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="0" cy="-38" r="3" fill="#FFF2D6" stroke="#D4AF37" strokeWidth="0.8" />
            </g>

            {/* Flanking Mini Kalash Finials on Left and Right Canopy */}
            <g transform="translate(145, 38)">
              <path d="M -6 0 C -8 -4, -6 -9, 0 -10 C 6 -9, 8 -4, 6 0 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="0.8" />
              <line x1="0" y1="-10" x2="0" y2="-17" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="-17" r="2" fill="#FFF2D6" />
            </g>
            <g transform="translate(415, 38)">
              <path d="M -6 0 C -8 -4, -6 -9, 0 -10 C 6 -9, 8 -4, 6 0 Z" fill="url(#gold-tier-top)" stroke="#6E4F10" strokeWidth="0.8" />
              <line x1="0" y1="-10" x2="0" y2="-17" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="-17" r="2" fill="#FFF2D6" />
            </g>
          </g>
        </g>

        {/* ================= 3. DENSE CASCADING FLORAL GARLANDS (0.8s - 1.6s) ================= */}
        <g className={isAnimated ? "animate-mandapam-pillars origin-center" : ""}>
          {/* A. Traditional Mango Leaf Toranam across the Upper Arch */}
          <g id="mango-toranam">
            <path d="M 85 70 Q 280 92 475 70" stroke="#1B5E20" strokeWidth="2" fill="none" />
            {[...Array(26)].map((_, i) => {
              const t = i / 25;
              const x = 90 + t * 380;
              const y = 70 + 22 * 4 * t * (1 - t);
              return (
                <path 
                  key={`mango-leaf-${i}`}
                  d={`M ${x - 4} ${y} C ${x - 5} ${y + 12}, ${x} ${y + 16}, ${x} ${y + 16} C ${x} ${y + 16}, ${x + 5} ${y + 12}, ${x + 4} ${y} Z`}
                  fill="url(#mango-leaf-grad)"
                  stroke="#0E3813"
                  strokeWidth="0.5"
                />
              );
            })}
          </g>

          {/* B. Dense Jasmine & Red Rose Garlands Swag (Grand Canopy Arch) */}
          {/* Swag 1: Pure White Jasmine (Mallepoolu) Base Swag */}
          <path 
            d="M 96 72 Q 280 126 464 72" 
            stroke="#FFFDF5" 
            strokeWidth="10" 
            strokeLinecap="round" 
            strokeDasharray="4,3" 
            fill="none" 
            className="drop-shadow-xs"
          />
          {/* Swag 2: Golden Saffron Marigold Layer */}
          <path 
            d="M 104 80 Q 280 134 456 80" 
            stroke="#FFB300" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeDasharray="6,4" 
            fill="none" 
          />
          {/* Swag 3: Deep Red Rose Petal Center Accent Layer */}
          <path 
            d="M 112 88 Q 280 142 448 88" 
            stroke="#C2185B" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeDasharray="5,4" 
            fill="none" 
          />

          {/* C. Vertical Cascading Floral Drops along the Mandapam Pillars */}
          {/* Left Pillar Floral Cascade */}
          <g transform="translate(136, 75)">
            {/* Jasmine and Marigold String 1 */}
            <line x1="0" y1="0" x2="0" y2="185" stroke="#FFFDF5" strokeWidth="4.5" strokeDasharray="3,2.5" />
            <line x1="5" y1="5" x2="5" y2="175" stroke="#FF9800" strokeWidth="4" strokeDasharray="4,3" />
            <line x1="-5" y1="10" x2="-5" y2="165" stroke="#E91E63" strokeWidth="3.5" strokeDasharray="3.5,3" />
            {/* Hanging Lotus Blossom Tassels at bottom */}
            <circle cx="0" cy="188" r="4.5" fill="#E91E63" />
            <circle cx="0" cy="188" r="2.5" fill="#FFEB3B" />
            <circle cx="5" cy="178" r="3.5" fill="#FF9800" />
            <circle cx="-5" cy="168" r="3.5" fill="#E91E63" />
          </g>

          {/* Right Pillar Floral Cascade */}
          <g transform="translate(424, 75)">
            <line x1="0" y1="0" x2="0" y2="185" stroke="#FFFDF5" strokeWidth="4.5" strokeDasharray="3,2.5" />
            <line x1="-5" y1="5" x2="-5" y2="175" stroke="#FF9800" strokeWidth="4" strokeDasharray="4,3" />
            <line x1="5" y1="10" x2="5" y2="165" stroke="#E91E63" strokeWidth="3.5" strokeDasharray="3.5,3" />
            {/* Hanging Lotus Blossom Tassels */}
            <circle cx="0" cy="188" r="4.5" fill="#E91E63" />
            <circle cx="0" cy="188" r="2.5" fill="#FFEB3B" />
            <circle cx="-5" cy="178" r="3.5" fill="#FF9800" />
            <circle cx="5" cy="168" r="3.5" fill="#E91E63" />
          </g>

          {/* Center Swag Floral Tassels */}
          {[220, 250, 280, 310, 340].map((x, idx) => (
            <g key={`center-drop-${idx}`}>
              <line x1={x} y1="126" x2={x} y2="152" stroke="#FFFDF5" strokeWidth="3" strokeDasharray="2,2" />
              <circle cx={x} cy="154" r="3" fill={idx % 2 === 0 ? "#E91E63" : "#FF9800"} />
            </g>
          ))}
        </g>

        {/* ================= 4. CENTRAL HOMA KUNDAM & SACRED FIRE (AGNI) (1.5s - 1.9s) ================= */}
        <g id="sacred-homa-kundam" transform="translate(280, 260)">
          {/* Stepped Terracotta / Copper Sacrificial Kunda Pit */}
          {/* Tier 1 (Base Step) */}
          <path d="M -48 24 L 48 24 L 42 32 L -42 32 Z" fill="url(#copper-kunda-grad)" stroke="#4A1305" strokeWidth="1" />
          {/* Tier 2 (Middle Step) */}
          <path d="M -38 14 L 38 14 L 44 24 L -44 24 Z" fill="url(#copper-kunda-grad)" stroke="#4A1305" strokeWidth="1" />
          {/* Tier 3 (Upper Rim) */}
          <path d="M -28 6 L 28 6 L 36 14 L -36 14 Z" fill="#D47355" stroke="#571A07" strokeWidth="1" />
          
          {/* Sacred Chandan / Kumkum Stripes on the Kunda face */}
          <line x1="-30" y1="19" x2="30" y2="19" stroke="#FFFDE7" strokeWidth="1.2" opacity="0.9" />
          <circle cx="0" cy="19" r="1.5" fill="#D32F2F" />

          {/* Sacrificial Firewood Sticks (Samidhalu) */}
          <line x1="-16" y1="6" x2="14" y2="-2" stroke="#4E342E" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="16" y1="6" x2="-14" y2="-2" stroke="#3E2723" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="-8" y1="5" x2="8" y2="-4" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />

          {/* ================= SACRED AGNI FLAME (LAMP SEQ 2: 1.5s - 1.9s) ================= */}
          <g className={isAnimated ? "animate-lamp-seq-2 origin-center" : ""}>
            {/* Radiant Ambient Heat Glow */}
            <circle cx="0" cy="-14" r="32" fill="url(#homa-fire-aura)" />

            {/* Dynamic Outer Flame Tongue */}
            <path 
              d="M 0 -36 C -14 -22, -18 -8, -12 2 C -8 5, 8 5, 12 2 C 18 -8, 14 -22, 0 -36 Z" 
              fill="url(#fire-flame-grad)" 
              filter="drop-shadow(0 0 6px rgba(255,111,0,0.6))"
            />
            {/* Left Flame Tongue */}
            <path 
              d="M -6 -28 C -18 -18, -12 -5, -8 0 C -4 -6, -2 -18, -6 -28 Z" 
              fill="#FF9100" 
              opacity="0.9"
            />
            {/* Right Flame Tongue */}
            <path 
              d="M 6 -30 C 16 -18, 12 -5, 8 0 C 4 -6, 2 -18, 6 -30 Z" 
              fill="#FFEA00" 
              opacity="0.85"
            />
            {/* Core Intense White-Hot Divine Ember */}
            <ellipse cx="0" cy="-5" rx="5" ry="9" fill="#FFFFFF" />

            {/* Sacred Embers Floating Upward */}
            <circle cx="-6" cy="-38" r="1" fill="#FFD54F" opacity="0.8" />
            <circle cx="5" cy="-42" r="1.2" fill="#FF9E80" opacity="0.9" />
            <circle cx="1" cy="-48" r="0.8" fill="#FFF59D" opacity="0.75" />
          </g>

          {/* Sacred Offerings nearby: Traditional Brass Kalasham & Coconut on Altar Side */}
          <g transform="translate(48, 8)">
            <ellipse cx="0" cy="12" rx="9" ry="3" fill="#6E4F10" />
            <path d="M -7 12 C -9 6, -7 0, 0 -2 C 7 0, 9 6, 7 12 Z" fill="#D4AF37" stroke="#8E6E2D" strokeWidth="0.8" />
            <circle cx="0" cy="-5" r="4" fill="#8D4327" />
            <circle cx="0" cy="-5" r="1.5" fill="#E91E63" />
          </g>
        </g>

        {/* ================= 5. TALL STANDING TRADITIONAL BRASS KUTHU VILAKKU LAMPS ================= */}
        {/* LAMP 1: LEFT STANDING BRASS SAMAI LAMP (1.3s - 1.7s) */}
        <g id="left-kuthu-vilakku" transform="translate(86, 175)">
          {/* Stepped Pedestal Base */}
          <path d="M -16 110 L 16 110 L 12 116 L -12 116 Z" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <ellipse cx="0" cy="110" rx="14" ry="3.5" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -8 110 L -4 95 L 4 95 L 8 110 Z" fill="#D4AF37" />

          {/* Central Fluted Stem & Ring Mouldings */}
          <rect x="-3" y="40" width="6" height="55" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.6" />
          <ellipse cx="0" cy="72" rx="6" ry="2" fill="#F5D77F" stroke="#5E3F0A" strokeWidth="0.5" />
          <ellipse cx="0" cy="52" rx="7" ry="2.2" fill="#F5D77F" stroke="#5E3F0A" strokeWidth="0.5" />

          {/* Tier 1 Lower Oil Plate (Agal) */}
          <ellipse cx="0" cy="40" rx="14" ry="4" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -14 40 C -14 45, 14 45, 14 40 Z" fill="#A67C1E" />

          {/* Upper Oil Plate with 5 Wicks & Peacock (Mayil) Finial */}
          <ellipse cx="0" cy="20" rx="16" ry="4.5" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -16 20 C -16 26, 16 26, 16 20 Z" fill="#875E14" />
          
          {/* Mayil (Peacock) Crown Finial */}
          <path d="M 0 16 L 0 5 C -3 3, -4 0, 0 -2 C 4 0, 3 3, 0 5 Z" fill="#D4AF37" stroke="#5E3F0A" strokeWidth="0.6" />
          <circle cx="0" cy="-3" r="1.5" fill="#FFF2D6" />

          {/* Radiant Sequential Lamp 1 Flame Glow (1.3s - 1.7s) */}
          <g className={isAnimated ? "animate-lamp-seq-1 origin-center" : ""}>
            <circle cx="0" cy="12" r="22" fill="url(#lamp-steady-aura)" />
            {/* Main Center Flame */}
            <path d="M 0 16 C -3.5 10, -3.5 2, 0 -3 C 3.5 2, 3.5 10, 0 16 Z" fill="#FFA000" />
            <path d="M 0 14 C -1.8 9, -1.8 3, 0 0 C 1.8 3, 1.8 9, 0 14 Z" fill="#FFF9C4" />
            {/* Left & Right Wick Flames */}
            <path d="M -12 18 C -14 13, -14 8, -12 5 C -10 8, -10 13, -12 18 Z" fill="#FFB300" />
            <path d="M 12 18 C 10 13, 10 8, 12 5 C 14 8, 14 13, 12 18 Z" fill="#FFB300" />
          </g>
        </g>

        {/* LAMP 3: RIGHT STANDING BRASS SAMAI LAMP (1.7s - 2.0s) */}
        <g id="right-kuthu-vilakku" transform="translate(474, 175)">
          {/* Stepped Pedestal Base */}
          <path d="M -16 110 L 16 110 L 12 116 L -12 116 Z" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <ellipse cx="0" cy="110" rx="14" ry="3.5" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -8 110 L -4 95 L 4 95 L 8 110 Z" fill="#D4AF37" />

          {/* Central Stem */}
          <rect x="-3" y="40" width="6" height="55" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.6" />
          <ellipse cx="0" cy="72" rx="6" ry="2" fill="#F5D77F" stroke="#5E3F0A" strokeWidth="0.5" />
          <ellipse cx="0" cy="52" rx="7" ry="2.2" fill="#F5D77F" stroke="#5E3F0A" strokeWidth="0.5" />

          {/* Lower Oil Plate */}
          <ellipse cx="0" cy="40" rx="14" ry="4" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -14 40 C -14 45, 14 45, 14 40 Z" fill="#A67C1E" />

          {/* Upper Oil Plate with Peacock Finial */}
          <ellipse cx="0" cy="20" rx="16" ry="4.5" fill="url(#kuthu-vilakku-gold)" stroke="#5E3F0A" strokeWidth="0.8" />
          <path d="M -16 20 C -16 26, 16 26, 16 20 Z" fill="#875E14" />
          
          <path d="M 0 16 L 0 5 C -3 3, -4 0, 0 -2 C 4 0, 3 3, 0 5 Z" fill="#D4AF37" stroke="#5E3F0A" strokeWidth="0.6" />
          <circle cx="0" cy="-3" r="1.5" fill="#FFF2D6" />

          {/* Radiant Sequential Lamp 3 Flame Glow (1.7s - 2.0s) */}
          <g className={isAnimated ? "animate-lamp-seq-3 origin-center" : ""}>
            <circle cx="0" cy="12" r="22" fill="url(#lamp-steady-aura)" />
            {/* Main Center Flame */}
            <path d="M 0 16 C -3.5 10, -3.5 2, 0 -3 C 3.5 2, 3.5 10, 0 16 Z" fill="#FFA000" />
            <path d="M 0 14 C -1.8 9, -1.8 3, 0 0 C 1.8 3, 1.8 9, 0 14 Z" fill="#FFF9C4" />
            {/* Left & Right Wick Flames */}
            <path d="M -12 18 C -14 13, -14 8, -12 5 C -10 8, -10 13, -12 18 Z" fill="#FFB300" />
            <path d="M 12 18 C 10 13, 10 8, 12 5 C 14 8, 14 13, 12 18 Z" fill="#FFB300" />
          </g>
        </g>
      </svg>
    </div>
  );
};

import React from 'react';

interface MangalaVadyaluIconProps {
  className?: string;
}

export const MangalaVadyaluIcon: React.FC<MangalaVadyaluIconProps> = ({ className = "w-44 h-26 mx-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
      {/* Background soft ceremonial aura breathing gently */}
      <div className="absolute inset-0 bg-radial from-[#E5C88A]/30 via-[#7B1E2B]/10 to-transparent rounded-full blur-lg animate-lamp-aura" />

      <svg 
        viewBox="0 0 200 115" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="nadaswaram-wood" x1="20" y1="20" x2="120" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A2511" />
            <stop offset="50%" stopColor="#2E1508" />
            <stop offset="100%" stopColor="#1A0B04" />
          </linearGradient>

          <linearGradient id="instrument-gold" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF7E6" />
            <stop offset="35%" stopColor="#E5C88A" />
            <stop offset="75%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#8E6E2D" />
          </linearGradient>

          <linearGradient id="thavil-barrel" x1="90" y1="30" x2="160" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7B1E2B" />
            <stop offset="50%" stopColor="#54101B" />
            <stop offset="100%" stopColor="#3D0A12" />
          </linearGradient>

          <linearGradient id="lamp-gold" x1="0" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#E5C88A" />
            <stop offset="85%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#8E6E2D" />
          </linearGradient>

          <radialGradient id="flame-aura-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF9800" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LEFT CEREMONIAL BRASS LAMP (KUTHU VILAKKU) */}
        <g transform="translate(18, 32)">
          {/* Glowing Aura around Flame */}
          <circle cx="0" cy="-6" r="12" fill="url(#flame-aura-grad)" className="animate-lamp-aura origin-center" />

          {/* Flickering Golden Flame (Jyothi) */}
          <g className="animate-lamp-flame origin-bottom">
            <path d="M 0 -15 C -3 -9, -3 -2, 0 0 C 3 -2, 3 -9, 0 -15 Z" fill="#FFA000" />
            <path d="M 0 -12 C -1.8 -7, -1.8 -2, 0 0 C 1.8 -2, 1.8 -7, 0 -12 Z" fill="#FFF59D" />
          </g>

          {/* Lamp Oil Bowl (Thattu) */}
          <ellipse cx="0" cy="2" rx="10" ry="3.5" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.8" />
          
          {/* Central Stem */}
          <path d="M -1.8 2 L -1.5 45 L 1.5 45 L 1.8 2 Z" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.6" />
          <circle cx="0" cy="18" r="3.2" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="0.6" />
          <circle cx="0" cy="32" r="3" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="0.6" />

          {/* Base */}
          <ellipse cx="0" cy="46" rx="9" ry="3" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.8" />
        </g>

        {/* RIGHT CEREMONIAL BRASS LAMP (KUTHU VILAKKU) */}
        <g transform="translate(182, 32)">
          {/* Glowing Aura around Flame */}
          <circle cx="0" cy="-6" r="12" fill="url(#flame-aura-grad)" className="animate-lamp-aura origin-center" />

          {/* Flickering Golden Flame (Jyothi) */}
          <g className="animate-lamp-flame origin-bottom">
            <path d="M 0 -15 C -3 -9, -3 -2, 0 0 C 3 -2, 3 -9, 0 -15 Z" fill="#FFA000" />
            <path d="M 0 -12 C -1.8 -7, -1.8 -2, 0 0 C 1.8 -2, 1.8 -7, 0 -12 Z" fill="#FFF59D" />
          </g>

          {/* Lamp Oil Bowl */}
          <ellipse cx="0" cy="2" rx="10" ry="3.5" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.8" />
          
          {/* Central Stem */}
          <path d="M -1.8 2 L -1.5 45 L 1.5 45 L 1.8 2 Z" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.6" />
          <circle cx="0" cy="18" r="3.2" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="0.6" />
          <circle cx="0" cy="32" r="3" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="0.6" />

          {/* Base */}
          <ellipse cx="0" cy="46" rx="9" ry="3" fill="url(#lamp-gold)" stroke="#8E6E2D" strokeWidth="0.8" />
        </g>

        {/* CENTER CEREMONIAL INSTRUMENTS */}
        {/* THAVIL (Sacred Ceremonial Drum) */}
        <g transform="translate(116, 55) rotate(-6)">
          {/* Main Barrel Body */}
          <path 
            d="M -28 -20 C -10 -26, 10 -26, 28 -20 L 26 20 C 10 26, -10 26, -26 20 Z" 
            fill="url(#thavil-barrel)" 
            stroke="#8E6E2D" 
            strokeWidth="1.2" 
          />
          {/* Left Drum Head */}
          <ellipse cx="-27" cy="0" rx="4.5" ry="20" fill="#E8DCC8" stroke="#8E6E2D" strokeWidth="1.2" />
          {/* Right Drum Head */}
          <ellipse cx="27" cy="0" rx="4.5" ry="20" fill="#E8DCC8" stroke="#8E6E2D" strokeWidth="1.2" />

          {/* Central Gold Band with soft shimmer */}
          <rect x="-7" y="-24" width="14" height="48" fill="#C6A15B" opacity="0.9" rx="1" />
          <line x1="0" y1="-24" x2="0" y2="24" stroke="#7B1E2B" strokeWidth="2.2" />

          {/* Tension Ropes */}
          {[-18, -9, 9, 18].map((x, i) => (
            <line key={i} x1={x} y1="-22" x2={x + 2} y2="22" stroke="#FAF1E2" strokeWidth="0.8" opacity="0.75" />
          ))}
        </g>

        {/* NADASWARAM (Ceremonial Wind Instrument) */}
        <g transform="translate(38, 22) rotate(22)">
          {/* Mouthpiece */}
          <rect x="0" y="2" width="10" height="3" fill="#E5C88A" rx="0.5" />
          <circle cx="10" cy="3.5" r="3" fill="#C6A15B" />

          {/* Wooden Body */}
          <path 
            d="M 12 2 L 85 -2 L 85 9 L 12 5 Z" 
            fill="url(#nadaswaram-wood)" 
            stroke="#54101B" 
            strokeWidth="0.8" 
          />

          {/* Tone Holes */}
          {[25, 35, 45, 55, 65, 75].map((x, i) => (
            <circle key={i} cx={x} cy="3.5" r="1.3" fill="#C6A15B" />
          ))}

          {/* Brass Flare / Bell with Shimmer Highlight */}
          <path 
            d="M 85 -2 C 95 -6, 105 -10, 110 -12 L 110 19 C 105 17, 95 13, 85 9 Z" 
            fill="url(#instrument-gold)" 
            stroke="#8E6E2D" 
            strokeWidth="1.2" 
          />
          <ellipse cx="110" cy="3.5" rx="3.5" ry="15.5" fill="#8E6E2D" stroke="#E5C88A" strokeWidth="1" />

          {/* Golden Bell Glint */}
          <circle cx="100" cy="4" r="2" fill="#FFFDF8" className="animate-glint" />

          {/* Tassel */}
          <path d="M 88 8 C 88 18, 86 26, 82 32" stroke="#7B1E2B" strokeWidth="2" strokeLinecap="round" />
          <circle cx="82" cy="33" r="2.5" fill="#C6A15B" />
          <line x1="82" y1="35" x2="82" y2="44" stroke="#7B1E2B" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Festive Flower Garland */}
        <path 
          d="M 45 62 Q 98 94 150 62" 
          stroke="#4E7852" 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Jasmine Flower Dots */}
        {[52, 68, 84, 100, 116, 132, 145].map((x, i) => (
          <circle key={i} cx={x} cy={63 + Math.sin((i / 6) * Math.PI) * 20} r="2.8" fill="#FFFDF8" stroke="#E8DCC8" strokeWidth="0.7" />
        ))}
        {/* Orange Marigold Accents */}
        {[60, 92, 124, 140].map((x, i) => (
          <circle key={i} cx={x} cy={64 + Math.sin((i / 4) * Math.PI) * 20} r="3" fill="#FFA726" />
        ))}
      </svg>
    </div>
  );
};

import React from 'react';

interface TurmericBowlIconProps {
  className?: string;
  isAnimated?: boolean;
}

export const TurmericBowlIcon: React.FC<TurmericBowlIconProps> = ({ 
  className = "w-44 h-28 mx-auto",
  isAnimated = false
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} aria-hidden="true">
      {/* Background warm saffron-gold radial stage glow (0.0s - 0.7s emerge softly, then settles) */}
      <div 
        className={`absolute inset-0 rounded-full blur-xl pointer-events-none scale-110 ${
          isAnimated ? "animate-haldi-stage" : "opacity-45"
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 193, 7, 0.35) 0%, rgba(198, 161, 91, 0.2) 45%, rgba(255, 248, 239, 0) 75%)'
        }}
      />

      <svg 
        viewBox="0 0 160 110" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="brass-bowl-grad" x1="40" y1="50" x2="120" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="25%" stopColor="#E5C88A" />
            <stop offset="70%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#8E6E2D" />
          </linearGradient>

          <linearGradient id="turmeric-powder-grad" x1="50" y1="30" x2="110" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="40%" stopColor="#FBC02D" />
            <stop offset="85%" stopColor="#F57F17" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          <linearGradient id="marigold-petal-grad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* Golden Sheen Beam Gradient for 1.5s-2.0s illumination sweep */}
          <linearGradient id="haldi-sheen-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FFF8E1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
          </linearGradient>

          <clipPath id="bowl-clip">
            <path d="M 38 58 C 40 85, 60 98, 80 98 C 100 98, 120 85, 122 58 Z" />
          </clipPath>
        </defs>

        {/* 1. Surrounding Floral Accents: Mango leaves and Marigolds (0.7s - 1.5s subtle reveal) */}
        <g className={isAnimated ? "animate-haldi-floral origin-center" : ""}>
          {/* Supporting Mango Leaves Behind Bowl */}
          <path d="M 40 55 C 20 40, 15 25, 25 15 C 38 25, 42 45, 45 55 Z" fill="#4E7852" stroke="#2D4D32" strokeWidth="0.8" opacity="0.9" />
          <path d="M 120 55 C 140 40, 145 25, 135 15 C 122 25, 118 45, 115 55 Z" fill="#4E7852" stroke="#2D4D32" strokeWidth="0.8" opacity="0.9" />

          {/* Marigold Flower 1 (Left Banthi Poovu) */}
          <g transform="translate(32, 68)">
            <circle cx="0" cy="0" r="11" fill="url(#marigold-petal-grad)" stroke="#BF360C" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="8" fill="#FBC02D" stroke="#E65100" strokeWidth="0.5" strokeDasharray="2,2" />
            <circle cx="0" cy="0" r="4" fill="#E65100" />
          </g>

          {/* Marigold Flower 2 (Right Banthi Poovu) */}
          <g transform="translate(128, 68)">
            <circle cx="0" cy="0" r="11" fill="url(#marigold-petal-grad)" stroke="#BF360C" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="8" fill="#FBC02D" stroke="#E65100" strokeWidth="0.5" strokeDasharray="2,2" />
            <circle cx="0" cy="0" r="4" fill="#E65100" />
          </g>

          {/* Restrained Petal Accents (Stationary, subtle ceremonial adornment) */}
          <ellipse cx="24" cy="86" rx="3.5" ry="2.2" fill="#FFA726" transform="rotate(-25 24 86)" />
          <ellipse cx="136" cy="86" rx="3.5" ry="2.2" fill="#FBC02D" transform="rotate(30 136 86)" />
        </g>

        {/* 2. Turmeric Mound and Brass Bowl (0.0s - 1.5s emerge and settle) */}
        <g className={isAnimated ? "animate-haldi-bowl origin-center" : ""}>
          {/* Heaping Turmeric Mound (Pasupu Mudda / Haridra) */}
          <path 
            d="M 42 58 C 44 40, 56 26, 80 24 C 104 26, 116 40, 118 58 Z" 
            fill="url(#turmeric-powder-grad)" 
          />
          {/* Sacred Kumkum / Sindhoor Dot on Turmeric Tip */}
          <ellipse cx="80" cy="30" rx="4.5" ry="5.5" fill="#B71C1C" />
          <circle cx="80" cy="30" r="1.5" fill="#FFF59D" opacity="0.9" />

          {/* Traditional Brass Katora / Ginne (Bowl) */}
          {/* Rim */}
          <ellipse cx="80" cy="58" rx="42" ry="7" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="1" />
          <ellipse cx="80" cy="58" rx="38" ry="5" fill="#E5C88A" />

          {/* Body of the Brass Bowl */}
          <path 
            d="M 38 58 C 40 85, 60 98, 80 98 C 100 98, 120 85, 122 58 Z" 
            fill="url(#brass-bowl-grad)" 
            stroke="#8E6E2D" 
            strokeWidth="1.2" 
          />

          {/* Traditional Deep-Maroon & Gold Engraved Bands on Bowl */}
          <path d="M 48 76 Q 80 88 112 76" stroke="#7B1E2B" strokeWidth="2" strokeLinecap="round" />
          <path d="M 54 84 Q 80 94 106 84" stroke="#8E6E2D" strokeWidth="1" strokeLinecap="round" />

          {/* Base */}
          <ellipse cx="80" cy="98" rx="20" ry="3.5" fill="#8E6E2D" />

          {/* 3. Single Restrained Golden Illumination Sweep (1.5s - 2.0s) */}
          {isAnimated && (
            <g clipPath="url(#bowl-clip)">
              <rect 
                x="20" 
                y="55" 
                width="35" 
                height="45" 
                fill="url(#haldi-sheen-beam)" 
                transform="skewX(-20)"
                className="animate-haldi-sheen" 
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

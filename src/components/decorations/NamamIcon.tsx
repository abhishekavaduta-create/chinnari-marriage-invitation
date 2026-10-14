import React from 'react';

interface NamamIconProps {
  className?: string;
}

export const NamamIcon: React.FC<NamamIconProps> = ({ className = "w-44 h-14 mx-auto" }) => {
  return (
    <svg 
      viewBox="0 0 240 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="శ్రీ లక్ష్మీ నరసింహ స్వామి తిరునామం మరియు శంఖ చక్రములు"
    >
      {/* Delicate connecting garland dots */}
      <path d="M 55 42 Q 88 56 120 42 Q 152 56 185 42" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2,3" opacity="0.6" />
      <circle cx="85" cy="50" r="2" fill="#7B1E2B" />
      <circle cx="155" cy="50" r="2" fill="#7B1E2B" />

      {/* LEFT: SHANKU (Conch) */}
      <g transform="translate(42, 40)">
        <ellipse cx="0" cy="0" rx="14" ry="19" fill="#FFFDF8" stroke="#C6A15B" strokeWidth="1.2" />
        <path d="M 0 -19 C -8 -5, -8 10, 0 19 C 8 10, 8 -5, 0 -19 Z" fill="#FBF3E4" stroke="#9E7D3B" strokeWidth="0.8" />
        {/* Shanku spirals */}
        <path d="M -9 2 Q 0 -6 9 2" stroke="#C6A15B" strokeWidth="1" />
        <path d="M -7 9 Q 0 3 7 9" stroke="#C6A15B" strokeWidth="1" />
        {/* Sacred Flame / Tip */}
        <path d="M 0 -19 L 0 -26 C 2 -23, 4 -21, 0 -19" fill="#E5C88A" stroke="#9E7D3B" strokeWidth="0.8" />
        {/* Base */}
        <ellipse cx="0" cy="19" rx="8" ry="3" fill="#7B1E2B" />
      </g>

      {/* CENTER: THIRUNAMAM (Urdhva Pundra) */}
      <g transform="translate(120, 38)">
        {/* Left White Wing */}
        <path 
          d="M -3 24 C -8 14, -14 -4, -14 -16 C -14 -24, -4 -25, -2 -14 C -1 -6, -2 15, -3 24 Z" 
          fill="#FFFDF8" 
          stroke="#C6A15B" 
          strokeWidth="1.2" 
        />
        {/* Right White Wing */}
        <path 
          d="M 3 24 C 8 14, 14 -4, 14 -16 C 14 -24, 4 -25, 2 -14 C 1 -6, 2 15, 3 24 Z" 
          fill="#FFFDF8" 
          stroke="#C6A15B" 
          strokeWidth="1.2" 
        />
        {/* Center Vermilion Tilak (Srichurnam / Kumkum) */}
        <path 
          d="M 0 -15 C -1.5 0, -1.5 12, 0 20 C 1.5 12, 1.5 0, 0 -15 Z" 
          fill="#7B1E2B" 
        />
        {/* Golden Base */}
        <ellipse cx="0" cy="24" rx="7" ry="2.5" fill="#C6A15B" stroke="#9E7D3B" strokeWidth="0.8" />
        <circle cx="0" cy="-22" r="1.5" fill="#C6A15B" />
      </g>

      {/* RIGHT: CHAKRAM (Discus) */}
      <g transform="translate(198, 40)">
        <circle cx="0" cy="0" r="15" fill="#FFFDF8" stroke="#C6A15B" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="11" stroke="#9E7D3B" strokeWidth="0.8" fill="#FBF3E4" />
        <circle cx="0" cy="0" r="4" fill="#7B1E2B" />
        {/* Discus flames / spokes */}
        <path d="M 0 -15 L 0 -24" stroke="#C6A15B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 0 15 L 0 24" stroke="#C6A15B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M -15 0 L -24 0" stroke="#C6A15B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 15 0 L 24 0" stroke="#C6A15B" strokeWidth="1.2" strokeLinecap="round" />
        {/* Base */}
        <ellipse cx="0" cy="19" rx="8" ry="3" fill="#7B1E2B" />
      </g>
    </svg>
  );
};

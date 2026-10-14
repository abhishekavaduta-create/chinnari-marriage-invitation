import React from 'react';

interface TraditionalDividerProps {
  className?: string;
}

export const TraditionalDivider: React.FC<TraditionalDividerProps> = ({ className = "w-48 h-6 mx-auto my-2" }) => {
  return (
    <svg 
      viewBox="0 0 300 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left ornamental vine */}
      <path 
        d="M 10 15 C 50 15, 70 8, 100 15 C 120 19, 130 15, 138 15" 
        stroke="#C6A15B" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <circle cx="65" cy="18" r="1.5" fill="#7B1E2B" />

      {/* Right ornamental vine */}
      <path 
        d="M 290 15 C 250 15, 230 8, 200 15 C 180 19, 170 15, 162 15" 
        stroke="#C6A15B" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <circle cx="235" cy="18" r="1.5" fill="#7B1E2B" />

      {/* Center Motif (Sacred Kalasam / Lotus Petal) */}
      <g transform="translate(150, 15)">
        <path 
          d="M 0 -10 C 3 -6, 5 -2, 5 3 C 3 5, -3 5, -5 3 C -5 -2, -3 -6, 0 -10 Z" 
          fill="#E5C88A" 
          stroke="#9E7D3B" 
          strokeWidth="0.8" 
        />
        <path 
          d="M -7 -4 C -5 -1, -5 3, -2 4 C -5 5, -8 4, -8 0 Z" 
          fill="#D4AF37" 
          opacity="0.8"
        />
        <path 
          d="M 7 -4 C 5 -1, 5 3, 2 4 C 5 5, 8 4, 8 0 Z" 
          fill="#D4AF37" 
          opacity="0.8"
        />
        <circle cx="0" cy="5" r="1.2" fill="#7B1E2B" />
        <ellipse cx="0" cy="7" rx="6" ry="1.2" fill="#C6A15B" />
      </g>
    </svg>
  );
};

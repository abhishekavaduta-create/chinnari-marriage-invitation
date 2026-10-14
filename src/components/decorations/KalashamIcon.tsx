import React from 'react';

interface KalashamIconProps {
  className?: string;
}

export const KalashamIcon: React.FC<KalashamIconProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mango Leaves (Amra Pallavam) */}
      <path d="M 50 40 C 45 20, 30 15, 25 25 C 25 35, 40 45, 48 50 Z" fill="#4E7852" stroke="#2D4D32" strokeWidth="0.8" />
      <path d="M 50 40 C 55 20, 70 15, 75 25 C 75 35, 60 45, 52 50 Z" fill="#4E7852" stroke="#2D4D32" strokeWidth="0.8" />
      <path d="M 50 35 C 50 15, 45 8, 40 12 C 38 22, 45 35, 48 45 Z" fill="#5F8D63" stroke="#2D4D32" strokeWidth="0.8" />
      <path d="M 50 35 C 50 15, 55 8, 60 12 C 62 22, 55 35, 52 45 Z" fill="#5F8D63" stroke="#2D4D32" strokeWidth="0.8" />
      <path d="M 50 35 C 48 10, 50 5, 50 5 C 50 5, 52 10, 52 35 Z" fill="#6EA073" stroke="#2D4D32" strokeWidth="0.8" />

      {/* Coconut (Nariyal) */}
      <path d="M 50 22 C 40 28, 38 42, 42 50 C 58 50, 60 42, 58 28 C 55 22, 52 20, 50 22 Z" fill="#6B4423" stroke="#42220C" strokeWidth="1" />
      {/* Tilakam on Coconut */}
      <ellipse cx="50" cy="36" rx="3" ry="4" fill="#7B1E2B" />
      <circle cx="50" cy="36" r="1.2" fill="#E5C88A" />

      {/* Kalasham Rim & Neck */}
      <ellipse cx="50" cy="50" rx="14" ry="3.5" fill="#C6A15B" stroke="#8E6E2D" strokeWidth="1" />
      <path d="M 39 50 L 35 56 L 65 56 L 61 50 Z" fill="#DDBB73" stroke="#8E6E2D" strokeWidth="0.8" />

      {/* Pot Body (Kumbham) */}
      <path 
        d="M 35 56 C 20 62, 20 80, 32 86 C 40 90, 60 90, 68 86 C 80 80, 80 62, 65 56 Z" 
        fill="url(#kalasham-gold-grad)" 
        stroke="#8E6E2D" 
        strokeWidth="1.2" 
      />

      {/* Decorative Maroon Rings & Threads */}
      <path d="M 24 72 Q 50 82 76 72" stroke="#7B1E2B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 28 78 Q 50 87 72 78" stroke="#7B1E2B" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Sacred geometric thread hatch */}
      <path d="M 35 66 L 65 82 M 65 66 L 35 82" stroke="#FAF1E2" strokeWidth="0.8" opacity="0.6" strokeDasharray="2,2" />

      {/* Base */}
      <ellipse cx="50" cy="87" rx="14" ry="2.5" fill="#8E6E2D" />

      <defs>
        <linearGradient id="kalasham-gold-grad" x1="20" y1="56" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7EDD4" />
          <stop offset="0.3" stopColor="#E5C88A" />
          <stop offset="0.7" stopColor="#C6A15B" />
          <stop offset="1" stopColor="#9E7D3B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

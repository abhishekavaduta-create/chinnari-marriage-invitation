import React from 'react';

interface SceneTransitionProps {
  label?: string;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({ label }) => {
  return (
    <div className="w-full py-6 flex flex-col items-center justify-center space-y-1.5 opacity-90 select-none" aria-hidden="true">
      <div className="flex items-center space-x-3 w-full max-w-xs px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C6A15B] to-[#C6A15B]/40" />
        <div className="w-2 h-2 rotate-45 border border-[#C6A15B] bg-[#FFF8EF] shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#C6A15B] to-[#C6A15B]/40" />
      </div>
      {label && (
        <span className="text-[15px] sm:text-[16px] uppercase tracking-widest text-[#855F1B] font-black font-telugutitle">
          {label}
        </span>
      )}
    </div>
  );
};

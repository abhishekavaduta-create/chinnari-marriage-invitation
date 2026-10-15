import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 flex w-[calc(100%-24px)] max-w-lg items-center gap-3 border-x border-b border-[#C6A15B] bg-[#FFF8EF]/95 px-3 py-2.5 shadow-xs backdrop-blur-md sm:px-4">
      {/* Invitation title gets the available space; language controls remain grouped. */}
      <div className="min-w-0 flex-1">
        <span className="block truncate font-telugutitle text-[15px] font-extrabold leading-snug tracking-normal text-[#7B1E2B] sm:text-[18px]">
          {t.nav_title}
        </span>
      </div>

      {/* Compact, consistently aligned language selector */}
      <div
        className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#C6A15B] bg-[#FAF1E2] p-1"
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => onLanguageChange('te')}
          className={'min-h-[36px] rounded-full px-3 py-1 text-[15px] font-black transition-colors duration-200 sm:px-3.5 sm:text-[16px] ' + (language === 'te' ? 'bg-[#7B1E2B] text-white shadow-xs' : 'text-[#7B1E2B] hover:text-[#58111D]')}
          aria-pressed={language === 'te'}
        >
          తెలుగు
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange('en')}
          className={'min-h-[36px] rounded-full px-3 py-1 text-[15px] font-black transition-colors duration-200 sm:px-3.5 sm:text-[16px] ' + (language === 'en' ? 'bg-[#7B1E2B] text-white shadow-xs' : 'text-[#7B1E2B] hover:text-[#58111D]')}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </header>
  );
};

import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  petalsEnabled,
  onTogglePetals,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-[calc(100%-24px)] max-w-lg bg-[#FFF8EF] backdrop-blur-md border-x border-b border-[#C6A15B] px-3.5 sm:px-4 py-2.5 flex items-center justify-between shadow-xs transition-colors">
      {/* Title */}
      <div className="flex items-center space-x-1.5 min-w-0 pr-2">
        <span className="text-[17px] sm:text-[19px] font-extrabold tracking-normal leading-snug text-[#7B1E2B] font-telugutitle truncate">
          {t.nav_title}
        </span>
      </div>

      {/* Action Controls */}
      <div className="flex items-center space-x-2 shrink-0">
        {/* Petals Animation Toggle */}
        <button
          type="button"
          onClick={onTogglePetals}
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
            petalsEnabled
              ? 'border-[#C6A15B] bg-[#FAF1E2] text-[#7B1E2B] hover:bg-[#F7EDD4]'
              : 'border-gray-400 bg-white text-gray-600 hover:text-gray-800'
          }`}
          title={t.petals_toggle}
          aria-label={t.petals_toggle}
          aria-pressed={petalsEnabled}
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Language Selector Switch */}
        <div 
          className="inline-flex rounded-full p-1 bg-[#FAF1E2] border border-[#C6A15B]" 
          role="group" 
          aria-label="Language selection"
        >
          <button
            type="button"
            onClick={() => onLanguageChange('te')}
            className={`min-h-[38px] px-3.5 py-1 text-[17px] font-black rounded-full transition-all duration-200 cursor-pointer ${
              language === 'te'
                ? 'bg-[#7B1E2B] text-white shadow-xs'
                : 'text-[#7B1E2B] hover:text-[#58111D]'
            }`}
            aria-pressed={language === 'te'}
          >
            తెలుగు
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            className={`min-h-[38px] px-3.5 py-1 text-[17px] font-black rounded-full transition-all duration-200 cursor-pointer ${
              language === 'en'
                ? 'bg-[#7B1E2B] text-white shadow-xs'
                : 'text-[#7B1E2B] hover:text-[#58111D]'
            }`}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

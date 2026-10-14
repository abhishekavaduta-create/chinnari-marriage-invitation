import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { KalashamIcon } from './decorations/KalashamIcon';
import { TraditionalDivider } from './decorations/TraditionalDivider';
import { Sparkles } from 'lucide-react';

interface BlessingFooterProps {
  language: Language;
}

export const BlessingFooter: React.FC<BlessingFooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="space-y-6 pt-2 pb-24">
      {/* Heartfelt Blessing Card */}
      <section className="rounded-2xl p-5 bg-white gold-border text-center space-y-2.5 shadow-xs">
        <div className="flex justify-center text-[#855F1B]">
          <Sparkles className="w-7 h-7" aria-hidden="true" />
        </div>
        <h3 className="text-lg sm:text-xl font-black text-[#7B1E2B] font-telugutitle leading-normal">
          {t.blessing_quote}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 italic font-medium">
          {t.blessing_note}
        </p>
      </section>

      {/* Traditional Footer with Kalasham & Slokam */}
      <footer className="text-center space-y-3 border-t border-[#E8DCC8] pt-6">
        <div className="flex justify-center">
          <KalashamIcon className="w-12 h-12" />
        </div>

        <div className="text-xs sm:text-sm font-bold text-[#855F1B] tracking-widest uppercase">
          {t.footer_slokam_title}
        </div>

        <TraditionalDivider className="w-40 h-4 mx-auto opacity-80" />

        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium max-w-sm mx-auto">
          {t.footer_message}
        </p>

        <div className="text-xs text-gray-600 pt-2">
          {t.copyright}
        </div>
      </footer>
    </div>
  );
};

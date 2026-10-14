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
      <section className="rounded-2xl p-5 sm:p-6 bg-white gold-border text-center space-y-3 shadow-xs">
        <div className="flex justify-center text-[#855F1B]">
          <Sparkles className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-[22px] sm:text-[26px] font-black text-[#7B1E2B] font-telugutitle leading-normal">
          {t.blessing_quote}
        </h3>
        <p className="text-[17px] sm:text-[19px] text-gray-800 italic font-semibold">
          {t.blessing_note}
        </p>
      </section>

      {/* Traditional Footer with Kalasham & Slokam */}
      <footer className="text-center space-y-3.5 border-t border-[#E8DCC8] pt-6">
        <div className="flex justify-center">
          <KalashamIcon className="w-14 h-14" />
        </div>

        <div className="text-[18px] sm:text-[20px] font-black text-[#855F1B] tracking-widest uppercase font-telugutitle">
          {t.footer_slokam_title}
        </div>

        <TraditionalDivider className="w-44 h-5 mx-auto opacity-80" />

        <p className="text-[16px] sm:text-[18px] text-gray-800 leading-relaxed font-medium max-w-sm mx-auto">
          {t.footer_message}
        </p>

        <div className="text-[15px] text-gray-600 pt-2 font-medium">
          {t.copyright}
        </div>
      </footer>
    </div>
  );
};

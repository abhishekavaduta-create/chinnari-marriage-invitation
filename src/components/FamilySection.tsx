import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { Users, Heart } from 'lucide-react';

interface FamilySectionProps {
  language: Language;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="rounded-2xl p-4 bg-white gold-border shadow-xs space-y-4">
      {/* Primary Family Hosts (Peddabomma Sunitha & Peddabomma Rajesh - Pinni & Babai) */}
      <div className="rounded-xl p-4 bg-[#FFF9F2] border border-[#F0E2D0] space-y-3">
        <div className="flex items-center space-x-2 text-[#7B1E2B]">
          <Users className="w-4 h-4 text-[#855F1B] shrink-0" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#855F1B]">
            {t.label_primary_hosts}
          </span>
        </div>

        {/* Combined Host Title & Relationship */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-[#7B1E2B] font-telugutitle leading-normal">
            {t.host_names}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 italic font-medium mt-0.5">
            {t.host_relation}
          </p>
        </div>

        {/* Explicit Individual Relationship Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="px-3.5 py-2.5 rounded-xl bg-white/95 border border-[#E8DCC8] shadow-2xs flex items-center space-x-2">
            <Heart className="w-4 h-4 text-[#7B1E2B] shrink-0 fill-current opacity-90" aria-hidden="true" />
            <span className="text-sm sm:text-base font-bold text-[#7B1E2B] font-telugutitle leading-normal">
              {t.host_pinni_label}
            </span>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-white/95 border border-[#E8DCC8] shadow-2xs flex items-center space-x-2">
            <Heart className="w-4 h-4 text-[#7B1E2B] shrink-0 fill-current opacity-90" aria-hidden="true" />
            <span className="text-sm sm:text-base font-bold text-[#7B1E2B] font-telugutitle leading-normal">
              {t.host_babai_label}
            </span>
          </div>
        </div>

        {/* Formal Invitation Prose */}
        <p className="text-sm sm:text-base text-[#2D1518] leading-relaxed pt-2 border-t border-[#F0E2D0]/80">
          {t.host_invitation_text}
        </p>
      </div>

      {/* Parents Lineage Details */}
      <div className="grid grid-cols-1 gap-2.5 text-gray-800">
        <div className="p-3 rounded-xl bg-[#FFF8EF] border border-[#E8DCC8]">
          <span className="text-xs sm:text-sm font-extrabold text-[#7B1E2B] block mb-0.5">
            {t.label_bride_parents}
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900 block leading-snug">
            {t.bride_parents_names}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-[#FFF8EF] border border-[#E8DCC8]">
          <span className="text-xs sm:text-sm font-extrabold text-[#7B1E2B] block mb-0.5">
            {t.label_groom_parents}
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900 block leading-snug">
            {t.groom_parent_name}
          </span>
        </div>
      </div>
    </section>
  );
};

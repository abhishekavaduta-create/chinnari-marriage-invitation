import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { extendedFamilyMembers } from '../data/weddingData';
import { Users, Heart, Sparkles, Flower2 } from 'lucide-react';
import { KalashamIcon } from './decorations/KalashamIcon';

interface FamilySectionProps {
  language: Language;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="rounded-2xl p-4 sm:p-5 bg-white gold-border shadow-xs space-y-5">
      {/* ================= 1. PRIMARY FAMILY HOSTS ================= */}
      <div className="rounded-xl p-4 sm:p-5 bg-[#FFF9F2] border border-[#F0E2D0] space-y-3.5">
        <div className="flex items-center space-x-2 text-[#7B1E2B]">
          <Users className="w-5 h-5 text-[#855F1B] shrink-0" aria-hidden="true" />
          <h2 className="text-[20px] sm:text-[24px] font-black uppercase tracking-wider text-[#855F1B] font-telugutitle">
            {t.label_primary_hosts}
          </h2>
        </div>

        {/* Combined Host Title & Relationship: Peddabomma Rajesh & Peddabomma Sunitha */}
        <div>
          <h3 className="text-[24px] sm:text-[28px] font-black text-[#7B1E2B] font-telugutitle leading-normal">
            {t.host_names}
          </h3>
          <p className="text-[16px] sm:text-[18px] text-gray-700 italic font-semibold mt-0.5">
            {t.host_relation}
          </p>
        </div>

        {/* Individual Relationship Labels: Babai first, then Pinni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="px-4 py-3 rounded-xl bg-white/95 border border-[#E8DCC8] shadow-2xs flex items-center space-x-2.5">
            <Heart className="w-5 h-5 text-[#7B1E2B] shrink-0 fill-current opacity-90" aria-hidden="true" />
            <span className="text-[17px] sm:text-[19px] font-bold text-[#7B1E2B] font-telugutitle leading-normal">
              {t.host_babai_label}
            </span>
          </div>

          <div className="px-4 py-3 rounded-xl bg-white/95 border border-[#E8DCC8] shadow-2xs flex items-center space-x-2.5">
            <Heart className="w-5 h-5 text-[#7B1E2B] shrink-0 fill-current opacity-90" aria-hidden="true" />
            <span className="text-[17px] sm:text-[19px] font-bold text-[#7B1E2B] font-telugutitle leading-normal">
              {t.host_pinni_label}
            </span>
          </div>
        </div>

        {/* Formal Invitation Prose (18px-20px comfortable reading size) */}
        <p className="text-[18px] sm:text-[20px] text-[#2D1518] leading-relaxed pt-2.5 border-t border-[#F0E2D0]/80 font-medium">
          {t.host_invitation_text}
        </p>
      </div>

      {/* ================= 2. DEDICATED KANYADANAM SECTION ================= */}
      <div className="rounded-xl p-4 sm:p-5 gold-gradient-bg border-2 border-[#C6A15B] text-center space-y-2.5 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-center space-x-2 text-[#855F1B]">
          <KalashamIcon className="w-6 h-6 shrink-0" />
          <span className="text-[19px] sm:text-[22px] font-black uppercase tracking-wider text-[#855F1B] font-telugutitle">
            {t.label_kanyadanam_by}
          </span>
        </div>

        <div>
          <h3 className="text-[24px] sm:text-[28px] font-black text-[#7B1E2B] font-telugutitle leading-snug">
            {t.kanyadanam_names}
          </h3>
          <p className="text-[16px] sm:text-[18px] text-gray-700 italic font-semibold mt-0.5">
            {t.kanyadanam_relation}
          </p>
        </div>

        <p className="text-[16px] sm:text-[18px] text-gray-700 italic font-medium max-w-sm mx-auto pt-0.5">
          {t.kanyadanam_desc}
        </p>
      </div>

      {/* ================= 3. PARENTS LINEAGE DETAILS ================= */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-[#7B1E2B] px-1">
          <Sparkles className="w-5 h-5 text-[#855F1B] shrink-0" aria-hidden="true" />
          <h3 className="text-[19px] sm:text-[22px] font-black text-[#7B1E2B] font-telugutitle">
            {t.label_parents_section}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 text-gray-800">
          {/* Bride's Parents: Preserved exactly */}
          <div className="p-4 rounded-xl bg-[#FFF8EF] border border-[#E8DCC8] space-y-2">
            <span className="text-[16px] sm:text-[17px] font-black text-[#7B1E2B] block uppercase tracking-wide">
              {t.label_bride_parents}
            </span>
            <span className="text-[19px] sm:text-[22px] font-black text-gray-950 block font-telugutitle leading-snug">
              {t.bride_parents_names}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#E8DCC8]/70 text-[16px] sm:text-[17px]">
              <div>
                <span className="font-bold text-gray-600 mr-1.5">{t.bride_father_label}</span>
                <span className="font-extrabold text-gray-900">{t.bride_father_name}</span>
              </div>
              <div>
                <span className="font-bold text-gray-600 mr-1.5">{t.bride_mother_label}</span>
                <span className="font-extrabold text-gray-900">{t.bride_mother_name}</span>
              </div>
            </div>
          </div>

          {/* Groom's Parents: Punna Satyanarayana & Punna Vajramma */}
          <div className="p-4 rounded-xl bg-[#FFF8EF] border border-[#E8DCC8] space-y-2">
            <span className="text-[16px] sm:text-[17px] font-black text-[#7B1E2B] block uppercase tracking-wide">
              {t.label_groom_parents}
            </span>
            <span className="text-[19px] sm:text-[22px] font-black text-gray-950 block font-telugutitle leading-snug">
              {t.groom_parent_name}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#E8DCC8]/70 text-[16px] sm:text-[17px]">
              <div>
                <span className="font-bold text-gray-600 mr-1.5">{t.groom_father_label}</span>
                <span className="font-extrabold text-gray-900">{t.groom_father_name}</span>
              </div>
              <div>
                <span className="font-bold text-gray-600 mr-1.5">{t.groom_mother_label}</span>
                <span className="font-extrabold text-gray-900">{t.groom_mother_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4. WITH BEST WISHES FROM ================= */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center space-x-2 text-[#7B1E2B] px-1">
          <Flower2 className="w-5 h-5 text-[#855F1B] shrink-0" aria-hidden="true" />
          <h3 className="text-[19px] sm:text-[22px] font-black text-[#855F1B] uppercase tracking-wide font-telugutitle">
            {t.label_extended_family}
          </h3>
        </div>

        {/* Organized Clean Grid of All 6 Extended Family Pairs — Names Only, No Subtitles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {extendedFamilyMembers.map((member) => (
            <div
              key={member.id}
              className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8DCC8] shadow-2xs text-center flex items-center justify-center min-h-[64px]"
            >
              <span className="text-[17px] sm:text-[19px] font-black text-[#7B1E2B] font-telugutitle leading-snug">
                {member.names[language]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { DEITY_IMAGE_URL } from '../data/weddingData';
import { NamamIcon } from './decorations/NamamIcon';
import { TraditionalDivider } from './decorations/TraditionalDivider';

interface DevotionalHeroProps {
  language: Language;
}

export const DevotionalHero: React.FC<DevotionalHeroProps> = ({ language }) => {
  const t = translations[language];
  const [imageError, setImageError] = useState(false);
  const [isOpeningAnimated, setIsOpeningAnimated] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsOpeningAnimated(false);
      setShowPetals(false);
      return;
    }

    // Trigger subtle cinematic opening animation once when invitation opens
    setIsOpeningAnimated(true);
    setShowPetals(true);

    // Cleanly dismiss opening overlay petals after 3.8s so artwork remains completely still and sharp
    const timer = setTimeout(() => {
      setShowPetals(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="rounded-2xl overflow-hidden gold-border gold-glow bg-white p-3.5 sm:p-4 text-center transition-transform shadow-xs">
      {/* Devotional Focal Point: Sri Lakshmi Narasimha Swamy Wedding Invitation Artwork */}
      <div 
        className={`relative w-full aspect-[1.3/1] rounded-xl overflow-hidden border border-[#E8DCC8] shadow-inner mb-3 bg-[#FFFDF8] ${
          isOpeningAnimated ? 'animate-invitation-reveal' : ''
        }`}
      >
        {!imageError ? (
          <>
            <img
              src={DEITY_IMAGE_URL}
              alt="శ్రీ లక్ష్మీ నరసింహ స్వామి వారి దివ్య ఆశీస్సులు"
              className="absolute inset-0 w-full h-full object-cover object-top block select-none rounded-xl"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />

            {/* Subtle Falling Flower Petals Overlay (Active during 0.5s - 3.5s opening reveal) */}
            {isOpeningAnimated && showPetals && (
              <div 
                className="absolute inset-0 pointer-events-none overflow-hidden z-20"
                aria-hidden="true"
              >
                {/* 4 subtle ceremonial rose / marigold petals drifting down */}
                <svg className="absolute w-5 h-6 text-[#C2185B] animate-opening-petal-1 opacity-0 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 6 4 11 4 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-4-10-8-14z" />
                </svg>
                <svg className="absolute w-4 h-5 text-[#FFB300] animate-opening-petal-2 opacity-0 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 6 5 10 5 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-5-3-9-7-13z" />
                </svg>
                <svg className="absolute w-4 h-5 text-[#880E4F] animate-opening-petal-3 opacity-0 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C8.5 7 6 11 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2.5-8-6-12z" />
                </svg>
                <svg className="absolute w-5 h-6 text-[#FFA000] animate-opening-petal-4 opacity-0 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 6 4 11 4 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-4-10-8-14z" />
                </svg>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 py-8 px-4 flex flex-col items-center justify-center space-y-2 bg-[#FAF1E2] text-[#7B1E2B]">
            <NamamIcon className="w-48 h-16" />
            <span className="text-base font-bold font-telugutitle text-[#7B1E2B]">
              శ్రీ లక్ష్మీ నరసింహ స్వామి
            </span>
          </div>
        )}
      </div>

      {/* Sacred Vaishnava Emblem Motif */}
      <NamamIcon className="w-36 h-10 mx-auto my-1" />

      {/* Devotional Invocations */}
      <h1 className="text-[26px] sm:text-[32px] font-black text-[#7B1E2B] font-telugutitle leading-snug mt-2 tracking-tight">
        {t.hero_invocation}
      </h1>

      <p className="text-[17px] sm:text-[18px] font-bold text-[#855F1B] tracking-wide my-2">
        {t.hero_slokam}
      </p>

      <TraditionalDivider className="w-44 h-5 mx-auto my-2.5 opacity-90" />

      <p className="text-[18px] sm:text-[20px] text-[#2D1518] font-medium max-w-sm mx-auto leading-relaxed">
        {t.invitation_lead}
      </p>

      {/* Prominent Couple Typography */}
      <div className="my-5 py-1 space-y-1.5">
        <div className="text-[28px] sm:text-[34px] font-black text-[#7B1E2B] tracking-wide font-telugutitle leading-normal">
          {t.bride_name}
        </div>
        <div className="text-[20px] sm:text-[24px] font-extrabold text-[#855F1B]">&amp;</div>
        <div className="text-[28px] sm:text-[34px] font-black text-[#7B1E2B] tracking-wide font-telugutitle leading-normal">
          {t.groom_name}
        </div>
        <div className="text-[18px] sm:text-[19px] font-semibold text-gray-700 italic tracking-wider pt-1">
          {t.ceremony_sub}
        </div>
      </div>

      {/* Auspicious Muhurtham Banner */}
      <div className="rounded-xl gold-gradient-bg border-2 border-[#C6A15B] p-4 sm:p-5 my-3.5 shadow-xs">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#7B1E2B] text-[#F7EDD4] text-[17px] font-extrabold uppercase tracking-wider mb-2">
          {t.badge_muhurtham}
        </span>
        <div className="text-[22px] sm:text-[26px] font-black text-[#7B1E2B] font-telugutitle leading-snug">
          {t.hero_muhurtham_date}
        </div>
        <div className="text-[18px] sm:text-[19px] text-[#3D2214] mt-1.5 font-bold">
          {t.hero_muhurtham_lagna}
        </div>
      </div>

      {/* Jump Anchor Button to Muhurtham and Event Details */}
      <a
        href="#events-section"
        className="inline-flex items-center justify-center space-x-2 w-full min-h-[50px] py-3.5 px-4 rounded-xl maroon-gradient-bg text-white font-bold text-[18px] sm:text-[18px] shadow-sm hover:brightness-110 active:scale-[0.99] transition cursor-pointer"
      >
        <span>{t.cta_view_details}</span>
      </a>
    </section>
  );
};

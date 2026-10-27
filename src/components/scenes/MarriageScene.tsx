import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../../types/wedding';
import { translations } from '../../data/translations';
import { MandapamIllustration } from '../decorations/MandapamIllustration';
import { CountdownTimer } from '../CountdownTimer';
import { downloadIcsFile } from '../../utils/calendar';
import { weddingEvents } from '../../data/weddingData';
import { MapPin, Navigation, Calendar, Check, Bell } from 'lucide-react';

interface MarriageSceneProps {
  language: Language;
}

export const MarriageScene: React.FC<MarriageSceneProps> = ({ language }) => {
  const t = translations[language];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const eventData = weddingEvents.find((e) => e.id === 'marriage')!;

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on first viewport entry; never replay on scroll
        }
      },
      { 
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCalendar = () => {
    downloadIcsFile(eventData.calendarData, 'marriage-chinnari-marriage-invitation');
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="marriage-scene"
      className="min-h-[100svh] flex flex-col justify-center py-6 sm:py-8 w-full"
    >
      <div className="w-full rounded-2xl p-4 sm:p-5 bg-white gold-border shadow-lg space-y-4 relative overflow-hidden">
        {/* Subtle Background Red/Gold Aura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFF9F2] pointer-events-none" />

        {/* Chapter Header */}
        <div className="flex items-center justify-between border-b border-[#F0E2D0] pb-2.5 relative z-10">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" role="img" aria-label="Deepam">🪔</span>
            <span className="text-[17px] sm:text-[18px] uppercase tracking-wide text-[#7B1E2B] font-black font-telugutitle">
              02 • {t.event_marriage_tag}
            </span>
          </div>
          <span className="text-[16px] sm:text-[17px] font-black px-3.5 py-1 rounded-full bg-red-100 text-[#7B1E2B]">
            {t.event_marriage_tag}
          </span>
        </div>

        {/* ================= 1, 2, 3: MANDAPAM AS DOMINANT VISUAL FOCAL POINT ================= */}
        {/* 0.0-0.8s emerge from glow, 0.8-1.6s floral pillars, 1.3-2.0s sequential lamp illumination */}
        <div className="py-2 text-center relative z-10">
          <MandapamIllustration 
            isAnimated={isVisible} 
            className="w-full h-auto max-h-60 sm:max-h-72 mx-auto" 
          />

          {/* ================= 4. REVEAL MARRIAGE HEADING (1.8s - 2.5s) ================= */}
          <div className={isVisible ? "animate-marriage-heading" : "opacity-0"}>
            <h2 className="text-[24px] sm:text-[28px] font-black text-[#7B1E2B] font-telugutitle mt-3 leading-normal">
              {t.event_marriage_title}
            </h2>
            <p className="text-[17px] sm:text-[18px] text-gray-700 font-semibold italic flex items-center justify-center gap-1.5 mt-1.5">
              <Bell className="w-5 h-5 text-[#855F1B] shrink-0" aria-hidden="true" />
              <span>
                {language === 'te'
                  ? 'మాంగల్య ధారణ • జీలకర్ర బెల్లం • పవిత్ర ప్రమాణాలు'
                  : 'Mangalya Dharana • Jeelakarra Bellam • Sacred Vows'}
              </span>
            </p>
          </div>
        </div>

        {/* ================= 5. EMPHASIZE MUHURTHAM TIME: 9:58 AM (2.2s - 3.0s) ================= */}
        <div className={isVisible ? "animate-marriage-muhurtham relative z-10" : "opacity-0 relative z-10"}>
          <div className="rounded-xl gold-gradient-bg border-2 border-[#C6A15B] p-4 sm:p-5 text-center shadow-xs">
            <div className="text-[17px] font-extrabold text-[#855F1B] uppercase tracking-wider mb-1.5">
              {t.label_auspicious_time}
            </div>
            <div className="text-[20px] sm:text-[24px] font-black text-[#7B1E2B] font-telugutitle leading-snug">
              {t.marriage_date}
            </div>
            <div className="text-[26px] sm:text-[32px] font-black text-[#7B1E2B] mt-1.5 tracking-wide">
              {t.marriage_time}
            </div>
            <div className="text-[17px] sm:text-[18px] text-[#3D2214] mt-1 font-bold">
              {t.marriage_lagna}
            </div>
          </div>
        </div>

        {/* ================= 4 & 5. TEMPLE VENUE, COUNTDOWN & ACTIONS (2.4s - 3.0s) ================= */}
        <div className={isVisible ? "animate-marriage-actions space-y-4 relative z-10" : "opacity-0 relative z-10"}>
          {/* Temple Venue Details */}
          <div className="rounded-xl bg-[#FFFDF8] border border-[#F0E2D0] p-4 flex items-start space-x-3 text-gray-800">
            <div className="w-9 h-9 rounded-full bg-[#FAF1E2] text-[#7B1E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCC8]">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="font-black text-gray-950 text-[20px] sm:text-[24px] font-telugutitle leading-snug">
                {t.marriage_venue_name}
              </div>
              <div className="text-[17px] sm:text-[18px] text-gray-800 leading-relaxed font-medium mt-1">
                {t.marriage_venue_address}
              </div>
            </div>
          </div>

          {/* Live Countdown Timer to Sumuhurtham */}
          <CountdownTimer language={language} />

          {/* Action Buttons: Verified Temple Directions & Save Muhurtham */}
          <div className="pt-1 flex flex-col space-y-2.5">
            <a
              href={eventData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] py-3.5 px-4 rounded-xl maroon-gradient-bg text-white text-[17px] sm:text-[18px] font-bold flex items-center justify-center space-x-2 shadow-sm hover:brightness-110 active:scale-[0.99] transition cursor-pointer"
            >
              <Navigation className="w-5 h-5" aria-hidden="true" />
              <span>{t.btn_marriage_directions}</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="w-full min-h-[50px] py-3 px-4 rounded-xl border-2 border-[#C6A15B] bg-[#FFFDF8] text-[#7B1E2B] text-[17px] sm:text-[18px] font-extrabold flex items-center justify-center space-x-2 hover:bg-[#FAF1E2] active:scale-[0.99] transition cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-black">{t.calendar_saved}</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 text-[#855F1B]" aria-hidden="true" />
                  <span>{t.btn_save_muhurtham}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

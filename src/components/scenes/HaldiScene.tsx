import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../../types/wedding';
import { translations } from '../../data/translations';
import { TurmericBowlIcon } from '../decorations/TurmericBowlIcon';
import { downloadIcsFile } from '../../utils/calendar';
import { weddingEvents } from '../../data/weddingData';
import { MapPin, Clock, Navigation, Calendar, Check, Sun } from 'lucide-react';

interface HaldiSceneProps {
  language: Language;
}

export const HaldiScene: React.FC<HaldiSceneProps> = ({ language }) => {
  const t = translations[language];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const eventData = weddingEvents.find((e) => e.id === 'haldi')!;

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
          observer.disconnect(); // Trigger only once upon viewing; never replay on scroll
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
    downloadIcsFile(eventData.calendarData, 'haldi-chinnari-marriage-invitation');
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="haldi-scene"
      className="min-h-[100svh] flex flex-col justify-center py-6 sm:py-8 w-full"
    >
      <div className="w-full rounded-2xl p-4 sm:p-5 bg-white gold-border shadow-md space-y-4 relative overflow-hidden">
        {/* Subtle Warm Saffron-Gold Gradient Ambient Corner Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6]/50 via-transparent to-[#FFF3CD]/30 pointer-events-none" />

        {/* Chapter Header */}
        <div className="flex items-center justify-between border-b border-[#F0E2D0] pb-2.5 relative z-10">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" role="img" aria-label="Flower">🌼</span>
            <span className="text-[17px] sm:text-[18px] uppercase tracking-wide text-[#925400] font-black font-telugutitle">
              02 • {t.event_haldi_tag}
            </span>
          </div>
          <span className="text-[16px] sm:text-[17px] font-black px-3.5 py-1 rounded-full bg-amber-100 text-amber-950">
            {t.event_haldi_tag}
          </span>
        </div>

        {/* ================= CINEMATIC TURMERIC BOWL REVEAL ================= */}
        {/* Stage emerge (0.0-0.7s), Bowl settles & florals reveal (0.7-1.5s), Golden sheen (1.5-2.0s) */}
        <div className="py-2 text-center relative z-10">
          <TurmericBowlIcon 
            isAnimated={isVisible} 
            className="w-44 h-28 mx-auto" 
          />

          {/* Heading & Supporting Text: Restrained fade-in as bowl settles (1.8s - 2.3s) */}
          <div className={isVisible ? "animate-haldi-heading" : "opacity-0"}>
            <h2 className="text-[24px] sm:text-[28px] font-black text-[#7B1E2B] font-telugutitle mt-3 leading-normal">
              {t.event_haldi_title}
            </h2>
            <p className="text-[17px] sm:text-[18px] text-amber-950 font-semibold italic flex items-center justify-center gap-1.5 mt-1.5">
              <Sun className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <span>
                {language === 'te' 
                  ? 'పసుపు కొమ్ముల పూజ • మంగళ స్నానాలు' 
                  : 'Sacred Turmeric Rituals & Mangala Snanam'}
              </span>
            </p>
          </div>
        </div>

        {/* ================= EVENT DETAILS & ACTIONS: SETTLE & HOLD ================= */}
        {/* Fade in at 2.0s - 2.5s and holds completely stationary and crisp */}
        <div className={isVisible ? "animate-haldi-details space-y-4 relative z-10" : "opacity-0 relative z-10"}>
          {/* Date & Time Box */}
          <div className="rounded-xl bg-[#FFFDF8] border border-[#F0E2D0] p-4 space-y-3">
            <div className="flex items-start space-x-3 text-gray-800">
              <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="font-black text-[#7B1E2B] text-[20px] sm:text-[24px] font-telugutitle leading-snug">
                  {t.haldi_date}
                </div>
                <div className="text-[18px] sm:text-[19px] font-extrabold text-gray-900 mt-0.5">
                  {t.haldi_time}
                </div>
              </div>
            </div>

            {/* Family Residence in Aliyabad */}
            <div className="flex items-start space-x-3 text-gray-800 pt-3 border-t border-[#F0E2D0]/80">
              <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="font-black text-gray-950 text-[20px] sm:text-[24px] font-telugutitle leading-snug">
                  {t.haldi_venue_name}
                </div>
                <div className="text-[17px] sm:text-[18px] text-gray-800 leading-relaxed font-medium mt-1">
                  {t.haldi_venue_address}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: Verified Map Deep Link & Calendar Action */}
          <div className="pt-1 flex flex-col space-y-2.5">
            <a
              href={eventData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] py-3.5 px-4 rounded-xl maroon-gradient-bg text-white text-[17px] sm:text-[18px] font-bold flex items-center justify-center space-x-2 shadow-sm hover:brightness-110 active:scale-[0.99] transition cursor-pointer"
            >
              <Navigation className="w-5 h-5" aria-hidden="true" />
              <span>{t.btn_get_directions}</span>
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
                  <span>{t.btn_set_reminder}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

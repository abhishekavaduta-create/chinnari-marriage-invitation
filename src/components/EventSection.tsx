import React, { useState } from 'react';
import { WeddingEvent, Language } from '../types/wedding';
import { translations, TranslationKey } from '../data/translations';
import { downloadIcsFile } from '../utils/calendar';
import { CountdownTimer } from './CountdownTimer';
import { MandapamIllustration } from './decorations/MandapamIllustration';
import { MANDAPAM_IMAGE_URL } from '../data/weddingData';
import { MapPin, Calendar, Clock, Navigation, Check } from 'lucide-react';

interface EventSectionProps {
  event: WeddingEvent;
  language: Language;
}

export const EventSection: React.FC<EventSectionProps> = ({ event, language }) => {
  const t = translations[language];
  const [downloaded, setDownloaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const title = t[event.titleKey as TranslationKey] || '';
  const tag = t[event.tagKey as TranslationKey] || '';
  const date = t[event.dateKey as TranslationKey] || '';
  const time = t[event.timeKey as TranslationKey] || '';
  const venueName = t[event.venueNameKey as TranslationKey] || '';
  const venueAddress = t[event.venueAddressKey as TranslationKey] || '';
  const lagna = event.lagnaKey ? t[event.lagnaKey as TranslationKey] : undefined;

  const handleDownloadCalendar = () => {
    downloadIcsFile(event.calendarData, `${event.id}-chinnari-marriage-invitation`);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const getTagColorClass = () => {
    switch (event.id) {
      case 'engagement':
        return 'bg-[#F7EDD4] text-[#9E7D3B]';
      case 'haldi':
        return 'bg-amber-100 text-amber-900';
      case 'marriage':
        return 'bg-red-100 text-[#7B1E2B] font-bold';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="rounded-2xl p-4 bg-white gold-border shadow-xs space-y-3.5 transition-shadow hover:shadow-md">
      {/* Event Header & Tag */}
      <div className="flex items-center justify-between border-b border-[#F0E2D0] pb-2.5">
        <div className="flex items-center space-x-2">
          <span className="text-xl" role="img" aria-hidden="true">{event.icon}</span>
          <h2 className="text-lg sm:text-xl font-bold text-[#7B1E2B] font-telugutitle leading-tight">
            {title}
          </h2>
        </div>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getTagColorClass()}`}>
          {tag}
        </span>
      </div>

      {/* Marriage Mandapam Visual Highlight for Kalyana Mahotsavam */}
      {event.id === 'marriage' && (
        <div className="rounded-xl overflow-hidden border border-[#E8DCC8] shadow-inner bg-[#FFFDF8]">
          {!imageError ? (
            <img
              src={MANDAPAM_IMAGE_URL}
              alt="కల్యాణ మండపం"
              className="w-full h-auto object-cover max-h-48"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="p-2 bg-[#FAF1E2]">
              <MandapamIllustration />
            </div>
          )}
        </div>
      )}

      {/* Auspicious Muhurtham Spotlight for Marriage */}
      {event.id === 'marriage' && (
        <div className="rounded-xl gold-gradient-bg border border-[#C6A15B] p-3 text-center shadow-2xs">
          <div className="text-[11px] font-bold text-[#9E7D3B] uppercase tracking-wider mb-0.5">
            {t.label_auspicious_time}
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#7B1E2B] font-telugutitle">
            {date}
          </div>
          <div className="text-sm font-bold text-[#7B1E2B]">
            {time}
          </div>
          {lagna && (
            <div className="text-xs text-gray-700 mt-0.5 font-medium">
              {lagna}
            </div>
          )}
        </div>
      )}

      {/* Date & Time (for non-marriage events) */}
      {event.id !== 'marriage' && (
        <div className="flex items-start space-x-2.5 text-sm text-gray-800">
          <div className="w-7 h-7 rounded-full bg-[#FAF1E2] text-[#7B1E2B] flex items-center justify-center shrink-0 mt-0.5">
            <Clock className="w-4 h-4" aria-hidden="true" />
          </div>
          <div>
            <div className="font-bold text-[#7B1E2B] text-sm sm:text-base font-telugutitle">
              {date}
            </div>
            <div className="text-xs text-gray-600 font-medium">
              {time}
            </div>
          </div>
        </div>
      )}

      {/* Venue Details */}
      <div className="flex items-start space-x-2.5 text-sm text-gray-800 pt-0.5">
        <div className="w-7 h-7 rounded-full bg-[#FAF1E2] text-[#7B1E2B] flex items-center justify-center shrink-0 mt-0.5">
          <MapPin className="w-4 h-4" aria-hidden="true" />
        </div>
        <div>
          <div className="font-bold text-gray-900 text-sm sm:text-base font-telugutitle">
            {venueName}
          </div>
          <div className="text-xs text-gray-700 leading-relaxed font-normal">
            {venueAddress}
          </div>
        </div>
      </div>

      {/* Marriage Countdown */}
      {event.id === 'marriage' && (
        <CountdownTimer language={language} />
      )}

      {/* Action Buttons: Directions & Calendar Sync */}
      <div className="pt-2 flex flex-col space-y-2">
        {/* Directions button */}
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[48px] py-2.5 px-4 rounded-xl maroon-gradient-bg text-white text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 shadow-xs hover:brightness-110 active:scale-[0.99] transition cursor-pointer"
        >
          <Navigation className="w-4 h-4" aria-hidden="true" />
          <span>
            {event.id === 'marriage' ? t.btn_marriage_directions : t.btn_get_directions}
          </span>
        </a>

        {/* Add to Calendar button */}
        <button
          type="button"
          onClick={handleDownloadCalendar}
          className="w-full min-h-[44px] py-2 px-4 rounded-xl border border-[#C6A15B] bg-[#FFFDF8] text-[#7B1E2B] text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5 hover:bg-[#FAF1E2] active:scale-[0.99] transition cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span className="text-emerald-700 font-bold">{t.calendar_saved}</span>
            </>
          ) : (
            <>
              <Calendar className="w-4 h-4 text-[#9E7D3B]" aria-hidden="true" />
              <span>
                {event.id === 'marriage'
                  ? t.btn_save_muhurtham
                  : event.id === 'haldi'
                  ? t.btn_set_reminder
                  : t.btn_add_calendar}
              </span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

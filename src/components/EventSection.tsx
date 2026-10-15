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
          <span className="text-2xl" role="img" aria-hidden="true">{event.icon}</span>
          <h2 className="text-[20px] sm:text-[24px] font-black text-[#7B1E2B] font-telugutitle leading-tight">
            {title}
          </h2>
        </div>
        <span className={`text-[17px] sm:text-[18px] font-black px-3.5 py-1 rounded-full ${getTagColorClass()}`}>
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
        <div className="rounded-xl gold-gradient-bg border-2 border-[#C6A15B] p-4 text-center shadow-2xs">
          <div className="text-[18px] font-extrabold text-[#9E7D3B] uppercase tracking-wider mb-1">
            {t.label_auspicious_time}
          </div>
          <div className="text-[20px] sm:text-[24px] font-black text-[#7B1E2B] font-telugutitle">
            {date}
          </div>
          <div className="text-[22px] sm:text-[26px] font-black text-[#7B1E2B]">
            {time}
          </div>
          {lagna && (
            <div className="text-[18px] sm:text-[18px] text-gray-800 mt-1 font-bold">
              {lagna}
            </div>
          )}
        </div>
      )}

      {/* Date & Time (for non-marriage events) */}
      {event.id !== 'marriage' && (
        <div className="flex items-start space-x-3 text-gray-800">
          <div className="w-9 h-9 rounded-full bg-[#FAF1E2] text-[#7B1E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCC8]">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <div className="font-black text-[#7B1E2B] text-[20px] sm:text-[24px] font-telugutitle">
              {date}
            </div>
            <div className="text-[18px] sm:text-[19px] font-bold text-gray-800">
              {time}
            </div>
          </div>
        </div>
      )}

      {/* Venue Details */}
      <div className="flex items-start space-x-3 text-gray-800 pt-1">
        <div className="w-9 h-9 rounded-full bg-[#FAF1E2] text-[#7B1E2B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCC8]">
          <MapPin className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <div className="font-black text-gray-950 text-[20px] sm:text-[24px] font-telugutitle">
            {venueName}
          </div>
          <div className="text-[18px] sm:text-[18px] text-gray-800 leading-relaxed font-medium mt-0.5">
            {venueAddress}
          </div>
        </div>
      </div>

      {/* Marriage Countdown */}
      {event.id === 'marriage' && (
        <CountdownTimer language={language} />
      )}

      {/* Action Buttons: Directions & Calendar Sync */}
      <div className="pt-2 flex flex-col space-y-2.5">
        {/* Directions button */}
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[50px] py-3 px-4 rounded-xl maroon-gradient-bg text-white text-[18px] sm:text-[18px] font-bold flex items-center justify-center space-x-2 shadow-xs hover:brightness-110 active:scale-[0.99] transition cursor-pointer"
        >
          <Navigation className="w-5 h-5" aria-hidden="true" />
          <span>
            {event.id === 'marriage' ? t.btn_marriage_directions : t.btn_get_directions}
          </span>
        </a>

        {/* Add to Calendar button */}
        <button
          type="button"
          onClick={handleDownloadCalendar}
          className="w-full min-h-[50px] py-3 px-4 rounded-xl border-2 border-[#C6A15B] bg-[#FFFDF8] text-[#7B1E2B] text-[18px] sm:text-[18px] font-extrabold flex items-center justify-center space-x-2 hover:bg-[#FAF1E2] active:scale-[0.99] transition cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span className="text-emerald-700 font-black">{t.calendar_saved}</span>
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5 text-[#9E7D3B]" aria-hidden="true" />
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

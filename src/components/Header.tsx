import React from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { BackgroundMusicControls } from './BackgroundMusicPlayer';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  musicControls: BackgroundMusicControls | null;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  musicControls,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 relative flex w-[calc(100%-24px)] max-w-lg items-center gap-2 border-x border-b border-[#C6A15B] bg-[#FFF8EF]/95 px-2.5 py-2.5 shadow-xs backdrop-blur-md sm:gap-3 sm:px-4">
      {/* Invitation title uses the remaining width. */}
      <div className="min-w-0 flex-1">
        <span className="block truncate font-telugutitle text-[14px] font-extrabold leading-snug tracking-normal text-[#7B1E2B] sm:text-[18px]">
          {t.nav_title}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {/* Music playback now lives in the navigation bar, not over the share bar. */}
        {musicControls && (
          <>
            <button
              type="button"
              onClick={musicControls.togglePlayback}
              className={'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B] ' + (musicControls.isPlaying ? 'border-[#7B1E2B] bg-[#7B1E2B] text-white' : 'border-[#C6A15B] bg-[#FAF1E2] text-[#7B1E2B] hover:bg-[#F7EDD4]')}
              aria-label={musicControls.isPlaying ? t.audio_pause : t.audio_play}
              title={musicControls.isPlaying ? t.audio_pause : t.audio_play}
              aria-pressed={musicControls.isPlaying}
            >
              {musicControls.isPlaying ? (
                <Pause className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4 translate-x-px" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={musicControls.toggleVolume}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C6A15B] bg-[#FAF1E2] text-[#7B1E2B] transition-colors hover:bg-[#F7EDD4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B]"
              aria-label={language === 'te' ? 'సంగీత శబ్ద స్థాయి మార్చండి' : 'Adjust music volume'}
              aria-expanded={musicControls.showVolume}
              title={language === 'te' ? 'సంగీత శబ్ద స్థాయి' : 'Music volume'}
            >
              {musicControls.volume === 0 ? (
                <VolumeX className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </>
        )}

        {/* Language selector */}
        <div
          className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#C6A15B] bg-[#FAF1E2] p-1"
          role="group"
          aria-label="Language selection"
        >
          <button
            type="button"
            onClick={() => onLanguageChange('te')}
            className={'min-h-[34px] rounded-full px-2.5 py-1 text-[14px] font-black transition-colors duration-200 sm:px-3.5 sm:text-[16px] ' + (language === 'te' ? 'bg-[#7B1E2B] text-white shadow-xs' : 'text-[#7B1E2B] hover:text-[#58111D]')}
            aria-pressed={language === 'te'}
          >
            తెలుగు
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            className={'min-h-[34px] rounded-full px-2.5 py-1 text-[14px] font-black transition-colors duration-200 sm:px-3.5 sm:text-[16px] ' + (language === 'en' ? 'bg-[#7B1E2B] text-white shadow-xs' : 'text-[#7B1E2B] hover:text-[#58111D]')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>
      </div>

      {musicControls?.showVolume && (
        <div className="absolute right-2 top-full z-30 mt-2 flex items-center gap-2 rounded-full border border-[#C6A15B] bg-[#FFF8EF]/98 px-3 py-2 shadow-lg sm:right-4">
          {musicControls.volume === 0 ? (
            <VolumeX className="h-4 w-4 shrink-0 text-[#7B1E2B]" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4 shrink-0 text-[#7B1E2B]" aria-hidden="true" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={musicControls.volume}
            onChange={(event) => musicControls.setVolume(Number(event.target.value))}
            aria-label={language === 'te' ? 'సంగీత శబ్ద స్థాయి' : 'Music volume'}
            className="w-24 cursor-pointer accent-[#7B1E2B]"
          />
          <span className="w-8 text-right text-xs font-bold tabular-nums text-[#58111D]">
            {Math.round(musicControls.volume * 100)}%
          </span>
        </div>
      )}
    </header>
  );
};

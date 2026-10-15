import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';

interface BackgroundMusicPlayerProps {
  language: Language;
}

/**
 * Persistent background music control.
 * Uses the exact Gemini-generated MP3 supplied by the user.
 * Playback starts only after the visitor presses Play to respect browser policies.
 */
export function BackgroundMusicPlayer({ language }: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.28);
  const [showVolume, setShowVolume] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const t = translations[language];

  // Exact user-supplied Gemini MP3, hosted as a stable public audio asset.
  const audioSrc = 'https://cdn.openart.ai/openart-uploads/production/attachment-transfers/ef0f86a7fe039a9a843be53fee284a58a65e23a95a899b9be2f5e14c9d60bef5.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setPlaybackError(false);
      audio.volume = volume;
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setPlaybackError(true);
    }
  };

  const handleMediaError = () => {
    setIsPlaying(false);
    setPlaybackError(true);
  };

  const handleCanPlay = () => {
    setPlaybackError(false);
  };

  return (
    <div className="fixed right-3 sm:right-5 bottom-[92px] z-40 flex flex-col items-end gap-2">
      {showVolume && (
        <div className="flex items-center gap-2 rounded-full border border-[#C6A15B] bg-[#FFF8EF] px-3 py-2 shadow-lg">
          {volume === 0 ? (
            <VolumeX className="h-4 w-4 shrink-0 text-[#7B1E2B]" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4 shrink-0 text-[#7B1E2B]" aria-hidden="true" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            aria-label={language === 'te' ? 'సంగీత శబ్ద స్థాయి' : 'Music volume'}
            className="w-24 accent-[#7B1E2B] cursor-pointer"
          />
          <span className="w-8 text-right text-xs font-bold tabular-nums text-[#58111D]">
            {Math.round(volume * 100)}%
          </span>
        </div>
      )}

      <div className="flex items-center gap-1.5 rounded-full border border-[#C6A15B] bg-[#FFF8EF]/95 p-1.5 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? t.audio_pause : t.audio_play}
          aria-pressed={isPlaying}
          title={isPlaying ? t.audio_pause : t.audio_play}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#7B1E2B] px-4 text-sm font-bold text-white transition hover:bg-[#58111D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B]"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <>
              <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
              <Music2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            </>
          )}
          <span>{isPlaying ? t.audio_pause : t.audio_play}</span>
        </button>

        <button
          type="button"
          onClick={() => setShowVolume((open) => !open)}
          aria-label={language === 'te' ? 'సంగీత శబ్ద స్థాయి మార్చండి' : 'Adjust music volume'}
          aria-expanded={showVolume}
          title={language === 'te' ? 'సంగీత శబ్ద స్థాయి' : 'Music volume'}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#7B1E2B] transition hover:bg-[#FAF1E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B]"
        >
          {volume === 0 ? (
            <VolumeX className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {playbackError && (
        <p role="status" className="max-w-60 rounded-lg border border-[#C6A15B] bg-[#FFF8EF] px-3 py-2 text-xs font-semibold text-[#58111D] shadow-md">
          {language === 'te'
            ? 'సంగీత ఫైల్ లోడ్ కాలేదు. ఇంటర్నెట్ కనెక్షన్ తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.'
            : 'Music file could not be loaded. Check your connection and try again.'}
        </p>
      )}

      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="none"
        onError={handleMediaError}
        onCanPlay={handleCanPlay}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
}

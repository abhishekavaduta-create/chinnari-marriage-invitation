import { useCallback, useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';

interface BackgroundMusicPlayerProps {
  language: Language;
  introVisible: boolean;
}

/**
 * Starts wedding music as soon as the page opens and keeps it playing through
 * the intro and invitation. If the browser blocks audible autoplay, any first
 * tap/click/key press anywhere on the page retries playback during the intro.
 */
export function BackgroundMusicPlayer({ language, introVisible }: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef(0.28);
  const playbackAttemptRef = useRef(false);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [volume, setVolume] = useState(0.28);
  const [showVolume, setShowVolume] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const t = translations[language];

  // The MP3 supplied for the invitation.
  const audioSrc = 'https://cdn.openart.ai/openart-uploads/production/attachment-transfers/ef0f86a7fe039a9a843be53fee284a58a65e23a95a899b9be2f5e14c9d60bef5.mp3';

  useEffect(() => {
    volumeRef.current = volume;
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused || playbackAttemptRef.current || userPausedRef.current) return;

    playbackAttemptRef.current = true;
    try {
      audio.volume = volumeRef.current;
      await audio.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
      setPlaybackError(false);
    } catch (error) {
      setIsPlaying(false);
      // Browsers commonly block audible autoplay until the visitor interacts.
      if (error instanceof Error && error.name === 'NotAllowedError') {
        setAutoplayBlocked(true);
        setPlaybackError(false);
      } else {
        setAutoplayBlocked(false);
        setPlaybackError(true);
      }
    } finally {
      playbackAttemptRef.current = false;
    }
  }, []);

  useEffect(() => {
    // Best-effort autoplay begins at the same time as the opening animation.
    void playMusic();

    // A first gesture anywhere on the page starts the soundtrack if autoplay
    // was blocked; visitors never have to find and press a separate Play button.
    const resumeOnGesture = () => {
      if (!userPausedRef.current) void playMusic();
    };
    window.addEventListener('pointerdown', resumeOnGesture, true);
    window.addEventListener('keydown', resumeOnGesture, true);

    return () => {
      window.removeEventListener('pointerdown', resumeOnGesture, true);
      window.removeEventListener('keydown', resumeOnGesture, true);
    };
  }, [playMusic]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      setUserPaused(true);
      audio.pause();
      setIsPlaying(false);
      return;
    }

    userPausedRef.current = false;
    setUserPaused(false);
    void playMusic();
  };

  const handleMediaError = () => {
    setIsPlaying(false);
    setAutoplayBlocked(false);
    setPlaybackError(true);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onError={handleMediaError}
        onCanPlay={() => setPlaybackError(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
          setPlaybackError(false);
        }}
      />

      {autoplayBlocked && !isPlaying && (
        <p
          role="status"
          className="fixed bottom-16 left-1/2 z-[10001] w-[min(92vw,520px)] -translate-x-1/2 rounded-full border border-[#C6A15B] bg-[#FFF8EF]/95 px-4 py-2 text-center text-xs font-semibold text-[#58111D] shadow-lg"
        >
          {language === 'te'
            ? 'సంగీతంతో ప్రారంభించడానికి ఎక్కడైనా తాకండి'
            : 'Tap anywhere to start the music'}
        </p>
      )}

      {!introVisible && (isPlaying || userPaused) && (
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
              aria-pressed={!isPlaying}
              title={isPlaying ? t.audio_pause : t.audio_play}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#7B1E2B] px-4 text-sm font-bold text-white transition hover:bg-[#58111D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B]"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
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
        </div>
      )}

      {playbackError && (
        <p
          role="status"
          className={"fixed right-3 bottom-[92px] z-40 max-w-60 rounded-lg border border-[#C6A15B] bg-[#FFF8EF] px-3 py-2 text-xs font-semibold text-[#58111D] shadow-md" + (introVisible ? ' hidden' : '')}
        >
          {language === 'te'
            ? 'సంగీత ఫైల్ లోడ్ కాలేదు. ఇంటర్నెట్ కనెక్షన్ తనిఖీ చేయండి.'
            : 'Music could not load. Please check the internet connection.'}
        </p>
      )}
    </>
  );
}

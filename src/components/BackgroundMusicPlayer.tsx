import { useCallback, useEffect, useRef, useState } from 'react';
import { Language } from '../types/wedding';

export interface BackgroundMusicControls {
  isPlaying: boolean;
  volume: number;
  showVolume: boolean;
  togglePlayback: () => void;
  toggleVolume: () => void;
  setVolume: (value: number) => void;
}

interface BackgroundMusicPlayerProps {
  language: Language;
  introVisible: boolean;
  onControlsChange: (controls: BackgroundMusicControls) => void;
}

/**
 * Owns the single persistent audio element. Its controls are rendered in the
 * sticky Header so the music UI never competes with the WhatsApp share bar.
 */
export function BackgroundMusicPlayer({
  language,
  introVisible,
  onControlsChange,
}: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef(0.28);
  const playbackAttemptRef = useRef(false);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.28);
  const [showVolume, setShowVolume] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

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

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
      return;
    }

    userPausedRef.current = false;
    void playMusic();
  }, [playMusic]);

  const toggleVolume = useCallback(() => {
    setShowVolume((open) => !open);
  }, []);

  useEffect(() => {
    void playMusic();

    // If autoplay is blocked, a visitor's first gesture anywhere starts the
    // soundtrack. They do not need to find a separate Play control.
    const resumeOnGesture = (event: Event) => {
      const target = event.target;
      // The navigation play/pause button handles its own gesture; don't race it
      // with the global autoplay-resume listener.
      if (target instanceof Element && target.closest('[data-music-toggle]')) return;
      if (!userPausedRef.current) void playMusic();
    };
    window.addEventListener('pointerdown', resumeOnGesture, true);
    window.addEventListener('keydown', resumeOnGesture, true);

    return () => {
      window.removeEventListener('pointerdown', resumeOnGesture, true);
      window.removeEventListener('keydown', resumeOnGesture, true);
    };
  }, [playMusic]);

  useEffect(() => {
    onControlsChange({ isPlaying, volume, showVolume, togglePlayback, toggleVolume, setVolume });
  }, [isPlaying, volume, showVolume, togglePlayback, toggleVolume, onControlsChange]);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onError={() => {
          setIsPlaying(false);
          setAutoplayBlocked(false);
          setPlaybackError(true);
        }}
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
          className="fixed left-1/2 top-[68px] z-[10001] w-[min(92vw,520px)] -translate-x-1/2 rounded-full border border-[#C6A15B] bg-[#FFF8EF]/95 px-4 py-2 text-center text-xs font-semibold text-[#58111D] shadow-lg"
        >
          {language === 'te'
            ? 'సంగీతంతో ప్రారంభించడానికి ఎక్కడైనా తాకండి'
            : 'Tap anywhere to start the music'}
        </p>
      )}

      {playbackError && (
        <p
          role="status"
          className={'fixed left-1/2 top-[68px] z-[10001] w-[min(92vw,520px)] -translate-x-1/2 rounded-xl border border-[#C6A15B] bg-[#FFF8EF]/95 px-4 py-2 text-center text-xs font-semibold text-[#58111D] shadow-lg' + (introVisible ? ' hidden' : '')}
        >
          {language === 'te'
            ? 'సంగీత ఫైల్ లోడ్ కాలేదు. ఇంటర్నెట్ కనెక్షన్ తనిఖీ చేయండి.'
            : 'Music could not load. Please check the internet connection.'}
        </p>
      )}
    </>
  );
}

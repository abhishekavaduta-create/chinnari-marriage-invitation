import { useState, useEffect, useCallback } from 'react';
import { Language } from './types/wedding';
import { Header } from './components/Header';
import { DevotionalHero } from './components/DevotionalHero';
import { FamilySection } from './components/FamilySection';
import { HaldiScene } from './components/scenes/HaldiScene';
import { MarriageScene } from './components/scenes/MarriageScene';
import { SceneTransition } from './components/scenes/SceneTransition';
import { BlessingFooter } from './components/BlessingFooter';
import { WhatsAppShareBar } from './components/WhatsAppShareBar';
import { PetalShower } from './components/PetalShower';
import { WeddingIntro } from './components/WeddingIntro';
import { BackgroundMusicPlayer, type BackgroundMusicControls } from './components/BackgroundMusicPlayer';

function shouldShowWeddingIntro(): boolean {
  if (typeof window === 'undefined') return false;
  // Replay on every fresh page load/reload. Skip Intro only dismisses this
  // mounted intro; it does not suppress the next visit or browser refresh.
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('te');
  const [showIntro, setShowIntro] = useState(shouldShowWeddingIntro);
  const [musicControls, setMusicControls] = useState<BackgroundMusicControls | null>(null);
  const handleMusicControlsChange = useCallback((controls: BackgroundMusicControls) => {
    setMusicControls(controls);
  }, []);

  // Sync document html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#5E1119] text-[#2D1518] relative selection:bg-[#7B1E2B] selection:text-[#FFF8EF] overflow-x-hidden pt-2 pb-4">
        {/* Decorative petals remain enabled; their toggle is not needed in the invitation header. */}
        <PetalShower enabled={true} />

        {/* Sticky Top Bar with a compact language selector */}
        <Header
          language={language}
          onLanguageChange={setLanguage}
          musicControls={musicControls}
        />

        {/* Main Single-Column Mobile-First Container (360px - 430px ideal target) */}
        <main className="w-[calc(100%-24px)] max-w-lg flex-1 px-3 sm:px-4 py-4 sm:py-5 space-y-4 bg-[#FFFCF6] border-x border-[#C6A15B] shadow-[0_0_36px_rgba(0,0,0,0.18)]">
          {/* Devotional Hero Section with Sri Lakshmi Narasimha Swamy */}
          <DevotionalHero language={language} />

          <SceneTransition label={language === 'te' ? 'కుటుంబ ఆశీస్సులు' : 'Family Blessings'} />

          {/* Primary Family Hosts (Pinni & Babai) & Lineage */}
          <FamilySection language={language} />

          <div id="events-section" className="space-y-4 pt-1">
            <SceneTransition label={language === 'te' ? 'శుభ ఘట్టాలు • 01' : 'Ceremony Chapter • 01'} />

            {/* Scene 1: Pasupu & Mangala Snanam (Turmeric & Marigolds) */}
            <HaldiScene language={language} />

            <SceneTransition label={language === 'te' ? 'శుభ ఘట్టాలు • 02' : 'Ceremony Chapter • 02'} />

            {/* Scene 2: Kalyana Mahotsavam (Mangala Vadyalu & Mandapam) */}
            <MarriageScene language={language} />
          </div>

          <SceneTransition label={language === 'te' ? 'శుభాకాంక్షలు' : 'Divine Blessings'} />

          {/* Heartfelt Blessings and Traditional Closing */}
          <BlessingFooter language={language} />
        </main>

        {/* Start soundtrack as soon as the invitation mounts; carry it through the intro. */}
        <BackgroundMusicPlayer
          language={language}
          introVisible={showIntro}
          onControlsChange={handleMusicControlsChange}
        />

        {/* Fixed Bottom Action Bar for WhatsApp Sharing */}
        <WhatsAppShareBar language={language} />
      </div>
      {showIntro && <WeddingIntro onComplete={() => setShowIntro(false)} />}
    </>
  );
}

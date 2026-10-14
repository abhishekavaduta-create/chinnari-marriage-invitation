import { useState, useEffect } from 'react';
import { Language } from './types/wedding';
import { Header } from './components/Header';
import { DevotionalHero } from './components/DevotionalHero';
import { FamilySection } from './components/FamilySection';
import { EngagementScene } from './components/scenes/EngagementScene';
import { HaldiScene } from './components/scenes/HaldiScene';
import { MarriageScene } from './components/scenes/MarriageScene';
import { SceneTransition } from './components/scenes/SceneTransition';
import { BlessingFooter } from './components/BlessingFooter';
import { WhatsAppShareBar } from './components/WhatsAppShareBar';
import { PetalShower } from './components/PetalShower';
import { WeddingIntro } from './components/WeddingIntro';

function shouldShowWeddingIntro(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return window.sessionStorage.getItem('chinnari-wedding-intro-seen') !== '1';
  } catch {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>('te');
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [showIntro, setShowIntro] = useState(shouldShowWeddingIntro);

  // Sync document html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#FFF8EF] text-[#2D1518] relative selection:bg-[#7B1E2B] selection:text-[#FFF8EF] overflow-x-hidden">
        {/* Background Petal Shower (Respects prefers-reduced-motion) */}
        <PetalShower enabled={petalsEnabled} />

        {/* Sticky Top Bar with Language Selector */}
        <Header 
          language={language} 
          onLanguageChange={setLanguage}
          petalsEnabled={petalsEnabled}
          onTogglePetals={() => setPetalsEnabled((prev) => !prev)}
        />

        {/* Main Single-Column Mobile-First Container (360px - 430px ideal target) */}
        <main className="w-full max-w-md px-3 sm:px-4 py-3 sm:py-4 space-y-4">
          {/* Devotional Hero Section with Sri Lakshmi Narasimha Swamy */}
          <DevotionalHero 
            language={language} 
          />

          <SceneTransition label={language === 'te' ? 'కుటుంబ ఆశీస్సులు' : 'Family Blessings'} />

          {/* Primary Family Hosts (Pinni & Babai) & Lineage */}
          <FamilySection 
            language={language} 
          />

          <div id="events-section" className="space-y-4 pt-1">
            <SceneTransition label={language === 'te' ? 'శుభ ఘట్టాలు • 01' : 'Ceremony Chapter • 01'} />

            {/* Scene 1: Engagement Ceremony (Interlocking Rings) */}
            <EngagementScene 
              language={language} 
            />

            <SceneTransition label={language === 'te' ? 'శుభ ఘట్టాలు • 02' : 'Ceremony Chapter • 02'} />

            {/* Scene 2: Pasupu & Mangala Snanam (Turmeric & Marigolds) */}
            <HaldiScene 
              language={language} 
            />

            <SceneTransition label={language === 'te' ? 'శుభ ఘట్టాలు • 03' : 'Ceremony Chapter • 03'} />

            {/* Scene 3: Kalyana Mahotsavam (Mangala Vadyalu & Mandapam) */}
            <MarriageScene 
              language={language} 
            />
          </div>

          <SceneTransition label={language === 'te' ? 'శుభాకాంక్షలు' : 'Divine Blessings'} />

          {/* Heartfelt Blessings and Traditional Closing */}
          <BlessingFooter 
            language={language} 
          />
        </main>

        {/* Fixed Bottom Action Bar for WhatsApp Sharing */}
        <WhatsAppShareBar 
          language={language} 
        />
      </div>
      {showIntro && <WeddingIntro onComplete={() => setShowIntro(false)} />}
    </>
  );
}

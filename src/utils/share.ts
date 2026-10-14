import { Language } from '../types/wedding';

/**
 * Derives the canonical/public invitation URL.
 * Never shares temporary private dev URLs (e.g. ais-dev-*),
 * automatically maps to the shared production link (ais-pre-*)
 * or the configured VITE_APP_URL.
 */
export function getPermanentInvitationUrl(): string {
  // 1. Check environment variable if injected
  const envUrl = import.meta.env.VITE_APP_URL;
  if (envUrl && typeof envUrl === 'string' && !envUrl.includes('MY_APP_URL') && envUrl.startsWith('http')) {
    return envUrl;
  }

  // 2. Client-side location inspection
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    // Map AI Studio development preview to shared public preview
    if (origin.includes('ais-dev-')) {
      return origin.replace('ais-dev-', 'ais-pre-');
    }
    // Standard domain or production domain
    return `${origin}${window.location.pathname.replace(/\/$/, '')}`;
  }

  return 'https://ais-pre-c2uqh53cxl4q67eokyr7gu-206220364123.asia-southeast1.run.app';
}

/**
 * Prepares the WhatsApp share link with appropriate localized copy
 * using the verified public invitation URL.
 */
export function getWhatsAppShareUrl(lang: Language): string {
  const isTelugu = lang === 'te';
  const publicUrl = getPermanentInvitationUrl();

  const message = isTelugu
    ? "శ్రీ లక్ష్మీ నరసింహ స్వామి ఆశీస్సులతో... చి॥ల॥సౌ॥ అవధూత ధనలక్ష్మి & చి॥ పున్నా శేఖర్ ల కల్యాణ మహోత్సవ ఆహ్వాన పత్రిక. వేదిక & ముహూర్తం వివరాల కొరకు చూడండి:\n"
    : "With the Divine Blessings of Sri Lakshmi Narasimha Swamy, you are cordially invited to celebrate the wedding ceremony of Chi. La. Sow. Avaduta Dhanlaxmi & Chi. Punna Shekar:\n";

  const fullText = `${message}${publicUrl}`;

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
}

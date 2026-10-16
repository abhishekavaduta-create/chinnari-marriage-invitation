import { Language } from '../types/wedding';

const isTemporaryAiStudioUrl = (value: string): boolean => {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    // Internal AI Studio preview and technical Cloud Run hostnames are not guest-facing links.
    return hostname.startsWith('ais-dev-') || hostname.startsWith('ais-pre-') || hostname.endsWith('.run.app');
  } catch {
    return true;
  }
};

const withoutTrailingSlash = (value: string): string =>
  value.endsWith('/') ? value.slice(0, -1) : value;

// Bump this value when social preview metadata changes so WhatsApp fetches a
// fresh page URL instead of reusing a previously cached text-only preview.
const withSharePreviewVersion = (value: string): string => {
  const url = new URL(value);
  url.searchParams.set('share', '2');
  return url.toString();
};

/**
 * Returns a real public invitation URL only.
 * Never guesses a published URL by rewriting an AI Studio preview hostname.
 * VITE_APP_URL may be set to the final published/custom invitation URL.
 */
export function getPermanentInvitationUrl(): string | null {
  const envUrl = import.meta.env.VITE_APP_URL;

  if (
    typeof envUrl === 'string' &&
    envUrl.startsWith('https://') &&
    !envUrl.includes('MY_APP_URL') &&
    !isTemporaryAiStudioUrl(envUrl)
  ) {
    return withSharePreviewVersion(withoutTrailingSlash(envUrl));
  }

  if (typeof window === 'undefined') return null;

  const currentUrl = window.location.origin;
  if (isTemporaryAiStudioUrl(currentUrl)) {
    return null;
  }

  const pathname = window.location.pathname;
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return withSharePreviewVersion(currentUrl + cleanPath);
}

/**
 * Prepares the localized WhatsApp message only when a public URL is available.
 */
export function getWhatsAppShareUrl(lang: Language): string | null {
  const publicUrl = getPermanentInvitationUrl();
  if (!publicUrl) return null;

  const message =
    lang === 'te'
      ? "శ్రీ లక్ష్మీ నరసింహ స్వామి ఆశీస్సులతో... చి॥ల॥సౌ॥ అవధూత ధనలక్ష్మి & చి॥ పున్నా శేఖర్ ల కల్యాణ మహోత్సవ ఆహ్వాన పత్రిక. వేదిక & ముహూర్తం వివరాల కొరకు చూడండి: "
      : "With the Divine Blessings of Sri Lakshmi Narasimha Swamy, you are cordially invited to celebrate the wedding ceremony of Chi. La. Sow. Avaduta Dhanlaxmi & Chi. Punna Shekar: ";

  const fullText = message + publicUrl;
  return 'https://api.whatsapp.com/send?text=' + encodeURIComponent(fullText);
}

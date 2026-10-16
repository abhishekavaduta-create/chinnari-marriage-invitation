import { Language } from '../types/wedding';

const isTemporaryAiStudioUrl = (value: string): boolean => {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    // Build-mode development/preview hosts are not the permanent invitation link.
    return hostname.startsWith('ais-dev-') || hostname.startsWith('ais-pre-');
  } catch {
    return true;
  }
};

/**
 * Returns a real public invitation URL only.
 * Never guesses a published URL by rewriting an AI Studio preview hostname.
 * Configure VITE_APP_URL to the final published/custom invitation URL when needed.
 */
export function getPermanentInvitationUrl(): string | null {
  const envUrl = import.meta.env.VITE_APP_URL;

  if (
    typeof envUrl === 'string' &&
    envUrl.startsWith('https://') &&
    !envUrl.includes('MY_APP_URL') &&
    !isTemporaryAiStudioUrl(envUrl)
  ) {
    return envUrl.replace(/\/+$/, '');
  }

  if (typeof window === 'undefined') return null;

  const currentUrl = window.location.origin;
  if (isTemporaryAiStudioUrl(currentUrl)) {
    return null;
  }

  return \`\${currentUrl}\${window.location.pathname.replace(/\\/$/, '')}\`;
}

/**
 * Prepares the localized WhatsApp message only when the current URL is public.
 */
export function getWhatsAppShareUrl(lang: Language): string | null {
  const publicUrl = getPermanentInvitationUrl();
  if (!publicUrl) return null;

  const message =
    lang === 'te'
      ? "శ్రీ లక్ష్మీ నరసింహ స్వామి ఆశీస్సులతో... చి॥ల॥సౌ॥ అవధూత ధనలక్ష్మి & చి॥ పున్నా శేఖర్ ల కల్యాణ మహోత్సవ ఆహ్వాన పత్రిక. వేదిక & ముహూర్తం వివరాల కొరకు చూడండి:\\n"
      : "With the Divine Blessings of Sri Lakshmi Narasimha Swamy, you are cordially invited to celebrate the wedding ceremony of Chi. La. Sow. Avaduta Dhanlaxmi & Chi. Punna Shekar:\\n";

  return \`https://api.whatsapp.com/send?text=\${encodeURIComponent(\`\${message}\${publicUrl}\`)}\`;
}

import React, { useState } from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { getWhatsAppShareUrl, getPermanentInvitationUrl } from '../utils/share';
import { Share2, Check } from 'lucide-react';

interface WhatsAppShareBarProps {
  language: Language;
}

export const WhatsAppShareBar: React.FC<WhatsAppShareBarProps> = ({ language }) => {
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = getWhatsAppShareUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const publicUrl = getPermanentInvitationUrl();
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(publicUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <aside 
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 pb-3"
      aria-label="Invitation sharing"
    >
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md border border-[#C6A15B] rounded-2xl p-2.5 flex items-center gap-2 shadow-xl pointer-events-auto">
        <button
          type="button"
          onClick={handleShare}
          className="flex-1 min-h-[50px] py-3 px-4 rounded-xl bg-[#075E54] text-white text-[16px] sm:text-[17px] font-bold flex items-center justify-center space-x-2 shadow-sm hover:bg-[#128C7E] active:scale-[0.99] transition cursor-pointer"
        >
          {/* WhatsApp Brand SVG */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.182-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
          </svg>
          <span className="truncate">{t.btn_whatsapp_share}</span>
        </button>

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="w-14 min-h-[50px] rounded-xl border-2 border-[#C6A15B] bg-[#FFF8EF] text-[#7B1E2B] flex items-center justify-center hover:bg-[#FAF1E2] active:scale-[0.98] transition cursor-pointer shrink-0"
          title={copied ? t.share_copied : "Copy Link"}
          aria-label="Copy invitation link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-emerald-600" aria-hidden="true" />
          ) : (
            <Share2 className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </aside>
  );
};

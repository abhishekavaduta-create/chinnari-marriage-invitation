import React, { useState, useEffect } from 'react';
import { Language } from '../types/wedding';
import { translations } from '../data/translations';
import { WEDDING_MUHURTHAM_ISO } from '../data/weddingData';

interface CountdownTimerProps {
  language: Language;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ language }) => {
  const t = translations[language];

  const calculateTimeLeft = (): TimeRemaining => {
    const target = new Date(WEDDING_MUHURTHAM_ISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="rounded-xl bg-[#FAF3E8] p-4 border-2 border-[#C6A15B] text-center my-3.5 shadow-2xs">
      <div className="text-[17px] sm:text-[19px] font-black text-[#7B1E2B] mb-3 font-telugutitle">
        {t.label_countdown_title}
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        <div className="bg-white rounded-xl p-3 border border-[#E5C88A] shadow-xs">
          <span className="block text-[26px] sm:text-[30px] font-black text-[#7B1E2B] font-telugutitle tabular-nums leading-tight">
            {timeLeft.days}
          </span>
          <span className="text-[15px] text-gray-800 block font-bold mt-1">
            {t.timer_days}
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 border border-[#E5C88A] shadow-xs">
          <span className="block text-[26px] sm:text-[30px] font-black text-[#7B1E2B] font-telugutitle tabular-nums leading-tight">
            {formatDigit(timeLeft.hours)}
          </span>
          <span className="text-[15px] text-gray-800 block font-bold mt-1">
            {t.timer_hours}
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 border border-[#E5C88A] shadow-xs">
          <span className="block text-[26px] sm:text-[30px] font-black text-[#7B1E2B] font-telugutitle tabular-nums leading-tight">
            {formatDigit(timeLeft.minutes)}
          </span>
          <span className="text-[15px] text-gray-800 block font-bold mt-1">
            {t.timer_minutes}
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 border border-[#E5C88A] shadow-xs">
          <span className="block text-[26px] sm:text-[30px] font-black text-[#7B1E2B] font-telugutitle tabular-nums leading-tight">
            {formatDigit(timeLeft.seconds)}
          </span>
          <span className="text-[15px] text-gray-800 block font-bold mt-1">
            {t.timer_seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './WeddingIntro.css';

type WeddingIntroProps = {
  onComplete: () => void;
};

const TEMPLE_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1UHHi5fJbmmovjR1i4bsR0wWsXi8Fn9x4jSl3yVLbNIVFgSB2pO68etdVNsj0ehxJ02d9UQxXcWKIViHpoBptB5T_38uBgqEavKoyYHf17914YMlfySG4T2EosOu2oJMmC4JRDe9P0CbQTxjM0B6RGaAs8AKac-3-WCnkyYY6zeVCBjsVOdxEqK_PsL-oFXCqJK1iXAC8a0Ni0kzqv8ce-kYMO06zOTyZqEspA2LFCb0DLmNISC18CWKWQP';

const GANESHA_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1XRzh0WwVb5VNzHsslKxJQuoc4FFWhss_lOLlrfRSr_V4DuqxaCAz4Cw5lzDKUaGqq0379Bmd6vFFgb6rUxOCFVNReykwiUTk41RSSmU1h9H8aVn7FQWpLPiAtWbxI-e8bC3oSa4K2DUWkeU6zx9HIoHNB7XAfUDSwfyerU034OihYrvaVf77VrLifValiOqn2Xsof1eH_jF7MNtGP591MIeg0adjD0SNwbyrXJFn8hh9e9Vz62-Jhs1rYg';

const CURTAIN_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuADN8J_FZsLSwg_2mTfJtoG4vwkiNAXzgvps0TIQkDxKkXB-1izU5GWbmo3JYAl5d2WCwanyxmyCRFx4YKHFMs02Dwgo3_PiWlkf6-p3MpWaFngCRSvSn7LHzsGKgUGjbELuKYh_NrYFRX5DTNjfrTs8aXLujOBplM6B1gqjc1oJnMGFHT2vlIIODo5LXFKIqNk01x5hmOnD-KxdQuzuOGMzXOsBz8H_EcUna20nxIztSKq_5gXrnPtmw';

const stages = [
  { stage: 1, duration: 1400 }, // temple atmosphere
  { stage: 2, duration: 1400 }, // Ganesha reveal
  { stage: 3, duration: 1500 }, // invocation hold
  { stage: 4, duration: 1000 }, // curtains close
  { stage: 5, duration: 1650 }, // curtains part
  { stage: 6, duration: 1900 }, // title reveal and hold
] as const;

export function WeddingIntro({ onComplete }: WeddingIntroProps) {
  const [stage, setStage] = useState(1);
  const [ganeshaFailed, setGaneshaFailed] = useState(false);
  const [templeFailed, setTempleFailed] = useState(false);
  const reducedMotion = useReducedMotion();
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      window.sessionStorage.setItem('chinnari-wedding-intro-seen', '1');
    } catch {
      // Storage can be unavailable in privacy modes; completion still works.
    }
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (reducedMotion) {
      finish();
      return;
    }

    if (stage === 7) {
      const id = window.setTimeout(finish, 900);
      return () => window.clearTimeout(id);
    }

    const current = stages.find((item) => item.stage === stage);
    const id = window.setTimeout(() => {
      setStage((previous) => previous + 1);
    }, current?.duration ?? 900);

    return () => window.clearTimeout(id);
  }, [finish, reducedMotion, stage]);

  const skip = () => setStage(7);

  return (
    <AnimatePresence>
      <motion.div
        className="wedding-intro"
        role="dialog"
        aria-modal="true"
        aria-label="Wedding invitation opening"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 7 ? 0 : 1 }}
        transition={{ duration: stage === 7 ? 0.85 : 0.25, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          if (stage === 7) finish();
        }}
      >
        <div className="wedding-intro__temple" aria-hidden="true">
          {!templeFailed && (
            <img
              src={TEMPLE_IMAGE}
              alt=""
              className="wedding-intro__temple-image"
              onError={() => setTempleFailed(true)}
              referrerPolicy="no-referrer"
            />
          )}
          <div className="wedding-intro__temple-fallback" />
          <div className="wedding-intro__warm-light" />
          <div className="wedding-intro__floor-ornament" aria-hidden="true">✺</div>
        </div>

        <div className="wedding-intro__petals" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <i key={index} style={{ '--petal-index': index } as React.CSSProperties} />
          ))}
        </div>

        <motion.div
          className="wedding-intro__ganesha"
          initial={false}
          animate={{
            opacity: stage >= 2 && stage <= 3 ? 1 : 0,
            scale: stage >= 2 && stage <= 3 ? 1 : 0.94,
            y: stage >= 2 && stage <= 3 ? 0 : 10,
          }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden={stage < 2 || stage > 3}
        >
          {!ganeshaFailed ? (
            <img
              src={GANESHA_IMAGE}
              alt="Lord Sri Ganesha"
              className="wedding-intro__ganesha-image"
              onError={() => setGaneshaFailed(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="wedding-intro__ganesha-fallback" aria-label="Sri Ganesha">ॐ</div>
          )}
        </motion.div>

        <motion.div
          className="wedding-intro__invocation"
          initial={false}
          animate={{ opacity: stage === 3 ? 1 : 0, y: stage === 3 ? 0 : 12 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: stage === 3 ? 0.18 : 0 }}
          aria-hidden={stage !== 3}
        >
          <h1 lang="te">ఓం గణేశాయ నమః</h1>
          <p>OM GANESHAYA NAMAH</p>
          <div className="wedding-intro__divider"><span>✥</span></div>
        </motion.div>

        <motion.div
          className="wedding-intro__curtain wedding-intro__curtain--left"
          initial={false}
          animate={{ x: stage >= 5 || stage < 4 ? '-101%' : '0%' }}
          transition={{ duration: stage === 5 ? 1.65 : 0.95, ease: [0.25, 1, 0.5, 1] }}
          aria-hidden="true"
        >
          <img src={CURTAIN_IMAGE} alt="" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div
          className="wedding-intro__curtain wedding-intro__curtain--right"
          initial={false}
          animate={{ x: stage >= 5 || stage < 4 ? '101%' : '0%' }}
          transition={{ duration: stage === 5 ? 1.65 : 0.95, ease: [0.25, 1, 0.5, 1] }}
          aria-hidden="true"
        >
          <img src={CURTAIN_IMAGE} alt="" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          className="wedding-intro__title"
          initial={false}
          animate={{
            opacity: stage >= 6 && stage < 7 ? 1 : 0,
            scale: stage >= 6 && stage < 7 ? 1 : 0.97,
            y: stage >= 6 && stage < 7 ? 0 : 8,
          }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: stage === 6 ? 0.25 : 0 }}
          aria-hidden={stage < 6 || stage >= 7}
        >
          <div className="wedding-intro__namam" aria-hidden="true">
            <span />
            <b />
            <span />
          </div>
          <p className="wedding-intro__auspicious" lang="te">శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు</p>
          <h2>Avaduta's <span>Marriage Invitation</span></h2>
          <div className="wedding-intro__title-divider"><span>❦</span><b>ॐ</b><span>❦</span></div>
          <p className="wedding-intro__subtitle">A Sacred Celebration of Union</p>
        </motion.div>

        {stage >= 2 && stage < 7 && (
          <button type="button" className="wedding-intro__skip" onClick={skip}>
            Skip Intro <span aria-hidden="true">›</span>
          </button>
        )}

        <div className="wedding-intro__stage-indicator" aria-live="polite">
          {stage < 4 ? 'శుభారంభం' : stage < 6 ? 'Auspicious beginning' : 'Avaduta’s Marriage Invitation'}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

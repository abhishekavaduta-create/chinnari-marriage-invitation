import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './WeddingIntro.css';

type WeddingIntroProps = {
  onComplete: () => void;
};

const TEMPLE_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1UHHi5fJbmmovjR1i4bsR0wWsXi8Fn9x4jSl3yVLbNIVFgSB2pO68etdVNsj0ehxJ02d9UQxXcWKIViHpoBptB5T_38uBgqEavKoyYHf17914YMlfySG4T2EosOu2oJMmC4JRDe9P0CbQTxjM0B6RGaAs8AKac-3-WCnkyYY6zeVCBjsVOdxEqK_PsL-oFXCqJK1iXAC8a0Ni0kzqv8ce-kYMO06zOTyZqEspA2LFCb0DLmNISC18CWKWQP';

const GANESHA_IMAGE = 'https://cdn.openart.ai/openart-uploads/production/attachment-transfers/ce05ca5e61f3b6498f0da0399de5ecacb380c9fc1f59db0b186adba6ac820935.webp';

const CURTAIN_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1XnaZC1VikLw6TAk_PCoY_z19FQFu81lTC93uldzeNHJKcbaVi_AkwUOM3HveyM2uSgVnnCNal7jSJidhf7nAn5tn4-NGzy0KJApi72So6MHrI2hfKnN1vv2u3F0ODflnxKttKPKRNIRqm33DwYPIxni82jd_dXHXgz6UQRsFlQ4KphP-DhCtw8O-yqT9eOj3UI3O0n5wdUyNjCQ4WLUycNOu9NWRhwkhOsvNVy75w_IsObfUWHPK-TTio';

const stages = [
  { stage: 1, duration: 2000 }, // temple atmosphere
  { stage: 2, duration: 2500 }, // Ganesha reveal
  { stage: 3, duration: 2400 }, // invocation reveal and devotional pause
  { stage: 4, duration: 1500 }, // curtains close
  { stage: 5, duration: 2300 }, // curtains part
  { stage: 6, duration: 4100 }, // sequenced Namam, bilingual title, ornament and final hold
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
    // Completion dismisses the intro only for this page load. A reload starts it again.
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
            <i key={index} style={{ '--petal-index': index } as CSSProperties} />
          ))}
        </div>

        <motion.div
          className="wedding-intro__ganesha"
          initial={false}
          animate={{
            opacity: stage >= 2 && stage <= 3 ? 1 : 0,
            scale: stage >= 2 && stage <= 3 ? 1 : 0.94,
            y: stage === 3 ? '-7vh' : stage === 2 ? 0 : 10,
          }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 1.05, ease: 'easeOut', delay: stage === 3 ? 0.3 : 0 }}
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
          transition={{ duration: stage === 5 ? 2.25 : 1.45, ease: [0.25, 1, 0.5, 1] }}
          aria-hidden="true"
        >
          <img src={CURTAIN_IMAGE} alt="" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div
          className="wedding-intro__curtain wedding-intro__curtain--right"
          initial={false}
          animate={{ x: stage >= 5 || stage < 4 ? '101%' : '0%' }}
          transition={{ duration: stage === 5 ? 2.25 : 1.45, ease: [0.25, 1, 0.5, 1] }}
          aria-hidden="true"
        >
          <img src={CURTAIN_IMAGE} alt="" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          className={`wedding-intro__title ${stage === 6 ? 'wedding-intro__title--active' : ''}`}
          initial={false}
          animate={{
            opacity: stage >= 6 && stage < 7 ? 1 : 0,
            scale: stage >= 6 && stage < 7 ? 1 : 0.97,
            y: stage >= 6 && stage < 7 ? 0 : 8,
          }}
          transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1], delay: stage === 6 ? 0.4 : 0 }}
          aria-hidden={stage < 6 || stage >= 7}
        >
          <motion.div
            className={`wedding-intro__namam ${stage === 6 ? 'wedding-intro__namam--reveal' : ''}`}
            aria-hidden="true"
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, y: stage === 6 ? 0 : -14, scale: stage === 6 ? 1 : 0.72 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: stage === 6 ? 0.55 : 0 }}
          >
            <svg className="wedding-intro__namam-art" viewBox="0 0 72 92" role="img" aria-label="Traditional Vaishnava Thirunamam">
              <path d="M12 10 H60 V43 C60 63 49 78 36 83 C23 78 12 63 12 43 Z" fill="#B58A36" />
              <path d="M16 14 H56 V43 C56 59 47 72 36 77 C25 72 16 59 16 43 Z" fill="#FFFCF6" />
              <path d="M32.5 15 H39.5 C38.3 31 38.4 47 36 66 C33.6 47 33.7 31 32.5 15 Z" fill="#8D1C2A" />
              <circle cx="36" cy="82" r="2.1" fill="#C6A15B" />
            </svg>
          </motion.div>
          <motion.p
            className="wedding-intro__auspicious"
            lang="te"
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, y: stage === 6 ? 0 : 10 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: stage === 6 ? 0.95 : 0 }}
          >శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు</motion.p>
          <motion.h2
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, y: stage === 6 ? 0 : 14 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: stage === 6 ? 1.3 : 0 }}
          >Avaduta's <span>Invitation</span></motion.h2>
          <motion.p
            className="wedding-intro__title-te"
            lang="te"
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, y: stage === 6 ? 0 : 12 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: stage === 6 ? 1.75 : 0 }}
          >అవధూత వారి వివాహ ఆహ్వానం</motion.p>
          <motion.div
            className="wedding-intro__title-divider"
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, scaleX: stage === 6 ? 1 : 0.55 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: stage === 6 ? 2.1 : 0 }}
          ><span>❦</span><b>ॐ</b><span>❦</span></motion.div>
          <motion.p
            className="wedding-intro__subtitle"
            initial={false}
            animate={{ opacity: stage === 6 ? 1 : 0, y: stage === 6 ? 0 : 8 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: stage === 6 ? 2.45 : 0 }}
          >A Sacred Celebration of Union</motion.p>
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

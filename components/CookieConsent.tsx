// components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'vr0cks-cookie-consent';

export default function CookieConsent() {
  const t = useTranslations('cookie');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Already answered? Never ask again.
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Private mode / blocked storage: fall through and just show the notice.
    }

    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const respond = (choice: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Nothing to persist to — closing the notice is still the right response.
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          role="dialog"
          aria-label={t('title')}
          className="fixed bottom-6 right-6 z-[9999] max-w-sm w-[calc(100%-3rem)]"
        >
          <div className="
            bg-[#1a0303]/95 dark:bg-[#0f0202]/95 backdrop-blur-md
            border border-vintage-red/20
            p-6 rounded-sm shadow-2xl
          ">
            <h4 className="text-vintage-red text-xs font-bold tracking-widest uppercase mb-2">
              {t('title')}
            </h4>
            <p className="text-white/80 text-xs leading-relaxed mb-4">
              {t('description')}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => respond('accepted')}
                className="flex-1 bg-vintage-red text-white text-[10px] font-bold tracking-widest uppercase py-3 hover:bg-red-700 transition-colors rounded-sm"
              >
                {t('accept')}
              </button>
              <button
                onClick={() => respond('rejected')}
                className="flex-1 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase py-3 hover:text-white hover:border-white/30 transition-colors rounded-sm"
              >
                {t('reject')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

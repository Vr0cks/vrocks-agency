// components/MobileMenu.tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('mobileMenu');

  const links = [
    { name: t('manifesto'), href: '#manifesto' },
    { name: t('works'), href: '#works' },
    { name: t('team'), href: '#team' },
    { name: t('contact'), href: '#direct-contact' },
    { name: t('getQuote'), href: '#concierge', isPrimary: true },
  ];

  const menuVars: Variants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVars: Variants = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 }
    },
    open: {
      transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 }
    }
  };

  const linkVars: Variants = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] }
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[99998] origin-top bg-[#F0EAD6] dark:bg-[#1a0303] text-[#1A1716] dark:text-[#F2F0E6] flex flex-col justify-center items-center h-screen"
        >
          {/* KAPAT BUTONU */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-xs uppercase tracking-widest font-bold hover:text-vintage-red transition-colors"
          >
            {t('close')}
          </button>

          {/* LİNKLER */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex flex-col items-center gap-8 font-serif"
          >
            {links.map((link) => (
              <div key={link.name} className="overflow-hidden">
                <motion.div variants={linkVars}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={`text-4xl md:text-5xl hover:text-vintage-red transition-colors ${link.isPrimary ? 'text-vintage-red font-black' : ''}`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* ALT BİLGİ */}
          <div className="absolute bottom-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">VR0CKS AGENCY</p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
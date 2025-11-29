// components/Preloader.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLoading } from './LoadingContext';

export default function Preloader() {
  const { setIsLoading: setGlobalLoading } = useLoading();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden'; // Scroll'u kilitle

    // Çizgi dolana kadar bekle (2.5 sn), sonra perdeyi kaldırma emrini ver
    const timer = setTimeout(() => {
      setShowPreloader(false); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Perde tamamen yukarı kalktığında çalışacak fonksiyon
  const handleExitComplete = () => {
    setGlobalLoading(false); // SİTEYE "ŞİMDİ SAHNEYE ÇIK" DE
    document.body.style.overflow = 'auto'; // Scroll'u aç
  };

  const slideUp: Variants = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
    }
  };

  const slideUpLayer2: Variants = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 2.3, ease: "easeInOut" } // 2.5sn'den biraz kısa
    }
  };

  return (
    // DÜZELTME: onExitComplete buraya eklendi
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {showPreloader && (
        <>
          {/* KATMAN 1 (SİYAH) */}
          <motion.div
            key="black-curtain"
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0f0202]"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
                 style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
            />
            
            <div className="flex flex-col items-center z-50">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-5xl md:text-7xl tracking-[0.2em] font-black text-[#F2F0E6]"
              >
                VR0CKS<span className="text-vintage-red">.</span>
              </motion.h1>
              
              <div className="w-48 h-[2px] bg-white/10 mt-6 rounded-full overflow-hidden relative">
                <motion.div 
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full bg-vintage-red absolute top-0 left-0"
                />
              </div>
            </div>
          </motion.div>

          {/* KATMAN 2 (KIRMIZI GÖLGE) */}
          <motion.div
            key="red-curtain"
            variants={slideUpLayer2}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[99998] bg-vintage-red"
          />
        </>
      )}
    </AnimatePresence>
  );
}
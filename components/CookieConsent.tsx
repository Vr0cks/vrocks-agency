// components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // DEĞİŞİKLİK BURADA:
    // Artık localStorage kontrolü yapmıyoruz (Daha önce kabul etti mi diye bakmıyoruz).
    // Sayfa her yüklendiğinde 2 saniye sayar ve sahneye çıkar.
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    // DEĞİŞİKLİK: localStorage.setItem(...) satırını sildik.
    // Yani "kabul etti" bilgisini kaydetmiyoruz. Sadece o anlık ekrandan kaldırıyoruz.
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
          className="fixed bottom-6 right-6 z-[9999] max-w-sm w-[calc(100%-3rem)]"
        >
          <div className="
            bg-[#1a0303]/95 dark:bg-[#0f0202]/95 backdrop-blur-md 
            border border-vintage-red/20 
            p-6 rounded-sm shadow-2xl
          ">
            <h4 className="text-vintage-red text-xs font-bold tracking-widest uppercase mb-2">
              Dijital Nezaket
            </h4>
            {/* Yazı rengini Gündüz/Gece uyumlu hale getirdik */}
            <p className="text-white/80 text-xs leading-relaxed mb-4">
              Deneyiminizi kusursuzlaştırmak için çerez (cookie) kullanıyoruz. 
              Tıpkı iyi bir viskinin yanındaki çikolata gibi; küçük ama etkili.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={handleClose}
                className="flex-1 bg-vintage-red text-white text-[10px] font-bold tracking-widest uppercase py-3 hover:bg-red-700 transition-colors rounded-sm"
              >
                Kabul Et
              </button>
              <button 
                onClick={handleClose}
                className="flex-1 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase py-3 hover:text-white hover:border-white/30 transition-colors rounded-sm"
              >
                Reddet
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// components/GentlemanSwitch.tsx
'use client';

import { useTheme } from 'next-themes';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GentlemanSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const stringControls = useAnimationControls();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-12 h-24" />; // Yer tutucu

  // MANTIK: Eğer tema 'dark' ise, bizim dünyamızda "Lamba Açık" demektir.
  const isLampOn = resolvedTheme === 'dark';

  const handleSwitch = async () => {
    // 1. İpi Çek
    await stringControls.start({ 
      height: 50, 
      transition: { type: "spring", stiffness: 500, damping: 15 } 
    });

    // 2. Temayı Değiştir (Karanlıksa Aydınlığa, Aydınlıksa Karanlığa)
    setTheme(isLampOn ? 'light' : 'dark');

    // 3. İpi Bırak
    stringControls.start({ 
      height: 20, 
      transition: { type: "spring", stiffness: 300, damping: 10 } 
    });
  };

  // RENKLER:
  // Lamba Yanıksa (Dark Mode): Yeşil Başlık, Altın Detay
  // Lamba Sönükse (Light Mode): Siyah Başlık, Gümüş Detay
  const lampColor = isLampOn ? "#1B4D3E" : "#1A1A1A"; 
  const metalColor = isLampOn ? "#C5A059" : "#555555"; 

  return (
    <button
      onClick={handleSwitch}
      className="relative z-[99999] flex flex-col items-center w-12 -mr-3 outline-none group cursor-pointer"
      aria-label={isLampOn ? "Işığı Kapat" : "Işığı Aç"}
    >
      
      {/* --- LAMBA GÖVDESİ --- */}
      <div className="relative z-20 drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)] transition-all duration-500">
        <svg width="40" height="24" viewBox="0 0 44 28" fill="none">
           {/* Şapka */}
           <path 
             d="M4 14 C4 6 10 2 22 2 C34 2 40 6 40 14 L40 16 L4 16 Z" 
             fill={lampColor}
             className="transition-colors duration-500"
           />
           {/* Detaylar */}
           <rect x="20" y="0" width="4" height="3" fill={metalColor} className="transition-colors duration-500" />
           <circle cx="4" cy="15" r="2" fill={metalColor} className="transition-colors duration-500" />
           <circle cx="40" cy="15" r="2" fill={metalColor} className="transition-colors duration-500" />
           {/* Ampul (Sadece Yanıksa Parlak) */}
           <path d="M6 16 L38 16 L36 20 L8 20 Z" fill="#FFD700" opacity={isLampOn ? "0.9" : "0.2"} className="transition-opacity duration-500" />
        </svg>

        {/* --- IŞIK HÜZMESİ (GLOW) --- */}
        {/* Sadece Lamba Yanıksa (Dark Mode) görünür */}
        <motion.div 
           initial={false}
           animate={{ opacity: isLampOn ? 1 : 0 }}
           transition={{ duration: 0.5 }}
           className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-400/20 blur-[50px] rounded-full pointer-events-none -z-10" 
        />
      </div>

      {/* --- ÇEKME ZİNCİRİ --- */}
      <motion.div 
        animate={stringControls}
        initial={{ height: 20 }}
        className="w-0.5 relative z-10 mx-auto transition-colors duration-500"
        style={{ backgroundColor: metalColor }}
      >
        <div 
          className="absolute -bottom-2 -left-[3px] w-2.5 h-2.5 rounded-full border border-black/20 shadow-sm transition-colors duration-500 group-hover:scale-110"
          style={{ backgroundColor: metalColor }}
        />
      </motion.div>

    </button>
  );
}
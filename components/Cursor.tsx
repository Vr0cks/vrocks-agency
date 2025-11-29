// components/Cursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse pozisyon değerleri
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Yaylanma efektleri (Peşinden gelme hissi için)
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // 16 = Halkanın yarıçapı (ortalamak için)
      cursorY.set(e.clientY - 16);
      
      // Sayfaya ilk girişte imleci görünür yap
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  // Mobil cihazlarda özel cursor'ı kapatıyoruz (Dokunmatik ekranda gerek yok)
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* --- ANA HALKA (Peşinden gelen) --- */}
      <motion.div
        className="absolute w-8 h-8 border border-vintage-red rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* --- MERKEZ NOKTA (Gerçek pointer) --- */}
      <motion.div
        className="absolute w-2 h-2 bg-vintage-red rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 12, // Ortalamak için ince ayar
          translateY: 12,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
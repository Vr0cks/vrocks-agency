// components/FadeIn.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useLoading } from './LoadingContext';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export default function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false }: FadeInProps) {
  const { isLoading } = useLoading();

  // Yöne göre başlangıç değerleri
  let initial = {};
  switch (direction) {
    case 'up': initial = { opacity: 0, y: 40 }; break;
    case 'down': initial = { opacity: 0, y: -40 }; break;
    case 'left': initial = { opacity: 0, x: 40 }; break;
    case 'right': initial = { opacity: 0, x: -40 }; break;
    case 'none': initial = { opacity: 0 }; break;
  }

  // Preloader bitene kadar (isLoading=false olana kadar) animasyonu başlatma
  const shouldAnimate = !isLoading;

  return (
    <motion.div
      initial={initial}
      // DİKKAT: Burada viewport kontrolü de var. Hem loading bitmeli hem de görünmeli.
      whileInView={shouldAnimate ? { opacity: 1, x: 0, y: 0 } : undefined}
      animate={shouldAnimate ? undefined : initial} // Beklerken görünmez kal
      
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={fullWidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}
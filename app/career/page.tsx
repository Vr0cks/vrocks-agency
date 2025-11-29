// app/career/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Career() {
  return (
    <main className="bg-[#F0EAD6] dark:bg-[#0f0202] min-h-screen transition-colors duration-500 flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center px-6 relative overflow-hidden py-40">
        
        {/* Işık Efekti */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vintage-red/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-2xl mx-auto border border-[#1A1716]/10 dark:border-white/10 p-12 rounded-sm bg-[#1A1716]/5 dark:bg-white/[0.02] backdrop-blur-sm"
        >
          {/* İkon veya Büyük Yazı */}
          <div className="text-6xl mb-6">🚧</div>

          <h1 className="font-serif text-3xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-6">
            Henüz Tuğlaları Diziyoruz.
          </h1>
          
          <p className="text-[#1A1716]/70 dark:text-ash/80 text-sm md:text-base leading-relaxed font-light mb-8">
            Şu an ekibimiz kahve molas... şaka şaka. 
            Bu sayfayı mükemmelleştirmek için kodların arasında kaybolduk. 
            Yakında burada harika fırsatlar olacak.
          </p>

          <p className="text-vintage-red text-xs tracking-widest uppercase font-bold">
            — VR0CKS İNŞAAT EKİBİ
          </p>

        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
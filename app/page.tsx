// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Manifesto from '@/components/Manifesto';
import Works from '@/components/Works';
import Concierge from '@/components/Concierge';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import DirectContact from '@/components/DirectContact'; // EKSİK OLAN BUYDU

export default function Home() {
  return (
    // ZEMİN: Gündüz (#F0EAD6 - Krem), Gece (#0f0202 - Siyah)
    <main className="bg-[#F0EAD6] dark:bg-[#0f0202] min-h-screen relative selection:bg-vintage-red selection:text-white overflow-x-hidden transition-colors duration-700 ease-in-out">
      
      <Navbar />

      {/* --- 1. HERO --- */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden">
        
        {/* DOKU */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay"
          style={{
            backgroundImage: "url('/vintage-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* GÖLGELER VE IŞIKLAR */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0EAD6] dark:from-[#0f0202] via-transparent to-transparent pointer-events-none transition-colors duration-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-vintage-red/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-0 dark:opacity-100 transition-opacity duration-700" />
        
        <FadeIn direction="up">
          <div className="z-10 text-center flex flex-col items-center gap-8 max-w-4xl mx-auto mt-0 md:-mt-12 relative">
            
            <h2 className="text-vintage-red text-xs md:text-sm tracking-[0.5em] uppercase font-bold opacity-100 drop-shadow-md mb-2">
              Dıgıtal Craftsman
            </h2>
            
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-[#1A1716] dark:text-[#F2F0E6] tracking-tighter leading-none drop-shadow-2xl transition-colors duration-700">
              Less is <span className="italic text-vintage-red font-light">More.</span>
            </h1>
            
            <p className="font-sans text-[#1A1716]/80 dark:text-[#D4D4D4] max-w-lg mx-auto text-sm md:text-base leading-relaxed font-light px-4 drop-shadow-md transition-colors duration-700">
              Kodun matematiğini, tasarımın zarafetiyle harmanlıyoruz. Markanız için özel dikilmiş, dijital bir smokin.
            </p>

            <a 
              href="#concierge"
              className="mt-6 group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-vintage-red hover:bg-vintage-red transition-all duration-300"
            >
              <span className="relative text-xs tracking-[0.2em] uppercase font-bold text-vintage-red group-hover:text-white transition-colors">
                Projeyi Başlat
              </span>
            </a>

          </div>
        </FadeIn>

        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#1A1716] dark:text-[#888] animate-pulse font-semibold transition-colors duration-700">
            Keşfet
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-vintage-red to-transparent"></div>
        </motion.div>
      </section>

      {/* --- 2. MANIFESTO --- */}
      <Manifesto />

      {/* --- 3. WORKS (ESERLER) --- */}
      <Works />
      
      {/* --- 4. CONCIERGE (QUIZ) --- */}
      {/* ID: #concierge -> Navbar'daki 'Teklif Al' butonu buraya gelir */}
      <section id="concierge" className="py-24 border-t border-[#1a0303]/10 dark:border-white/5 bg-[#F0EAD6] dark:bg-[#0f0202] transition-colors duration-700">
        <FadeIn direction="up">
          <div className="text-center mb-16 px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1716] dark:text-white mb-4 transition-colors duration-700">
              Sizler için de <span className="text-vintage-red italic">tasarlayalım.</span>
            </h2>
            <p className="text-[#1A1716]/60 dark:text-ash/50 text-sm font-light max-w-md mx-auto transition-colors duration-700">
              Aşağıdaki asistanı kullanarak hayalinizdeki projeyi tarif edin, 
              detayları konuşmak için size ulaşalım.
            </p>
          </div>
        </FadeIn>
        <Concierge />
      </section>

      {/* --- 5. DIRECT CONTACT (KLASİK İLETİŞİM) --- */}
      {/* ID: #direct-contact -> Navbar'daki 'İletişim' linki buraya gelir */}
      {/* BURASI EKSİKTİ, ŞİMDİ EKLENDİ */}
      <DirectContact />

      {/* --- 6. FOOTER --- */}
      <Footer />

    </main>
  );
}
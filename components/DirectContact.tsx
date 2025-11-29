// components/DirectContact.tsx
'use client';

import { motion } from 'framer-motion';

export default function DirectContact() {
  return (
    // ZEMİN: Gündüz Krem (#F0EAD6), Gece Siyah (#0f0202)
    <section id="direct-contact" className="py-20 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] border-t border-[#1A1716]/10 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      {/* Işık Efekti */}
      <div className="absolute top-1/2 right-0 -translate-x-1/2 w-[500px] h-[500px] bg-vintage-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
        
        {/* SOL */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <h2 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold mb-4">
            Klasik Yöntem
          </h2>
          {/* BAŞLIK: Gündüz Siyah, Gece Beyaz */}
          <h3 className="font-serif text-3xl md:text-4xl text-[#1A1716] dark:text-[#F2F0E6] mb-6 transition-colors duration-500">
            Quizlerle aranız yok mu?
          </h3>
          {/* METİN: Gündüz Koyu, Gece Açık */}
          <p className="text-[#1A1716]/60 dark:text-white/50 text-sm leading-relaxed font-light transition-colors duration-500">
            Sorun değil. Bazen en iyi projeler basit bir "Merhaba" ile başlar. 
            Fiziksel sınırlara inanmıyoruz. Bize doğrudan e-posta gönderebilir, 
            projenizi dijital masamızda tartışabiliriz.
          </p>
        </motion.div>

        {/* SAĞ */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <span className="text-[10px] text-[#1A1716]/40 dark:text-white/30 uppercase tracking-[0.2em] transition-colors duration-500">
            E-Posta
          </span>
          
          <a 
            href="mailto:hello@vr0cks.com" 
            className="group relative inline-block"
          >
            {/* MAİL: Gündüz Siyah, Gece Beyaz */}
            <span className="font-serif text-4xl md:text-6xl text-[#1A1716] dark:text-white group-hover:text-vintage-red transition-colors duration-300">
              hello@vr0cks.com
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vintage-red transition-all duration-300 group-hover:w-full" />
          </a>

          <div className="mt-8 flex gap-12">
             <div>
                <span className="block text-[10px] text-[#1A1716]/40 dark:text-white/30 uppercase tracking-[0.2em] mb-1 transition-colors duration-500">Merkez (HQ)</span>
                <span className="text-[#1A1716]/70 dark:text-white/60 text-sm transition-colors duration-500">Ankara, TR (Remote)</span>
             </div>
             <div>
                <span className="block text-[10px] text-[#1A1716]/40 dark:text-white/30 uppercase tracking-[0.2em] mb-1 transition-colors duration-500">Telefon</span>
                <span className="text-[#1A1716]/70 dark:text-white/60 text-sm transition-colors duration-500">+90 555 000 00 00</span>
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
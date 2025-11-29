// components/Manifesto.tsx
'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    // ZEMİN: Gündüz Bej (#F0EAD6), Gece Siyah (bg-black)
    <section id="manifesto" className="relative py-24 md:py-40 px-6 bg-[#F0EAD6] dark:bg-black overflow-hidden transition-colors duration-700">
      
      {/* --- ARKA PLAN GÖRSELİ --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700"
        style={{
          backgroundImage: "url('/man-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 100px',
          backgroundRepeat: 'no-repeat',
          // AYAR: Resim karışım modunu değiştirdik.
          // Gündüz: opacity-10 (Çok silik, filigran gibi) + mix-blend-multiply (Kağıda baskı gibi)
          // Gece: opacity-60 (Daha belirgin) + normal
        }}
      >
        {/* CSS ile opacity kontrolü için class ekliyoruz */}
        <div className="w-full h-full opacity-10 dark:opacity-60 mix-blend-multiply dark:mix-blend-normal" />
      </div>

      {/* --- ÜST KÖPRÜ (GEÇİŞ) --- */}
      {/* Gündüz: Bejden Şeffafa | Gece: Kırmızıdan Şeffafa */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#F0EAD6] dark:from-[#1a0303] via-[#F0EAD6]/80 dark:via-[#1a0303]/80 to-transparent z-10 pointer-events-none transition-colors duration-700" />

      {/* --- ALT GEÇİŞ --- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0EAD6] dark:from-[#1a0303] to-transparent z-10 pointer-events-none transition-colors duration-700" />

      {/* --- SOL TARAFI OKUTMAK İÇİN PERDE --- */}
      {/* Gündüz: Beyaz perde | Gece: Siyah perde */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F0EAD6]/90 dark:from-black/80 via-[#F0EAD6]/20 dark:via-black/20 to-transparent z-0 pointer-events-none transition-colors duration-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start relative z-20">
        
        {/* SOL TARAF */}
        <div className="relative">
          {/* Numara Rengi: Gündüz Koyu, Gece Açık */}
          <span 
            className="absolute -top-12 -left-6 md:-left-12 font-serif text-[#1A1716] dark:text-white leading-none select-none pointer-events-none transition-colors duration-700"
            style={{ fontSize: '12rem', opacity: 0.05, zIndex: 0 }}
          >
            01
          </span>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 pt-8"
          >
            {/* Başlık Rengi: Gündüz Koyu, Gece Beyaz */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#1A1716] dark:text-white leading-[1.15] drop-shadow-xl transition-colors duration-700">
              Kod yazmıyoruz, <br />
              <span className="text-vintage-red italic">dijital miras</span> <br />
              inşa ediyoruz.
            </h2>
          </motion.div>
        </div>

        {/* SAĞ TARAF */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-[#1A1716]/80 dark:text-[#F2F0E6] font-medium leading-relaxed text-sm md:text-base text-justify relative z-10 pt-4 md:pt-12 transition-colors duration-700"
        >
          <div className="md:pl-8 md:border-l border-[#1A1716]/10 dark:border-white/20 relative transition-colors duration-700">
            
            {/* Arkadaki Blur Lekesi: Gündüz Beyaz, Gece Siyah */}
            <div className="absolute -inset-6 bg-[#F0EAD6]/80 dark:bg-black/60 blur-3xl -z-10 rounded-full transition-colors duration-700" />

          <p className="mb-6 drop-shadow-sm font-medium">
              Biz <strong>Vr0cks</strong>. Dijital dünyada sıradanlığa yer olmadığına inanıyoruz.
              Markanız için sadece bir web sitesi değil, yaşayan ve nefes alan bir prestij inşa ediyoruz.
            </p>
            <p className="mb-6 drop-shadow-sm font-light">
              Karmaşık kodları, "Less is more" felsefesiyle yontarak zarif ve işlevsel sanat eserlerine dönüştürüyoruz.
              Hız, estetik ve kusursuzluk bizim standartımız.
            </p>
            <p className="drop-shadow-sm font-light">
              Sizin için detaylara takılıyoruz, böylece siz sadece sonucun keyfini çıkarıyorsunuz.
            </p>
            <div className="pt-8 mt-4">
              <span className="font-serif text-xl text-vintage-red block drop-shadow-sm">Yiğit Canlı.</span>
              <span className="text-[10px] text-[#1A1716]/50 dark:text-white/50 uppercase tracking-[0.2em] transition-colors duration-700">Founder & Head of Design</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
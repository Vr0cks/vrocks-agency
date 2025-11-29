// components/Footer.tsx
'use client';

import Link from 'next/link';
import FadeIn from './FadeIn'; // FadeIn'i sadece üst kısımlarda kullanacağız

export default function Footer() {
  return (
    // ZEMİN: Gündüz Krem, Gece Koyu Vişne
    // pb-10 yerine pb-20 yaptık ki en altta boşluk kalsın, yazılar sıkışmasın
    <footer className="relative pt-32 pb-20 px-6 bg-[#F0EAD6] dark:bg-[#1a0303] overflow-hidden border-t border-[#1A1716]/10 dark:border-white/5 transition-colors duration-500">
      
      {/* --- ARKA PLAN GÖRSELİ (KEDİ) --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity"
        style={{
          backgroundImage: "url('/cat-bg.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* --- GRADYAN PERDE --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0EAD6] dark:from-[#1a0303] via-[#F0EAD6]/90 dark:via-[#1a0303]/90 to-transparent z-0 pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- GRID YAPISI --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Sütun 1: Marka */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <h2 className="font-serif text-2xl tracking-[0.2em] font-black text-[#1A1716] dark:text-white transition-colors duration-500">
                VR0CKS<span className="text-vintage-red">.</span>
              </h2>
            </Link>
            <p className="text-[#1A1716]/60 dark:text-white/50 text-xs leading-relaxed font-light transition-colors duration-500">
              Sıradanlığa meydan okuyan markalar için; Ankara merkezli, global vizyonlu, ödüllü dijital tasarım ve yazılım stüdyosu.
            </p>
          </div>

          {/* Sütun 2: Kurumsal */}
          <div className="space-y-6">
            <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">Kurumsal</h3>
            <ul className="space-y-4 text-xs text-[#1A1716]/70 dark:text-white/60 font-medium">
              <li><Link href="#manifesto" className="hover:text-vintage-red transition-colors">Manifesto</Link></li>
              <li><Link href="#works" className="hover:text-vintage-red transition-colors">Projeler</Link></li>
              <li><Link href="/career" className="hover:text-vintage-red transition-colors">Kariyer</Link></li>
              <li><Link href="#direct-contact" className="hover:text-vintage-red transition-colors">İletişim</Link></li>
            </ul>
          </div>

         {/* Sütun 3: Yasal */}
          <div className="space-y-6">
            <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">Yasal</h3>
            <ul className="space-y-4 text-xs text-[#1A1716]/70 dark:text-white/60 font-medium">
              {/* SSS LİNKİ EKLENDİ */}
              <li><Link href="/faq" className="hover:text-vintage-red transition-colors">S.S.S (FAQ)</Link></li>
              
              {/* GİZLİLİK LİNKİ EKLENDİ */}
              <li><Link href="/privacy" className="hover:text-vintage-red transition-colors">Gizlilik Politikası</Link></li>
              
              {/* Diğerlerine de aynı şablonu kopyalayıp (/terms gibi) açabilirsin */}
              <li><Link href="/terms" className="hover:text-vintage-red transition-colors">Kullanım Koşulları</Link></li>
            </ul>
          </div>
          {/* Sütun 4: Takip Et & Müzik */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">Takip Et</h3>
              <ul className="space-y-4 text-xs text-[#1A1716]/70 dark:text-white/60 font-medium">
                <li><a href="https://github.com/Vr0cks" target="_blank" className="hover:text-vintage-red transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-vintage-red transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-vintage-red transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-vintage-red transition-colors">YouTube</a></li>
              </ul>
            </div>

            {/* MÜZİK KUTUSU */}
            <div className="space-y-4">
               <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                 <span>Bizimle Dinleyin</span>
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vintage-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-vintage-red"></span>
                  </span>
               </h3>
               <a 
                 href="https://open.spotify.com/playlist/277rLFLbTBqo1xUbAWgzbG?si=2f7ae5324eea4798" // Gerçek Jazz Vibes linki
                 target="_blank"
                 className="group flex items-center gap-4 p-3 border border-[#1A1716]/10 dark:border-white/10 rounded-sm hover:border-vintage-red transition-colors bg-white/5"
               >
                 <div className="w-8 h-8 bg-vintage-red rounded-full flex items-center justify-center text-white text-xs">
                   ♫
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold text-[#1A1716] dark:text-white group-hover:text-vintage-red transition-colors">
                     Ajans Seçkisi
                   </span>
                   <span className="text-[9px] text-[#1A1716]/50 dark:text-white/40">
                     Whiskey Blues
                   </span>
                 </div>
               </a>
            </div>
          </div>

        </div>

        {/* --- AYIRICI ÇİZGİ --- */}
        <div className="h-px w-full bg-[#1A1716]/10 dark:bg-white/10 mb-8 transition-colors duration-500" />

        {/* --- ALT İMZA (Animasyonsuz - Garantili Görünüm) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          {/* Copyright: Rengi açtık (opacity-60) ve FadeIn kaldırdık */}
          <p className="text-[10px] text-[#1A1716]/60 dark:text-white/60 uppercase tracking-[0.2em] transition-colors duration-500">
            © 2025 VR0CKS AGENCY — TÜM HAKLARI SAKLIDIR.
          </p>

          {/* İmza: Rengi açtık (opacity-60) ve FadeIn kaldırdık */}
          <p className="text-[10px] text-[#1A1716]/60 dark:text-white/60 uppercase tracking-[0.2em] transition-colors duration-500">
            EST. ANKARA — <span className="text-vintage-red font-bold">DIGITAL CRAFTSMANSHIP</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
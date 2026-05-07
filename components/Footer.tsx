// components/Footer.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    // ZEMİN: Gündüz Krem, Gece Koyu Vişne
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
                VR<span className="font-sans font-bold">0</span>CKS<span className="text-vintage-red">.</span>
              </h2>
            </Link>
            <p className="text-[#1A1716]/60 dark:text-white/50 text-xs leading-relaxed font-light transition-colors duration-500">
              {t('brandDescription')}
            </p>
          </div>

          {/* Sütun 2: Kurumsal */}
          <div className="space-y-6">
            <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">{t('corporate')}</h3>
            <ul className="space-y-4 text-xs text-[#1A1716]/70 dark:text-white/60 font-medium">
              <li><a href="#manifesto" className="hover:text-vintage-red transition-colors">Manifesto</a></li>
              <li><a href="#works" className="hover:text-vintage-red transition-colors">{t('projects')}</a></li>
              <li><Link href="/career" className="hover:text-vintage-red transition-colors">{t('career')}</Link></li>
              <li><a href="#direct-contact" className="hover:text-vintage-red transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Sütun 3: Yasal */}
          <div className="space-y-6">
            <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">{t('legal')}</h3>
            <ul className="space-y-4 text-xs text-[#1A1716]/70 dark:text-white/60 font-medium">
              <li><Link href="/faq" className="hover:text-vintage-red transition-colors">{t('faq')}</Link></li>
              <li><Link href="/privacy" className="hover:text-vintage-red transition-colors">{t('privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-vintage-red transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>

          {/* Sütun 4: Takip Et & Müzik */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-vintage-red text-xs tracking-[0.2em] uppercase font-bold">{t('followUs')}</h3>
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
                <span>{t('listenWithUs')}</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vintage-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-vintage-red"></span>
                </span>
              </h3>
              <a
                href="https://open.spotify.com/playlist/277rLFLbTBqo1xUbAWgzbG?si=2f7ae5324eea4798"
                target="_blank"
                className="group flex items-center gap-4 p-3 border border-[#1A1716]/10 dark:border-white/10 rounded-sm hover:border-vintage-red transition-colors bg-white/5"
              >
                <div className="w-8 h-8 bg-vintage-red rounded-full flex items-center justify-center text-white text-xs">
                  ♫
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#1A1716] dark:text-white group-hover:text-vintage-red transition-colors">
                    {t('agencyPlaylist')}
                  </span>
                  <span className="text-[9px] text-[#1A1716]/50 dark:text-white/40">
                    {t('playlistName')}
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* --- AYIRICI ÇİZGİ --- */}
        <div className="h-px w-full bg-[#1A1716]/10 dark:bg-white/10 mb-8 transition-colors duration-500" />

        {/* --- ALT İMZA --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-[10px] text-[#1A1716]/60 dark:text-white/60 uppercase tracking-[0.2em] transition-colors duration-500">
            {t('copyright')}
          </p>

          <p className="text-[10px] text-[#1A1716]/60 dark:text-white/60 uppercase tracking-[0.2em] transition-colors duration-500">
            {t('signature')} <span className="text-vintage-red font-bold">{t('signatureAccent')}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
// components/Team.tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/FadeIn';

export default function Team() {
  const t = useTranslations('team');

  return (
    <section
      id="team"
      className="relative py-32 px-6 bg-[#EAE5D1] dark:bg-[#0f0202] overflow-hidden transition-colors duration-700 border-t border-[#1A1716]/10 dark:border-white/5"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

      {/* Ambient red glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vintage-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <FadeIn direction="up">
          <div className="mb-20">
            <p className="text-vintage-red text-[10px] tracking-[0.5em] uppercase font-bold mb-4">
              {t('subtitle')}
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-[#1A1716] dark:text-[#F2F0E6] mb-6 drop-shadow-lg transition-colors duration-700">
              {t('title')} <span className="italic text-vintage-red">{t('titleAccent')}</span>
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-vintage-red to-transparent opacity-50" />
          </div>
        </FadeIn>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <a
            href="https://yigit.vr0cks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <div className="
              relative p-10 md:p-14
              bg-[#F0EAD6] dark:bg-gradient-to-b dark:from-[#2a0e0e] dark:to-[#050101]
              border border-[#1A1716]/10 dark:border-white/5
              hover:border-vintage-red/50
              rounded-sm
              shadow-xl shadow-[#1A1716]/5 dark:shadow-black/50
              transition-all duration-500 ease-out
              group-hover:-translate-y-2
              group-hover:shadow-[0_30px_60px_-20px_rgba(196,62,54,0.2)]
            ">
              {/* Grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-sm"
                style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
              />

              {/* Animated corner borders */}
              <div className="absolute top-0 right-0 w-0 h-[1px] bg-vintage-red transition-all duration-500 group-hover:w-full" />
              <div className="absolute top-0 right-0 w-[1px] h-0 bg-vintage-red transition-all duration-500 group-hover:h-full" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-vintage-red transition-all duration-500 group-hover:w-full" />
              <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-vintage-red transition-all duration-500 group-hover:h-full" />

              {/* Role badge */}
              <div className="flex items-center justify-between mb-10 relative">
                <span className="text-[10px] tracking-[0.3em] text-vintage-red uppercase font-bold">
                  {t('role')}
                </span>
                <span className="text-xs font-serif text-[#1A1716]/40 dark:text-white/30 border border-[#1A1716]/10 dark:border-white/10 px-3 py-1 rounded-sm group-hover:text-vintage-red group-hover:border-vintage-red/30 transition-colors">
                  {t('since')}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-serif text-4xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-3 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
                Yiğit Canlı<span className="text-vintage-red">.</span>
              </h3>

              {/* Title */}
              <p className="text-sm tracking-[0.15em] text-[#1A1716]/60 dark:text-white/50 uppercase font-medium mb-8 transition-colors">
                {t('title2')}
              </p>

              {/* Bio */}
              <p className="text-[#1A1716]/70 dark:text-white/60 text-sm md:text-base leading-relaxed font-light mb-10 group-hover:text-[#1A1716] dark:group-hover:text-white/80 transition-colors max-w-lg">
                {t('bio')}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.2em] uppercase border border-[#1A1716]/15 dark:border-white/10 px-3 py-1.5 text-[#1A1716]/60 dark:text-white/40 group-hover:border-vintage-red/30 group-hover:text-vintage-red transition-all rounded-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 text-vintage-red text-xs tracking-[0.25em] uppercase font-bold opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span>{t('viewPortfolio')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

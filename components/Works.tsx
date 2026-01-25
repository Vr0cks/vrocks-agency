// components/Works.tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Works() {
  const t = useTranslations('works');
  const tProjects = useTranslations('projects');

  // Project data with links (links don't need translation)
  const projects = [
    {
      id: 1,
      titleKey: 'luxeSpaces.title',
      categoryKey: 'luxeSpaces.category',
      descriptionKey: 'luxeSpaces.description',
      year: "2025",
      link: "https://vr0cks.github.io/LUXE-SPACES/",
    },
    {
      id: 2,
      titleKey: 'unitedFb.title',
      categoryKey: 'unitedFb.category',
      descriptionKey: 'unitedFb.description',
      year: "2024",
      link: "https://united-fenerbah-e-fans-association.vercel.app",
    },
    {
      id: 3,
      titleKey: 'kocRealEstate.title',
      categoryKey: 'kocRealEstate.category',
      descriptionKey: 'kocRealEstate.description',
      year: "2024",
      link: "https://koc-real-estate-agency-website.vercel.app",
    },
  ];

  return (
    // ZEMİN: Gündüz Krem, Gece Siyah
    <section id="works" className="relative py-32 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] overflow-hidden transition-colors duration-700">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vintage-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-[#1A1716] dark:text-[#F2F0E6] mb-6 drop-shadow-lg transition-colors duration-700">
            {t('title')} <span className="italic text-vintage-red">{t('titleAccent')}</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-vintage-red to-transparent opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative"
            >
              <div className="
                relative h-full p-10 
                bg-[#EAE5D1] dark:bg-gradient-to-b dark:from-[#2a0e0e] dark:to-[#050101]
                border border-[#1A1716]/10 dark:border-white/5 
                hover:border-vintage-red/40
                rounded-sm
                shadow-xl shadow-[#1A1716]/5 dark:shadow-black/50
                transition-all duration-500 ease-out
                
                group-hover:-translate-y-2
                group-hover:shadow-[0_20px_40px_-15px_rgba(196,62,54,0.15)]
              ">

                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
                />

                <div className="absolute top-0 right-0 w-0 h-[1px] bg-vintage-red transition-all duration-500 group-hover:w-full" />
                <div className="absolute top-0 right-0 w-[1px] h-0 bg-vintage-red transition-all duration-500 group-hover:h-full" />

                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] tracking-[0.2em] text-[#1A1716]/60 dark:text-white/50 uppercase font-bold group-hover:text-vintage-red transition-colors">
                    {tProjects(project.categoryKey)}
                  </span>
                  <span className="text-xs font-serif text-[#1A1716]/40 dark:text-white/30 border border-[#1A1716]/10 dark:border-white/10 px-2 py-1 rounded-sm group-hover:text-vintage-red group-hover:border-vintage-red/30 transition-colors">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-[#1A1716] dark:text-[#F2F0E6] mb-6 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {tProjects(project.titleKey)}
                </h3>

                <p className="text-[#1A1716]/70 dark:text-white/60 text-sm leading-relaxed font-light mb-8 group-hover:text-[#1A1716] dark:group-hover:text-white/80 transition-colors">
                  {tProjects(project.descriptionKey)}
                </p>

                <div className="flex items-center gap-2 text-vintage-red text-xs tracking-widest uppercase opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>{t('viewProject')}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
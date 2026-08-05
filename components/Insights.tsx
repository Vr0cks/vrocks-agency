// components/Insights.tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Link } from '@/i18n/navigation';

export default function Insights() {
  const t = useTranslations('insights');

  const posts = [
    {
      id: 1,
      slug: "peony-collective-digital-aesthetics",
      date: "2025.06.01",
      readTime: "5 min",
      titleKey: "peonyArticle.title",
      excerptKey: "peonyArticle.excerpt",
    },
    {
      id: 2,
      slug: "minimalism-digital-noise",
      date: "2025.05.01",
      readTime: "4 min",
      titleKey: "minimalism.title",
      excerptKey: "minimalism.excerpt",
    },
    {
      id: 3,
      slug: "why-nextjs",
      date: "2025.04.15",
      readTime: "6 min",
      titleKey: "nextjs.title",
      excerptKey: "nextjs.excerpt",
    },
    {
      id: 4,
      slug: "luxury-digital-trust",
      date: "2025.03.28",
      readTime: "5 min",
      titleKey: "luxury.title",
      excerptKey: "luxury.excerpt",
    }
  ];

  return (
    <section id="insights" className="relative py-32 px-6 bg-aged-paper dark:bg-[#0a0101] overflow-hidden transition-colors duration-700">
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-charcoal/5 dark:bg-white/5" />
      <div className="absolute top-0 right-0 w-px h-full bg-charcoal/5 dark:bg-white/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-7xl text-[#1A1716] dark:text-[#F2F0E6] mb-4">
              {t('title')} <span className="italic text-vintage-red">{t('titleAccent')}</span>
            </h2>
            <p className="text-charcoal/60 dark:text-white/40 max-w-md uppercase tracking-widest text-[10px] font-bold">
              {t('subtitle')}
            </p>
          </div>
          <div className="h-px flex-1 bg-charcoal/10 dark:bg-white/10 hidden md:block mb-4 mx-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-charcoal/10 dark:border-white/10">
          {posts.map((post, index) => (
            <Link
              href={`/insights/${post.slug}`}
              key={post.id}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full p-10 border-b md:border-b-0 md:border-r border-charcoal/10 dark:border-white/10 last:border-0 hover:bg-vintage-red/5 transition-colors duration-500 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-[10px] font-bold tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-vintage-red transition-all">
                    {post.date}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest opacity-30">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl mb-6 text-charcoal dark:text-white group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                  {t(post.titleKey)}
                </h3>
                
                <p className="text-charcoal/60 dark:text-white/40 text-sm leading-relaxed mb-10 line-clamp-3">
                  {t(post.excerptKey)}
                </p>

                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-vintage-red opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>{t('readMore')}</span>
                  <div className="w-8 h-px bg-vintage-red" />
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-vintage-red opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

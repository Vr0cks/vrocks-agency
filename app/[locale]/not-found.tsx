// app/[locale]/not-found.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#F0EAD6] dark:bg-[#0f0202] text-center transition-colors duration-500">

            {/* Arka plan dokusu */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
                style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="font-serif text-[10rem] md:text-[15rem] leading-none font-black text-vintage-red opacity-20 select-none">
                    404
                </h1>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <h2 className="font-serif text-3xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-[#1A1716]/60 dark:text-ash/60 text-sm font-light max-w-md mx-auto mb-8">
                        {t('description')}
                    </p>

                    <Link
                        href="/"
                        className="
              inline-block px-8 py-3 border border-vintage-red 
              text-xs tracking-[0.2em] uppercase font-bold
              text-vintage-red hover:bg-vintage-red hover:text-white
              transition-all duration-300 rounded-sm
            "
                    >
                        {t('backHome')}
                    </Link>
                </div>
            </motion.div>

        </main>
    );
}

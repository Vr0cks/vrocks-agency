// components/pages/FAQPage.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQPage() {
    const t = useTranslations('faq');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Get FAQ items from translations
    const faqItems = t.raw('items') as Array<{ question: string; answer: string }>;

    return (
        <main className="bg-[#F0EAD6] dark:bg-[#0f0202] min-h-screen transition-colors duration-500 flex flex-col">
            <Navbar />

            <div className="flex-grow min-h-screen pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">

                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h1 className="font-serif text-4xl md:text-6xl text-[#1A1716] dark:text-[#F2F0E6] mb-6">
                                {t('title')}
                            </h1>
                            <p className="text-[#1A1716]/60 dark:text-ash/60 text-sm font-light max-w-lg mx-auto">
                                {t('subtitle')}
                            </p>
                        </div>
                    </FadeIn>

                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
                            <FadeIn key={index} direction="up" delay={index * 0.1}>
                                <div
                                    className={`
                    group border rounded-sm transition-all duration-300
                    ${openIndex === index
                                            ? 'border-vintage-red bg-[#1A1716]/5 dark:bg-white/5'
                                            : 'border-[#1A1716]/10 dark:border-white/10 hover:border-vintage-red/50'}
                  `}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <span className={`font-serif text-lg ${openIndex === index ? 'text-vintage-red' : 'text-[#1A1716] dark:text-[#F2F0E6]'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-vintage-red' : 'text-[#1A1716]/40 dark:text-white/40'}`}>
                                            +
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-sm text-[#1A1716]/70 dark:text-ash/80 leading-relaxed font-light">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}

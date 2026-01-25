// components/pages/PrivacyPage.tsx
'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    const t = useTranslations('privacy');

    // Get list items from translations
    const listItems = t.raw('section2List') as string[];

    return (
        <main className="bg-[#F0EAD6] dark:bg-[#0f0202] min-h-screen transition-colors duration-500 flex flex-col">
            <Navbar />

            <div className="flex-grow min-h-screen pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">

                    {/* BAŞLIK */}
                    <h1 className="font-serif text-4xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-12">
                        {t('title')}
                    </h1>

                    {/* İÇERİK */}
                    <div className="prose prose-sm md:prose-base max-w-none font-light text-[#1A1716]/80 dark:text-ash/80">
                        <p className="mb-8"><strong>{t('lastUpdate')}</strong> {t('lastUpdateDate')}</p>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section1Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section1Content')}
                        </p>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section2Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section2Content')}
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4 mb-4 marker:text-vintage-red">
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section3Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section3Content')}
                        </p>

                        <div className="mt-12 p-6 border border-vintage-red/20 rounded-sm bg-[#1A1716]/5 dark:bg-white/5">
                            <p className="text-xs">
                                {t('contactNote')} <a href={`mailto:${t('contactEmail')}`} className="text-vintage-red underline font-bold">{t('contactEmail')}</a> {t('contactSuffix')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}

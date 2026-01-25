// components/pages/TermsPage.tsx
'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    const t = useTranslations('terms');

    return (
        <main className="bg-[#F0EAD6] dark:bg-[#0f0202] min-h-screen transition-colors duration-500 flex flex-col">
            <Navbar />

            <div className="flex-grow min-h-screen pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">

                    <h1 className="font-serif text-4xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-12">
                        {t('title')}
                    </h1>

                    <div className="prose prose-sm md:prose-base max-w-none font-light text-[#1A1716]/80 dark:text-ash/80">
                        <p className="mb-8"><strong>{t('effectiveDate')}</strong> {t('effectiveDateValue')}</p>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section1Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section1Content')}
                        </p>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section2Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section2Content')}
                        </p>

                        <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">{t('section3Title')}</h3>
                        <p className="mb-4 leading-relaxed">
                            {t('section3Content')}
                        </p>

                        <div className="mt-12 p-6 border border-vintage-red/20 rounded-sm bg-[#1A1716]/5 dark:bg-white/5">
                            <p className="text-xs">
                                {t('legalNote')} <a href={`mailto:${t('legalEmail')}`} className="text-vintage-red underline font-bold">{t('legalEmail')}</a> {t('legalSuffix')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}

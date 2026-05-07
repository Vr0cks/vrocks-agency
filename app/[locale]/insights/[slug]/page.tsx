// app/[locale]/insights/[slug]/page.tsx
import { useTranslations } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DirectContact from '@/components/DirectContact';
import FadeIn from '@/components/FadeIn';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Valid slugs
const VALID_SLUGS = ['minimalism-digital-noise', 'why-nextjs', 'luxury-digital-trust'];

export default async function InsightDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Validate slug
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // We use useTranslations in a Server Component by calling it here
  // But since we need dynamic keys based on slug, we'll use the 'insights.articles' namespace
  // We'll map the slug to a key
  const articleKey = slug.split('-')[0]; // 'minimalism', 'why', 'luxury'
  // Wait, 'why-nextjs' -> 'why'. I'll just map them manually.
  const slugToKey: Record<string, string> = {
    'minimalism-digital-noise': 'minimalism',
    'why-nextjs': 'nextjs',
    'luxury-digital-trust': 'luxury'
  };
  
  const key = slugToKey[slug];

  return (
    <main className="bg-aged-paper dark:bg-[#0f0202] min-h-screen transition-colors duration-700">
      <Navbar />

      <article className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <header className="mb-16">
            <div className="flex items-center gap-4 text-vintage-red text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <span>Insight</span>
              <div className="w-8 h-px bg-vintage-red" />
              <span className="text-charcoal/40 dark:text-white/40">Blog</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl text-[#1A1716] dark:text-[#F2F0E6] mb-8 leading-[1.1]">
              <InsightTitle locale={locale} articleKey={key} />
            </h1>

            <div className="flex items-center gap-8 border-y border-charcoal/10 dark:border-white/10 py-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest opacity-40"><InsightLabel locale={locale} labelKey="author" /></span>
                <span className="text-xs font-serif italic">Ahmet Yiğit Canlı</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest opacity-40"><InsightLabel locale={locale} labelKey="date" /></span>
                <span className="text-xs font-serif opacity-70"><InsightDate locale={locale} articleKey={key} /></span>
              </div>
            </div>
          </header>

          <div className="prose prose-sm md:prose-base dark:prose-invert prose-serif max-w-none">
            <InsightContent locale={locale} articleKey={key} />
          </div>
        </FadeIn>
      </article>

      <DirectContact />
      <Footer />
    </main>
  );
}

// Helper components to access translations in Server Component
// In Next-Intl Server Components, we use useTranslations or await getTranslations
import { getTranslations } from 'next-intl/server';

async function InsightTitle({ locale, articleKey }: { locale: string; articleKey: string }) {
  const t = await getTranslations({ locale, namespace: 'insights' });
  return t(`${articleKey}.title`);
}

async function InsightDate({ locale, articleKey }: { locale: string; articleKey: string }) {
  // We'll just use a static date for now or fetch from a manifest
  const dates: Record<string, string> = {
    'minimalism': '2025.05.01',
    'nextjs': '2025.04.15',
    'luxury': '2025.03.28'
  };
  return dates[articleKey];
}

async function InsightContent({ locale, articleKey }: { locale: string; articleKey: string }) {
  const t = await getTranslations({ locale, namespace: 'insights' });
  // We'll store the content as a string with \n for paragraphs
  const content = t(`${articleKey}.content`);
  return (
    <div className="text-charcoal/80 dark:text-white/70 leading-[1.8] space-y-8 font-light text-lg">
      {content.split('\n\n').map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

async function InsightLabel({ locale, labelKey }: { locale: string; labelKey: string }) {
  const t = await getTranslations({ locale, namespace: 'insights' });
  return t(labelKey);
}

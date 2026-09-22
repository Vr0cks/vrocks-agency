// app/[locale]/insights/[slug]/page.tsx
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DirectContact from '@/components/DirectContact';
import FadeIn from '@/components/FadeIn';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Valid slugs
const VALID_SLUGS = ['invisible-maintenance', 'peony-collective-digital-aesthetics', 'minimalism-digital-noise', 'why-nextjs', 'luxury-digital-trust'];

const SLUG_TO_KEY: Record<string, string> = {
  'invisible-maintenance': 'maintenance',
  'peony-collective-digital-aesthetics': 'peonyArticle',
  'minimalism-digital-noise': 'minimalism',
  'why-nextjs': 'nextjs',
  'luxury-digital-trust': 'luxury'
};

const ARTICLE_DATES: Record<string, string> = {
  'maintenance': '2026.09.22',
  'peonyArticle': '2025.06.01',
  'minimalism': '2025.05.01',
  'nextjs': '2025.04.15',
  'luxury': '2025.03.28'
};

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = SLUG_TO_KEY[slug];
  if (!key) return buildMetadata(locale, 'insights');

  const t = await getTranslations({ locale, namespace: 'insights' });
  return buildMetadata(locale, 'insights', {
    title: `${t(`${key}.title`)} | VR0CKS`,
    description: t(`${key}.excerpt`),
    path: `/insights/${slug}`
  });
}

export default async function InsightDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Validate slug
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const key = SLUG_TO_KEY[slug];

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
                <span className="text-xs font-serif opacity-70"><InsightDate articleKey={key} /></span>
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
async function InsightTitle({ locale, articleKey }: { locale: string; articleKey: string }) {
  const t = await getTranslations({ locale, namespace: 'insights' });
  return t(`${articleKey}.title`);
}

async function InsightDate({ articleKey }: { articleKey: string }) {
  return ARTICLE_DATES[articleKey];
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

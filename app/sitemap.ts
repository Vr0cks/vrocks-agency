// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/seo';

const PAGES = ['', '/faq', '/privacy', '/terms'];

const ARTICLES = [
    'invisible-maintenance',
    'peony-collective-digital-aesthetics',
    'minimalism-digital-noise',
    'why-nextjs',
    'luxury-digital-trust',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [...PAGES, ...ARTICLES.map((slug) => `/insights/${slug}`)];

    return paths.flatMap((path) =>
        routing.locales.map((locale) => ({
            url: `${SITE_URL}/${locale}${path}`,
            lastModified: new Date(),
            changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const),
            priority: path === '' ? 1 : 0.7,
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
                ),
            },
        }))
    );
}

// lib/seo.ts
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export const SITE_URL = 'https://www.vr0cks.com';

const OG_LOCALES: Record<string, string> = {
    tr: 'tr_TR',
    en: 'en_US',
    de: 'de_DE',
};

/** Builds the hreflang map Google uses to tie the three locales together. */
function languageAlternates(path: string) {
    return Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
    );
}

type PageKey = 'career' | 'faq' | 'privacy' | 'terms' | 'insights';

/**
 * Metadata for a localized page. Pass no `page` for the home page, otherwise
 * the key under `metadata.pages` in the message files.
 */
export async function buildMetadata(
    locale: string,
    page?: PageKey,
    overrides?: { title?: string; description?: string; path?: string }
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    const brand = t('title');
    const path = overrides?.path ?? (page ? `/${page}` : '');

    const title =
        overrides?.title ??
        (page ? `${t(`pages.${page}.title`)} | VR0CKS` : brand);
    const description =
        overrides?.description ??
        (page ? t(`pages.${page}.description`) : t('description'));

    const url = `${SITE_URL}/${locale}${path}`;

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        alternates: {
            canonical: url,
            languages: languageAlternates(path),
        },
        openGraph: {
            title,
            description: page ? description : t('ogDescription'),
            url,
            siteName: 'VR0CKS',
            type: 'website',
            locale: OG_LOCALES[locale] ?? 'tr_TR',
            images: [{ url: '/vrc-logo.png', width: 1200, height: 630, alt: 'VR0CKS' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/vrc-logo.png'],
        },
    };
}

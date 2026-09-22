// app/[locale]/faq/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import FAQPage from '@/components/pages/FAQPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(locale, 'faq');
}

export default async function FAQ({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FAQPage />;
}

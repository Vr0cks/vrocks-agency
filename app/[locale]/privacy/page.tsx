// app/[locale]/privacy/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import PrivacyPage from '@/components/pages/PrivacyPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(locale, 'privacy');
}

export default async function Privacy({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PrivacyPage />;
}

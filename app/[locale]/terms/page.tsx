// app/[locale]/terms/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import TermsPage from '@/components/pages/TermsPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(locale, 'terms');
}

export default async function Terms({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <TermsPage />;
}

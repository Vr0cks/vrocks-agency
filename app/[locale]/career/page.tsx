// app/[locale]/career/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import CareerPage from '@/components/pages/CareerPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(locale, 'career');
}

export default async function Career({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <CareerPage />;
}

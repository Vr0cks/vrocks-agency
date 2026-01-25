// app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import HomePage from '@/components/pages/HomePage';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <HomePage />;
}

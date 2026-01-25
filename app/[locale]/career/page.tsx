// app/[locale]/career/page.tsx
import { setRequestLocale } from 'next-intl/server';
import CareerPage from '@/components/pages/CareerPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function Career({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <CareerPage />;
}

// app/[locale]/privacy/page.tsx
import { setRequestLocale } from 'next-intl/server';
import PrivacyPage from '@/components/pages/PrivacyPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function Privacy({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PrivacyPage />;
}

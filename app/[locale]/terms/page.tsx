// app/[locale]/terms/page.tsx
import { setRequestLocale } from 'next-intl/server';
import TermsPage from '@/components/pages/TermsPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function Terms({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <TermsPage />;
}

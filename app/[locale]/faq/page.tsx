// app/[locale]/faq/page.tsx
import { setRequestLocale } from 'next-intl/server';
import FAQPage from '@/components/pages/FAQPage';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function FAQ({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FAQPage />;
}

// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingContext";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import CookieConsent from "@/components/CookieConsent";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

// --- SEO VE META VERİLERİ ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const base = await buildMetadata(locale);

    return {
        ...base,
        keywords: ["Web Tasarım", "Ankara", "Next.js", "UI/UX", "Digital Agency", "Yazılım Ajansı", "Kurumsal Kimlik", "React"],
        authors: [{ name: "Yiğit Canlı", url: "https://yigit.vr0cks.com" }],
        creator: "VR0CKS Agency",
        icons: {
            icon: '/vrc-logo.png',
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: Props) {
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client side
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
            <body className="bg-aged-paper text-charcoal dark:bg-[#0f0202] dark:text-ash antialiased min-h-screen transition-colors duration-500">

                <LoadingProvider>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
                        <NextIntlClientProvider messages={messages}>

                            {/* SİNEMATİK ELEMENTLER */}
                            <Preloader />
                            <Cursor />
                            <CookieConsent />

                            {/* SAYFA İÇERİĞİ */}
                            {children}

                        </NextIntlClientProvider>
                    </ThemeProvider>
                </LoadingProvider>

            </body>
        </html>
    );
}

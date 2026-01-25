// components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const locales = routing.locales.map((code) => ({
        code,
        label: code.toUpperCase()
    }));

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-1 text-[10px] tracking-widest">
            {locales.map((l, i) => (
                <span key={l.code} className="flex items-center">
                    <button
                        onClick={() => handleLocaleChange(l.code)}
                        className={`
              px-1.5 py-1 transition-colors duration-300 rounded-sm
              ${locale === l.code
                                ? 'text-vintage-red font-bold'
                                : 'text-charcoal/50 dark:text-white/50 hover:text-vintage-red dark:hover:text-vintage-red'}
            `}
                    >
                        {l.label}
                    </button>
                    {i < locales.length - 1 && (
                        <span className="text-charcoal/20 dark:text-white/20">|</span>
                    )}
                </span>
            ))}
        </div>
    );
}

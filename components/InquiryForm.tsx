// components/InquiryForm.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { sendInquiry, type InquiryState } from '@/actions/sendInquiry';

const initialState: InquiryState = { status: 'idle' };

const fieldClass = `
  w-full bg-transparent border-b border-[#1A1716]/20 dark:border-white/15
  py-3 text-sm text-[#1A1716] dark:text-[#F2F0E6]
  placeholder:text-[#1A1716]/35 dark:placeholder:text-white/25
  focus:border-vintage-red focus:outline-none
  transition-colors duration-300
`;

function SubmitButton({ label, sendingLabel }: { label: string; sendingLabel: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="
        mt-2 px-8 py-4 bg-vintage-red text-white
        text-[10px] font-bold tracking-[0.3em] uppercase
        hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-300 rounded-sm
      "
        >
            {pending ? sendingLabel : label}
        </button>
    );
}

/**
 * `brief` carries the Concierge quiz answers when the form is rendered after
 * the quiz; on the standalone contact section it is simply absent.
 */
export default function InquiryForm({ brief }: { brief?: string }) {
    const t = useTranslations('inquiry');
    const [state, formAction] = useActionState(sendInquiry, initialState);

    if (state.status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-vintage-red/30 bg-vintage-red/5 p-8 rounded-sm text-center"
            >
                <p className="text-vintage-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
                    {t('successTitle')}
                </p>
                <p className="text-[#1A1716]/70 dark:text-white/60 text-sm font-light leading-relaxed">
                    {t('successBody')}
                </p>
            </motion.div>
        );
    }

    return (
        <form action={formAction} className="flex flex-col gap-6 w-full">
            {brief && <input type="hidden" name="brief" value={brief} />}

            <div className="flex flex-col gap-2">
                <label htmlFor="inquiry-name" className="text-[10px] uppercase tracking-[0.25em] text-[#1A1716]/50 dark:text-white/40">
                    {t('nameLabel')}
                </label>
                <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder={t('namePlaceholder')}
                    className={fieldClass}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="inquiry-email" className="text-[10px] uppercase tracking-[0.25em] text-[#1A1716]/50 dark:text-white/40">
                    {t('emailLabel')}
                </label>
                <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    placeholder={t('emailPlaceholder')}
                    className={fieldClass}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="inquiry-message" className="text-[10px] uppercase tracking-[0.25em] text-[#1A1716]/50 dark:text-white/40">
                    {t('messageLabel')}
                </label>
                <textarea
                    id="inquiry-message"
                    name="message"
                    required
                    rows={4}
                    maxLength={2000}
                    placeholder={t('messagePlaceholder')}
                    className={`${fieldClass} resize-none`}
                />
            </div>

            {state.status === 'error' && state.messageKey && (
                <p role="alert" className="text-xs text-vintage-red">
                    {t(`errors.${state.messageKey}`)}
                </p>
            )}

            <SubmitButton label={t('submit')} sendingLabel={t('sending')} />
        </form>
    );
}

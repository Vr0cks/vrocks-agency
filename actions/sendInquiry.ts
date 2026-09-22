"use server";

import { Resend } from "resend";
import { z } from "zod";

const TO_ADDRESS = "vr0cksdev@gmail.com";

const inquirySchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.email().max(200),
    message: z.string().trim().min(1).max(2000),
    // Filled in by the Concierge quiz; absent on the plain contact form.
    brief: z.string().max(500).optional(),
});

export type InquiryState = {
    status: 'idle' | 'success' | 'error';
    /** Message key the client resolves through next-intl. */
    messageKey?: string;
};

export async function sendInquiry(
    _prev: InquiryState,
    formData: FormData
): Promise<InquiryState> {
    const parsed = inquirySchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        brief: formData.get("brief") || undefined,
    });

    if (!parsed.success) {
        return { status: 'error', messageKey: 'invalid' };
    }

    const { name, email, message, brief } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set; inquiry was not sent.");
        return { status: 'error', messageKey: 'failed' };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "VR0CKS Site <onboarding@resend.dev>",
            to: TO_ADDRESS,
            subject: `vr0cks.com — ${name}`,
            replyTo: email,
            text: [
                `Gönderen: ${name} <${email}>`,
                brief ? `\nConcierge: ${brief}` : "",
                `\nMesaj:\n${message}`,
            ].join(""),
        });

        return { status: 'success', messageKey: 'sent' };
    } catch (error) {
        console.error("Inquiry send failed:", error);
        return { status: 'error', messageKey: 'failed' };
    }
}

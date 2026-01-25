// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingContext";
import Cursor from "@/components/Cursor"; 
import Preloader from "@/components/Preloader";
import CookieConsent from "@/components/CookieConsent";// Unutulan Grain efekti geri eklendi

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

// --- SEO VE META VERİLERİ (GÜNCELLENDİ) ---
export const metadata: Metadata = {
  title: "VR0CKS | Digital Craftsman",
  description: "Ankara merkezli, global vizyonlu dijital tasarım ve yazılım stüdyosu. Markanız için özel dikilmiş, vintage estetikle harmanlanmış modern web deneyimleri.",
  keywords: ["Web Tasarım", "Ankara", "Next.js", "UI/UX", "Digital Agency", "Yazılım Ajansı", "Kurumsal Kimlik", "React"],
  authors: [{ name: "Yiğit Canlı", url: "https://my-portfolio-ochre-ten-83.vercel.app/tr" }],
  creator: "Vr0cks Agency",
  // Sosyal Medya Paylaşımları için (Open Graph):
  openGraph: {
    title: "VR0CKS | Digital Craftsman",
    description: "Kod yazmıyoruz, dijital miras inşa ediyoruz.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-aged-paper text-charcoal dark:bg-[#0f0202] dark:text-ash antialiased min-h-screen transition-colors duration-500">
        
        <LoadingProvider>
          {/* Varsayılan olarak Dark Mode (Kırmızı Oda) ile başla */}
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            
            {/* SİNEMATİK ELEMENTLER */}
            <Preloader />
            <Cursor />
            <CookieConsent />
            
            {/* SAYFA İÇERİĞİ */}
            {children}

          </ThemeProvider>
        </LoadingProvider>
        
      </body>
    </html>
  );
}

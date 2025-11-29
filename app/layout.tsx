// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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

export const metadata: Metadata = {
  title: "Yiğit Canlı | Digital Craftsman",
  description: "Modern web experiences with a vintage touch.",
};

// app/layout.tsx
// ... diğer importlar aynı kalsın
import { LoadingProvider } from "@/components/LoadingContext"; // YENİ IMPORT

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-aged-paper text-charcoal dark:bg-[#0f0202] dark:text-ash antialiased min-h-screen transition-colors duration-500">
        <LoadingProvider>
          {/* DÜZELTME BURADA: defaultTheme="dark" ve enableSystem={false} */}
          {/* Bu sayede site her zaman senin istediğin o 'Karanlık/Güzel' modda açılır */}
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            
            <Preloader />
            <Cursor />
            <CookieConsent />
            {children}

          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
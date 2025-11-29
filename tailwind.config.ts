// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // !!! İŞTE BU SATIR EKSİK !!!
  darkMode: 'class', 
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#180a0a', 
        'vintage-red': '#C43E36', // Gece Rengi (Vişne)
        'bourbon': '#D68C45',     // Gündüz Rengi (Tok Kehribar/Viski)
        'ash': '#B0A8A0',      
        'aged-paper': '#F0EAD6', 
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'vintage-texture': "url('/vintage-bg.png')",
      }
    },
  },
  plugins: [],
};
export default config;
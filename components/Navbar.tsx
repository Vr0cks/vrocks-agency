// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GentlemanSwitch from './GentlemanSwitch';
import MobileMenu from './MobileMenu'; // YENİ EKLENDİ

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Eserler', href: '#works' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 pt-6 pb-4 md:px-12 backdrop-blur-md bg-[#F0EAD6]/90 dark:bg-[#0f0202]/90 border-b border-charcoal/10 dark:border-white/10 transition-colors duration-500"
      >
        {/* --- SOL: LOGO --- */}
        <Link href="/" className="group z-50 mt-1 relative">
          <h1 className="font-serif text-2xl tracking-wider text-charcoal dark:text-white transition-colors duration-300 group-hover:text-vintage-red">
            VR0CKS<span className="text-vintage-red">.</span>
          </h1>
        </Link>

        {/* --- SAĞ TARAF (LAMBA + MENÜ) --- */}
        {/* Flexbox ile hizalıyoruz: items-start önemli */}
        <div className="flex items-start gap-4 md:gap-8">
          
          {/* MASAÜSTÜ MENÜ (Mobilde gizli) */}
          <nav className="hidden md:flex items-center gap-2 mt-1">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative px-4 py-2 rounded-sm text-[11px] font-sans tracking-[0.2em] uppercase text-charcoal/80 dark:text-[#E0E0E0] border border-transparent transition-all duration-300 ease-out hover:text-vintage-red dark:hover:text-vintage-red hover:bg-vintage-red/5"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#direct-contact"
              className="relative px-4 py-2 rounded-sm text-[11px] font-sans tracking-[0.2em] uppercase text-charcoal/80 dark:text-[#E0E0E0] border border-transparent transition-all duration-300 ease-out hover:text-vintage-red dark:hover:text-vintage-red hover:bg-vintage-red/5"
            >
              İLETİŞİM
            </Link>
            <Link 
              href="#concierge"
              className="ml-4 px-6 py-2 rounded-sm border border-vintage-red text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-vintage-red hover:bg-vintage-red hover:text-[#F2F0E6] transition-all duration-300 shadow-[0_0_15px_rgba(196,62,54,0.1)]"
            >
              TEKLİF AL
            </Link>
          </nav>

          {/* --- MOBİL İÇİN DÜZEN --- */}
          <div className="flex items-start gap-4">
             
             {/* LAMBA: Biraz yukarı çektik (-mt-3) ki menüyle hizalı dursun */}
             <div className="-mt-3 relative z-[99999]"> 
                <GentlemanSwitch />
             </div>
             
             {/* MOBİL MENÜ BUTONU (Masaüstünde gizli) */}
             {/* mt-1 vererek logoyla aynı hizaya getirdik */}
             <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden mt-1 text-charcoal dark:text-[#E0E0E0] hover:text-vintage-red transition-colors"
             >
               <span className="text-[10px] uppercase tracking-widest border border-current px-3 py-2 rounded-sm font-bold">
                 Menu
               </span>
             </button>

          </div>

        </div>
      </motion.header>

      {/* --- MOBİL MENÜ OVERLAY --- */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
// app/faq/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

// --- GÜNCELLENMİŞ MÜŞTERİ DOSTU SORULAR ---
const faqs = [
  {
    question: "Süreç nasıl işliyor, ne zaman teslim alırım?",
    answer: "Karmaşık süreçlerle sizi yormuyoruz. Önce hedeflerinizi konuşuyoruz, ardından size özel tasarımı hazırlayıp onayınıza sunuyoruz. Onaydan sonra kodlamayı tamamlayıp, ortalama 2-4 hafta içinde sitenizi yayına alıyoruz."
  },
  {
    question: "Sitem Google'da üst sıralarda çıkar mı?",
    answer: "Kesinlikle. Yaptığımız siteler sadece şık görünmekle kalmaz; Google'ın en sevdiği altyapı ile (SEO uyumlu, çok hızlı ve mobil dostu) kodlanır. Bu da sizi rakiplerinizden 1-0 önde başlatır."
  },
  {
    question: "Siteyi daha sonra kendim güncelleyebilir miyim?",
    answer: "Evet. İsterseniz sitenize kullanımı çok kolay bir yönetim paneli entegre ediyoruz. Kod bilmenize gerek kalmadan yazılarınızı, resimlerinizi veya ürünlerinizi bir Instagram gönderisi paylaşır gibi güncelleyebilirsiniz."
  },
  {
    question: "Fiyatlandırma neye göre belirleniyor?",
    answer: "Her işletmenin ihtiyacı farklıdır. Hazır kalıp (şablon) siteler yerine, size özel dikilmiş bir 'dijital takım elbise' yapıyoruz. Projenin kapsamına göre en adil ve şeffaf teklifi sunuyoruz."
  },
  {
    question: "Site bittikten sonra destek veriyor musunuz?",
    answer: "Bizimle çalışmak bir defalık bir iş değil, uzun vadeli bir ortaklıktır. Site yayına girdikten sonra da teknik destek, bakım ve güncelleme konularında her zaman yanınızdayız."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] transition-colors duration-500">
      
      <div className="max-w-3xl mx-auto">
        
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-6xl text-[#1A1716] dark:text-[#F2F0E6] mb-6">
              Merak Edilenler.
            </h1>
            <p className="text-[#1A1716]/60 dark:text-ash/60 text-sm font-light max-w-lg mx-auto">
              Aklınızdaki soruların cevaplarını en yalın haliyle derledik.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div 
                className={`
                  group border rounded-sm transition-all duration-300
                  ${openIndex === index 
                    ? 'border-vintage-red bg-[#1A1716]/5 dark:bg-white/5' 
                    : 'border-[#1A1716]/10 dark:border-white/10 hover:border-vintage-red/50'}
                `}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-serif text-lg ${openIndex === index ? 'text-vintage-red' : 'text-[#1A1716] dark:text-[#F2F0E6]'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-vintage-red' : 'text-[#1A1716]/40 dark:text-white/40'}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-[#1A1716]/70 dark:text-ash/80 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </main>
  );
}
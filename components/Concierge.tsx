// components/Concierge.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/lib/data';

export default function Concierge() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsCompleted(true);
      }
    }, 300);
  };

  const generateMailLink = () => {
    const subject = "Exclusive Web Project Inquiry";
    const body = `Merhaba Yiğit,%0D%0A%0D%0AConcierge seçimlerim:%0D%0A- Amaç: ${answers[1]}%0D%0A- Atmosfer: ${answers[2]}%0D%0A- Özellik: ${answers[3]}%0D%0A- Zaman: ${answers[4]}%0D%0A%0D%0AKonuşmak isterim.`;
    return `mailto:yigit@example.com?subject=${subject}&body=${body}`;
  };

  const transitionVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-6">
      <AnimatePresence mode='wait'>
        
        {!isCompleted ? (
          <motion.div
            key={currentQuestion.id}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {/* SORU BAŞLIĞI: Gündüz Koyu (#1A1716), Gece Beyaz */}
            <h2 className="font-serif text-2xl md:text-4xl text-[#1A1716] dark:text-white/90 text-center leading-tight transition-colors duration-500">
              {currentQuestion.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionClick(option.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group w-full py-6 px-4
                    /* KENARLIK: Gündüz Koyu Gri, Gece Açık Beyaz */
                    border border-[#1A1716]/10 dark:border-white/10 rounded-sm
                    bg-transparent transition-all duration-300
                    text-left outline-none 
                    
                    /* HOVER (RENK DEĞİŞİMİ): Gündüz KEHRİBAR, Gece KIRMIZI */
                    hover:border-bourbon dark:hover:border-vintage-red
                    hover:bg-bourbon/5 dark:hover:bg-vintage-red/5
                  "
                >
                  <span className="
                    block font-sans text-sm tracking-widest uppercase transition-colors
                    /* YAZI RENGİ: Gündüz Koyu, Gece Gri */
                    text-[#1A1716]/70 dark:text-ash 
                    /* HOVER YAZI: Gündüz KEHRİBAR, Gece KIRMIZI */
                    group-hover:text-bourbon dark:group-hover:text-vintage-red
                  ">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* İLERLEME ÇUBUĞU: Gündüz KEHRİBAR, Gece KIRMIZI */}
            <div className="w-full bg-[#1A1716]/5 dark:bg-white/5 h-[2px] mt-8 rounded-full overflow-hidden flex justify-start">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-bourbon dark:bg-vintage-red"
              />
            </div>
            
            <p className="text-center text-[#1A1716]/30 dark:text-ash/30 text-xs tracking-widest mt-2">
              {currentQuestionIndex + 1} / {questions.length}
            </p>
          </motion.div>

        ) : (
          // --- SONUÇ EKRANI ---
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 border border-[#1A1716]/10 dark:border-bourbon/10 p-10 md:p-16 bg-[#1A1716]/5 dark:bg-white/[0.01] backdrop-blur-md rounded-sm"
          >
            {/* BAŞLIK RENGİ */}
            <h2 className="font-serif text-4xl text-bourbon dark:text-vintage-red mb-2 transition-colors">
              Mükemmel Seçim.
            </h2>
            
            <p className="text-[#1A1716]/80 dark:text-ash font-light text-lg leading-relaxed max-w-lg mx-auto">
              Vizyonunuzu anladım. Sizin için modern teknolojiyi klasik bir estetikle harmanlayarak,
              <span className="font-semibold text-[#1A1716] dark:text-white"> zamansız bir deneyim </span> 
              tasarlayabilirim.
            </p>

            {/* BUTON: Gündüz KEHRİBAR, Gece KIRMIZI */}
            <motion.a
              href={generateMailLink()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-block mt-6 px-10 py-4 
                border border-bourbon dark:border-vintage-red 
                text-bourbon dark:text-vintage-red 
                font-semibold tracking-widest uppercase text-xs rounded-sm 
                transition-colors duration-300
                hover:bg-bourbon hover:text-white
                dark:hover:bg-vintage-red dark:hover:text-[#121212]
              "
            >
              Projeyi Başlat
            </motion.a>
            
            <div className="pt-8">
               <p className="text-xs text-[#1A1716]/40 dark:text-ash/30 font-mono uppercase tracking-[0.2em]">
                 VR0CKS AGENCY — ANKARA
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
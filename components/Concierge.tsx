// components/Concierge.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function Concierge() {
  const t = useTranslations('concierge');
  const tQuestions = useTranslations('questions');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Questions data with translation keys
  const questions = [
    {
      id: 1,
      questionKey: 'q1.question',
      options: [
        { id: 'q1_a', textKey: 'q1.options.branding', value: 'branding' },
        { id: 'q1_b', textKey: 'q1.options.ecommerce', value: 'ecommerce' },
        { id: 'q1_c', textKey: 'q1.options.portfolio', value: 'portfolio' },
        { id: 'q1_d', textKey: 'q1.options.corporate', value: 'corporate' },
      ],
    },
    {
      id: 2,
      questionKey: 'q2.question',
      options: [
        { id: 'q2_a', textKey: 'q2.options.modern', value: 'modern' },
        { id: 'q2_b', textKey: 'q2.options.cozy', value: 'cozy' },
        { id: 'q2_c', textKey: 'q2.options.artistic', value: 'artistic' },
        { id: 'q2_d', textKey: 'q2.options.luxury', value: 'luxury' },
      ],
    },
    {
      id: 3,
      questionKey: 'q3.question',
      options: [
        { id: 'q3_a', textKey: 'q3.options.conversion', value: 'conversion' },
        { id: 'q3_b', textKey: 'q3.options.visual', value: 'visual' },
        { id: 'q3_c', textKey: 'q3.options.content', value: 'content' },
        { id: 'q3_d', textKey: 'q3.options.interactive', value: 'interactive' },
      ],
    },
    {
      id: 4,
      questionKey: 'q4.question',
      options: [
        { id: 'q4_a', textKey: 'q4.options.asap', value: 'asap' },
        { id: 'q4_b', textKey: 'q4.options.month', value: 'month' },
        { id: 'q4_c', textKey: 'q4.options.perfect', value: 'perfect' },
        { id: 'q4_d', textKey: 'q4.options.flexible', value: 'flexible' },
      ],
    },
  ];

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
    const subject = encodeURIComponent("Hey vr0cks! I'd Love to Work With You 🚀");
    const body = encodeURIComponent(
      `Hi vr0cks Team,

I just completed the Concierge quiz on your website and I'm excited to explore working together!

Here are my preferences:
• Project Type: ${answers[1] || 'Not specified'}
• Preferred Style: ${answers[2] || 'Not specified'}
• Key Priority: ${answers[3] || 'Not specified'}
• Timeline: ${answers[4] || 'Not specified'}

I'd love to discuss my project in more detail. Looking forward to hearing from you!

Best regards,
[Your Name]`
    );
    return `mailto:vr0cksdev@gmail.com?subject=${subject}&body=${body}`;
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
            <h2 className="font-serif text-2xl md:text-4xl text-[#1A1716] dark:text-white/90 text-center leading-tight transition-colors duration-500">
              {tQuestions(currentQuestion.questionKey)}
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
                    border border-[#1A1716]/10 dark:border-white/10 rounded-sm
                    bg-transparent transition-all duration-300
                    text-left outline-none 
                    
                    hover:border-bourbon dark:hover:border-vintage-red
                    hover:bg-bourbon/5 dark:hover:bg-vintage-red/5
                  "
                >
                  <span className="
                    block font-sans text-sm tracking-widest uppercase transition-colors
                    text-[#1A1716]/70 dark:text-ash 
                    group-hover:text-bourbon dark:group-hover:text-vintage-red
                  ">
                    {tQuestions(option.textKey)}
                  </span>
                </motion.button>
              ))}
            </div>

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
            <h2 className="font-serif text-4xl text-bourbon dark:text-vintage-red mb-2 transition-colors">
              {t('completionTitle')}
            </h2>

            <p className="text-[#1A1716]/80 dark:text-ash font-light text-lg leading-relaxed max-w-lg mx-auto">
              {t('completionDescription')}
              <span className="font-semibold text-[#1A1716] dark:text-white"> {t('completionHighlight')} </span>
              {t('completionEnd')}
            </p>

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
              {t('startProject')}
            </motion.a>

            <div className="pt-8">
              <p className="text-xs text-[#1A1716]/40 dark:text-ash/30 font-mono uppercase tracking-[0.2em]">
                {t('agencyFooter')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
// components/ShopShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Product {
    id: number;
    titleKey: string;
    badgeKey: string;
    badgeColor: string;
    descriptionKey: string;
    link: string;
}

const products: Product[] = [
    {
        id: 1,
        titleKey: "saasKit.title",
        badgeKey: "saasKit.badge",
        badgeColor: "from-amber-500 to-orange-600",
        descriptionKey: "saasKit.description",
        link: "https://shop.vr0cks.com",
    },
    {
        id: 2,
        titleKey: "portfolio.title",
        badgeKey: "portfolio.badge",
        badgeColor: "from-emerald-500 to-teal-600",
        descriptionKey: "portfolio.description",
        link: "https://shop.vr0cks.com",
    },
    {
        id: 3,
        titleKey: "aiKit.title",
        badgeKey: "aiKit.badge",
        badgeColor: "from-violet-500 to-purple-600",
        descriptionKey: "aiKit.description",
        link: "https://shop.vr0cks.com",
    },
];

export default function ShopShowcase() {
    const t = useTranslations('shopShowcase');
    const tProducts = useTranslations('shopProducts');

    return (
        <section
            id="shop-showcase"
            className="relative py-32 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] overflow-hidden transition-colors duration-700"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-vintage-red/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-vintage-red text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-4 block">
                        {t('subtitle')}
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-[#1A1716] dark:text-[#F2F0E6] mb-6 drop-shadow-lg transition-colors duration-700">
                        {t('title')} <span className="italic text-vintage-red">{t('titleAccent')}</span>
                    </h2>
                    <p className="text-[#1A1716]/70 dark:text-white/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {products.map((product, index) => (
                        <motion.a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group block relative cursor-pointer"
                        >
                            <div
                                className="
                  relative h-full p-8 md:p-10
                  bg-[#EAE5D1] dark:bg-gradient-to-b dark:from-[#1a0808] dark:to-[#0a0202]
                  border border-[#1A1716]/10 dark:border-white/5
                  hover:border-vintage-red/50 dark:hover:border-vintage-red/40
                  rounded-lg
                  shadow-xl shadow-[#1A1716]/5 dark:shadow-black/50
                  transition-all duration-500 ease-out
                  
                  group-hover:-translate-y-3
                  group-hover:shadow-[0_25px_50px_-12px_rgba(196,62,54,0.25)]
                "
                            >
                                {/* Noise Overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg"
                                    style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
                                />

                                {/* Animated Corner Lines */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-vintage-red to-transparent transition-all duration-500 group-hover:w-full rounded-tl-lg" />
                                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-vintage-red to-transparent transition-all duration-500 group-hover:h-full rounded-tl-lg" />
                                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-vintage-red to-transparent transition-all duration-500 group-hover:w-full rounded-br-lg" />
                                <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-gradient-to-t from-vintage-red to-transparent transition-all duration-500 group-hover:h-full rounded-br-lg" />

                                {/* Badge */}
                                <div className="mb-6">
                                    <span
                                        className={`
                      inline-block px-3 py-1.5 
                      text-[10px] tracking-[0.15em] uppercase font-bold text-white
                      bg-gradient-to-r ${product.badgeColor}
                      rounded-full shadow-lg
                      transform group-hover:scale-105 transition-transform duration-300
                    `}
                                    >
                                        {tProducts(product.badgeKey)}
                                    </span>
                                </div>

                                {/* Product Title */}
                                <h3 className="font-serif text-2xl md:text-3xl text-[#1A1716] dark:text-[#F2F0E6] mb-4 group-hover:text-vintage-red transition-colors duration-300">
                                    {tProducts(product.titleKey)}
                                </h3>

                                {/* Product Description */}
                                <p className="text-[#1A1716]/60 dark:text-white/50 text-sm leading-relaxed font-light mb-8 group-hover:text-[#1A1716]/80 dark:group-hover:text-white/70 transition-colors">
                                    {tProducts(product.descriptionKey)}
                                </p>

                                {/* CTA Arrow */}
                                <div className="flex items-center gap-2 text-vintage-red text-xs tracking-widest uppercase font-semibold opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <span>{t('viewProduct')}</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="transform group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-1 bg-vintage-red/0 group-hover:bg-vintage-red/5 rounded-lg blur-xl transition-all duration-500 -z-10" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View All CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <a
                        href="https://shop.vr0cks.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center gap-3 
              px-8 py-4 
              bg-transparent 
              border border-vintage-red/40 hover:border-vintage-red
              text-vintage-red hover:text-white
              hover:bg-vintage-red
              rounded-sm
              text-xs tracking-[0.2em] uppercase font-bold
              transition-all duration-300
              cursor-pointer
              group
            "
                    >
                        <span>{t('viewAllProducts')}</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="transform group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

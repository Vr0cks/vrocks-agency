// app/terms/page.tsx
'use client';

export default function Terms() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] transition-colors duration-500">
      
      <div className="max-w-3xl mx-auto">
        
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-12">
          Kullanım Koşulları
        </h1>

        <div className="prose prose-sm md:prose-base max-w-none font-light text-[#1A1716]/80 dark:text-ash/80">
          <p className="mb-8"><strong>Yürürlük Tarihi:</strong> 29 Kasım 2025</p>
          
          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">1. Giriş</h3>
          <p className="mb-4 leading-relaxed">
            Bu web sitesini (vr0cks.com) kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. 
            Hizmetlerimizden yararlanmadan önce lütfen dikkatlice okuyunuz.
          </p>

          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">2. Fikri Mülkiyet</h3>
          <p className="mb-4 leading-relaxed">
            Sitede yer alan tüm tasarımlar, kod yapıları, metinler ve görseller VR0CKS Agency'e aittir. 
            İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.
          </p>

          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">3. Hizmet Kapsamı</h3>
          <p className="mb-4 leading-relaxed">
            Sunduğumuz web tasarım ve geliştirme hizmetleri, proje bazlı sözleşmelerle belirlenir. 
            Burada yer alan bilgiler genel bilgilendirme amaçlıdır.
          </p>

          <div className="mt-12 p-6 border border-vintage-red/20 rounded-sm bg-[#1A1716]/5 dark:bg-white/5">
            <p className="text-xs">
              Hukuki sorularınız için <a href="mailto:legal@vr0cks.com" className="text-vintage-red underline font-bold">legal@vr0cks.com</a> ile iletişime geçebilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
// app/privacy/page.tsx
'use client';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#F0EAD6] dark:bg-[#0f0202] transition-colors duration-500">
      
      <div className="max-w-3xl mx-auto">
        
        {/* BAŞLIK */}
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1716] dark:text-[#F2F0E6] mb-12">
          Gizlilik Politikası
        </h1>

        {/* İÇERİK (FadeIn kaldırdık, garanti görünsün) */}
        <div className="prose prose-sm md:prose-base max-w-none font-light text-[#1A1716]/80 dark:text-ash/80">
          <p className="mb-8"><strong>Son Güncelleme:</strong> 29 Kasım 2025</p>
          
          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">1. Veri Toplama</h3>
          <p className="mb-4 leading-relaxed">
            VR0CKS Agency olarak, dijital mahremiyetinize saygı duyuyoruz. 
            Web sitemizi ziyaret ettiğinizde, deneyiminizi iyileştirmek adına sadece 
            temel analitik verileri (çerezler aracılığıyla) topluyoruz.
          </p>

          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">2. Kullanım Amacı</h3>
          <p className="mb-4 leading-relaxed">
            Toplanan veriler sadece şu amaçlarla kullanılır:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-4 marker:text-vintage-red">
            <li>Site performansını analiz etmek.</li>
            <li>Size daha iyi bir kullanıcı deneyimi sunmak.</li>
            <li>İletişim formları aracılığıyla dönüş yapmak.</li>
          </ul>

          <h3 className="text-vintage-red font-serif mt-8 mb-4 text-xl font-bold">3. Üçüncü Taraflar</h3>
          <p className="mb-4 leading-relaxed">
            Verileriniz asla reklam amaçlı üçüncü taraflara satılmaz. 
            Sadece yasal zorunluluk durumlarında ilgili mercilerle paylaşılabilir.
          </p>

          <div className="mt-12 p-6 border border-vintage-red/20 rounded-sm bg-[#1A1716]/5 dark:bg-white/5">
            <p className="text-xs">
              Bu politika hakkında sorularınız varsa, <a href="mailto:hello@vr0cks.com" className="text-vintage-red underline font-bold">hello@vr0cks.com</a> adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
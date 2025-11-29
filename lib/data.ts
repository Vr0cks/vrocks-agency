// lib/data.ts

// --- SORULAR (CONCIERGE) ---
export interface Option {
  id: string;
  text: string;
  value: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Dijital dünyadaki varlığınızın ana amacı nedir?",
    options: [
      { id: "q1_a", text: "Prestij & Marka Bilinirliği", value: "branding" },
      { id: "q1_b", text: "Ürün Satışı (E-Ticaret)", value: "ecommerce" },
      { id: "q1_c", text: "Portfolyo Sunumu", value: "portfolio" },
      { id: "q1_d", text: "Kurumsal Kimlik", value: "corporate" },
    ],
  },
  {
    id: 2,
    question: "Markanız fiziksel bir mekan olsa, hangisi olurdu?",
    options: [
      { id: "q2_a", text: "Modern bir Plaza", value: "modern" },
      { id: "q2_b", text: "Butik bir Kahve Dükkanı", value: "cozy" },
      { id: "q2_c", text: "Sanat Galerisi", value: "artistic" },
      { id: "q2_d", text: "Lüks bir Otel Lobisi", value: "luxury" },
    ],
  },
  {
    id: 3,
    question: "Sitenizin olmazsa olmaz 'imza' özelliği ne olmalı?",
    options: [
      { id: "q3_a", text: "Hızlı Rezarvasyon/Satış", value: "conversion" },
      { id: "q3_b", text: "Görsel Şölen/Galeri", value: "visual" },
      { id: "q3_c", text: "Blog ve İçerik Akışı", value: "content" },
      { id: "q3_d", text: "Etkileşimli Deneyim", value: "interactive" },
    ],
  },
  {
    id: 4,
    question: "Bu projeyi ne zaman kadeh kaldırarak kutlamalıyız?",
    options: [
      { id: "q4_a", text: "Hemen (MVP)", value: "asap" },
      { id: "q4_b", text: "1 Ay içinde", value: "month" },
      { id: "q4_c", text: "Acelemiz yok (Mükemmeliyetçi)", value: "perfect" },
      { id: "q4_d", text: "Tarihi siz belirleyin", value: "flexible" },
    ],
  },
];

// --- AJANS PROJELERİ (GERÇEK REPOLAR) ---
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxe Spaces",
    category: "MİMARİ / LÜKS TASARIM",
    description: "Lüks yaşam alanlarını ve mimari vizyonu dijital dünyada estetikle buluşturan, minimal ve odaklı bir portfolyo deneyimi.",
    year: "2025",
    link: "https://vr0cks.github.io/LUXE-SPACES/",
  },
  {
    id: 2,
    title: "United FB Assoc.",
    category: "TOPLULUK / FAN PLATFORMU",
    description: "Fenerbahçe taraftarları için özel olarak kurgulanmış, etkileşimli ve modern bir topluluk yönetim platformu.",
    year: "2024",
    link: "https://united-fenerbah-e-fans-association.vercel.app",
  },
  {
    id: 3,
    title: "Koç Real Estate",
    category: "KURUMSAL / GAYRİMENKUL",
    description: "Emlak sektörüne dijital bir vizyon katan, kullanıcı dostu listeleme altyapısına sahip kurumsal kimlik arayüzü.",
    year: "2024",
    link: "https://koc-real-estate-agency-website.vercel.app",
  },
];
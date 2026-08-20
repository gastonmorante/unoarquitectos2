export interface GalleryImage {
  id?: string;
  url: string;
  title: string;
  desc: string;
}

export interface CategoryTypology {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  icon: string;
  image: string;
  badge?: string;
  gallery?: GalleryImage[];
  descEs: string;
  descEn: string;
  area: string;
  materials: string;
  projectHighlight?: string;
  projectsSample: string[];
  specsEs: string[];
  specsEn: string[];
}

export interface HeroContent {
  taglineEs: string;
  taglineEn: string;
  headingEs: string;
  headingEn: string;
  subheadingEs: string;
  subheadingEn: string;
  ctaTextEs: string;
  ctaTextEn: string;
}

export interface FilosofiaContent {
  quoteEs: string;
  quoteEn: string;
  author: string;
  authorRole: string;
  directorBioEs: string;
  directorBioEn: string;
  pillarsEs: { title: string; desc: string }[];
  pillarsEn: { title: string; desc: string }[];
}

export interface MetricItem {
  id: string;
  value: string;
  labelEs: string;
  labelEn: string;
}

export interface MetricsContent {
  ratingValue: string;
  reviewCount: string;
  googleMapsUrl: string;
  items: MetricItem[];
}

export interface FAQItem {
  id: string;
  category: "general" | "services" | "finance";
  question: {
    es: string;
    en: string;
  };
  answer: {
    es: string;
    en: string;
  };
}

export interface ContactContent {
  officePlayaTitle: string;
  officePlayaAddr: string;
  officePlayaMapUrl: string;
  tallerTulumTitle: string;
  tallerTulumAddr: string;
  phone: string;
  whatsapp: string;
  email: string;
  workHoursEs: string;
  workHoursEn: string;
}

export interface SiteContent {
  categories: CategoryTypology[];
  hero: HeroContent;
  filosofia: FilosofiaContent;
  metrics: MetricsContent;
  faqs: FAQItem[];
  contact: ContactContent;
}

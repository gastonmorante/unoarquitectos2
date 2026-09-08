export interface BlogPost {
  slug: string;
  category: "ingenieria" | "materiales" | "inversion" | "bioclimatica";
  categoryLabel: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  title: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  excerpt: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  coverImage: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: {
    es: {
      intro: string;
      sections: {
        heading: string;
        body: string[];
        quote?: string;
      }[];
      conclusion: string;
    };
    en: {
      intro: string;
      sections: {
        heading: string;
        body: string[];
        quote?: string;
      }[];
      conclusion: string;
    };
    fr: {
      intro: string;
      sections: {
        heading: string;
        body: string[];
        quote?: string;
      }[];
      conclusion: string;
    };
    it: {
      intro: string;
      sections: {
        heading: string;
        body: string[];
        quote?: string;
      }[];
      conclusion: string;
    };
  };
}

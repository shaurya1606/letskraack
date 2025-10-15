import { faqItems } from "./landing-data";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LetsKraack",
  url: "https://letskraack.com",
  logo: "https://letskraack.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/letskraack",
    "https://www.youtube.com/@letskraack",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

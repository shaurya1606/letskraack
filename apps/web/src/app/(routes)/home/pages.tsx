'use client';

import Script from "next/script";

import { BlogSection } from "@/_components/landingPage/blog-section";
import { CtaBanner } from "@/_components/landingPage/cta-banner";
import { FaqSection } from "@/_components/landingPage/faq-section";
import { FeaturesSection } from "@/_components/landingPage/features-section";
import { FloatingLeaderboard } from "@/_components/landingPage/floating-leaderboard";
import { FloatingNewsletter } from "@/_components/landingPage/floating-newsletter";
import { HeroSection } from "@/_components/landingPage/hero-section";
import { HowItWorksSection } from "@/_components/landingPage/how-it-works-section";
import { Navbar } from "@/_components/landingPage/navbar";
import { RoadmapSection } from "@/_components/landingPage/roadmap-section";
import { SegmentsSection } from "@/_components/landingPage/segments-section";
import { TestimonialsSection } from "@/_components/landingPage/testimonials-section";
import { Footer } from "@/_components/landingPage/footer";
import { organizationSchema, faqSchema } from "@/lib/_constants/landing-schema";

export function Home() {
  return (
    <div className="relative bg-[linear-gradient(145deg,#111,#141414)] text-white">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <RoadmapSection />
        <SegmentsSection />
        <CtaBanner />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingNewsletter />
      <FloatingLeaderboard />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

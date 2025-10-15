'use client';

import Link from "next/link";
import Script from "next/script";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

// ---------------------------- types -----------------------------------------------

type NavLink = {
  label: string;
  href: string;
};

type Feature = {
  title: string;
  description: string;
  cta: string;
};

type Step = {
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  date: string;
};

type RoadmapModule = {
  title: string;
  duration: string;
  summary: string;
};

type RoadmapTrack = {
  name: string;
  modules: RoadmapModule[];
};

type Segment = {
  name: string;
  outcomes: string[];
  caption: string;
};

type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

type LeaderboardEntry = {
  name: string;
  college: string;
  score: string;
};

// --------------------------- constants ------------- 

const containerClass = "mx-auto w-full max-w-[var(--lk-container)] px-5 sm:px-8 lg:px-12";
const navLinks: NavLink[] = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
  { label: "Blog", href: "#insights" },
];

const features: Feature[] = [
  {
    title: "Smart Roadmaps",
    description:
      "Tailored tracks from first-year fundamentals to final-year interview mastery, guided by weekly focus areas.",
    cta: "Explore tracks",
  },
  {
    title: "Mock Interviews",
    description:
      "Human and AI-led interviews with rubric-based feedback so you know exactly what to improve next.",
    cta: "See mock formats",
  },
  {
    title: "Prep Tracker",
    description:
      "One dashboard to track solved problems, projects, and interview readiness in real time.",
    cta: "View dashboard",
  },
  {
    title: "Placement Material",
    description:
      "Company-specific question banks, resume templates, and system design drills curated by alumni.",
    cta: "Preview content",
  },
];

const steps: Step[] = [
  {
    title: "Choose your track",
    description:
      "Pick SDE, ML, DevOps, or Data and we tailor milestones to your semester and goals.",
  },
  {
    title: "Follow guided roadmap",
    description:
      "Weekly sprints, skill assessments, and curated resources keep you on the fast lane.",
  },
  {
    title: "Practice interviews",
    description:
      "Combine AI drills with mentor-led mocks for behavioral, DSA, and system design rounds.",
  },
  {
    title: "Build & get placed",
    description:
      "Ship projects, polish your resume, and track placement outcomes with real-time analytics.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Prachi Verma",
    role: "Placed at Amazon · SDE I",
    quote:
      "The roadmap made my prep intentional. I cleared two mocks here before the real Amazon loop.",
    date: "July 2025",
  },
  {
    name: "Arjun Menon",
    role: "NIT Calicut → Atlassian",
    quote:
      "System design terrified me. The mentor sessions and scorecards showed me exactly what to fix.",
    date: "May 2025",
  },
  {
    name: "Isha Kapoor",
    role: "BITS Pilani · ML Engineer",
    quote:
      "Loved the balance between AI drills and human feedback. The leaderboard kept me accountable.",
    date: "August 2025",
  },
  {
    name: "Rahul Sharma",
    role: "SRM → PhonePe",
    quote:
      "Interview recordings plus notes from coaches helped me iterate twice as fast.",
    date: "June 2025",
  },
];

const roadmapTracks: RoadmapTrack[] = [
  {
    name: "Year 1 · Foundations",
    modules: [
      {
        title: "Problem Solving Essentials",
        duration: "6 weeks",
        summary: "Master patterns, recursion, and complexity analysis with curated labs.",
      },
      {
        title: "Launch Your First Project",
        duration: "4 weeks",
        summary: "Build a full-stack project and learn version control fundamentals.",
      },
      {
        title: "Career Starter Kit",
        duration: "2 weeks",
        summary: "Craft resumes and LinkedIn profiles that highlight impact early on.",
      },
    ],
  },
  {
    name: "Year 2 · Acceleration",
    modules: [
      {
        title: "Data Structures Marathon",
        duration: "8 weeks",
        summary: "Work through 120+ curated questions with spaced repetition.",
      },
      {
        title: "Hackathon Portfolio",
        duration: "3 weeks",
        summary: "Ship two hackathon-ready builds with peer review loops.",
      },
      {
        title: "Internship Outreach",
        duration: "2 weeks",
        summary: "Email scripts, referrals, and program trackers to land your first break.",
      },
    ],
  },
  {
    name: "Year 3 · Interview Sprint",
    modules: [
      {
        title: "System Design Lite",
        duration: "4 weeks",
        summary: "Digestible bite-sized system design challenges with mentor scores.",
      },
      {
        title: "Mock Interview Loop",
        duration: "6 weeks",
        summary: "Alternate AI mocks and mentor-led rounds with actionable scorecards.",
      },
      {
        title: "Domain Specializations",
        duration: "3 weeks",
        summary: "Pick SDE, ML, or DevOps tracks with targeted company packs.",
      },
    ],
  },
  {
    name: "Year 4 · Placement Launch",
    modules: [
      {
        title: "Advanced System Design",
        duration: "4 weeks",
        summary: "High-scale case studies with rubric-aligned feedback.",
      },
      {
        title: "Behavioral Deep Dive",
        duration: "2 weeks",
        summary: "STAR story templates, video feedback, and AI tone analysis.",
      },
      {
        title: "Placement Tracker",
        duration: "Full semester",
        summary: "Track applications, interviews, and offers in one shared dashboard.",
      },
    ],
  },
];

const segments: Segment[] = [
  {
    name: "Early Years",
    caption: "Years 1-2",
    outcomes: [
      "Structured fundamentals roadmap with weekly goals",
      "Peer projects and mentor critiques to build confidence",
      "Scholarship-backed pricing for campus communities",
    ],
  },
  {
    name: "Final Years",
    caption: "Years 3-4",
    outcomes: [
      "Company-specific interview loops and scorecards",
      "Resume, ATS, and referral playbooks ready before placements",
      "Guided system design and behavioral mastery tracks",
    ],
  },
  {
    name: "For Colleges",
    caption: "TPC & Faculty",
    outcomes: [
      "Admin dashboards with cohort-level analytics",
      "Placement reporting and milestone alerts in real time",
      "Custom campus onboarding and dedicated success coach",
    ],
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "How to architect your placement roadmap in 90 days",
    excerpt:
      "Break placements into weekly sprints, focus on signal, and remove guesswork with a cohort-first approach.",
    href: "#",
    date: "Oct 10, 2025",
  },
  {
    title: "Mock interview scoring rubric we use for FAANG loops",
    excerpt:
      "See how mentors evaluate clarity, code quality, and communication—and replicate it in practice sessions.",
    href: "#",
    date: "Sep 28, 2025",
  },
  {
    title: "From campus to offer: inside three successful journeys",
    excerpt:
      "Detailed walkthrough of students who landed at Atlassian, Microsoft, and Razorpay with LetsKraack.",
    href: "#",
    date: "Sep 18, 2025",
  },
];

const leaderboard: LeaderboardEntry[] = [
  { name: "Prachi Verma", college: "VNIT", score: "982 pts" },
  { name: "Sahil Nair", college: "IIT KGP", score: "947 pts" },
  { name: "Madhuri Rao", college: "IIIT Hyderabad", score: "912 pts" },
  { name: "Ananya Desai", college: "BITS Goa", score: "897 pts" },
  { name: "Raghav Kapoor", college: "VIT Chennai", score: "884 pts" },
];

const heroStats = [
  {
    value: '10,000+',
    label: 'problems solved inside the platform',
  },
  {
    value: '500+',
    label: 'mock interviews hosted with expert feedback',
  },
  {
    value: '88%',
    label: 'candidates land offers within 6 months',
  },
];

const faqItems = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. You get a 14-day trial with access to one roadmap, AI mocks, and limited mentor feedback before choosing a plan.",
  },
  {
    question: "Which companies do you cover?",
    answer:
      "We maintain playbooks for 80+ recruiters including Amazon, Atlassian, Google, Flipkart, Razorpay, and early-stage startups.",
  },
  {
    question: "Can colleges onboard entire batches?",
    answer:
      "Absolutely. Training and placement cells get cohort dashboards, admin controls, and reporting tailored to campus needs.",
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LetsKraack',
  url: 'https://letskraack.com',
  logo: 'https://letskraack.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/letskraack',
    'https://www.youtube.com/@letskraack',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function useTrapFocus(active: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active || !ref.current) {
      return;
    }

    const node = ref.current;
    const previous = document.activeElement as HTMLElement | null;

    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([type="hidden"]):not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const focusable = Array.from(node.querySelectorAll<HTMLElement>(selector));

    if (focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previous) {
        previous.focus();
      }
    };
  }, [active, ref]);
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) {
      return;
    }

    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] text-base font-semibold tracking-wide shadow-[0_18px_40px_rgba(59,130,246,0.35)]">
      LK
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(59,130,246,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]';

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick} aria-label="Start preparing">
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
      aria-label="View roadmap"
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useTrapFocus(mobileOpen, mobileMenuRef);
  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? 'bg-[rgba(15,15,15,0.88)] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className={`${containerClass} flex items-center justify-between py-4`}>
        <div className="flex items-center gap-3">
          <Link href="#hero" className="flex items-center gap-3" aria-label="LetsKraack home">
            <LogoMark />
            <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#login"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
          >
            Log in
          </Link>
          <PrimaryButton href="#cta">Start Preparing</PrimaryButton>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } lg:hidden`}
      >
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur" aria-hidden={!mobileOpen}></div>
        <div className="fixed inset-y-0 right-0 z-50 w-[min(320px,80vw)] bg-[rgba(15,15,15,0.97)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-5 text-base font-medium text-white/80" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-transparent px-3 py-2 hover:border-white/10 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#login"
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <PrimaryButton href="#cta" onClick={() => setMobileOpen(false)}>
              Start Preparing
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#2563eb]/35 via-[#3b82f6]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-[-240px] left-16 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/10 blur-3xl" />
      </div>
      <div className={`${containerClass} flex min-h-screen flex-col items-center justify-center pb-32 pt-40 text-center md:pb-40`}>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Placement & Internship Prep
        </span>
        <div className="max-w-3xl space-y-5">
          <h1 className="text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[3.2rem]">
            Land Your Dream Tech Job. Learn What Colleges Don&apos;t Teach.
          </h1>
          <p className="text-base text-white/70 sm:text-lg">
            LetsKraack is the placement operating system for ambitious engineers. Follow tailored roadmaps, ace mock interviews, and track every milestone until you sign the offer.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="#cta">Start Preparing</PrimaryButton>
          <SecondaryButton href="#roadmap">View Roadmap</SecondaryButton>
        </div>
        <figure className="mt-12 w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/70 p-4">
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-[1rem] border border-white/10 object-cover"
                aria-label="30 second demo of the dashboard"
                playsInline
                loop
                muted
                preload="metadata"
                poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                controls={false}
              >
                <source src="https://cdn.coverr.co/videos/coverr-students-studying-together-5734/1080p.mp4" type="video/mp4" />
                <p className="p-6 text-sm text-white/70">
                  Watch a quick tour of the dashboard.
                </p>
              </video>
              <div className="absolute bottom-6 right-8 flex gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/70">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-white"
                  aria-pressed={isPlaying}
                  aria-label={isPlaying ? 'Pause demo video' : 'Play demo video'}
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden="true" />
                  {isPlaying ? 'Playing' : 'Paused'}
                </button>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-white/50">
            See how it works in 30 seconds.
          </figcaption>
        </figure>
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur md:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-14`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Everything you need to go from student to offer</h2>
          <p className="max-w-2xl text-base text-white/60">
            Every module, playbook, and interaction is designed to keep you focused on the single goal: ship proof of skill and crack your interviews.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#3b82f6]/20 blur-2xl transition duration-300 group-hover:scale-125" aria-hidden="true" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6]/20 text-[#3b82f6]">
                <span className="text-lg" aria-hidden="true">
                  ●
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#82aaff] transition group-hover:text-white"
                aria-label={feature.cta}
              >
                {feature.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">How LetsKraack moves you forward</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            A simple, repeatable journey that keeps momentum high and procrastination low.
          </p>
        </div>
  <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b from-[#3b82f6]/50 via-transparent to-[#3b82f6]/50 md:block" aria-hidden="true" />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex flex-col gap-4 rounded-[1.5rem] border border-white/5 bg-white/[0.06] p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b82f6]/20 text-sm font-semibold text-[#3b82f6]">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-sm text-white/60">{step.description}</p>
                {index < steps.length - 1 && (
                  <span
                    className="absolute bottom-6 right-6 h-px w-12 origin-left scale-x-0 bg-[#3b82f6]/40 transition duration-500 ease-out md:bottom-auto md:left-1/2 md:top-full md:h-12 md:w-px md:translate-y-6 md:origin-top"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'next' | 'prev') => {
    const node = listRef.current;
    if (!node) {
      return;
    }
    const offset = direction === 'next' ? node.offsetWidth : -node.offsetWidth;
    node.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className={`${containerClass} space-y-14`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Real offers. Real outcomes.</h2>
          <p className="max-w-2xl text-base text-white/60">
            Trusted by students across 200+ campuses. Every quote is tied to verified placement data.
          </p>
        </div>
        <div className="relative">
          <div
            ref={listRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4"
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="snap-center min-w-[280px] max-w-sm flex-1 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6]/20 text-sm font-semibold text-[#3b82f6]">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/70">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs text-white/40">{testimonial.date}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollBy('prev')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-1"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy('next')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-1"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const [active, setActive] = useState(roadmapTracks[0].name);

  const activeTrack = useMemo(
    () => roadmapTracks.find((track) => track.name === active) ?? roadmapTracks[0],
    [active]
  );

  return (
    <section id="roadmap" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Roadmaps engineered for every year</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Switch between yearly tracks to see the milestones, weekly pace, and outcomes that keep you interview-ready.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {roadmapTracks.map((track) => (
            <button
              key={track.name}
              type="button"
              onClick={() => setActive(track.name)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === track.name
                  ? 'bg-[#3b82f6] text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
              }`}
              aria-pressed={active === track.name}
            >
              {track.name}
            </button>
          ))}
        </div>
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="grid gap-6 md:grid-cols-3">
            {activeTrack.modules.map((module) => (
              <article key={module.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                <span className="inline-flex w-fit rounded-full bg-[#3b82f6]/20 px-3 py-1 text-xs font-semibold text-[#3b82f6]">
                  {module.duration}
                </span>
                <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                <p className="text-sm text-white/60">{module.summary}</p>
                <Link href="#" className="mt-auto text-sm font-semibold text-[#82aaff] hover:text-white" aria-label="View module">
                  View sample →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SegmentsSection() {
  const [active, setActive] = useState(segments[0].name);
  const activeSegment = useMemo(
    () => segments.find((segment) => segment.name === active) ?? segments[0],
    [active]
  );

  return (
    <section id="built-for-you" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Built for wherever you are in the journey</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Switch personas to see how LetsKraack adapts to your timeline, goals, and batch needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {segments.map((segment) => (
            <button
              key={segment.name}
              type="button"
              onClick={() => setActive(segment.name)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === segment.name
                  ? 'bg-[#3b82f6] text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
              }`}
              aria-pressed={active === segment.name}
            >
              {segment.name}
            </button>
          ))}
        </div>
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">{activeSegment.caption}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{activeSegment.name}</h3>
            </div>
            <ul className="grid gap-4 text-sm text-white/70 md:w-1/2">
              {activeSegment.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#3b82f6]" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="cta" className="py-24">
      <div className={`${containerClass}`}>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3b82f6]/40 bg-gradient-to-br from-[#1d4ed8] via-[#3b82f6] to-[#1d4ed8] p-10 text-center shadow-[0_50px_140px_rgba(59,130,246,0.5)]">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-black/20 blur-3xl" aria-hidden="true" />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Join India&apos;s Smartest Prep Community</h2>
            <p className="text-base text-white/80">
              Learn, practice, and get hired — the smarter way. Try it free for 14 days, cancel anytime.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="#">Start Free</PrimaryButton>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="insights" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Insights & playbooks</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Actionable essays, teardown videos, and frameworks to keep your prep sharp.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex h-full flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
              <div className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                {post.date}
              </div>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-white/60">{post.excerpt}</p>
              <Link href={post.href} className="mt-auto text-sm font-semibold text-[#82aaff] hover:text-white" aria-label="Read article">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className={`${containerClass} space-y-10`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90">Answers for quick decisions</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Still curious? Here are the top questions from students and training & placement cells.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6">
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-sm font-normal text-white/50 group-open:hidden">+</span>
                  <span className="hidden text-sm font-normal text-white/50 group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-4 text-sm text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-16">
      <div className={`${containerClass} grid gap-10 md:grid-cols-5`}>
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
          </div>
          <p className="mt-6 max-w-xs text-sm text-white/60">
            The placement operating system engineered for ambitious engineering students across India.
          </p>
          <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} LetsKraack. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Product</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="hover:text-white">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#cta" className="hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#insights" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${containerClass} mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:justify-between`}>
        <p>We’ll only send roadmap updates. You can unsubscribe anytime.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white/70">
            Terms
          </Link>
          <Link href="#" className="hover:text-white/70">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white/70">
            Cookie settings
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingNewsletter() {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useTrapFocus(expanded, formRef);
  useEffect(() => {
    if (!expanded) {
      setStatus('idle');
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [expanded]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('newsletter-email');

    if (typeof email === 'string' && email.includes('@')) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden max-w-xs flex-col gap-3 text-sm text-white/80 sm:flex">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur transition ${
          expanded ? 'scale-105 text-white' : 'opacity-90 hover:opacity-100'
        }`}
        aria-expanded={expanded}
        aria-controls="floating-newsletter"
        aria-label="Toggle newsletter signup"
      >
        <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#10b981]" aria-hidden="true" />
        Updates
      </button>
      {expanded && (
        <form
          ref={formRef}
          id="floating-newsletter"
          className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[rgba(15,15,15,0.96)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          onSubmit={onSubmit}
        >
          <label htmlFor="newsletter-email" className="text-xs uppercase tracking-[0.4em] text-white/50">
            Newsletter
          </label>
          <input
            id="newsletter-email"
            name="newsletter-email"
            type="email"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus-visible:border-[#3b82f6]"
            placeholder="you@example.com"
            aria-describedby="newsletter-help"
          />
          <div className="flex items-center justify-between">
            <span id="newsletter-help" className="text-xs text-white/40">
              Get roadmap drops & features. 2–3 emails/month.
            </span>
            <button type="submit" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#3b82f6] text-white">
              →
            </button>
          </div>
          <div className="text-xs text-white/40">We respect your inbox — unsubscribe anytime.</div>
          <div role="status" aria-live="polite" className="text-xs text-[#10b981]">
            {status === 'success' && 'Thanks — check your inbox.'}
            {status === 'error' && 'Enter a valid email to continue.'}
          </div>
        </form>
      )}
    </div>
  );
}

function FloatingLeaderboard() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useTrapFocus(open, panelRef);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
  <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 text-sm text-white/80 sm:flex">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur transition hover:scale-105"
        aria-expanded={open}
        aria-controls="floating-leaderboard"
        aria-label="Open hall of fame"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#f59e0b]" aria-hidden="true" />
        Hall of Fame
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            ref={panelRef}
            id="floating-leaderboard"
            className="relative h-[92vh] w-full max-w-md rounded-t-3xl border border-white/10 bg-[rgba(15,15,15,0.96)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:h-auto sm:max-h-[90vh] sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leaderboard-title"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 id="leaderboard-title" className="text-lg font-semibold text-white">
                  Hall of Fame
                </h2>
                <p className="text-xs text-white/50">Top performers this month</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Close leaderboard"
              >
                ×
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70">
              <button type="button" className="rounded-full bg-[#3b82f6] px-3 py-1 text-white">
                Last Month
              </button>
              <button type="button" className="rounded-full px-3 py-1 text-white/60 hover:text-white">
                All Time
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {leaderboard.map((entry, index) => (
                <li key={entry.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white/60">#{index + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{entry.name}</p>
                      <p className="text-xs text-white/50">{entry.college}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#fbbf24]">{entry.score}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Climb the leaderboard</p>
              <p className="text-xs text-white/60">
                Earn points for streaks, mocks, and projects. Top 10 unlock mentor feedback credits.
              </p>
              <PrimaryButton href="#">Join the leaderboard</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
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

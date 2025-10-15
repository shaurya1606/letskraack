import type {
  BlogPost,
  Feature,
  FaqItem,
  HeroStat,
  LeaderboardEntry,
  NavLink,
  RoadmapTrack,
  Segment,
  Step,
  Testimonial,
} from "../_types/landing";

export const containerClass = "mx-auto w-full max-w-[var(--lk-container)] px-5 sm:px-8 lg:px-12";

export const navLinks: NavLink[] = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
  { label: "Blog", href: "#insights" },
];

export const features: Feature[] = [
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

export const steps: Step[] = [
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

export const testimonials: Testimonial[] = [
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

export const roadmapTracks: RoadmapTrack[] = [
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

export const segments: Segment[] = [
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

export const blogPosts: BlogPost[] = [
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

export const leaderboard: LeaderboardEntry[] = [
  { name: "Prachi Verma", college: "VNIT", score: "982 pts" },
  { name: "Sahil Nair", college: "IIT KGP", score: "947 pts" },
  { name: "Madhuri Rao", college: "IIIT Hyderabad", score: "912 pts" },
  { name: "Ananya Desai", college: "BITS Goa", score: "897 pts" },
  { name: "Raghav Kapoor", college: "VIT Chennai", score: "884 pts" },
];

export const heroStats: HeroStat[] = [
  {
    value: "10,000+",
    label: "problems solved inside the platform",
  },
  {
    value: "500+",
    label: "mock interviews hosted with expert feedback",
  },
  {
    value: "88%",
    label: "candidates land offers within 6 months",
  },
];

export const faqItems: FaqItem[] = [
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

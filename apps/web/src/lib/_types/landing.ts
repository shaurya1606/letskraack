export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  cta: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  date: string;
};

export type RoadmapModule = {
  title: string;
  duration: string;
  summary: string;
};

export type RoadmapTrack = {
  name: string;
  modules: RoadmapModule[];
};

export type Segment = {
  name: string;
  outcomes: string[];
  caption: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

export type LeaderboardEntry = {
  name: string;
  college: string;
  score: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

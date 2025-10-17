export type TrackProgress = {
  id: string;
  name: string;
  percent: number;
  currentModule: string;
  accuracy: number;
};

export type WeeklyStat = {
  id: string;
  label: string;
  value: string;
};

export type ProgressSummary = {
  tracks: TrackProgress[];
  weeklyStats: WeeklyStat[];
  streakDays: number;
  xp: number;
  weeklyGoalPercent: number;
};

export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  estTimeMinutes: number;
};

export type RoadmapCurrent = {
  lessonId: string;
  title: string;
  description: string;
  estTimeMinutes: number;
  nextSteps: RoadmapStep[];
};

export type TaskItem = {
  id: string;
  title: string;
  type: "quiz" | "interview" | "assignment" | "project";
  dueAt: string;
  durationMinutes: number;
  isDueSoon: boolean;
};

export type AiRecommendation = {
  id: string;
  title: string;
  reason: string;
  confidence: number;
  actions: { id: string; label: string }[];
};

export type StudyTimePoint = {
  date: string;
  minutes: number;
};

export type TopicAccuracy = {
  topic: string;
  percent: number;
};

export type TimePerProblem = {
  topic: string;
  minutes: number;
};

export type AnalyticsSnapshot = {
  range: "7d" | "30d" | "90d";
  studyTimeSeries: StudyTimePoint[];
  topicAccuracy: TopicAccuracy[];
  timePerProblem: TimePerProblem[];
};

export type PeerHighlight = {
  id: string;
  name: string;
  rank: number;
  avatarUrl: string;
  delta: number;
};

export type PeerActivity = {
  id: string;
  message: string;
  timestamp: string;
};

export type LeaderboardSnapshot = {
  scope: "class" | "college" | "global";
  youRank: number;
  peers: PeerHighlight[];
  activity: PeerActivity[];
};

export type QuickAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  hotkey?: string;
};

export type MotivationBlurb = {
  id: string;
  quote: string;
  author: string;
  tip: string;
};

export type ActivityNotification = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  url?: string;
};

export type DashboardDataBundle = {
  summary: ProgressSummary;
  roadmap: RoadmapCurrent;
  tasks: TaskItem[];
  mentor: AiRecommendation[];
  analytics: AnalyticsSnapshot;
  leaderboard: LeaderboardSnapshot;
  quickActions: QuickAction[];
  motivation: MotivationBlurb;
  notifications: ActivityNotification[];
};

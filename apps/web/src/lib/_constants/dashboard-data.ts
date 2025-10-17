import type {
  ActivityNotification,
  AiRecommendation,
  AnalyticsSnapshot,
  DashboardDataBundle,
  LeaderboardSnapshot,
  MotivationBlurb,
  ProgressSummary,
  QuickAction,
  RoadmapCurrent,
  TaskItem,
} from "../_types/dashboard";

const summary: ProgressSummary = {
  tracks: [
    { id: "dsa", name: "DSA", percent: 64, currentModule: "Graphs", accuracy: 78 },
    { id: "system-design", name: "System Design", percent: 42, currentModule: "Caching", accuracy: 71 },
    { id: "os", name: "Operating Systems", percent: 53, currentModule: "Scheduling", accuracy: 69 },
    { id: "dbms", name: "DBMS", percent: 37, currentModule: "Transactions", accuracy: 63 },
    { id: "projects", name: "Projects", percent: 28, currentModule: "Realtime Chat", accuracy: 82 },
  ],
  weeklyStats: [
    { id: "weekly-hours", label: "Weekly hours", value: "12.5h" },
    { id: "solved", label: "Problems solved", value: "17" },
    { id: "xp", label: "XP earned", value: "1,540" },
  ],
  streakDays: 5,
  xp: 23840,
  weeklyGoalPercent: 72,
};

const roadmap: RoadmapCurrent = {
  lessonId: "graphs-shortest-path",
  title: "Implement Dijkstra with adjacency lists",
  description: "Work through the weighted graph pathfinding module and solidify heuristics.",
  estTimeMinutes: 35,
  nextSteps: [
    {
      id: "graphs-dp",
      title: "Dynamic programming recap",
      description: "Review memoization patterns for grid problems.",
      estTimeMinutes: 25,
    },
    {
      id: "graphs-quiz",
      title: "Graphs mastery quiz",
      description: "Timed quiz assessing traversal heuristics.",
      estTimeMinutes: 20,
    },
    {
      id: "graphs-retro",
      title: "Write reflections",
      description: "Capture notes on tricky problems and next focus areas.",
      estTimeMinutes: 15,
    },
  ],
};

const tasks: TaskItem[] = [
  {
    id: "quiz-ml-01",
    title: "Mock interview: System Design",
    type: "interview",
    dueAt: new Date(Date.now() + 1000 * 60 * 90).toISOString(),
    durationMinutes: 60,
    isDueSoon: true,
  },
  {
    id: "assignment-graphs",
    title: "Graphs roadmap homework",
    type: "assignment",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
    durationMinutes: 45,
    isDueSoon: false,
  },
  {
    id: "quiz-weekly",
    title: "Weekly DSA quiz",
    type: "quiz",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 26).toISOString(),
    durationMinutes: 30,
    isDueSoon: false,
  },
];

const mentor: AiRecommendation[] = [
  {
    id: "rec-graphs",
    title: "Reinforce graph heuristics",
    reason: "Accuracy dipped on weighted graph problems last session.",
    confidence: 0.82,
    actions: [
      { id: "practice-now", label: "Try practice set" },
      { id: "explain", label: "Explain why" },
    ],
  },
  {
    id: "rec-notes",
    title: "Summarize tricky recursion cases",
    reason: "Your last three notes flagged recursion confusion.",
    confidence: 0.74,
    actions: [
      { id: "start-note", label: "Create note" },
    ],
  },
];

const analytics: AnalyticsSnapshot = {
  range: "7d",
  studyTimeSeries: Array.from({ length: 7 }, (_, index) => ({
    date: new Date(Date.now() - index * 1000 * 60 * 60 * 24).toISOString(),
    minutes: 40 + index * 8,
  })).reverse(),
  topicAccuracy: [
    { topic: "Graphs", percent: 62 },
    { topic: "DP", percent: 74 },
    { topic: "Arrays", percent: 88 },
  ],
  timePerProblem: [
    { topic: "Graphs", minutes: 14 },
    { topic: "DP", minutes: 11 },
    { topic: "Strings", minutes: 9 },
  ],
};

const leaderboard: LeaderboardSnapshot = {
  scope: "class",
  youRank: 12,
  peers: [
    { id: "anisha", name: "Anisha", rank: 4, avatarUrl: "/avatars/anisha.png", delta: 2 },
    { id: "rohan", name: "Rohan", rank: 7, avatarUrl: "/avatars/rohan.png", delta: -1 },
    { id: "sam", name: "Sam", rank: 11, avatarUrl: "/avatars/sam.png", delta: 1 },
  ],
  activity: [
    {
      id: "activity-1",
      message: "Anisha solved 12 problems today",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
    {
      id: "activity-2",
      message: "Rohan shared a system design retro",
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    },
  ],
};

const quickActions: QuickAction[] = [
  { id: "start-quiz", label: "Start quiz", description: "15 min timed check", href: "/practice/quiz", hotkey: "Q" },
  { id: "mock-interview", label: "Mock interview", description: "Schedule or start now", href: "/mock-interviews", hotkey: "M" },
  { id: "add-note", label: "Add note", description: "Capture insights before they fade", href: "/notes/new", hotkey: "N" },
  { id: "resume-roadmap", label: "Resume roadmap", description: "Jump into current step", href: "/roadmaps/current" },
];

const motivation: MotivationBlurb = {
  id: "daily-tip",
  quote: "Success is the product of daily habits, not once-in-a-lifetime transformations.",
  author: "James Clear",
  tip: "Plan a 20-minute focus block and mark one roadmap step done today.",
};

const notifications: ActivityNotification[] = [
  {
    id: "notif-1",
    title: "New mentor suggestion",
    description: "PrepMate thinks a timed graph quiz will boost accuracy.",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    url: "/practice/graphs",
  },
  {
    id: "notif-2",
    title: "Mock interview feedback",
    description: "Your interviewer left notes on communication clarity.",
    createdAt: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
    url: "/mock-interviews/history",
  },
];

export const dashboardMockData: DashboardDataBundle = {
  summary,
  roadmap,
  tasks,
  mentor,
  analytics,
  leaderboard,
  quickActions,
  motivation,
  notifications,
};

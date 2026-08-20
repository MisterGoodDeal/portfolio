export const site = {
  name: "Milan Camus",
  location: "Montreuil · Paris",
  email: "mcamus.dev@gmail.com",
  phone: "+33 6 52 72 85 14",
  phoneHref: "tel:+33652728514",
  github: "https://github.com/MisterGoodDeal",
  linkedin: "https://www.linkedin.com/in/milan-c-469071155/",
};

export const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export const skillGroups = [
  "frontend",
  "languages",
  "backend",
  "data",
  "devops",
  "iot",
  "design",
] as const;

export type SkillGroup = (typeof skillGroups)[number];

export const skills: { name: string; group: SkillGroup }[] = [
  { name: "React", group: "frontend" },
  { name: "React Native", group: "frontend" },
  { name: "Angular", group: "frontend" },
  { name: "Vue.js", group: "frontend" },
  { name: "TypeScript", group: "languages" },
  { name: "JavaScript", group: "languages" },
  { name: "Python", group: "languages" },
  { name: "Java", group: "languages" },
  { name: "Node.js", group: "backend" },
  { name: "NestJS", group: "backend" },
  { name: "Django", group: "backend" },
  { name: "PHP", group: "backend" },
  { name: "PostgreSQL", group: "data" },
  { name: "MySQL", group: "data" },
  { name: "Docker", group: "devops" },
  { name: "GitHub / GitLab CI", group: "devops" },
  { name: "AWS", group: "devops" },
  { name: "Home Assistant", group: "iot" },
  { name: "ESPHome", group: "iot" },
  { name: "Figma", group: "design" },
];

export const orbitSkills = [
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "Python",
  "Docker",
  "AWS",
  "Git",
];

export type ProjectId =
  | "turtlecorp-review"
  | "task-time-tracker"
  | "computer-companion"
  | "elgato-ambilight"
  | "sonoff-esphome"
  | "custom-streamdeck"
  | "geobench"
  | "glucoscan";

export type GlucoScanScreenId =
  | "products"
  | "meals"
  | "menus"
  | "stats"
  | "settings"
  | "widgets";

export const glucoscanScreens: {
  id: GlucoScanScreenId;
  src: string;
}[] = [
  { id: "products", src: "/glucoscan/products-screen.PNG" },
  { id: "meals", src: "/glucoscan/meal-screen.PNG" },
  { id: "menus", src: "/glucoscan/menu-screen.PNG" },
  { id: "stats", src: "/glucoscan/stats-sccreen.PNG" },
  { id: "settings", src: "/glucoscan/settings-screen.PNG" },
  { id: "widgets", src: "/glucoscan/ios-widgets.png" },
];

export const glucoscanStack = [
  "Expo 56",
  "React Native",
  "TypeScript",
  "expo-router",
  "SQLite",
  "Zustand",
  "WidgetKit",
  "SwiftUI",
  "OCR on-device",
  "Open Food Facts",
  "i18n",
  "Reanimated",
];

export type TaskTimeTrackerScreenId = "showcase" | "increment" | "excel";

export const taskTimeTrackerScreens: {
  id: TaskTimeTrackerScreenId;
  src: string;
}[] = [
  { id: "showcase", src: "/task-time-tracker/app-showcase.png" },
  {
    id: "increment",
    src: "/task-time-tracker/time-increment-settings.png",
  },
  { id: "excel", src: "/task-time-tracker/excel-app-settings.png" },
];

export const taskTimeTrackerStack = [
  "TypeScript",
  "VS Code API",
  "Git",
  "i18n",
  "XLSX",
  "ODS",
  "CSV",
];

export type TurtlecorpScreenId =
  | "main"
  | "login"
  | "video"
  | "image"
  | "pano"
  | "dashboard"
  | "clients"
  | "users";

export const turtlecorpScreens: {
  id: TurtlecorpScreenId;
  src: string;
}[] = [
  { id: "main", src: "/turtlecorp-review/main-screen.png" },
  { id: "login", src: "/turtlecorp-review/login-screen.png" },
  { id: "video", src: "/turtlecorp-review/review-video.png" },
  { id: "image", src: "/turtlecorp-review/review-image.png" },
  { id: "pano", src: "/turtlecorp-review/review-360-image.png" },
  { id: "dashboard", src: "/turtlecorp-review/admin-dashboard-screen.png" },
  { id: "clients", src: "/turtlecorp-review/admin-client-screen.png" },
  { id: "users", src: "/turtlecorp-review/users-admin-screen.png" },
];

export const turtlecorpFrontStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "HeroUI",
  "Tailwind CSS 4",
  "Redux Toolkit",
  "RTK Query",
  "Socket.IO",
  "Photo Sphere Viewer",
];

export const turtlecorpBackStack = [
  "NestJS 11",
  "Prisma 7",
  "PostgreSQL",
  "JWT / Passport",
  "Socket.IO",
  "Sharp",
  "Brevo",
  "Sentry",
  "GitHub Actions",
];

export type Project = {
  id: ProjectId;
  title: string;
  tags: string[];
  github?: string;
  live?: string;
  href?: string;
  accent: string;
  pattern: "grid" | "orbs" | "wave" | "circuit" | "rings" | "tiles";
};

export const projects: Project[] = [
  {
    id: "turtlecorp-review",
    title: "Turtlecorp Review",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Socket.IO",
      "Prisma",
    ],
    href: "/projects/turtlecorp-review",
    accent: "#eab308",
    pattern: "orbs",
  },
  {
    id: "glucoscan",
    title: "GlucoScan",
    tags: [
      "Expo 56",
      "React Native",
      "TypeScript",
      "SQLite",
      "Zustand",
      "WidgetKit",
      "OCR on-device",
    ],
    href: "/projects/glucoscan",
    github: "https://github.com/MisterGoodDeal/gluco-scan",
    accent: "#2dd4bf",
    pattern: "rings",
  },
  {
    id: "task-time-tracker",
    title: "Task Time Tracker",
    tags: ["TypeScript", "VS Code", "Git"],
    github: "https://github.com/MisterGoodDeal/task-time-tracker",
    live: "https://marketplace.visualstudio.com/items?itemName=MisterGoodDeal.task-time-tracker",
    href: "/projects/task-time-tracker",
    accent: "#22d3ee",
    pattern: "grid",
  },
  {
    id: "computer-companion",
    title: "Computer Companion",
    tags: ["Electron", "React", "Home Assistant"],
    github:
      "https://github.com/MisterGoodDeal/computer-companion-desktop-agent",
    accent: "#a78bfa",
    pattern: "orbs",
  },
  {
    id: "elgato-ambilight",
    title: "Elgato Ambilight",
    tags: ["TypeScript", "Desktop", "Elgato"],
    github: "https://github.com/MisterGoodDeal/elgato-ambilight",
    accent: "#e879f9",
    pattern: "wave",
  },
  {
    id: "sonoff-esphome",
    title: "Sonoff × ESPHome",
    tags: ["ESPHome", "IoT", "Home Assistant"],
    github: "https://github.com/MisterGoodDeal/sonoff-slampher-v2-esp-home",
    live: "https://mistergooddeal.github.io/sonoff-slampher-v2-esp-home/",
    accent: "#fbbf24",
    pattern: "circuit",
  },
  {
    id: "custom-streamdeck",
    title: "Custom Stream Deck",
    tags: ["Hardware", "G-code", "DIY"],
    github: "https://github.com/MisterGoodDeal/custom-streamdeck",
    accent: "#38bdf8",
    pattern: "tiles",
  },
  {
    id: "geobench",
    title: "GeoBench",
    tags: ["React Native", "TypeScript", "API"],
    github: "https://github.com/MisterGoodDeal/geobench-app",
    accent: "#34d399",
    pattern: "rings",
  },
];

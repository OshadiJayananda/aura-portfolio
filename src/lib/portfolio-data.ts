export type Project = {
  id: string;
  title: string;
  category: string;
  short: string;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "sinhalalearn",
    title: "SinhalaLearn",
    category: "AI / EdTech",
    short: "AI-powered platform that teaches Sinhala through adaptive, conversational learning.",
    description:
      "A featured AI project that uses LLMs and speech models to deliver personalized Sinhala lessons, real-time pronunciation feedback, and adaptive quizzes that respond to a learner's pace.",
    highlights: [
      "Adaptive lesson engine driven by an LLM tutor",
      "Speech-to-text pronunciation scoring",
      "Gamified progress tracking with streaks and XP",
      "Mobile-first responsive interface",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI", "Docker"],
    featured: true,
    github: "https://github.com/",
    accent: "from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)]",
  },
  {
    id: "event-booking",
    title: "Secure Cloud-Based Event Booking Platform",
    category: "Full Stack",
    short: "Enterprise-grade event booking platform with role-based access and secure payments.",
    description:
      "End-to-end booking platform deployed on Azure with hardened auth, audit trails, encrypted PII storage, and a smooth attendee experience from discovery to checkout.",
    highlights: [
      "OAuth 2.0 + JWT with role-based authorization",
      "Stripe-powered checkout with webhook reconciliation",
      "Azure App Service deployment with CI/CD",
      "Comprehensive audit logging",
    ],
    stack: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "Azure", "Docker"],
    github: "https://github.com/",
    accent: "from-[oklch(0.65_0.22_250)] to-[oklch(0.7_0.26_295)]",
  },
  {
    id: "ev-charging",
    title: "EV Charging Station Management System",
    category: "IoT / Web",
    short: "Operator dashboard and driver app for managing EV chargers, sessions, and billing.",
    description:
      "A two-sided platform for EV operators and drivers — real-time station availability, session monitoring, dynamic pricing, and consolidated invoicing.",
    highlights: [
      "Real-time station status via WebSockets",
      "Session metering with dynamic pricing",
      "Operator analytics dashboard",
      "Driver app with reservations and turn-by-turn navigation",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    github: "https://github.com/",
    accent: "from-[oklch(0.78_0.15_200)] to-[oklch(0.65_0.22_250)]",
  },
  {
    id: "garbage",
    title: "Smart Garbage Management System",
    category: "IoT / Analytics",
    short: "IoT-driven waste collection platform that optimizes routes and bin pickups.",
    description:
      "Combines IoT sensors with a route-optimization backend to reduce collection cost and overflow incidents in urban areas.",
    highlights: [
      "Sensor ingestion pipeline with anomaly detection",
      "Route optimization using OR-Tools",
      "Citizen reporting via mobile app",
      "Admin heatmaps and KPI dashboards",
    ],
    stack: ["Laravel", "React", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/",
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.6_0.2_270)]",
  },
  {
    id: "flavorfleet",
    title: "FlavorFleet — Food Delivery Platform",
    category: "Full Stack",
    short: "Multi-restaurant food delivery app with live order tracking and driver dispatch.",
    description:
      "Three-sided marketplace connecting customers, restaurants, and drivers — featuring live order tracking, smart dispatch, and a unified merchant console.",
    highlights: [
      "Realtime order tracking with Firebase",
      "Smart dispatch algorithm minimizing ETA",
      "Merchant console with menu and analytics",
      "Containerized microservices",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Docker"],
    github: "https://github.com/",
    accent: "from-[oklch(0.7_0.22_30)] to-[oklch(0.65_0.24_295)]",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Tech Innovators (Pvt) Ltd",
    period: "2024 — Present",
    points: [
      "Built and shipped production features across React, Node.js, and PostgreSQL stack",
      "Reduced API latency by 38% through query optimization and caching",
      "Owned end-to-end delivery of a customer-facing analytics dashboard",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2023 — 2024",
    points: [
      "Delivered 6+ web projects spanning e-commerce, booking, and SaaS dashboards",
      "Architected scalable backends using Spring Boot, Express, and FastAPI",
      "Maintained 100% client satisfaction across all engagements",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 — Present",
    points: [
      "Contributed to TypeScript-based component libraries and developer tools",
      "Authored documentation and example implementations",
    ],
  },
];

export const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Laravel"] },
  { name: "Cloud & DevOps", items: ["Azure", "Docker", "GitHub Actions", "Vercel", "CI/CD"] },
  { name: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"] },
  { name: "AI & Data", items: ["LLM Integration", "RAG", "Vector DBs", "Python"] },
  { name: "Tools & Practice", items: ["Git", "Agile/Scrum", "Testing", "System Design"] },
];

export const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", "Spring Boot",
  "FastAPI", "Laravel", "Azure", "Docker", "PostgreSQL", "MongoDB", "Firebase",
];

export const certifications = [
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: "2024" },
  { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta / Coursera", year: "2024" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2023" },
  { name: "MongoDB for JavaScript Developers", issuer: "MongoDB University", year: "2023" },
];

export const education = [
  {
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology — Software Engineering",
    period: "2022 — 2026",
    detail: "Current GPA: 3.7 / 4.0 • Dean's List",
  },
  {
    school: "G.C.E. Advanced Level — Physical Science Stream",
    degree: "Secondary Education",
    period: "2019 — 2021",
    detail: "Distinctions in Combined Mathematics, Physics, and ICT",
  },
];

export const social = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:hello@example.com",
  cv: "/cv.pdf",
};

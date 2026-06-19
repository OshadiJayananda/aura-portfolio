import bannerSinhalaLearn from "@/assets/banner-sinhalalearn.jpg";
import bannerEvent from "@/assets/banner-event.jpg";
import bannerLibrary from "@/assets/banner-library.jpg";
import bannerEv from "@/assets/banner-ev.jpg";
import bannerGarbage from "@/assets/banner-garbage.jpg";
import bannerFlavorfleet from "@/assets/banner-flavorfleet.jpg";
import cvPdf from "@/assets/Oshadi_Jayananda.pdf";

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
  banner: string;
};

export const projects: Project[] = [
  {
    id: "sinhalalearn",
    title: "AI Sinhala Assistant — SinhalaLearn",
    category: "AI / EdTech",
    short: "AI-powered Sinhala learning assistant delivering automated feedback and personalized learning support.",
    description:
      "An AI-driven research project focused on improving Sinhala language learning through personalized feedback. Built using Python for the AI engine with a modern web frontend to deliver automated feedback and data-driven learning support.",
    highlights: [
      "AI-powered personalized Sinhala language tutoring",
      "Automated feedback using data-driven analysis",
      "Research-grade architecture for adaptive learning",
      "Clean API design with FastAPI for AI inference",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    featured: true,
    github: "https://github.com/OshadiJayananda/",
    demo: "https://www.sinhalalearn.online/",
    accent: "from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)]",
    banner: bannerSinhalaLearn,
  },
  {
    id: "event-booking",
    title: "Secure Cloud-Based Event Booking Platform",
    category: "Full Stack / Cloud",
    short: "Microservice-based event booking platform with event management, payments, and cloud deployment.",
    description:
      "A microservice-based event booking platform featuring event management, seat availability tracking, image uploading, booking workflows, secure payments, and notifications. Deployed on Microsoft Azure with Docker containerization and CI/CD via GitHub.",
    highlights: [
      "Microservice architecture with dedicated Event Service",
      "Secure payments and booking workflows",
      "Azure cloud deployment with Docker containerization",
      "Image uploading via Cloudinary and security scanning with Snyk",
    ],
    stack: ["Node.js", "Express", "Next.js", "Microsoft Azure", "Docker", "GitHub", "JWT", "Cloudinary", "Snyk"],
    github: "https://github.com/OshadiJayananda/",
    demo: "https://lumaevents.vercel.app/",
    accent: "from-[oklch(0.65_0.22_250)] to-[oklch(0.7_0.26_295)]",
    banner: bannerEvent,
  },
  {
    id: "library-management",
    title: "Library Management System",
    category: "Full Stack",
    short: "Full-stack library system with user authentication, book management, fine payments, and email notifications.",
    description:
      "Developed during my internship at ZinCat Technology, this full-stack library management system handles user login, book catalog management, fine payment processing via Stripe, and automated email notifications using Laravel queues.",
    highlights: [
      "User authentication and role-based access control",
      "Book catalog management with search and filtering",
      "Fine payment handling via Stripe API integration",
      "Email notifications using Laravel queue system",
    ],
    stack: ["Laravel", "React", "Tailwind CSS", "Stripe API", "MySQL"],
    github: "https://github.com/OshadiJayananda/",
    accent: "from-[oklch(0.78_0.15_200)] to-[oklch(0.65_0.22_250)]",
    banner: bannerLibrary,
  },
  {
    id: "ev-charging",
    title: "EV Charging Station Management System",
    category: "IoT / Full Stack",
    short: "Web and mobile application for managing EV charging stations with slot booking and QR-based access.",
    description:
      "A comprehensive web and mobile application for managing EV charging stations. Features include slot booking, real-time tracking, QR-based access control, secure login, and role-based user management across web and Android platforms.",
    highlights: [
      "Slot booking and reservation system",
      "Real-time charging station tracking",
      "QR-based access control for stations",
      "Cross-platform: web (React) and Android (Java)",
    ],
    stack: ["React", "ASP.NET", "Java (Android)", "MongoDB", "SQLite", "JWT", "IIS"],
    github: "https://github.com/OshadiJayananda/",
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.6_0.2_270)]",
    banner: bannerEv,
  },
  {
    id: "garbage",
    title: "Smart Garbage Management System (SGMS)",
    category: "IoT / Security",
    short: "Secure backend system for waste collection management built on OWASP security practices.",
    description:
      "A secure backend system for waste collection management. Implements authentication, role-based access control, secure APIs, input validation, and comprehensive security testing based on OWASP security practices.",
    highlights: [
      "OWASP-based security implementation",
      "Role-based access control and authentication",
      "Secure API design with input validation",
      "Security testing with Postman and specialized tools",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman", "Security Testing Tools"],
    github: "https://github.com/OshadiJayananda/",
    accent: "from-[oklch(0.7_0.22_30)] to-[oklch(0.65_0.24_295)]",
    banner: bannerGarbage,
  },
  {
    id: "flavorfleet",
    title: "FlavorFleet — Online Food Delivery Platform",
    category: "Full Stack / Microservices",
    short: "Full-stack food delivery system using microservices with order management and secure payments.",
    description:
      "A full-stack food delivery platform built on a microservices architecture. Features order management, delivery tracking, secure payments with Stripe, API Gateway support, and Docker-based deployment for scalability.",
    highlights: [
      "Microservices architecture with API Gateway",
      "Real-time order management and delivery tracking",
      "Secure payment processing via Stripe",
      "Docker-based containerized deployment",
    ],
    stack: ["React", "Node.js", "Docker", "Stripe API", "JWT"],
    github: "https://github.com/OshadiJayananda/",
    accent: "from-[oklch(0.7_0.18_150)] to-[oklch(0.65_0.22_260)]",
    banner: bannerFlavorfleet,
  },
];

export const experience = [
  {
    role: "Intern Full Stack Developer",
    company: "ZinCat Technology — Remote",
    period: "Dec 2024 — Sep 2025",
    points: [
      "Developed a Library Management System using Laravel and React with Tailwind CSS",
      "Implemented user authentication, book management, and Stripe API integrations for fine payments",
      "Built email notification system using Laravel queues for efficient delivery",
      "Collaborated via regular Teams meetings with two supervisors in a remote work environment",
    ],
  },
];

export const skills = [
  { name: "Languages", items: ["Python", "R", "C", "C++", "JavaScript", "PHP", "Java", "C#", "TypeScript", "Kotlin"] },
  { name: "Web Technologies", items: ["React", "Laravel", "Next.js", ".NET", "Spring Boot", "FastAPI", "Postman", "Swagger", "Tailwind CSS", "ASP.NET"] },
  { name: "Mobile & Cross-Platform", items: ["Flutter", "Kotlin", "Firebase", "Java (Android)"] },
  { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore", "SQLite"] },
  { name: "Cloud & DevOps", items: ["Microsoft Azure", "Docker", "Git", "GitHub", "IIS", "CI/CD"] },
  { name: "Tools & Security", items: ["JWT", "Stripe API", "Cloudinary", "Snyk", "OWASP", "Security Testing"] },
];

export const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", "Laravel",
  "Spring Boot", "FastAPI", "Python", "Azure", "Docker", "PostgreSQL",
  "MongoDB", "Firebase", "Stripe", "Tailwind CSS", "Git", "JWT",
];

export const certifications: { name: string; issuer: string; year: string }[] = [];

export const education = [
  {
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology — Software Engineering",
    period: "Sep 2022 — Sep 2026",
    detail: "Developed skills in web, mobile, and enterprise application development using HTML, CSS, PHP, Java, ASP.NET, and Vue.js. Conducted AI-driven research project, sinhalalearn.online.",
  },
  {
    school: "Dharmapala Vidyalaya Pannipitiya",
    degree: "Secondary Education — Physical Science Stream",
    period: "Jan 2008 — Feb 2022",
    detail: "GCE O/L: 7A's, 2B's (Dec 2018) • GCE A/L: 3C's in Maths Stream — Combined Mathematics, Chemistry, Physics (Feb 2022)",
  },
];

export const social = {
  github: "https://github.com/OshadiJayananda",
  linkedin: "https://www.linkedin.com/in/oshadi-jayananda/",
  email: "mailto:oshadi.jayananda@gmail.com",
  cv: cvPdf,
};

export const personal = {
  name: "Oshadi Jayananda",
  title: "Software Engineering Undergraduate & Full Stack Developer",
  phone: "+94 76 203 2676",
  location: "Pannipitiya, Sri Lanka",
  address: "100/9C, Dharmapala Mawatha, Pannipitiya",
  summary:
    "I am a fourth-year undergraduate in Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT), specializing as a full-stack developer. With a passion for technology and continuous learning, I am committed to staying at the forefront of cutting-edge technologies. My skills include working with various programming languages, web development frameworks, and database management systems. I aim to contribute to a forward-thinking organization that challenges my abilities and supports my professional growth in a competitive environment.",
};

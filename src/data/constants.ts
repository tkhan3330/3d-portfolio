export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Writing custom automation, Google Apps Script, and spreadsheets for school operations ⚡📊",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Building robust, type-safe EdTech applications and lesson plan generators 🛡️💻",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Crafting structured, interactive learning templates and Web-based math worksheets 📝",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Creating beautiful, responsive visual layouts to capture students' attention 🎨✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription: "Building modular, dynamic teacher dashboards and administrative portal views ⚛️🏫",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "GeoGebra & Desmos",
    shortDescription: "Plotting coordinates, functions, and dynamic graphs for Calculus and Geometry 📈📐",
    color: "#41b883",
    icon: "https://www.geogebra.org/files/00/01/29/77/material-1297753.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Architecting lightning-fast, modern web applications for classroom operations 🎓⚡",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Designing interfaces with high-performance grids and elegant styling tokens 🌪️🎨",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Deploying server-side systems and REST APIs to manage school resources 🔙⚙️",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Building lightweight web API servers to sync lesson schedules and notes 🚂🏫",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Querying structured databases containing school syllabus progress and student records 🐘🗄️",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Storing flexible, document-based lesson plan models and question bank schemas 🍃💾",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Tracking version changes across educational utilities and coding materials 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Publishing and sharing open-source math scripts and academic tools with educators 🐙💻",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Maintaining clear formatting standards in school code bases 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM / Packages",
    shortDescription: "Managing dependencies for graphing libraries, chart engines, and PDF generation 📦📚",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Integrating real-time database updates for Live Event Scoreboards and student polls 🔥📊",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "EdTech Platforms",
    shortDescription: "Deploying learning management systems (LMS) and custom resource centers for students 🏫",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux Server",
    shortDescription: "Hosting private administrative scripts and hosting portals securely 🐧🔒",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Packaging academic portals into portable containers for easy self-hosting 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Reverse proxying academic tools and routing school subdomains securely 🚗🚦",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS Cloud",
    shortDescription: "Utilizing cloud servers and object storage to host school resources and planners 🌐☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud & Workspace",
    shortDescription: "Automating classroom management, scripts, and integrating Drive SDKs ☁️⚡",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "LaTeX & Equations",
    shortDescription: "Formatting mathematics papers, proofs, and assignments in high-quality markup 📐📝",
    color: "#4caf50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel Hosting",
    shortDescription: "Deploying dynamic frontends and preview models for educational apps 🚀🌿",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "PGT Mathematics",
    company: "Sunbeam School Group",
    description: [
      "Teach CBSE Class XI & XII Mathematics, mentoring around 160 students per year with a record board high of 99/100.",
      "Pioneered the Sunbeam Pedagogy program, training and onboarding new teaching recruits in active learning methods.",
      "Lead coordinator for the organizing committee of 'Impetus' and head of the Biztech Quiz division.",
      "Designed and coded in-house tools (Lesson Plan suite, Live Score Tracker) to digitalize administrative workflows.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GCP,
      SkillNames.FIREBASE,
      SkillNames.TAILWIND,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2018",
    endDate: "2024",
    title: "PGT Mathematics",
    company: "Seth MR Jaipuria School, Banaras (Babatpur Campus)",
    description: [
      "Delivered high-quality classroom instruction for Senior Secondary Mathematics classes, achieving high academic pass rates.",
      "Developed digital math worksheets and visual graphing templates to enhance students' conceptual understanding."
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 3,
    startDate: "2017",
    endDate: "Present",
    title: "Mathematics Educator & EdTech Integration Specialist",
    company: "Secondary School Groups",
    description: [
      "Delivered CBSE curriculum using modern visual tools (GeoGebra, Desmos) to make calculus and geometry intuitive.",
      "Designed curriculum frameworks incorporating computational logic and basic programming directly into math classes.",
      "Organized workshops on CBSE Computational Thinking (CT) and AI readiness for students and academic staff.",
      "Built automated data analysis templates and Excel trackers to speed up weekly syllabus auditing.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.VUE,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.VIM,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a luminous intensity greater than a classroom projector!",
    "Caution: Adjust your screen's angle of reflection before your retinas are bleached!",
    "Flipping the switch to light mode... Please wear your protective laboratory goggles!",
    "Brace yourself! This mode is brighter than a student who got 100/100 in Calculus.",
    "Lumen overload! Perfect for reading dense equations at noon, otherwise sunglasses are recommended.",
  ],
  dark: [
    "Switching to dark mode... Back to the blackboard where the real math happens!",
    "Welcome back to the shadows. Perfect contrast for plotting equations in the dark.",
    "Dark mode activated. The ideal environment for solving complex integrations.",
    "Thank you! You just saved some battery percentage and gave your eyes a well-deserved recess.",
    "Welcome to the dark side. Where variables are clear and math is calm.",
  ],
};

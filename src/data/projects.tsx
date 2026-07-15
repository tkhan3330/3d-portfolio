import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Platform
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips sourced from thesvg CLI mono SVGs
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  mcp: {
    title: "CBSE Curriculum",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CBSE</span>,
  },
  spline: {
    title: "Spline 3D",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  bg?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "lesson_plan_maker",
    category: "AI-EdTech Tool",
    title: "Lesson Planner",
    src: `${BASE_PATH}/lesson_plan_maker.png`,
    bg: "/assets/backgrounds/storekit.jpg",
    screenshots: ["lesson_plan_maker.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.mcp,
      ],
      backend: [
        PROJECT_SKILLS.aiSDK,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "http://lessonplan.sbsvrn.online",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-powered Lesson Planner aligned with CBSE Standards and Bloom's Taxonomy.
          </TypographyP>
          <TypographyP className="font-mono ">
            An intelligent planning assistant built to save hours of administrative preparation. 
            By inputting the math topic, grade level, and duration, the AI-driven engine structures 
            lesson targets, concepts, class worksheets, homework tasks, and pedagogical methods.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Core Features & Pedagogical Design</TypographyH3>
          <p className="font-mono mb-2">
            Features an intuitive step-by-step wizard. It structures lessons chronologically: 
            Introduction (warm-up activities), Explanation (core math definitions and formulas), 
            Practice (scaffolded CBSE board questions), and Evaluation (formative assessments). 
            Generates standardized templates ready for printing or digital signing, saving teachers up to 12 hours weekly.
          </p>
        </div>
      );
    },
  },
  {
    id: "lesson_plan_manager",
    category: "School Administration Portal",
    title: "Lesson Plan Vault",
    src: `${BASE_PATH}/lesson_plan_manager.png`,
    bg: "/assets/backgrounds/codingducks.jpg",
    screenshots: ["lesson_plan_manager.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://lessonvault-737941631167.asia-south1.run.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Collaborative repository and auditing system for school departments.
          </TypographyP>
          <TypographyP className="font-mono ">
            A centralized dashboard built for coordinators and department heads to monitor, 
            evaluate, and organize lesson plan submissions. Simplifies syllabus progression tracking 
            across multiple sections.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Departmental Oversight</TypographyH3>
          <p className="font-mono mb-2">
            Includes folder structures by grade levels, colored status indicators (Draft, Pending Review, 
            Approved), real-time notification alerts, and calendar integrations to map curriculum 
            deadlines against school holidays.
          </p>
        </div>
      );
    },
  },
  {
    id: "lesson_plan_signer",
    category: "School Workflow Automation",
    title: "Edusign",
    src: `${BASE_PATH}/lesson_plan_signer.png`,
    bg: "/assets/backgrounds/gumbalup.jpg",
    screenshots: ["lesson_plan_signer.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://edusignv3.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Workflow authorization tool for school coordinators and principals.
          </TypographyP>
          <TypographyP className="font-mono ">
            A digital signature platform built to finalize weekly academic preparations. Once teachers 
            complete their drafts, plans are routed to coordinators for validation stamps and digital signing, 
            eliminating paper trails.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Security & Compliance</TypographyH3>
          <p className="font-mono mb-2">
            Secured via user roles (Teacher, Coordinator, Principal), timestamps, and cryptographic signing keys. 
            Provides downloadable PDF logs with embedded signatures, streamlining school inspections.
          </p>
        </div>
      );
    },
  },
  {
    id: "documora",
    category: "School Document Automation",
    title: "DocuMora",
    src: `${BASE_PATH}/documora.png`,
    bg: "/assets/backgrounds/waku.jpg",
    screenshots: ["documora.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://documora.onrender.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive document generation and template rendering for school activities.
          </TypographyP>
          <TypographyP className="font-mono ">
            DocuMora is an automated system developed to generate official school documentation, 
            certificates, circular letters, and academic logs directly from standardized templates, 
            slashing manual transcription errors.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Dynamic Template Engine</TypographyH3>
          <p className="font-mono mb-2">
            Integrates dynamic parameters to let users input fields, select presets, and export print-ready PDFs. 
            Designed specifically to streamline end-of-term grading logs, student awards, and department reporting.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai_self_observation",
    category: "AI Pedagogical Feedback",
    title: "AI Self Observation",
    src: `${BASE_PATH}/ai_self_observation.png`,
    bg: "/assets/backgrounds/peakposts.jpg",
    screenshots: ["ai_self_observation.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.aiSDK,
        PROJECT_SKILLS.mistral,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://ai-self-reflector.pages.dev/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Pedagogical feedback engine evaluating teacher classroom techniques.
          </TypographyP>
          <TypographyP className="font-mono ">
            Allows educators to upload lecture transcript logs or notes. The LLM engine evaluates 
            Bloom's Taxonomy questioning depth, student dialogue ratio, concept transitions, and pacing, 
            providing constructive improvement steps.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Analytics & Self-Reflection</TypographyH3>
          <p className="font-mono mb-2">
            Outputs charts summarizing question-types (Factual, Conceptual, Open-ended), student response 
            engagement metrics, and suggestions to increase peer-to-peer discussion in the math classroom.
          </p>
        </div>
      );
    },
  },
  {
    id: "code_to_class",
    category: "Computational Mathematics",
    title: "Code to Class",
    src: `${BASE_PATH}/code_to_class.png`,
    bg: "/assets/backgrounds/kanbi.jpg",
    screenshots: ["code_to_class.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vue, // maps to geogebra label in constants.ts
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://codetoclass.pages.dev/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive mathematical workspace integrating code and dynamic coordinates.
          </TypographyP>
          <TypographyP className="font-mono ">
            A student-centered learning portal designed to make algebra, trigonometry, and calculus 
            visible. Combines a coding console with coordinate geometry graphs, allowing students to plot curves, 
            tangents, and functions using script parameters. Formerly known as 'Html to link'.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Bridging Math and Programming</TypographyH3>
          <p className="font-mono mb-2">
            Includes CBSE-aligned tasks where students use basic loops to calculate areas under curves, 
            program differential approximations, and watch graphs render live, boosting spatial reasoning.
          </p>
        </div>
      );
    },
  },
  {
    id: "mwts",
    category: "E-Learning & Android App",
    title: "MathsWithTauseefSir",
    src: `${BASE_PATH}/mwts.png`,
    bg: "/assets/backgrounds/portfolio.jpg",
    screenshots: ["mwts.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vue, // geogebra
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://mwts.online",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CBSE Mathematics practice portal, interactive equation suite, and Android app.
          </TypographyP>
          <TypographyP className="font-mono ">
            My dedicated resource center for CBSE Class XI & XII board candidates. Features structured 
            formula sheets, sample papers, chapterwise assignments, and live practice modules. Companion android app 
            allows students to study and practice on the go.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Classroom Extension</TypographyH3>
          <p className="font-mono mb-2">
            Houses step-by-step calculus solvers, matrix calculators, and visual guides to trigonometric 
            wave functions. Integrates real-time diagnostic tests to pinpoint students' weaker algebraic areas.
          </p>
        </div>
      );
    },
  },
  {
    id: "remindly",
    category: "Academic Productivity",
    title: "Remindly",
    src: `${BASE_PATH}/remindly.png`,
    bg: "/assets/backgrounds/codingducks.jpg",
    screenshots: ["remindly.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://theremindly.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Academic workflow calendar built for school coordination teams.
          </TypographyP>
          <TypographyP className="font-mono ">
            A productivity checklist program customized for educational institutions. Organizes tasks into 
            categories: Exam prep, Report Cards, CBSE Registrations, and Department Meetings.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Teacher Alignment</TypographyH3>
          <p className="font-mono mb-2">
            Features recurring deadline alerts, shared departmental board slots, and custom checklist 
            tags. Prevents administrative bottlenecks during peak grading and board examination periods.
          </p>
        </div>
      );
    },
  },
  {
    id: "live_score",
    category: "Event Administration",
    title: "Scoreboard Live",
    src: `${BASE_PATH}/live_score.png`,
    bg: "/assets/backgrounds/storekit.jpg",
    screenshots: ["live_score.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://sunfest.live",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time scoring dashboard for quizzes and school competitions.
          </TypographyP>
          <TypographyP className="font-mono ">
            A lightweight database dashboard displaying scoreboard results. Developed to handle live scoring 
            for the Sunbeam Biztech Quiz and inter-house events, showing points instantly to spectators.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Real-time Telemetry</TypographyH3>
          <p className="font-mono mb-2">
            Powered by WebSockets and Firebase. Scoring admins input results through a secured panel, 
            which instantly pushes visual updates, rank calculations, house tallies, and celebratory sound effects 
            to main projector screens.
          </p>
        </div>
      );
    },
  },
];

export default projects;

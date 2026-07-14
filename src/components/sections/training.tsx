"use client";
import React from "react";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Terminal, Laptop, ShieldAlert, Award, Brain } from "lucide-react";

type TrainingItem = {
  id: number;
  role: string;
  topic: string;
  audience: string;
  description: string;
  icon: React.ReactNode;
};

const TRAINING_EVENTS: TrainingItem[] = [
  {
    id: 1,
    role: "Event Incharge & Director",
    topic: "AI Carnival (Reality 2.0) — Sunbeam School",
    audience: "Students & Tech Enthusiasts",
    description: "Headed 'Reality 2.0' hosting five core AI competition events: AI Light Camera Action (Generative Video), AI Palm Reader (Biometrics/Vision), AI Notes Generator (NLP/Summarization), AI Picture Manipulation (Creative Image Gen), and AI Time Travel (Predictive Simulation).",
    icon: <Brain className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    role: "Implementation Lead",
    topic: "Evalbee OMR Digitalization",
    audience: "School Evaluation Team & Faculty",
    description: "Configured and implemented the Evalbee automated OMR sheet checking system, digitalizing and saving hundreds of hours of manual verification time for educators evaluating student CUET answer sheets.",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    role: "Lead Facilitator",
    topic: "CBSE CT & AI Readiness Workshops",
    audience: "Students & Educators",
    description: "Conducted specialized seminars on integrating Computational Thinking (CT) and Artificial Intelligence readiness into school math curricula.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    role: "Keynote Trainer",
    topic: "AI in Classroom Pedagogy",
    audience: "School Academic Staff",
    description: "Trained teachers to leverage large language models (LLMs) to formulate lesson objectives, scaffold assessment papers, and design custom rubrics.",
    icon: <Laptop className="w-6 h-6 text-primary" />,
  },
  {
    id: 5,
    role: "Program Coordinator",
    topic: "Sunbeam Pedagogy Onboarding",
    audience: "New Inducted Educators",
    description: "Led onboarding bootcamps explaining active-learning structures, bloom's hierarchy integration, and classroom management techniques.",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    id: 6,
    role: "Organising Committee Lead",
    topic: "Impetus Academic Fest",
    audience: "Interschool Competitors",
    description: "Coordinated cross-functional administrative teams to host the school's major academic and technical festival 'Impetus'.",
    icon: <Terminal className="w-6 h-6 text-primary" />,
  },
  {
    id: 7,
    role: "Quiz Incharge & Master",
    topic: "Biztech Annual Quiz",
    audience: "Tech-savvy High Schoolers",
    description: "Administered and curated questions for the flagship Business-Technology Quiz, integrating custom websocket-based live scoring.",
    icon: <ShieldAlert className="w-6 h-6 text-primary" />,
  },
];

const TrainingSection = () => {
  return (
    <SectionWrapper id="training" className="flex flex-col items-center md:justify-center md:min-h-screen py-14 md:py-24">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="training"
          title="Training & Leadership"
          desc="Upskilling educators and directing academic initiatives."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="relative ml-4 md:ml-6 space-y-8">
          {/* Timeline Connector Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary/60 via-primary/40 to-primary/10 pointer-events-none" />

          {TRAINING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      {event.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold tracking-tight">{event.topic}</CardTitle>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">{event.role}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-secondary/30 px-2 py-0.5 rounded text-muted-foreground w-fit">
                    Audience: {event.audience}
                  </span>
                </CardHeader>
                <CardContent className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TrainingSection;

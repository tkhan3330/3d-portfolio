"use client";
import React from "react";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, GraduationCap, Users, ArrowUpRight } from "lucide-react";

type ResearchPaper = {
  title: string;
  subtitle: string;
  coverImage: string;
  mentors: string;
  team: string;
  date: string;
  tags: string[];
  summary: string;
  bulletPoints: string[];
  downloadUrl: string;
};

const PAPERS_DATA: ResearchPaper[] = [
  {
    title: "Menu Design Through Combinatorics",
    subtitle: "Maximizing Variety from a Minimal Raw-Material Base for Startups",
    coverImage: "/Research Papers/menu_combinatorics.png",
    mentors: "Teacher Mentor: Tauseef Khan",
    team: "Student Mathematics Research Team",
    date: "July 2026",
    tags: ["Combinatorics", "Multiplication Principle", "Business Optimization"],
    summary: "Reframes menu design as a mathematical optimization problem. Proves that a small base of just 19 raw materials across 4 categories can generate 480 distinct combinations, lowering inventory complexity and cutting food waste.",
    bulletPoints: [
      "Multiplication Principle: N₁ × N₂ × N₃ × ... × Nₖ combinations",
      "Permutation Filtering: Sorting by sequence layering vs. simple mixtures",
      "Culinary Compatibility constraints limiting theoretical ceiling",
      "Wastage Reduction model for food startups and cloud kitchens"
    ],
    downloadUrl: "/Research Papers/Menu_Combinatorics_Report.docx"
  },
  {
    title: "Big Box, Small Cost (PTM Case Study)",
    subtitle: "Optimizing Packaging Using Calculus & Consumer Psychology",
    coverImage: "/Research Papers/box_optimization.png",
    mentors: "Maths Mentor: Tauseef Khan | Psychology Mentor: Ms. Neha Kapoor",
    team: "Aarav Mehta, Priya Nair, Kabir Sethi, Simran Kaur, Rohan Iyer",
    date: "February 2026",
    tags: ["Application of Derivatives", "Consumer Psychology", "Volume Optimization"],
    summary: "A real-world fundraising stall selling cookie and ladoo boxes. Designed optimal cardstock packaging using derivatives, compromised with consumer volume-elongation bias, and returned ₹3,700 net profit.",
    bulletPoints: [
      "Textbook optimum (x = 2h) minimized cardstock surface area",
      "Blind Perception Test: 72% of shoppers selected taller boxes",
      "Elongation Bias Compromise: 10×10×8 cm packaging dimensions",
      "Glue tabs, lid tuck-in flaps, and window cutting parameters"
    ],
    downloadUrl: "/Research Papers/PTM_Stall_Calculus_Psychology_Report.docx"
  },
  {
    title: "Reusable Calendar Printing Model",
    subtitle: "Reducing Paper Consumption Through Perennial Design",
    coverImage: "/Research Papers/reusable_calendar.png",
    mentors: "Author / Mentor: Tauseef Khan",
    team: "Sustainability & Operations Review Case Study",
    date: "July 2026",
    tags: ["Gregorian Cycles", "Resource Efficiency", "Circular Product Design"],
    summary: "Proposes printing a fixed set of reusable calendar templates once and cycling them over years. Clarifies that there are 14 unique layout templates (7 common + 7 leap years) in Gregorian calendar recurrence cycles.",
    bulletPoints: [
      "80-95% long-run reduction in calendar-related paper consumption",
      "Weekday shift progression: 1 day in common years, 2 days in leap years",
      "Skipped leap-years rule (century skip) layout mapping lookup",
      "High-durability laminated stock manufacturing requirements"
    ],
    downloadUrl: "/Research Papers/Reusable_Calendar_Sustainability_Report.docx"
  },
  {
    title: "Teaching Calculating vs. Computing",
    subtitle: "Mathematics as the Cornerstone of CT and AI Readiness",
    coverImage: "/Research Papers/math_ai_readiness.png",
    mentors: "Presenter / Author: Tauseef Khan",
    team: "District Level Deliberation (DLD) Case Paper",
    date: "May 2026",
    tags: ["Computational Thinking", "AI Readiness", "Pedagogical Framework"],
    summary: "CBSE DLD case study mapping 9 Computational Thinking skills directly into the Grades 3–8 NCERT mathematics syllabus. Connects core math operations to autonomous vehicle and recommendation model structures.",
    bulletPoints: [
      "Reframes NCERT math lessons as CT & AI experiences with zero extra resources",
      "Embedded 9 CBSE CT skills (Decomposition, Abstraction, Generalization, etc.)",
      "3-stage lesson model: Do Mathematics → Name CT Skill → Land AI Connection",
      "Pencil-Ink-Erase Analogy: Prioritizing conceptual logic over rote answers"
    ],
    downloadUrl: "/Research Papers/Paper on CT&AI in classroom.pdf"
  }
];

const ResearchPapersSection = () => {
  return (
    <SectionWrapper id="research" className="py-14 md:py-24 w-full">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="research"
          title="Research & Publications"
          desc="Applied mathematics research papers and classroom case studies investigating mathematical optimization, resource sustainability, and computational thinking."
          className="mb-12 md:mb-16 mt-0"
        />

        {/* Papers Grid Layout: Spacious 2x2 grid for 4 papers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAPERS_DATA.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="flex flex-col w-full border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 shadow-sm hover:shadow-lg overflow-hidden group">
                
                {/* Cover Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50">
                  <img
                    src={paper.coverImage}
                    alt={paper.title}
                    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />
                  
                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-0.5 rounded-md text-[9px] font-mono text-white font-semibold uppercase tracking-wider border border-white/10 z-10">
                    {paper.tags[0]}
                  </div>

                  {/* Floating Action: Top Right Download Button */}
                  <div className="absolute top-3 right-3 z-20">
                    <Button
                      asChild
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/70 hover:bg-primary text-white border border-white/10 hover:border-primary transition-all duration-300"
                      title="Download PDF/Report"
                    >
                      <a href={paper.downloadUrl} download>
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Card Content Section */}
                <CardHeader className="pb-2 pt-5">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                    {paper.date}
                  </span>
                  
                  <CardTitle className="text-lg font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {paper.title}
                  </CardTitle>
                  
                  <p className="text-xs text-muted-foreground leading-normal mt-1">
                    {paper.subtitle}
                  </p>

                  {/* HIGHLY VISIBLE HEADER DOWNLOAD ACTION: Safe from any clipping */}
                  <a
                    href={paper.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mt-3.5 w-fit pointer-events-auto bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-md border border-primary/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Paper ({paper.downloadUrl.endsWith(".pdf") ? "PDF" : "Word"})
                  </a>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between mt-2">
                  <div>
                    {/* Authors Meta */}
                    <div className="flex flex-col gap-1 text-[11px] font-mono text-foreground bg-secondary/40 p-2.5 rounded-lg border border-border/30 mb-4">
                      <div className="flex items-center gap-1.5 leading-snug">
                        <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{paper.mentors}</span>
                      </div>
                      <div className="flex items-center gap-1.5 leading-snug">
                        <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{paper.team}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {paper.summary}
                    </p>

                    {/* Highlights bullet points */}
                    <h5 className="text-[11px] font-bold tracking-wider uppercase text-foreground mb-2 flex items-center gap-1 font-mono">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Key Findings
                    </h5>
                    <ul className="space-y-1.5 mb-6 text-xs text-muted-foreground leading-relaxed">
                      {paper.bulletPoints.map((point) => (
                        <li key={point} className="flex gap-1.5 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solid Colored Accent Action Button */}
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="w-full text-xs font-semibold gap-2 group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 mt-2 shadow-sm"
                  >
                    <a href={paper.downloadUrl} download>
                      <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                      Download Report
                      <ArrowUpRight className="w-3 h-3 opacity-80 group-hover/btn:opacity-100 transition-opacity ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResearchPapersSection;

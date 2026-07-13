"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ClassroomActivities from "@/components/sections/activities";
import AchievementsSection from "@/components/sections/achievements";
import EventGallerySection from "@/components/sections/gallery";
import ResearchPapersSection from "@/components/sections/research";
import AIExplainersSection from "@/components/sections/explainers";
import TrainingSection from "@/components/sections/training";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ClassroomActivities />
        <AchievementsSection />
        <EventGallerySection />
        <ResearchPapersSection />
        <AIExplainersSection />
        <TrainingSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;

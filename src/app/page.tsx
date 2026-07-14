import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import { getBlogPosts } from "@/lib/mdx";
import AnimatedBackground from "@/components/animated-background";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ClassroomActivities from "@/components/sections/activities";
import ClassroomSection from "@/components/sections/classroom";
import AchievementsSection from "@/components/sections/achievements";
import EventGallerySection from "@/components/sections/gallery";
import ResearchPapersSection from "@/components/sections/research";
import AIExplainersSection from "@/components/sections/explainers";
import TrainingSection from "@/components/sections/training";
import BlogsSection from "@/components/sections/blogs";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import BackToTop from "@/components/back-to-top";
import SectionIndicator from "@/components/section-indicator";

function MainPage() {
  const posts = getBlogPosts()
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
    )
    .slice(0, 4)
    .map((post) => ({
      slug: post.slug,
      metadata: post.metadata,
      wordCount: post.content.trim().split(/\s+/).length,
    }));

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ClassroomActivities />
        <ClassroomSection />
        <AchievementsSection />
        <EventGallerySection />
        <ResearchPapersSection />
        <AIExplainersSection />
        <TrainingSection />
        <BlogsSection posts={posts} />
        <ContactSection />
      </main>
      <SectionIndicator />
      <BackToTop />
    </SmoothScroll>
  );
}

export default MainPage;

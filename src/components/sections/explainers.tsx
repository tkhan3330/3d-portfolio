"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X, Video, Sparkles, GraduationCap } from "lucide-react";

type ExplainerVideo = {
  title: string;
  topic: string;
  thumbnail: string;
  videoUrl: string;
  tag: string;
  description: string;
};

const VIDEOS_DATA: ExplainerVideo[] = [
  {
    title: "Limits: Why sin x / x approaches 1",
    topic: "Limits & Calculus Intuition",
    thumbnail: "/AI Explainer Videos/limits_explainer.png",
    videoUrl: "/AI Explainer Videos/why sinxbyx approaches 1.mp4",
    tag: "Limits & Trigonometry",
    description: "An intuitive geometrical explanation of why the limit of sin(x)/x approaches 1 as x approaches 0, using visual coordinate sectors and sandwich theorem concepts."
  },
  {
    title: "Linear Programming Optimization",
    topic: "LPP Graphing & Feasible Regions",
    thumbnail: "/AI Explainer Videos/linear_programming.png",
    videoUrl: "/AI Explainer Videos/Linear Programming.mp4",
    tag: "LPP & Algebra",
    description: "Step-by-step tutorial on drafting constraint equations, shading feasible regions, and finding optimal objective coordinate values for Class XII Applied Maths."
  },
  {
    title: "Determinants & Linear Systems",
    topic: "Matrix Transformations & Cramer's Rule",
    thumbnail: "/AI Explainer Videos/matrix_determinant.png",
    videoUrl: "/AI Explainer Videos/Determinant.mp4",
    tag: "Matrices",
    description: "Exploring determinant properties, minor/cofactor calculations, area of triangles, and solving multi-variable equations using Cramer's rule."
  },
  {
    title: "JEE Advanced Calculus Questions",
    topic: "Application of Derivatives Explainer",
    thumbnail: "/AI Explainer Videos/JEE Advance.jpg",
    videoUrl: "/AI Explainer Videos/apache video.mp4",
    tag: "JEE Advanced",
    description: "Deep-dive analysis scaffolding and solving complex derivatives and rate-of-change problems from JEE Advanced and Board examinations."
  }
];

const AIExplainersSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <SectionWrapper id="explainers" className="py-24 w-full bg-secondary/5">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="explainers"
          title="AI Explainer Lectures"
          desc="Intuitive, animated video lectures created using AI to help students master complex mathematical problems."
          className="mb-12 md:mb-16 mt-0"
        />

        {/* Video Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS_DATA.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card 
                className="flex flex-col w-full border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 shadow-sm hover:shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                {/* Thumbnail Header with Play Button */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50 flex items-center justify-center">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center z-10">
                    <Button
                      size="icon"
                      className="rounded-full h-14 w-14 bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 z-20"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </Button>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-0.5 rounded-md text-[9px] font-mono text-white font-semibold uppercase tracking-wider border border-white/10 z-10">
                    {video.tag}
                  </div>
                </div>

                {/* Card Title Block */}
                <CardHeader className="pb-2 pt-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                      Video Lecture
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground leading-normal mt-1">
                    {video.topic}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 mt-2 pb-5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Playback Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <div className="absolute top-4 right-4 z-[100001]">
              <Button
                variant="ghost"
                onClick={() => setActiveVideo(null)}
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 text-sm font-semibold border border-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <span className="text-white/60 font-mono text-[10px] mt-3">
              {VIDEOS_DATA.find(v => v.videoUrl === activeVideo)?.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default AIExplainersSection;

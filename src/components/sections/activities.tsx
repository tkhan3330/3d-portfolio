"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Video, Presentation, Cpu, Image, Building2, HeartPulse, ChevronRight, ChevronLeft, Layers, Sparkles } from "lucide-react";

// --- Data definitions matching your actual files in public/Activities ---
const GEOGEBRA_IMAGES = [
  "/Activities/Using Geogebra Live Simulation/Pic 1.png",
  "/Activities/Using Geogebra Live Simulation/Pic 2.png",
  "/Activities/Using Geogebra Live Simulation/pic 3.jpg",
  "/Activities/Using Geogebra Live Simulation/pic 4.png",
  "/Activities/Using Geogebra Live Simulation/pic 5.jpg"
];

const PRESENTATION_IMAGES = [
  "/Activities/Student Presentations/DSC01752.JPG",
  "/Activities/Student Presentations/DSC01753.JPG",
  "/Activities/Student Presentations/DSC01757.JPG"
];

const ALGO_TRADING_IMAGES = [
  {
    src: "/Activities/Cross Dept Algo Trading Maths with Commerce/Me along with Comm Dept. Discussing on Maths in Commerce.JPG",
    caption: "Cross-Department Collaboration: Discussing the Mathematics of Commerce"
  },
  {
    src: "/Activities/Cross Dept Algo Trading Maths with Commerce/crossover-moving-lines-1.png",
    caption: "Mathematical representation of crossover moving lines"
  },
  {
    src: "/Activities/Cross Dept Algo Trading Maths with Commerce/mean-final-1.png",
    caption: "Mean reversion analysis and trading convergence charts"
  },
  {
    src: "/Activities/Cross Dept Algo Trading Maths with Commerce/python Program.png",
    caption: "Algorithmic Python program logic for trading signals"
  }
];

const ClassroomActivities = () => {
  // Slideshow States
  const [geogebraIdx, setGeogebraIdx] = useState(0);
  const [presentationIdx, setPresentationIdx] = useState(0);
  const [algoIdx, setAlgoIdx] = useState(0);

  // Video Playing Overlay state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handlers for sliders
  const nextSlide = (len: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => (prev + 1) % len);
  };
  const prevSlide = (len: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => (prev === 0 ? len - 1 : prev - 1));
  };

  // Autoplay intervals to advance slides dynamically (slightly staggered for natural visual layout rhythm)
  useEffect(() => {
    const algoTimer = setInterval(() => {
      setAlgoIdx((prev) => (prev + 1) % ALGO_TRADING_IMAGES.length);
    }, 4500);

    const presentationTimer = setInterval(() => {
      setPresentationIdx((prev) => (prev + 1) % PRESENTATION_IMAGES.length);
    }, 5000);

    const geogebraTimer = setInterval(() => {
      setGeogebraIdx((prev) => (prev + 1) % GEOGEBRA_IMAGES.length);
    }, 5500);

    return () => {
      clearInterval(algoTimer);
      clearInterval(presentationTimer);
      clearInterval(geogebraTimer);
    };
  }, []);

  return (
    <SectionWrapper id="activities" className="flex flex-col items-center md:justify-center md:min-h-screen py-14 md:py-24">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="activities"
          title="Classroom Activities"
          desc="Everything boasted in this portfolio is actively brought to life in the classroom."
          className="mb-12 md:mb-16 mt-0"
        />

        {/* TOP ROW: Hands-on Projects & Cross-Dept Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* CARD 1: Cross Dept Algo Trading */}
          <Card className="flex flex-col border-border bg-card/50 backdrop-blur-sm overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={algoIdx}
                  src={ALGO_TRADING_IMAGES[algoIdx].src}
                  alt={ALGO_TRADING_IMAGES[algoIdx].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
                <p className="text-white text-xs font-mono tracking-tight leading-snug">
                  {ALGO_TRADING_IMAGES[algoIdx].caption}
                </p>
              </div>
              
              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => prevSlide(ALGO_TRADING_IMAGES.length, setAlgoIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => nextSlide(ALGO_TRADING_IMAGES.length, setAlgoIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                  Cross-Department Project
                </span>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Algorithmic Trading (Maths × Commerce)</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 mt-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bridged pure calculus and statistical modeling with financial markets. Students collaborated with the Commerce department (guided by Prateek Sir in Economics and Rakesh Sir in Accounts) to model moving average crossover graphs, write Python code, and evaluate real-time candlestick patterns.
              </p>
            </CardContent>
          </Card>

          {/* CARD 2: Student Math Presentations */}
          <Card className="flex flex-col border-border bg-card/50 backdrop-blur-sm overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={presentationIdx}
                  src={PRESENTATION_IMAGES[presentationIdx]}
                  alt="Student Presentations"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
              
              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => prevSlide(PRESENTATION_IMAGES.length, setPresentationIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => nextSlide(PRESENTATION_IMAGES.length, setPresentationIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                  Classroom Presentations
                </span>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Student-Led Research Panels</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 mt-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rather than memorizing formulas, students present mathematical concepts using digital tools, explaining topics like Linear Programming (LPP) on spreadsheets and presenting slideshow formulations of applied calculus equations to their peers.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* MIDDLE ROW: Multimedia / Tech integration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 3: GeoGebra live simulations */}
          <Card className="flex flex-col border-border bg-card/30 overflow-hidden shadow-sm md:col-span-2 group">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={geogebraIdx}
                  src={GEOGEBRA_IMAGES[geogebraIdx]}
                  alt="GeoGebra Classroom Simulations"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex justify-between items-center z-10">
                <span className="text-white text-xs font-mono">GeoGebra Graph Simulation {geogebraIdx + 1} of 5</span>
              </div>
              
              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => prevSlide(GEOGEBRA_IMAGES.length, setGeogebraIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={() => nextSlide(GEOGEBRA_IMAGES.length, setGeogebraIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <CardHeader className="pb-1 pt-4 flex flex-row items-center gap-3">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Cpu className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-bold tracking-tight">GeoGebra 3D Simulations</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                Students construct and manipulate visual models directly on their devices. This brings abstract, high-level geometric dimensions to life:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground bg-secondary/35 p-3 rounded-lg border border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  3D Geometry (skew lines, cosines)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Trigonometric Manipulations
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Degree & Radian Transitions
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Interactive Conic Sections
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 4: Explanatory Videos using NotebookLM / AI */}
          <Card className="flex flex-col border-border bg-card/30 overflow-hidden shadow-sm relative group">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50 flex items-center justify-center">
              {/* Overlay Thumbnail representation */}
              <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-4 text-center">
                <Video className="w-12 h-12 text-white/40 mb-3" />
                <span className="text-white font-bold text-xs tracking-tight">Application of Derivatives</span>
                <span className="text-white/60 text-[10px] font-mono mt-1">Class XII Explainer Video</span>
              </div>
              
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center z-10">
                <Button
                  onClick={() => setIsVideoPlaying(true)}
                  className="rounded-full h-14 w-14 bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </Button>
              </div>
            </div>
            
            <CardHeader className="pb-1 pt-4 flex flex-row items-center gap-3">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-bold tracking-tight">Calculus AI Video Explainers</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              <p>
                To support remote student self-study, I generate high-fidelity calculus audio-visual explainers of tough Board Examination questions using AI models (like Google NotebookLM) to translate complex textbooks into intuitive, conversational audio/video assets.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* BOTTOM ROW: Hands-on Activity Planner */}
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2.5">
          <Layers className="w-5.5 h-5.5 text-primary" /> Hands-On Activity Planner
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Architecture Planner */}
          <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 shrink-0 h-fit">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-foreground mb-1.5">Maths in Architecture</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students analyze blueprints of monuments (like parabolic gateways, hyperbola cooling towers, and catenary suspension bridges) to model structural loads, identifying matching mathematical formulas in architectural designs.
              </p>
            </div>
          </div>

          {/* Medical Planner */}
          <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 dark:text-rose-400 shrink-0 h-fit">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-foreground mb-1.5">Maths in Medical Sciences</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applied mathematical modeling of medical absorption rates. Students write exponential decay differential equations to track how medications enter and leave the bloodstream, calculating half-lives and peak-absorption limits.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Video Playback Modal Overlay */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <div className="absolute top-4 right-4 z-[100001]">
              <Button
                variant="ghost"
                onClick={() => setIsVideoPlaying(false)}
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 text-sm font-semibold border border-white/10"
              >
                Close ×
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
                src="/Activities/Application of Derivative class xii question explainer apache video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="text-white/60 font-mono text-[10px] mt-3">
              Application of Derivative Class XII Explainer Video
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ClassroomActivities;

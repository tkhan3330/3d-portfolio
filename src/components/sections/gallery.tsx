"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLightbox } from "@/hooks/use-lightbox";
import { Eye, X, ChevronLeft, ChevronRight, GraduationCap, Sparkles, Award, Layers, Star, Newspaper } from "lucide-react";

// --- Photo Databases matching your actual files in public/Certificates ---
const CBSE_PHOTOS = [
  { src: "/Certificates/14. CBSE CT&AI Workshop/CBSE CT&AI - 1.jpg", caption: "CBSE Computational Thinking and Artificial Intelligence workshop presentation" },
  { src: "/Certificates/14. CBSE CT&AI Workshop/CBSE CT&AI - 2.jpg", caption: "Audience of CBSE educators discussing active computational thinking models" },
  { src: "/Certificates/14. CBSE CT&AI Workshop/CBSE CT&AI - 3.jpg", caption: "Leading discussions on AI curriculum implementation for high schools" },
  { src: "/Certificates/14. CBSE CT&AI Workshop/CBSE CT&AI - 4.jpg", caption: "Interactive curriculum presentation slide deck for PGT Mathematics teachers" },
  { src: "/Certificates/14. CBSE CT&AI Workshop/CBSE CT&AI - 5.jpg", caption: "CBSE teacher training workshop panel group discussion session" }
];

const CARNIVAL_PHOTOS = [
  { src: "/Certificates/AI Carnival/1.jpg", caption: "AI Carnival grand opening banner and student coordinator group" },
  { src: "/Certificates/AI Carnival/IMG-20260117-WA0023.jpg", caption: "Students presenting prompt engineering battle frameworks" },
  { src: "/Certificates/AI Carnival/IMG-20260117-WA0027.jpg", caption: "Reviewing student coding submissions during the AI hackathon challenge" },
  { src: "/Certificates/AI Carnival/IMG-20260117-WA0029.jpg", caption: "Informatics judges evaluating the custom student-designed AI chatbots" },
  { src: "/Certificates/AI Carnival/IMG-20260117-WA0030.jpg", caption: "Excited student audience participating in the live prompt battles" },
  { src: "/Certificates/AI Carnival/IMG-20260117-WA0031.jpg", caption: "AI coding workspace environment in the school information technology lab" },
  { src: "/Certificates/AI Carnival/IMG-20260125-WA0035.jpg", caption: "Briefing student competitor teams about the generative AI criteria" },
  { src: "/Certificates/AI Carnival/IMG-20260125-WA0037.jpg", caption: "Prizes and credentials distribution at the AI Carnival closing ceremony" },
  { src: "/Certificates/AI Carnival/IMG-20260318-WA0005.jpg", caption: "AI Carnival Reality 2.0 student panel discussing logistics schedules" }
];

const DRISHTIKONE_PHOTOS = [
  { src: "/Certificates/Drishtikone/4.1 Drishtikone.jpg", caption: "Drishtikone Award plaque and pedagogical certificate close-up" },
  { src: "/Certificates/Drishtikone/4.2 Drishtikone 2.jpg", caption: "Receiving the Drishtikone Award on stage from senior academic leaders" },
  { src: "/Certificates/Drishtikone/4.3 Drishtikoke 3.jpg", caption: "Drishtikone Award ceremony stage group photo with academic directors" },
  { src: "/Certificates/Drishtikone/3. Teacher's Toolkit Award.jpg", caption: "Teacher's Toolkit Excellence Recognition credential scan" }
];

const EventGallerySection = () => {
  // Slideshow States
  const [cbseIdx, setCbseIdx] = useState(0);
  const [carnivalIdx, setCarnivalIdx] = useState(0);
  const [drishtikoneIdx, setDrishtikoneIdx] = useState(0);

  // Lightbox States
  const [lightboxEvent, setLightboxEvent] = useState<"cbse" | "carnival" | "drishtikone" | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  // Autoplay intervals to advance slides dynamically (staggered for visual balance)
  useEffect(() => {
    const cbseTimer = setInterval(() => {
      setCbseIdx((prev) => (prev + 1) % CBSE_PHOTOS.length);
    }, 4500);

    const carnivalTimer = setInterval(() => {
      setCarnivalIdx((prev) => (prev + 1) % CARNIVAL_PHOTOS.length);
    }, 5000);

    const drishtikoneTimer = setInterval(() => {
      setDrishtikoneIdx((prev) => (prev + 1) % DRISHTIKONE_PHOTOS.length);
    }, 5500);

    return () => {
      clearInterval(cbseTimer);
      clearInterval(carnivalTimer);
      clearInterval(drishtikoneTimer);
    };
  }, []);

  // Determine active lightbox items
  const activePhotos = 
    lightboxEvent === "cbse" ? CBSE_PHOTOS :
    lightboxEvent === "carnival" ? CARNIVAL_PHOTOS :
    lightboxEvent === "drishtikone" ? DRISHTIKONE_PHOTOS : [];

  const handleOpenLightbox = (event: "cbse" | "carnival" | "drishtikone", index: number) => {
    setLightboxEvent(event);
    setLightboxIdx(index);
  };

  const goPrev = () => {
    if (!lightboxEvent) return;
    setLightboxIdx((prev) => (prev === 0 ? activePhotos.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!lightboxEvent) return;
    setLightboxIdx((prev) => (prev === activePhotos.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const { swipeHandlers } = useLightbox({
    active: lightboxEvent !== null,
    onPrev: activePhotos.length > 1 ? goPrev : undefined,
    onNext: activePhotos.length > 1 ? goNext : undefined,
    onClose: () => setLightboxEvent(null),
  });

  // Handlers for manual card slides
  const nextSlide = (e: React.MouseEvent, len: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    e.stopPropagation();
    setter((prev) => (prev + 1) % len);
  };
  const prevSlide = (e: React.MouseEvent, len: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    e.stopPropagation();
    setter((prev) => (prev === 0 ? len - 1 : prev - 1));
  };

  return (
    <SectionWrapper id="gallery" className="py-14 md:py-24 bg-secondary/5 w-full">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="gallery"
          title="Event Highlights"
          desc="Live snapshots from workshops, AI competitions, and award presentations shown directly in front."
          className="mb-12 md:mb-16 mt-0"
        />

        {/* TOP ROW: Two 1/2 width cards (Workshop & Carnival) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* CARD 1: CBSE CT & AI Workshop */}
          <Card 
            className="flex flex-col border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in"
            onClick={() => handleOpenLightbox("cbse", cbseIdx)}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={cbseIdx}
                  src={CBSE_PHOTOS[cbseIdx].src}
                  alt={CBSE_PHOTOS[cbseIdx].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
                <p className="text-white text-xs font-mono tracking-tight leading-snug">
                  {CBSE_PHOTOS[cbseIdx].caption}
                </p>
              </div>

              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => prevSlide(e, CBSE_PHOTOS.length, setCbseIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => nextSlide(e, CBSE_PHOTOS.length, setCbseIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                  Professional Development
                </span>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">CBSE CT & AI Workshop</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 mt-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Photos from the teacher professional development panels and curriculum alignment forums led for high school educators. Focused on integrating computational thinking principles directly into mathematics classrooms.
              </p>
            </CardContent>
          </Card>

          {/* CARD 2: AI Carnival Highlights */}
          <Card 
            className="flex flex-col border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in"
            onClick={() => handleOpenLightbox("carnival", carnivalIdx)}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={carnivalIdx}
                  src={CARNIVAL_PHOTOS[carnivalIdx].src}
                  alt={CARNIVAL_PHOTOS[carnivalIdx].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
                <p className="text-white text-xs font-mono tracking-tight leading-snug">
                  {CARNIVAL_PHOTOS[carnivalIdx].caption}
                </p>
              </div>

              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => prevSlide(e, CARNIVAL_PHOTOS.length, setCarnivalIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => nextSlide(e, CARNIVAL_PHOTOS.length, setCarnivalIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                  Classroom Festivities
                </span>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">AI Carnival Highlights</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 mt-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Photos from students coding, contesting prompt engineering battles, building conversational chatbots, and celebrating wins during the school-wide tech integration challenges.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* BOTTOM ROW: 2/3 width card (Drishtikone) & 1/3 width card (Spotlight) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 3: Drishtikone Ceremony (2/3 width) */}
          <Card 
            className="flex flex-col border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm overflow-hidden shadow-sm md:col-span-2 group cursor-zoom-in"
            onClick={() => handleOpenLightbox("drishtikone", drishtikoneIdx)}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/30 bg-background/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={drishtikoneIdx}
                  src={DRISHTIKONE_PHOTOS[drishtikoneIdx].src}
                  alt={DRISHTIKONE_PHOTOS[drishtikoneIdx].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex justify-between items-center z-10">
                <span className="text-white text-xs font-mono">Drishtikone Ceremony {drishtikoneIdx + 1} of 4</span>
              </div>

              {/* Slider Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => prevSlide(e, DRISHTIKONE_PHOTOS.length, setDrishtikoneIdx)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full h-10 w-10 z-10"
                onClick={(e) => nextSlide(e, DRISHTIKONE_PHOTOS.length, setDrishtikoneIdx)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <CardHeader className="pb-1 pt-4 flex flex-row items-center gap-3">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-bold tracking-tight">Drishtikone & Toolkit Awards</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                Stage honors and leadership credentials received during professional networks. These confirm the pedagogical milestones reached across CBSE systems:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground bg-secondary/35 p-3 rounded-lg border border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Drishtikone Plaque & Stage Recognition
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Teacher's Toolkit Achievement
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Regional Educator Panels
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Professional Community Leadership
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 4: National Recognition Spotlight (1/3 width) */}
          <Card className="flex flex-col border-border bg-card/90 dark:bg-card/40 backdrop-blur-sm overflow-hidden shadow-sm relative group p-6 justify-center">
            <div className="flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">National Impact & Press Highlights</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Acknowledged across CBSE panels and media features (including the Times of India article highlight) for bringing direct digitalization and active EdTech structures into high school curricula.
                </p>
                <div className="flex flex-col gap-2.5 text-xs text-foreground font-mono bg-secondary/20 p-3.5 rounded-lg border border-border/40">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Times of India Feature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>8+ Years Math Teaching</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxEvent && activePhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxEvent(null)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <div className="absolute top-4 right-4 flex items-center gap-4 z-[100001]">
              <span className="text-white font-mono text-sm hidden md:inline-block bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider text-xs">
                {lightboxEvent === "cbse" ? "CBSE Workshop" : lightboxEvent === "carnival" ? "AI Carnival" : "Drishtikone"} Album ({lightboxIdx + 1} of {activePhotos.length})
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 border border-white/5"
                onClick={() => setLightboxEvent(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Left arrow */}
            {activePhotos.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 md:left-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            )}

            {/* Right arrow */}
            {activePhotos.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 md:right-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            )}

            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
              {...swipeHandlers}
            >
              <img
                src={activePhotos[lightboxIdx].src}
                alt={activePhotos[lightboxIdx].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
              <span className="text-white/80 text-xs md:text-sm font-mono text-center max-w-2xl px-4 leading-relaxed">
                {activePhotos[lightboxIdx].caption}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default EventGallerySection;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { shimmerDataURL } from "@/lib/shimmer";
import { useLightbox } from "@/hooks/use-lightbox";
import { Award, Globe, Star, Landmark, GraduationCap, Users, Newspaper, Eye, X, Brain, CheckCircle, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

type AchievementItem = {
  id: number;
  title: string;
  issuer: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  images: string[]; // Supports multiple certificate pages/images
};

const ACHIEVEMENTS: AchievementItem[] = [
  // --- MAJOR AWARDS ---
  {
    id: 1,
    title: "Drishtikone Award",
    issuer: "Pedagogical Excellence Initiative",
    description: "Awarded for pioneering vision in modern classroom pedagogy and student engagement models.",
    icon: <Award className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/10 to-rose-500/5",
    images: [
      "/Certificates/Drishtikone/4.1 Drishtikone.jpg",
      "/Certificates/Drishtikone/4.2 Drishtikone 2.jpg",
      "/Certificates/Drishtikone/4.3 Drishtikoke 3.jpg"
    ],
  },
  {
    id: 2,
    title: "Round Square Postcard Recognition",
    issuer: "Round Square International Network",
    description: "Acknowledged for leading collaborative global learning modules and promoting student connection.",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/10 to-blue-500/5",
    images: [
      "/Certificates/5. Round Square 1.jpg",
      "/Certificates/5.1 Round Square Meeting.jpg",
      "/Certificates/6. Round Square 2.jpg"
    ],
  },
  {
    id: 3,
    title: "Rising Star Award",
    issuer: "Academic Board of Excellence",
    description: "Recognized for showing exceptional performance and growth in educational leadership.",
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/10 to-yellow-500/5",
    images: ["/Certificates/2. Rising Star.jpg"],
  },
  {
    id: 4,
    title: "British Council School Award",
    issuer: "British Council",
    description: "Contributed key curriculum designs that helped our institution earn this international standard label.",
    icon: <Landmark className="w-8 h-8 text-teal-400" />,
    color: "from-teal-500/10 to-teal-500/5",
    images: ["/Certificates/7. British Council_page-0001.jpg"],
  },
  {
    id: 5,
    title: "IC3 Award Contribution",
    issuer: "IC3 Institute",
    description: "Honored for excellence in career counseling alignment within the high school mathematics division.",
    icon: <GraduationCap className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/10 to-indigo-500/5",
    images: ["/Certificates/8. ic3-Tauseef Khan-EB0925035.jpg"],
  },
  {
    id: 6,
    title: "IPN Award",
    issuer: "Indian Professional Network",
    description: "Awarded for active leadership, teacher networking, and knowledge sharing in regional educator forums.",
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/10 to-emerald-500/5",
    images: ["/Certificates/1. IPN.png"],
  },
  {
    id: 7,
    title: "Times of India Feature",
    issuer: "Times of India Newspaper",
    description: "Featured article highlighting innovative tech integrations and pedagogical shifts in high school education.",
    icon: <Newspaper className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/10 to-orange-500/5",
    images: [
      "/Certificates/9. TOI Artcile 1.jpg",
      "/Certificates/10. TOI Article 2.jpg"
    ],
  },
  {
    id: 8,
    title: "Exceptional Teacher Award",
    issuer: "National School Awards",
    description: "Honored for exceptional classroom instruction, digital resource design, and pedagogical contribution.",
    icon: <Star className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/10 to-amber-500/5",
    images: ["/Certificates/Exceptional Teacher Award.jpg"],
  },
  {
    id: 9,
    title: "IPN Ambassador",
    issuer: "Indian Professional Network",
    description: "Appointed as IPN Ambassador for fostering regional collaborative teaching environments.",
    icon: <Users className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/10 to-pink-500/5",
    images: ["/Certificates/IPN Ambassador.jpg"],
  },
  {
    id: 10,
    title: "Teacher's Toolkit Award",
    issuer: "Educational Leadership Board",
    description: "Recognized for compiling and developing innovative digital mathematical tools and resources for classes.",
    icon: <Award className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/10 to-indigo-500/5",
    images: ["/Certificates/Drishtikone/3. Teacher's Toolkit Award.jpg"],
  },
  {
    id: 34,
    title: "Sahcharya Best Young Educator 2025",
    issuer: "Sahcharya",
    description: "Recognized as the Best Young Educator for outstanding teaching impact, mentorship, and academic leadership.",
    icon: <Star className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/10 to-rose-500/5",
    images: ["/Certificates/sahcharya best young educator 2025.jpg"],
  },
  {
    id: 35,
    title: "Sahcharya Most Innovative Teacher 2026",
    issuer: "Sahcharya",
    description: "Honored as the Most Innovative Teacher for pioneering creative, technology-driven classroom methods.",
    icon: <Award className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/10 to-amber-500/5",
    images: ["/Certificates/sahcharya most inovative teacher 2026.jpg"],
  },

  // --- AI & TECH ---
  {
    id: 11,
    title: "OpenAI ChatGPT Educator",
    issuer: "OpenAI",
    description: "Certified in ChatGPT Foundations for Educators, focusing on generative AI integration in classroom teaching.",
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/10 to-cyan-500/5",
    images: [
      "/Certificates/OpenAI ChatGPT Foundation for teachers.png",
      "/Certificates/OpenAI ChatGPT Foundations.png"
    ],
  },
  {
    id: 12,
    title: "IBM AI Foundations Certification",
    issuer: "IBM",
    description: "Certified in IBM Generative AI Foundations, mastering prompt engineering, neural architectures, and AI ethics.",
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/10 to-purple-500/5",
    images: ["/Certificates/IBM AI.png"],
  },
  {
    id: 13,
    title: "Google AI & Analytics Credential",
    issuer: "Google",
    description: "Completed Google AI training modules on data driven planning and machine learning basics.",
    icon: <Brain className="w-8 h-8 text-sky-400" />,
    color: "from-sky-500/10 to-sky-500/5",
    images: ["/Certificates/Google AI.png"],
  },
  {
    id: 14,
    title: "Microsoft AI in Education",
    issuer: "Microsoft",
    description: "Completed Microsoft Educator AI courses, focusing on machine learning tools for student diagnostic assessments.",
    icon: <Brain className="w-8 h-8 text-lime-400" />,
    color: "from-lime-500/10 to-lime-500/5",
    images: ["/Certificates/Microsoft AI.png"],
  },
  {
    id: 15,
    title: "UNESCO AI & Ethics Framework",
    issuer: "UNESCO",
    description: "Completed UNESCO workshops on ethical guidelines and policies for AI integration in school systems.",
    icon: <Brain className="w-8 h-8 text-violet-400" />,
    color: "from-violet-500/10 to-violet-500/5",
    images: ["/Certificates/UNESCO AI.png"],
  },
  {
    id: 16,
    title: "AI Teacher of the Month",
    issuer: "EdTech Analytics Council",
    description: "Selected as the AI Teacher of the Month for implementing dynamic chatbot lesson plan builders.",
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/10 to-yellow-500/5",
    images: ["/Certificates/AI Teacher of The Month.jpg"],
  },
  {
    id: 17,
    title: "AI Carnival Convener Certificate",
    issuer: "National AI Student Summit",
    description: "Commended for organizing the AI and tech innovation carnival, hosting prompt battles and AI design.",
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/10 to-pink-500/5",
    images: ["/Certificates/AI Carnival.jpg"],
  },

  // --- CBSE & TRAINING ---
  {
    id: 18,
    title: "CBSE Computational Thinking & AI",
    issuer: "CBSE Board India",
    description: "Led Computational Thinking & AI Readiness workshops and completed official CBSE teacher training modules.",
    icon: <Landmark className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/10 to-indigo-500/5",
    images: ["/Certificates/14. CT&AI.jpg"],
  },
  {
    id: 19,
    title: "CBSE Experiential Learning",
    issuer: "CBSE Board India",
    description: "Certified in experiential pedagogy models, linking core mathematics theories to real-world applications.",
    icon: <Landmark className="w-8 h-8 text-teal-400" />,
    color: "from-teal-500/10 to-teal-500/5",
    images: [
      "/Certificates/CBSE.png",
      "/Certificates/CBSE Experential Learning.png"
    ],
  },
  {
    id: 20,
    title: "School Innovation Council Certificate",
    issuer: "Ministry of Education (MoE), India",
    description: "Appointed to the school Innovation Council to drive student entrepreneurship, coding, and maker workshops.",
    icon: <CheckCircle className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/10 to-amber-500/5",
    images: ["/Certificates/school Innovation Council.png"],
  },
  {
    id: 21,
    title: "NEP 2020 Implementation",
    issuer: "National Education Policy Board",
    description: "Certified in modern curricular framework changes aligned with India's National Education Policy guidelines.",
    icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/10 to-blue-500/5",
    images: ["/Certificates/NEP.png"],
  },
  {
    id: 22,
    title: "IDE Bootcamp Innovator",
    issuer: "Innovation Cell, MoE India",
    description: "Attended the Innovation, Design and Entrepreneurship (IDE) Bootcamp, pitching EdTech models.",
    icon: <GraduationCap className="w-8 h-8 text-violet-400" />,
    color: "from-violet-500/10 to-violet-500/5",
    images: ["/Certificates/IDE Bootcamp.png"],
  },
  {
    id: 23,
    title: "Diksha Digital Teacher",
    issuer: "Diksha Portal India",
    description: "Acknowledged for contributing and training in national digital infrastructure content for Indian schools.",
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/10 to-emerald-500/5",
    images: ["/Certificates/Diksha.png"],
  },
  {
    id: 24,
    title: "Sahodaya School Complex Certification",
    issuer: "Sahodaya Schools Complex",
    description: "Contributed to mathematics teacher panels, syllabus designing, and collaborative term testing workshops.",
    icon: <Users className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/10 to-rose-500/5",
    images: ["/Certificates/Sahodaya.png"],
  },
  {
    id: 25,
    title: "Eduserve Pedagogy Trainer",
    issuer: "Sunbeam Eduserve",
    description: "Commended for training and onboarding newly appointed mathematics PGTs during pedagogy workshops.",
    icon: <Award className="w-8 h-8 text-teal-400" />,
    color: "from-teal-500/10 to-teal-500/5",
    images: ["/Certificates/15. Eduserve Trainer.png"],
  },
  {
    id: 26,
    title: "IC3 Regional Conference Delegate",
    issuer: "IC3 Committee",
    description: "Attended and contributed to career counseling workshops and student coaching pipelines.",
    icon: <GraduationCap className="w-8 h-8 text-teal-400" />,
    color: "from-teal-500/10 to-teal-500/5",
    images: ["/Certificates/IC3 Regional Conference.png"],
  },

  // --- GLOBAL COMPETITIONS ---
  {
    id: 27,
    title: "CCMB Climate Change Challenge",
    issuer: "Center for Cellular and Molecular Biology",
    description: "Awarded for student team coordination in national ecological models and environmental data analysis.",
    icon: <Globe className="w-8 h-8 text-sky-400" />,
    color: "from-sky-500/10 to-sky-500/5",
    images: ["/Certificates/CCMB Climate Change Challenge.png"],
  },
  {
    id: 28,
    title: "Creative Learning Challenge",
    issuer: "IIT Gandhinagar / MoE Innovation Cell",
    description: "Certified for creating innovative paper folding and geometric physical math models.",
    icon: <Star className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/10 to-amber-500/5",
    images: ["/Certificates/Creative Learning Challnege.png"],
  },
  {
    id: 29,
    title: "Technoxian World Robotics League",
    issuer: "Technoxian AICRA",
    description: "Mentored high school teams in algorithmic coding and logic control loops during competitive leagues.",
    icon: <Landmark className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/10 to-rose-500/5",
    images: ["/Certificates/Technoxian.png"],
  },
  {
    id: 30,
    title: "AFS Global Educator",
    issuer: "AFS Intercultural Programs",
    description: "Completed international seminars on cultural sensitivity and global citizenship pedagogy in schools.",
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/10 to-emerald-500/5",
    images: ["/Certificates/AFS Global Educator.png"],
  },
  {
    id: 31,
    title: "IRIS National Science Fair",
    issuer: "IRIS / Department of Science & Technology",
    description: "Guided CBSE students to state-level selections for mathematical model presentations.",
    icon: <Newspaper className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/10 to-orange-500/5",
    images: ["/Certificates/IRIS.png"],
  },
  {
    id: 32,
    title: "Council Health & Hygiene Inspector",
    issuer: "Sanitary Council Board",
    description: "Acknowledged for serving on the sanitation and safety auditing team during school academic camps.",
    icon: <Award className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/10 to-pink-500/5",
    images: ["/Certificates/Coucil Health & Hygine Inspector.jpg"],
  },
  {
    id: 33,
    title: "MdoNer Math & Tech Certification",
    issuer: "MdoNer Education",
    description: "Completed training on designing dynamic mathematical content structures and tech curricula.",
    icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/10 to-blue-500/5",
    images: ["/Certificates/MdoNer.png"],
  },
];
const CertificatePreview = ({
  images,
  title,
  onClick,
}: {
  images: string[];
  title: string;
  onClick: () => void;
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    // Cycle images automatically with a staggered, randomized interval to avoid synchronicity
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000 + Math.random() * 1200);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/50 cursor-zoom-in group"
      onClick={onClick}
    >
      {images.length > 1 ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${title} Certificate - Page ${currentIdx + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>
      ) : (
        <Image
          src={images[0]}
          alt={`${title} Certificate`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={shimmerDataURL()}
          unoptimized
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/75 px-2.5 py-1 rounded-md text-[10px] font-mono text-white font-semibold border border-white/10 z-10">
          {images.length} Pages
        </div>
      )}

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <span className="text-white text-xs font-mono bg-black/60 px-3 py-1.5 rounded-full flex gap-1.5 items-center">
          <Eye className="w-3.5 h-3.5" /> Zoom Certificate
        </span>
      </div>

      {/* Touch-only affordance */}
      <span className="touch-affordance absolute bottom-2 left-2 z-10 items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-mono text-white border border-white/10">
        <Eye className="w-3 h-3" /> Tap to zoom
      </span>
    </div>
  );
};

const AchievementsSection = () => {
  const [selectedAchievementIdx, setSelectedAchievementIdx] = useState<number | null>(null);
  const [currentPageIdx, setCurrentPageIdx] = useState<number>(0);
  const [zoomed, setZoomed] = useState(false);

  const handleOpenLightbox = (index: number) => {
    setSelectedAchievementIdx(index);
    setCurrentPageIdx(0);
    setZoomed(false);
  };

  const goPrev = () => {
    if (selectedAchievementIdx === null) return;
    setZoomed(false);

    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
    } else {
      // Go to previous achievement card
      const prevIdx = selectedAchievementIdx === 0 ? ACHIEVEMENTS.length - 1 : selectedAchievementIdx - 1;
      setSelectedAchievementIdx(prevIdx);
      setCurrentPageIdx(ACHIEVEMENTS[prevIdx].images.length - 1);
    }
  };

  const goNext = () => {
    if (selectedAchievementIdx === null) return;
    setZoomed(false);

    const currentImages = ACHIEVEMENTS[selectedAchievementIdx].images;
    if (currentPageIdx < currentImages.length - 1) {
      setCurrentPageIdx(currentPageIdx + 1);
    } else {
      // Go to next achievement card
      const nextIdx = (selectedAchievementIdx + 1) % ACHIEVEMENTS.length;
      setSelectedAchievementIdx(nextIdx);
      setCurrentPageIdx(0);
    }
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
    active: selectedAchievementIdx !== null,
    // Disable swipe-to-navigate while zoomed so panning the certificate doesn't
    // flip pages.
    onPrev: !zoomed ? goPrev : undefined,
    onNext: !zoomed ? goNext : undefined,
    onClose: () => setSelectedAchievementIdx(null),
  });

  return (
    <SectionWrapper id="achievements" className="flex flex-col items-center md:justify-center md:min-h-screen py-14 md:py-24">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Awards & Honors"
          desc="Complete showcase of academic leadership milestones, teaching credentials, and qualifications."
          className="mb-8 md:mb-16 mt-0"
        />

        {/* Flat Grid displaying all achievements directly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.05, 0.8),
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex"
            >
              <Card className={`flex flex-col w-full bg-card hover:bg-secondary/10 border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden bg-gradient-to-br ${item.color}`}>
                
                {/* Front-Facing Certificate Preview */}
                {item.images.length > 0 && (
                  <CertificatePreview
                    images={item.images}
                    title={item.title}
                    onClick={() => handleOpenLightbox(index)}
                  />
                )}

                <CardHeader className="flex flex-row items-center gap-4 pb-2 pt-4">
                  <div className="p-2 rounded-xl bg-background/50 border border-border">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold tracking-tight leading-snug">{item.title}</CardTitle>
                    <span className="text-xs text-muted-foreground">{item.issuer}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 mt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Overlay with Carousel */}
      <AnimatePresence>
        {selectedAchievementIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievementIdx(null)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <div className="absolute top-4 right-4 flex items-center gap-2 md:gap-3 z-[100001]">
              <span className="text-white font-mono text-xs md:text-sm hidden sm:inline-block bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/5 max-w-xs md:max-w-md truncate">
                {ACHIEVEMENTS[selectedAchievementIdx].title} {ACHIEVEMENTS[selectedAchievementIdx].images.length > 1 && `(${currentPageIdx + 1} of ${ACHIEVEMENTS[selectedAchievementIdx].images.length})`}
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label={zoomed ? "Zoom out" : "Zoom in to read"}
                className="text-white hover:bg-white/10 rounded-full h-11 w-11 border border-white/5"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed((z) => !z);
                }}
              >
                {zoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close"
                className="text-white hover:bg-white/10 rounded-full h-11 w-11 border border-white/5"
                onClick={() => setSelectedAchievementIdx(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Left Control Arrow (hidden while zoomed to keep panning clean) */}
            {!zoomed && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Previous"
                className="absolute left-3 md:left-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            )}

            {/* Right Control Arrow */}
            {!zoomed && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Next"
                className="absolute right-3 md:right-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            )}

            <motion.div
              key={`${selectedAchievementIdx}-${currentPageIdx}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "relative w-full flex items-center justify-center",
                zoomed ? "max-w-[95vw] max-h-[88vh] overflow-auto" : "max-w-4xl max-h-[85vh]"
              )}
              onClick={(e) => e.stopPropagation()}
              {...(zoomed ? {} : swipeHandlers)}
            >
              <img
                src={ACHIEVEMENTS[selectedAchievementIdx].images[currentPageIdx]}
                alt={`${ACHIEVEMENTS[selectedAchievementIdx].title} Certificate - Page ${currentPageIdx + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed((z) => !z);
                }}
                className={cn(
                  "rounded-lg border border-white/10 shadow-2xl transition-transform duration-200",
                  zoomed
                    ? "max-w-none w-auto h-auto min-w-full cursor-zoom-out"
                    : "max-w-full max-h-[80vh] object-contain cursor-zoom-in"
                )}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default AchievementsSection;

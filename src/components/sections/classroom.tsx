"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { shimmerDataURL } from "@/lib/shimmer";
import { useLightbox } from "@/hooks/use-lightbox";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

type ClassroomPhoto = {
  src: string;
  caption: string;
};

const CLASSROOM_PHOTOS: ClassroomPhoto[] = [
  { src: "/Classroom/1.jpg", caption: "Explaining core mathematical concepts to students during a live class session" },
  { src: "/Classroom/2.jpg", caption: "Engaging students with interactive problem-solving at the board" },
  { src: "/Classroom/3.jpg", caption: "Guiding a hands-on learning activity in the classroom" },
  { src: "/Classroom/4.jpg", caption: "Facilitating discussion and doubt-solving with the class" },
];

const ClassroomSection = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const goPrev = () =>
    setLightboxIdx((prev) =>
      prev === null ? prev : prev === 0 ? CLASSROOM_PHOTOS.length - 1 : prev - 1
    );

  const goNext = () =>
    setLightboxIdx((prev) =>
      prev === null ? prev : prev === CLASSROOM_PHOTOS.length - 1 ? 0 : prev + 1
    );

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const { swipeHandlers } = useLightbox({
    active: lightboxIdx !== null,
    onPrev: goPrev,
    onNext: goNext,
    onClose: () => setLightboxIdx(null),
  });

  return (
    <SectionWrapper id="classroom" className="flex flex-col items-center md:justify-center md:min-h-screen py-14 md:py-24 bg-secondary/5">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="classroom"
          title="In the Classroom"
          desc="Everyday teaching moments capturing live instruction, student engagement, and hands-on learning."
          className="mb-8 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {CLASSROOM_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setLightboxIdx(index)}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-background/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in group"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL={shimmerDataURL()}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-3 z-10">
                <p className="text-white text-[11px] md:text-xs font-mono leading-snug line-clamp-3">
                  {photo.caption}
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-mono bg-black/60 px-3 py-1.5 rounded-full flex gap-1.5 items-center">
                  <Eye className="w-3.5 h-3.5" /> View
                </span>
              </div>

              {/* Touch-only affordance */}
              <span className="touch-affordance absolute bottom-2 right-2 z-10 items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-mono text-white border border-white/10">
                <Eye className="w-3 h-3" /> Tap
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay with Carousel */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <div className="absolute top-4 right-4 flex items-center gap-4 z-[100001]">
              <span className="text-white font-mono text-xs hidden md:inline-block bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider">
                In the Classroom ({lightboxIdx + 1} of {CLASSROOM_PHOTOS.length})
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 border border-white/5"
                onClick={() => setLightboxIdx(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 md:left-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 md:right-8 text-white hover:bg-white/10 rounded-full h-12 w-12 z-[100002] border border-white/5"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
              {...swipeHandlers}
            >
              <img
                src={CLASSROOM_PHOTOS[lightboxIdx].src}
                alt={CLASSROOM_PHOTOS[lightboxIdx].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
              <span className="text-white/80 text-xs md:text-sm font-mono text-center max-w-2xl px-4 leading-relaxed">
                {CLASSROOM_PHOTOS[lightboxIdx].caption}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ClassroomSection;

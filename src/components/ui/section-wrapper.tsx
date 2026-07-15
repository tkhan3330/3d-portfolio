"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = ({ id, className, children, ...props }: SectionWrapperProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, (latest) => {
    if (isMobile) return 1;
    if (latest <= 0) return 0;
    if (latest >= 1) return 0;
    if (latest < 0.1) return latest * 10;
    if (latest > 0.9) return (1 - latest) * 10;
    return 1;
  });

  const scale = useTransform(scrollYProgress, (latest) => {
    if (isMobile) return 1;
    if (latest <= 0) return 0.95;
    if (latest >= 1) return 0.95;
    if (latest < 0.1) return 0.95 + latest * 0.5;
    if (latest > 0.9) return 0.95 + (1 - latest) * 0.5;
    return 1;
  });

  return (
    <section
      id={id}
      ref={containerRef}
      className={cn("relative", className)}
      {...props}
    >
      <motion.div
        style={{ opacity, scale }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;

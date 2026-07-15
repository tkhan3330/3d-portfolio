"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";

gsap.registerPlugin(ScrollTrigger);

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // Re-evaluate every ScrollTrigger on each Lenis scroll frame. Otherwise Lenis
  // smooths scrolling on its own loop while ScrollTrigger samples independently,
  // so a flick jumps past a trigger's start line and leaves section state stuck.
  const lenis = useLenis(() => {
    if (!isMobile) ScrollTrigger.update();
  });

  useEffect(() => {
    if (isMobile || !lenis) return;
    // Drive Lenis from GSAP's ticker (its own RAF is off via autoRaf below) so
    // scroll and ScrollTrigger share one clock; kill lag smoothing so a dropped
    // frame can't skip a large scroll delta.
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, [lenis, isMobile]);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: 2,
        prevent: (node) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

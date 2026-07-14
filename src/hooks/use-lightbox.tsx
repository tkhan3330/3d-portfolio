"use client";

import { useEffect, useRef } from "react";

type LightboxOptions = {
  /** Whether the lightbox is currently open. */
  active: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onClose: () => void;
};

/**
 * Adds keyboard (← → Esc) and touch-swipe navigation to a lightbox, and locks
 * body scroll while it is open. Returns `swipeHandlers` to spread onto the
 * element that should respond to horizontal swipes.
 */
export function useLightbox({ active, onPrev, onNext, onClose }: LightboxOptions) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!active || typeof window === "undefined") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev?.();
      else if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);

    // Lock background scroll while the overlay is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, onPrev, onNext, onClose]);

  const swipeHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        if (dx > 0) onPrev?.();
        else onNext?.();
      }
      touchStartX.current = null;
    },
  };

  return { swipeHandlers };
}

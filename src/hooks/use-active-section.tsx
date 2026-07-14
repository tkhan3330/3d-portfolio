"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport using IntersectionObserver.
 *
 * A narrow horizontal band across the middle of the viewport decides the
 * "active" section, so the highlight flips as that band crosses each section
 * rather than the moment a section edge appears. Returns the active element id
 * (or null before anything is observed / off the home page).
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";

/**
 * Persistent "you are here" indicator for the long single-page home route.
 *
 * - Desktop (lg+): a vertical dot rail pinned in the right gutter. It sits in
 *   the empty margin beside the centered content, so it never overlaps or
 *   reflows the actual content. The active section's dot expands and reveals
 *   its label; every dot is clickable to smooth-scroll there.
 * - Mobile / tablet: a compact floating pill (bottom-centre) that names the
 *   current section. It's `pointer-events-none`, so taps pass straight through
 *   to the content beneath — purely a heads-up display.
 *
 * Both share one source of truth: the IntersectionObserver scroll-spy.
 */
const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
  { id: "classroom", label: "Classroom" },
  { id: "achievements", label: "Awards" },
  { id: "gallery", label: "Gallery" },
  { id: "research", label: "Research" },
  { id: "explainers", label: "Explainers" },
  { id: "training", label: "Training" },
  { id: "blogs", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndicator() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const lenis = useLenis();

  const activeItem = SECTIONS.find((s) => s.id === active);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: right-gutter dot rail */}
      <nav
        aria-label="Section navigation"
        className="fixed right-4 top-1/2 z-[900] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      >
        {SECTIONS.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              aria-label={s.label}
              aria-current={isActive ? "true" : undefined}
              className="group flex cursor-pointer items-center gap-2.5"
            >
              {/* Label reveals on hover only, with its own backdrop, so it never
                  statically overlaps content in narrow gutters. */}
              <span
                className={cn(
                  "translate-x-1 rounded-full border border-border/50 bg-background/85 px-2.5 py-0.5 text-[11px] font-medium tracking-wide opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {s.label}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full transition-all duration-300",
                  isActive
                    ? "h-2.5 w-2.5 bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                    : "h-1.5 w-1.5 bg-muted-foreground/40 group-hover:scale-125 group-hover:bg-muted-foreground"
                )}
              />
            </button>
          );
        })}
      </nav>

      {/* Mobile / tablet: floating current-section pill (non-interactive HUD) */}
      <AnimatePresence>
        {activeItem && activeItem.id !== "hero" && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-[900] -translate-x-1/2 lg:hidden"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wide text-foreground/90">
                {activeItem.label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

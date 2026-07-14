"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "@/lib/lenis";

/**
 * Floating "scroll to top" control for the long single-page home route.
 * Appears once the user has scrolled past the first viewport and smooth-scrolls
 * back up via Lenis. Must be rendered inside the ReactLenis provider.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const lenis = useLenis((l) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.9 : 800;
    setVisible(l.scroll > threshold);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
          className="fixed right-4 z-[9998] flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-background/90 hover:border-primary/40 bottom-[calc(1rem+env(safe-area-inset-bottom))]"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

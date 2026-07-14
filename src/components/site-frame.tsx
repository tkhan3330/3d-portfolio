"use client";

import { usePathname } from "next/navigation";
import { MotionConfig } from "motion/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AppOverlays from "@/components/app-overlays";
import ScrollProgress from "@/components/ui/scroll-progress";
import { usePerfProfile } from "@/hooks/use-perf-profile";

/**
 * Wraps the app shell. The `/components*` showcase routes are rendered
 * "bare" (no header / footer / decorative overlays) so the component
 * galleries can be judged in isolation. Everything else gets full chrome.
 */
export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { reducedMotion } = usePerfProfile();
  const bare = pathname?.startsWith("/components") ?? false;

  // Honor prefers-reduced-motion (and the in-app motion toggle): when reduced,
  // Framer disables transform/layout animations while keeping gentle fades.
  const motionMode = reducedMotion ? "always" : "never";

  if (bare)
    return <MotionConfig reducedMotion={motionMode}>{children}</MotionConfig>;

  const isHome = pathname === "/";

  return (
    <MotionConfig reducedMotion={motionMode}>
      {isHome && (
        <ScrollProgress className="bg-gradient-to-r from-primary to-primary/40" />
      )}
      <Header />
      {children}
      <Footer />
      <AppOverlays />
    </MotionConfig>
  );
}

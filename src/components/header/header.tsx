"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

import { useActiveSection } from "@/hooks/use-active-section";

interface HeaderProps {
  loader?: boolean;
}

const SECTION_LABELS: Record<string, string> = {
  experience: "Experience",
  projects: "Projects",
  activities: "Classroom Activities",
  classroom: "In the Classroom",
  achievements: "Awards & Honors",
  gallery: "Event Highlights",
  research: "Research Work",
  explainers: "Video Explainers",
  training: "Teacher Training",
  blogs: "Publications",
  contact: "Get in Touch",
};

const SECTION_IDS = [
  "hero",
  "experience",
  "projects",
  "activities",
  "classroom",
  "achievements",
  "gallery",
  "research",
  "explainers",
  "training",
  "blogs",
  "contact",
];

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isHome = usePathname() === "/";
  const activeSection = useActiveSection(isHome ? SECTION_IDS : []);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md font-bold tracking-tight hover:no-underline flex items-center gap-2 pr-0 pl-1">
            <span>{config.author}</span>
            <AnimatePresence mode="wait">
              {isHome && activeSection && SECTION_LABELS[activeSection] && (
                <motion.span
                  key={activeSection}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-muted-foreground font-normal text-xs md:text-sm flex items-center gap-2 select-none"
                >
                  <span className="text-muted-foreground/30 font-light">/</span>
                  <span className="font-medium bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">{SECTION_LABELS[activeSection]}</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </Link>

        <FunnyThemeToggle className="w-6 h-6 mr-4 hidden md:flex" />
        {isHome && process.env.NEXT_PUBLIC_WS_URL && (
          <span className="hidden sm:flex">
            <OnlineUsers />
          </span>
        )}
        {config.githubUsername && config.githubRepo && (
          <GitHubStarsButton
            username={config.githubUsername}
            repo={config.githubRepo}
            className="mr-4 hidden sm:inline-flex"
          />
        )}
        <Button
          variant={"ghost"}
          onClick={() => setIsActive(!isActive)}
          aria-label={isActive ? "Close menu" : "Open menu"}
          aria-expanded={isActive}
          className={cn(
            styles.el,
            "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
          )}
        >
          <div className="relative hidden md:flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""
              }`}
          ></div>
        </Button>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(false)}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

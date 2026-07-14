"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideUp } from "./anim";
import { usePreloader } from ".";
import { config } from "@/data/config";

// The playful bit: roles cycle while loading, tying the splash to the persona.
const ROLES = [
  "PGT Mathematics",
  "AI in Education",
  "EdTech Innovator",
  "Teacher Trainer",
];

// Faint drifting maths glyphs — subtle personality without the noise.
const SYMBOLS = [
  { char: "∫", top: "14%", left: "10%", delay: 0 },
  { char: "∑", top: "72%", left: "16%", delay: 0.8 },
  { char: "π", top: "22%", left: "82%", delay: 1.4 },
  { char: "√", top: "68%", left: "78%", delay: 0.4 },
  { char: "∞", top: "44%", left: "6%", delay: 1.1 },
  { char: "θ", top: "12%", left: "50%", delay: 1.8 },
  { char: "Δ", top: "82%", left: "48%", delay: 0.6 },
];

export default function Loader() {
  const { loadingPercent } = usePreloader();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 850);
    return () => clearInterval(t);
  }, []);

  const pct = Math.round(loadingPercent);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          {/* Drifting maths glyphs */}
          <div className={styles.symbols} aria-hidden>
            {SYMBOLS.map((s, i) => (
              <span
                key={i}
                style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s` }}
              >
                {s.char}
              </span>
            ))}
          </div>

          {/* Branded centre stack */}
          <div className={styles.center}>
            <motion.span
              className={styles.kicker}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Portfolio
            </motion.span>

            <div className={styles.nameMask}>
              <motion.h1
                className={styles.name}
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              >
                {config.author}
              </motion.h1>
            </div>

            <div className={styles.roleWrap}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  className={styles.role}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              className={styles.progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.track}>
                <div className={styles.fill} style={{ width: `${pct}%` }} />
              </div>
              <span className={styles.percent}>{pct}%</span>
            </motion.div>
          </div>

          <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

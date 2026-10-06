import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import styles from "./Intro.module.scss";

interface IntroProps {
  onComplete: () => void;
}

type Phase = "enter" | "logo" | "exit" | "fade";

export function Intro({ onComplete }: IntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const logoTimer = window.setTimeout(() => {
      setPhase("logo");
    }, 1000);

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, 3000);

    const fadeTimer = window.setTimeout(() => {
      setPhase("fade");
    }, 3800);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 4800);

    return () => {
      window.clearTimeout(logoTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  const isExiting = phase === "exit" || phase === "fade";

  const showLogo = phase === "logo";

  return (
    <motion.div
      className={styles.intro}
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{
        opacity: phase === "fade" ? 0 : 1,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.mark}>
        <motion.span
          className={`${styles.corner} ${styles.topLeft}`}
          initial={{
            opacity: 0,
            x: 14,
            y: 14,
          }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  x: -70,
                  y: -70,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: isExiting ? 0.8 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.span
          className={`${styles.corner} ${styles.topRight}`}
          initial={{
            opacity: 0,
            x: -14,
            y: 14,
          }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  x: 70,
                  y: -70,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: isExiting ? 0.8 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className={styles.logo}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: showLogo ? 1 : 0,
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          M<span>C</span>
        </motion.div>

        <motion.span
          className={`${styles.corner} ${styles.bottomLeft}`}
          initial={{
            opacity: 0,
            x: 14,
            y: -14,
          }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  x: -70,
                  y: 70,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: isExiting ? 0.8 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.span
          className={`${styles.corner} ${styles.bottomRight}`}
          initial={{
            opacity: 0,
            x: -14,
            y: -14,
          }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  x: 70,
                  y: 70,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: isExiting ? 0.8 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

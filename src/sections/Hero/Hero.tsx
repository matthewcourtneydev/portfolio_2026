import { motion, useReducedMotion } from "motion/react";

import styles from "./Hero.module.scss";

interface HeroProps {
  introComplete: boolean;
}

export function Hero({ introComplete }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.14,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="top" className={styles.hero}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        animate={introComplete ? "visible" : "hidden"}
      >
        <motion.p className={styles.eyebrow} variants={item}>
          Hi, I'm Matt.
        </motion.p>

        <motion.h1 className={styles.title} variants={item}>
          I build thoughtful
          <span>experiences for the web.</span>
        </motion.h1>

        <motion.p className={styles.description} variants={item}>
          I'm a frontend engineer focused on building accessible, responsive,
          and intuitive digital experiences.
        </motion.p>

        <motion.a href="#work" className={styles.cta} variants={item}>
          View my work
          <span aria-hidden="true">↓</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

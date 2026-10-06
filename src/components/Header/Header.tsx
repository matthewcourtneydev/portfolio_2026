import { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

import styles from "./Header.module.scss";
import { navItems } from "../../data/navigation";
import { MobileMenu } from "../MobileMenu/MobileMenu";

interface HeaderProps {
  introComplete: boolean;
}

export function Header({ introComplete }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const headerItem = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsScrolled(current > 20);

    if (current < 80) {
      setIsVisible(true);
      return;
    }

    if (current > previous) {
      setIsVisible(false);
    } else if (current < previous) {
      setIsVisible(true);
    }
  });

  const closeMenu = () => {
    setIsMenuOpen(false);

    requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        animate={{
          y: isVisible || shouldReduceMotion ? 0 : "-100%",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.25,
          ease: "easeOut",
        }}
      >
        <motion.div
          className={styles.inner}
          variants={headerContainer}
          initial="hidden"
          animate={introComplete ? "visible" : "hidden"}
        >
          <motion.a
            href="#top"
            className={styles.logo}
            aria-label="Matt Courtney — Home"
            variants={headerItem}
          >
            M<span>C</span>
          </motion.a>

          <nav aria-label="Primary navigation">
            <ol className={styles.navList}>
              {navItems.map((item, index) => (
                <motion.li key={item.href} variants={headerItem}>
                  <a href={item.href} className={styles.navLink}>
                    <span>{String(index + 1).padStart(2, "0")}.</span>

                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ol>
          </nav>

          <motion.a
            href="/resume.pdf"
            className={styles.resume}
            target="_blank"
            rel="noreferrer"
            variants={headerItem}
          >
            Resume
          </motion.a>

          <motion.button
            ref={menuButtonRef}
            type="button"
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => {
              if (isMenuOpen) {
                closeMenu();
              } else {
                setIsMenuOpen(true);
              }
            }}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            variants={headerItem}
          >
            <span />
            <span />
          </motion.button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={closeMenu} menuButtonRef={menuButtonRef} />
        )}
      </AnimatePresence>
    </>
  );
}

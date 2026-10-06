import { useEffect, useRef, type RefObject } from "react";
import { motion, useReducedMotion } from "motion/react";

import { navItems } from "../../data/navigation";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  onClose: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ onClose, menuButtonRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const getMenuElements = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    // Move focus to the first menu item when the menu opens.
    const animationFrame = requestAnimationFrame(() => {
      getMenuElements()[0]?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const menuElements = getMenuElements();
      const menuButton = menuButtonRef.current;

      if (!menuElements.length || !menuButton) return;

      const firstMenuElement = menuElements[0];
      const lastMenuElement = menuElements[menuElements.length - 1];

      const activeElement = document.activeElement;

      if (!event.shiftKey && activeElement === lastMenuElement) {
        event.preventDefault();
        menuButton.focus();
        return;
      }

      if (!event.shiftKey && activeElement === menuButton) {
        event.preventDefault();
        firstMenuElement.focus();
        return;
      }

      if (event.shiftKey && activeElement === firstMenuElement) {
        event.preventDefault();
        menuButton.focus();
        return;
      }

      if (event.shiftKey && activeElement === menuButton) {
        event.preventDefault();
        lastMenuElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, menuButtonRef]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.06,
            delayChildren: 0.08,
          },
    },

    exit: {
      opacity: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.2,
            when: "afterChildren",
            staggerChildren: 0.035,
            staggerDirection: -1,
          },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
      },
    },

    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 6,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={menuRef}
      id="mobile-navigation"
      className={styles.menu}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav aria-label="Primary">
        <ol className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li key={item.href} variants={itemVariants}>
              <a href={item.href} className={styles.navLink} onClick={onClose}>
                <span>{String(index + 1).padStart(2, "0")}.</span>

                {item.label}
              </a>
            </motion.li>
          ))}
        </ol>

        <motion.div variants={itemVariants}>
          <a
            href="/resume.pdf"
            className={styles.resume}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </motion.div>
  );
}

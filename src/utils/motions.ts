import { Variants } from "framer-motion";

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// parent menu
export const mobileMenu: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "100vh",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12, // children enter one by one
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren", // parent waits until all li have exited
      staggerChildren: 0.1,
      staggerDirection: -1, // reverse order
    },
  },
}

// child links
export const mobileMenuLink: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
}

export const headerLinksVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

export const leftRightElementVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.4,
    },
  },
};

export const socialVariants = (y: number): Variants => ({
  hidden: {
    y: 0,
  },
  hover: {
    y,
    color: "#8e57e8",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
});

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween" | "inertia",
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const fade = (duration: number, delay: number): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeInOut",
    },
  },
});

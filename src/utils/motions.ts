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

export const mobileMenu: Variants = {
  hidden: {
    height: 0,
    opacity: 0.4,
  },
  show: {
    height: "100vh",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.6, 
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 1.4,
    },
  },
};

export const mobileMenuLink = (
  showDelay: number,
  delay: number,
  exitDelay: number
): Variants => ({
  hidden: {
    y: 80,
    opacity: 0,
    transition: {
      delay, 
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: showDelay,
    },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: exitDelay,
    },
  },
});

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


export const popup = (delay: number = 0, duration: number = 0.3): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20, // slight push down
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
})
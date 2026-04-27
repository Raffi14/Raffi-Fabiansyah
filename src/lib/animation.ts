import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  duration = 0.5
): Variants => {
  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -80
          : direction === "right"
          ? 80
          : 0,
      y:
        direction === "up"
          ? 40
          : direction === "down"
          ? -40
          : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };
};
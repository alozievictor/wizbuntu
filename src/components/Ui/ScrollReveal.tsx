import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0.985,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ScrollReveal = ({
  children,
  delay = 0,
  amount = 0.18,
  className,
}: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

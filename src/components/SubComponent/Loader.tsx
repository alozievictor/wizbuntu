import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";

const loaderLabels = ["Welcome", "Loading Assets", "Almost Ready", "Welcome"];

const Loader = () => {
  const [labelIndex, setLabelIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setLabelIndex((currentIndex) =>
        currentIndex >= loaderLabels.length - 1 ? currentIndex : currentIndex + 1
      );
    }, 1050);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background">
      <div className="loader-corner left-6 top-6 border-l border-t" />
      <div className="loader-corner right-6 top-6 border-r border-t" />
      <div className="loader-corner bottom-6 left-6 border-b border-l" />
      <div className="loader-corner bottom-6 right-6 border-b border-r" />

      <div className="loader-breathe-circle h-[22rem] w-[22rem] md:h-[34rem] md:w-[34rem]" />
      <div className="loader-breathe-circle loader-breathe-circle-small h-[14rem] w-[14rem] md:h-[22rem] md:w-[22rem]" />
      <div className="pointer-events-none absolute -inset-[40%] bg-tertiary opacity-12 blur-[900px] md:opacity-10 md:blur-[2000px]" />
      <div className="pointer-events-none absolute inset-0 bg-background/72" />

      <motion.div
        className="relative z-10 flex w-[min(78vw,25rem)] flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex h-24 w-64 items-center justify-center md:w-72">
            <div className="absolute inset-0 rounded-sm border border-border/70" />
            <div className="absolute -inset-px bg-[linear-gradient(90deg,transparent,rgba(29,158,117,0.32),transparent)] opacity-60" />
            <img
              src={Logo}
              alt="Wizbuntu"
              className="relative h-auto w-44 object-contain md:w-52"
            />
          </div>

          <motion.p
            className="font-dm text-[11px] font-light uppercase tracking-[0.34em] text-secondary"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          >
            Building Your Experience
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 h-px w-full origin-center overflow-hidden bg-border"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-tertiary to-transparent"
            initial={{ x: "-120%" }}
            animate={{ x: "320%" }}
            transition={{
              delay: 0.55,
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className="loader-dot"
                style={{ animationDelay: `${dot * 0.18}s` }}
              />
            ))}
          </div>

          <motion.p
            key={loaderLabels[labelIndex]}
            className="font-dm text-[11px] font-light uppercase tracking-[0.28em] text-secondary"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {loaderLabels[labelIndex]}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;

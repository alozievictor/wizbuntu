// import FeaturedWork from '../components/SubComponent/FeaturedWork';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Footer from '../components/SubComponent/Footer';
import HowWeBuild from '../components/SubComponent/HowWeBuild';
import Hero from '../components/SubComponent/Hero';
import MarqueeStrip from '../components/SubComponent/MarqueeStrip';
import Navbar from '../components/SubComponent/Navbar';
import ScrollReveal from '../components/Ui/ScrollReveal';
import WhatWeDo from '../components/SubComponent/WhatWeDo';

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <motion.main
        variants={shouldReduceMotion ? undefined : pageVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
      >
        <motion.div variants={sectionVariants}>
          <ScrollReveal amount={0.08}>
            <Hero />
          </ScrollReveal>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ScrollReveal delay={0.04}>
            <MarqueeStrip />
          </ScrollReveal>
        </motion.div>
      {/* <ScrollReveal>
        <FeaturedWork />
      </ScrollReveal> */}
        <motion.div variants={sectionVariants}>
          <ScrollReveal delay={0.04}>
            <WhatWeDo />
          </ScrollReveal>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ScrollReveal delay={0.04}>
            <HowWeBuild />
          </ScrollReveal>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ScrollReveal delay={0.04}>
            <Footer />
          </ScrollReveal>
        </motion.div>
      </motion.main>
    </>
  )
}

export default Home;

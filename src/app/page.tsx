"use client";

import Bio from "@/sections/Bio";
import AboutMe from "@/sections/AboutMe";
import Footer from "@/sections/Footer";
// import WorkExperience from "@/sections/WorkExperience";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
// import OpenSourceContributions from "@/sections/OpenSourceContributions";
import { ThemeProvider } from "@/components/ThemeContext";
import { motion } from 'framer-motion';

const pageContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const pageItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <ThemeProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageContainerVariants}
        className="flex flex-col h-auto px-2 py-2 md:p-10 justify-center items-center overflow-y-auto"
      >
        <div id="body-wala" className="container w-full md:w-a4lite lg:w-a4 rounded-xl overflow-hidden">
          <motion.div variants={pageItemVariants}>
            <Bio />
          </motion.div>
          <motion.div variants={pageItemVariants}>
            <AboutMe />
          </motion.div>
          {/* <motion.div variants={pageItemVariants}> */}
          {/* <WorkExperience /> */}
          {/* </motion.div> */}
          <motion.div variants={pageItemVariants}>
            <Education />
          </motion.div>
          <motion.div variants={pageItemVariants}>
            <Skills />
          </motion.div>
          <motion.div variants={pageItemVariants}>
            <Projects />
          </motion.div>
          {/* <motion.div variants={pageItemVariants}> */}
          {/* <OpenSourceContributions /> */}
          {/* </motion.div> */}
        </div>
      </motion.div>
      <Footer />
    </ThemeProvider>
  );
}

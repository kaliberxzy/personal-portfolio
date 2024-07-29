import React from "react";
import ProjectBox from "../boxes/ProjectBox";
import metricProjectPreview from "../../assets/projects-imgs/metric-project.png";
import blockchainProjectPreview from "../../assets/projects-imgs/blockchain-project.png";
import aiProjectPreview from "../../assets/projects-imgs/ai-project.png";
import securityProjectPreview from "../../assets/projects-imgs/security-project.png";
import calculusProjectPreview from "../../assets/projects-imgs/calculus-project.png";
import legoProjectPreview from "../../assets/projects-imgs/lego-project.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mx-10 mb-28 flex max-w-[1050px] flex-col items-start pt-20 sm:items-center md:h-screen md:justify-center lg:mb-44 lg:pt-0 xl:mx-auto">
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-light tracking-wider text-transparent md:mb-10 md:text-4xl lg:mb-16"
      >
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectBox
          image={metricProjectPreview}
          title="Metric Dashboard"
          subtitle="Data Visualization Using React"
          delay={0}
        />
        <ProjectBox
          image={blockchainProjectPreview}
          title="What is Blockchain?"
          subtitle="Video Explanation of Bitcoin"
          delay={0.1}
        />
        <ProjectBox
          image={aiProjectPreview}
          title="Digit Recognition AI"
          subtitle="Neural Network Using Python"
          delay={0.3}
        />
        <ProjectBox
          image={securityProjectPreview}
          title="Security Presentations"
          subtitle="Teaching Cybersecurity"
          delay={0}
        />
        <ProjectBox
          image={calculusProjectPreview}
          title="Calculus w/ Lego"
          subtitle="Find Volume By Integration"
          delay={0.1}
        />
        <ProjectBox
          image={legoProjectPreview}
          title="Lego Art Gallery"
          subtitle="Brick Masterpieces"
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Projects;

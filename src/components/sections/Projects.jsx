import React from "react";
import ProjectBox from "../boxes/ProjectBox";
import metricProjectPreview from "../../assets/projects-imgs/metric-project.png";
import blockchainProjectPreview from "../../assets/projects-imgs/blockchain-project.png";
import aiProjectPreview from "../../assets/projects-imgs/ai-project.png";
import weedProjectPreview from "../../assets/projects-imgs/bicycle-weed-eater-project.png";
import calculusProjectPreview from "../../assets/projects-imgs/calculus-project.png";
import portfolioProjectPreview from "../../assets/projects-imgs/portfolio-project.png";
import network from "../../../public/colin-berry-neural-network-project.pdf";
import lego from "../../../public/colin-berry-lego-calculus-project.pdf";
import dashboard from "../../../public/colin-berry-dashboard-project.pdf";
import weedeater from "../../../public/WW202420_FinalDesignReport.pdf";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mx-10 flex max-w-7xl flex-col items-start pb-28 pt-20 sm:items-center md:mb-44 md:h-screen md:justify-center lg:pt-0 xl:mx-auto">
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text py-2 text-3xl font-medium tracking-wide text-transparent md:mb-10 md:text-5xl lg:mb-16"
      >
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectBox
          image={metricProjectPreview}
          title="Metric Dashboard"
          subtitle="Data Visualization Using React"
          link={dashboard}
          delay={0}
        />
        <ProjectBox
          image={blockchainProjectPreview}
          title="What is Blockchain?"
          subtitle="Demystifying Bitcoin"
          link="https://www.youtube.com/watch?v=msh0eyI1kGk"
          delay={0.1}
        />
        <ProjectBox
          image={aiProjectPreview}
          title="Digit Recognition AI"
          subtitle="Python Neural Network from Scratch"
          link={network}
          delay={0.3}
        />
        <ProjectBox
          image={weedProjectPreview}
          title="Bicycle Weed Eater"
          subtitle="Senior Design Project"
          link={weedeater}
          delay={0}
        />
        <ProjectBox
          image={calculusProjectPreview}
          title="Calculus w/ Lego"
          subtitle="Using Integration to Calculate Volume"
          link={lego}
          delay={0.1}
        />
        <ProjectBox
          image={portfolioProjectPreview}
          title="Personal Portfolio"
          subtitle="Yes, this one!"
          link="/"
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import heroPhoto from "../../assets/about-hero-photos/hero-photo.png";
import resume from "../../../public/colinberry-resume-2025.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[radial-gradient(ellipse_at_right,_rgba(255,0,0,0.6)_0%,_rgba(255,255,255,0)_70%)] md:block"
      ></motion.div>

      <div className="mx-auto mb-20 mt-6 flex max-w-7xl items-center space-x-10 sm:mb-44 sm:mt-20 md:space-x-20 lg:mb-52 lg:mt-24">
        <div className="mx-10 flex flex-col items-center sm:items-start">
          {/* Main Header */}
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            {/* <span className="absolute mx-auto box-content hidden w-fit select-none border bg-gradient-to-r from-orange-400 to-[#FF0000] bg-clip-text py-4 text-center text-3xl font-thin tracking-wide text-transparent blur-xl sm:flex sm:text-7xl lg:text-8xl">
              Colin Berry
            </span> */}
            <h1 className="relative top-0 flex h-auto w-fit select-auto items-center justify-center bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text py-4 text-center text-5xl font-semibold tracking-wide text-transparent sm:text-7xl lg:text-8xl">
              Colin Berry
            </h1>
          </motion.div>

          {/* Sub Header */}
          <motion.h2
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="text-xl font-thin tracking-widest text-[#a7a7a7] sm:text-2xl lg:mt-1 lg:text-4xl"
          >
            Engineering Student
          </motion.h2>

          <motion.h2
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="italic mt-2 bg-gradient-to-r from-orange-500 from-10% to-[#FF0000] bg-clip-text font-semibold tracking-wider text-transparent text-sm sm:text-lg lg:mt-3 lg:text-xl text-center"
          >
          College of Engineering Outstanding Senior
          </motion.h2>

          {/* Mobile Hero Image */}
          <motion.img
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="relative z-10 mt-5 w-36 sm:hidden"
            src={heroPhoto}
            alt="Hero Photo"
          />

          {/* Hero Text */}
          <motion.p
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="mx-4 mb-8 mt-6 text-center text-md font-light leading-6 tracking-wide text-[#a7a7a7] sm:mx-0 sm:text-left sm:leading-7 lg:w-3/4"
          >
            I'm a computer engineering student interested in everything
            technology. Specializing in cybersecurity and minoring in computer
            science, I love building things, learning new concepts, and pursuing
            <span class="font-bold bg-gradient-to-r from-orange-500 from-30% to-[#FF0000] bg-clip-text text-transparent"> excellence.</span>
          </motion.p>

          {/* Hero Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6"
          >
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-[#030303] text-xl tracking-wide font-semibold rounded-full bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% py-3 px-7"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>Resume</span>
            </motion.a>

            <motion.a
              href={"https://www.linkedin.com/in/colintberry/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center group relative rounded-full bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="rounded-full bg-[#030303] px-5 py-2">
                <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xl font-bold tracking-wide text-transparent">
                  Connect
                </span>
              </span>
            </motion.a>
          </motion.div>
        </div>
        <div className="relative hidden sm:block sm:max-w-44 md:max-w-64">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 mix-blend-lighten brightness-90"
            src={heroPhoto}
            alt="Hero Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

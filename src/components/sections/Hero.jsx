import React from "react";
import heroPhoto from "../../assets/about-hero-photos/hero-photo.png";
import resume from "../../../public/colin-berry-resume-2024.pdf";
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
        className="absolute right-0 top-0 z-20 hidden h-full w-2/5 translate-x-16 bg-[radial-gradient(ellipse_at_right,_rgba(255,0,0,0.6)_0%,_rgba(255,255,255,0)_70%)] md:block"
      ></motion.div>

      <div className="mx-auto mb-20 mt-8 flex max-w-[1050px] items-center space-x-10 sm:mb-44 sm:mt-32 md:space-x-20 lg:mb-52 lg:mt-32">
        <div className="mx-10 flex flex-col items-center sm:items-start">
          {/* Main Header */}
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            <span className="absolute mx-auto box-content hidden w-fit select-none border bg-gradient-to-r from-orange-400 to-[#FF0000] bg-clip-text py-4 text-center text-3xl font-thin tracking-wide text-transparent blur-xl sm:flex sm:text-7xl lg:text-8xl">
              Colin Berry
            </span>
            <h1 className="relative top-0 flex h-auto w-fit select-auto items-center justify-center bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text py-4 text-center text-5xl font-semibold tracking-wide text-transparent sm:text-7xl lg:text-8xl">
              Colin Berry
            </h1>
          </motion.div>

          {/* Sub Header */}
          <motion.h2
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="text-xl font-thin tracking-widest text-[#909090] sm:text-2xl lg:mt-1 lg:text-4xl"
          >
            Engineering Student
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
            className="sm: mx-4 my-8 text-center text-sm font-light leading-6 tracking-wider text-[#929292] sm:mx-0 sm:text-left sm:leading-7"
          >
            I'm a computer engineering student interested in everything
            technology. Specializing in cybersecurity and minoring in computer
            science, I strive in learning new concepts and pursuing excellence.
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
              className="group relative rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% px-6 py-2 text-lg font-normal tracking-wider text-[#030303]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.a>

            <motion.a
              href={"https://www.linkedin.com/in/colintberry/"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-0.5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="flex w-full rounded-xl bg-[#030303] px-5 py-2">
                <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-lg font-normal tracking-wider text-transparent">
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

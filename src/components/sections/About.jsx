import { React, useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from "../../constants/index";
import aboutPhoto2 from "../../assets/about-hero-photos/about-photo1.png";
import aboutPhoto1 from "../../assets/about-hero-photos/about-photo2.jpg";

const About = () => {
  const [read, setRead] = useState(false);

  // whileInView={{ opacity: 1, y: 0 }}
  // initial={{ opacity: 0, y: 100 }}
  // transition={{ duration: 1 }}
  // viewport={{ once: true }}

  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: delay },
    },
  });

  return (
    <div
      className={
        read
          ? "relative mx-auto flex max-w-7xl items-start sm:mb-80 sm:flex-col md:mb-20"
          : "relative mx-auto flex h-screen max-w-7xl items-center"
      }
    >
      {/* Image 1 and Grad 1 */}
      <motion.div
        variants={container(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-10 hidden overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-[#FF0000] to-80% p-2 sm:flex"
      >
        <img
          className="relative z-10 rounded-xl sm:max-w-40 md:max-w-60 lg:max-w-96"
          src={aboutPhoto1}
          alt="About Me Photo 1"
        />
      </motion.div>
      <div
        className={`overflow-hidden ${read ? "max-h-[1000px] pb-5" : "max-h-0"}`}
      >
        {/* Image 2 and Grad 2 */}
        <div className="relative mx-10 mt-10 hidden rounded-2xl bg-gradient-to-br from-orange-500 to-[#FF0000] to-80% p-2 sm:flex">
          <img
            className="relative z-10 rounded-xl sm:max-w-40 md:max-w-60 lg:max-w-96"
            src={aboutPhoto2}
            alt="About Me Photo 2"
          />
        </div>
        <div className="bg-[#030303] sm:max-md:h-[475px] md:max-lg:h-[250px]"></div>
      </div>

      <div className="mb-28 ml-10 mr-10 flex flex-shrink flex-col items-start justify-center text-pretty sm:absolute sm:ml-32 sm:mr-10 sm:translate-x-32 md:w-3/5 md:translate-x-56 lg:mt-20 lg:translate-x-96">
        <motion.h3
          variants={container(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-7 overflow-hidden bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-medium tracking-wide text-transparent md:text-5xl"
        >
          About Me
        </motion.h3>
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-md mb-4 overflow-hidden font-light leading-6 tracking-wide text-[#a7a7a7] lg:leading-7"
        >
          {ABOUT_TEXT_1}
        </motion.p>
        <div
          className={`overflow-hidden ${read ? "max-h-[1000px]" : "max-h-0"}`}
        >
          <p className="text-md mb-5 font-light leading-6 tracking-wide text-[#a7a7a7] lg:leading-7">
            {ABOUT_TEXT_2}
          </p>
        </div>
        <motion.button
          className="group relative z-50 mt-3 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setRead(!read)}
          variants={container(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-[#030303] px-7 py-2">
            <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xl font-semibold tracking-wide text-transparent">
              {read ? "Read Less" : "Read More"}
            </span>
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default About;

import { React, useState } from "react";
import { motion } from "framer-motion";
import {
  ABOUT_TEXT_1_1,
  ABOUT_TEXT_1_2,
  ABOUT_TEXT_2_1,
  ABOUT_TEXT_2_2,
  ABOUT_TEXT_2_3,
} from "../../constants";
import aboutPhoto1 from "../../assets/about-hero-photos/about-photo1.png";
import aboutPhoto2 from "../../assets/about-hero-photos/about-photo2.png";

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
          ? "relative mx-auto flex max-w-[1050px] items-start sm:mb-80 sm:flex-col md:mb-20"
          : "relative mx-auto flex h-screen max-w-[1050px] items-center"
      }
    >
      {/* Image 1 and Grad 1 */}
      <motion.div
        variants={container(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-10 hidden overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-[#FF0000] to-80% p-1 sm:flex"
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
        <div className="relative mx-10 mt-10 hidden rounded-xl bg-gradient-to-br from-orange-500 to-[#FF0000] to-80% p-1 sm:flex">
          <img
            className="relative z-10 rounded-xl sm:max-w-40 md:max-w-60 lg:max-w-96"
            src={aboutPhoto2}
            alt="About Me Photo 2"
          />
        </div>
        <div className="bg-[#030303] sm:max-md:h-[475px] md:max-lg:h-[250px]"></div>
      </div>

      <div className="mb-28 ml-10 mr-10 flex flex-col items-start justify-center sm:absolute sm:ml-[245px] sm:mr-5 md:ml-[325px] lg:ml-[485px] lg:mt-[100px]">
        <motion.h3
          variants={container(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-7 overflow-hidden bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-light tracking-wider text-transparent md:text-4xl"
        >
          About Me
        </motion.h3>
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 overflow-hidden text-sm font-light leading-6 tracking-wider text-[#8E8E8E] lg:leading-7"
        >
          {ABOUT_TEXT_1_1}
        </motion.p>
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 overflow-hidden text-sm font-light leading-6 tracking-wider text-[#8E8E8E] lg:leading-7"
        >
          {ABOUT_TEXT_1_2}
        </motion.p>
        <div
          className={`overflow-hidden ${read ? "max-h-[1000px]" : "max-h-0"}`}
        >
          <p className="mb-5 text-sm font-light leading-6 tracking-wider text-[#8E8E8E] lg:leading-7">
            {ABOUT_TEXT_2_1}
          </p>
          <p className="mb-5 text-sm font-light leading-6 tracking-wider text-[#8E8E8E] lg:leading-7">
            {ABOUT_TEXT_2_2}
          </p>
          <p className="mb-5 text-sm font-light leading-6 tracking-wider text-[#8E8E8E] lg:leading-7">
            {ABOUT_TEXT_2_3}
          </p>
        </div>
        <motion.button
          className="relative z-50 rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-[1px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setRead(!read)}
          variants={container(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="flex w-full rounded-xl bg-[#030303] px-5 py-2">
            <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-sm font-normal tracking-wider text-transparent">
              {read ? "Read Less" : "Read More"}
            </span>
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default About;

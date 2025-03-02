import React from "react";
import { motion } from "framer-motion";

const InterestBox = (props) => {
  const delay = props.delay;

  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: delay },
    },
  });

  return (
    <motion.div
      variants={container(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex sm:p-2 lg:w-[450px]"
    >
      <motion.img
        className="hidden sm:mr-4 sm:flex sm:h-16"
        whileHover={{ scale: 1.1 }}
        src={props.icon}
        alt="react icon"
      />
      <div className="absolute z-[-2] hidden size-10 translate-x-2 rounded-full bg-gradient-to-br from-orange-400 to-[#FF0000] blur-xl sm:block"></div>
      <div className="flex flex-col space-y-4 sm:pt-4">
        <h3 className="text-lg font-normal tracking-wide text-[#c1c1c1] sm:text-2xl">
          {props.title}
        </h3>
        <p className="text-pretty text-md font-light leading-6 lg:leading-7 tracking-wide text-[#a7a7a7]">
          {props.text}
        </p>
      </div>
    </motion.div>
  );
};

export default InterestBox;

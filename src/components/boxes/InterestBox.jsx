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
      className="relative flex sm:p-2 lg:w-[500px]"
    >
      <motion.img
        className="hidden sm:mr-4 sm:flex sm:h-16"
        whileHover={{ scale: 1.1 }}
        src={props.icon}
        alt="react icon"
      />
      <div className="absolute z-[-2] hidden size-16 translate-x-1 rounded-full bg-gradient-to-br from-orange-400 to-[#FF0000] blur-2xl sm:block"></div>
      <div className="flex flex-col space-y-3 sm:pt-4">
        <h3 className="text-lg font-light text-[#c5c5c5] sm:text-2xl">
          {props.title}
        </h3>
        <p className="text-pretty text-sm font-light leading-6 tracking-wider text-[#8E8E8E]">
          {props.text}
        </p>
      </div>
    </motion.div>
  );
};

export default InterestBox;

import React from "react";
import { motion } from "framer-motion";

const WorkBox = (props) => {
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
      className="flex flex-col items-start justify-between tracking-wider md:flex-row"
    >
      <div className="mb-2 ml-0 w-60 flex-shrink-0 text-sm text-[#8E8E8E] md:ml-8 md:mt-[5px] lg:mr-24">
        {props.date}
      </div>

      <div className="flex flex-grow flex-col items-start">
        <h2 className="mb-4 text-xl font-light text-[#c5c5c5]">
          {props.title}
        </h2>
        <p className="mb-6 text-pretty text-sm font-light leading-6 tracking-wider text-[#8E8E8E]">
          {props.subtitle}
        </p>
        <div className="flex flex-wrap items-start">
          {props.skills.map((skill, index) => (
            <div className="group relative mb-3 mr-3 rounded-md bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-[1px]">
              <span className="flex w-full rounded-md bg-[#030303] px-3 py-1">
                <span
                  key={index}
                  className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xs font-normal tracking-wider text-transparent"
                >
                  {skill}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkBox;

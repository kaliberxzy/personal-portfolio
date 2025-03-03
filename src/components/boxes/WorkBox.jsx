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
      className="flex flex-col items-start justify-between md:flex-row"
    >
      <div className="mb-2 ml-0 w-60 flex-shrink-0 text-md text-[#8E8E8E] tracking-wide font-medium md:ml-8 md:mt-[5px] lg:mr-24">
        {props.date}
      </div>

      <div className="flex flex-grow flex-col items-start">
        <h2 className="mb-3 text-2xl font-normal tracking-wide text-[#c1c1c1]">
          {props.title}
        </h2>
        <p className="mb-5 text-pretty text-md font-light leading-6 lg:leading-7 tracking-wide text-[#a7a7a7]">
          {props.subtitle}
        </p>
        <div className="flex flex-wrap items-start">
          {props.skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center group relative mb-3 mr-4 rounded-full bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% p-[1px]"
            >
              <span className="flex justify-center items-center rounded-full bg-[#030303] py-2 px-5" >
                <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
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

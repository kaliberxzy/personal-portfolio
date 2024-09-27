import React from "react";
import { motion } from "framer-motion";

const ProjectBox = (props) => {
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
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
      variants={container(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className="group relative h-72 overflow-hidden rounded-2xl"
    >
      {/* Gradient Layer */}
      <div className="absolute inset-0 scale-105 bg-gradient-to-t from-black/90 to-black/20 group-hover:to-black/50"></div>
      <img
        className="h-full w-full object-cover"
        src={props.image}
        alt={`${props.title} Preview`}
      />
      <div className="absolute bottom-5 left-5 flex flex-col items-start justify-center space-y-1">
        <h1 className="text-2xl tracking-wider text-[#dedede] group-hover:text-[#b2b2b2]">
          {props.title}
        </h1>
        <h2 className="text-md bg-gradient-to-r from-orange-500 to-[#ff0000] bg-clip-text text-sm font-medium tracking-wider text-transparent group-hover:from-orange-700 group-hover:to-[#9c2c2c]">
          {props.subtitle}
        </h2>
      </div>
      <div className="absolute inset-0 hidden items-center justify-center group-hover:flex">
        <div className="rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% px-5 py-3 text-sm font-medium tracking-wider text-[#1e1e1e] shadow-2xl shadow-black">
          View Details
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectBox;

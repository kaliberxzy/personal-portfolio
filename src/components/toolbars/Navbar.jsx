import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "../../../public/colin-berry-resume-2024.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const navLinks = [
    { id: 1, nav: "About", delay: 0.1 },
    { id: 2, nav: "Interests", delay: 0.2 },
    { id: 3, nav: "Projects", delay: 0.3 },
    { id: 4, nav: "Work", delay: 0.4 },
  ];

  const container = (delay) => ({
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: delay },
    },
  });

  return (
    <motion.div className="bg-[#030303]">
      {/* Gradient 1: Quarter-circle in the top-left corner */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-0 z-30 hidden h-2/6 w-1/6 overflow-auto bg-[radial-gradient(ellipse_at_top_left,_rgba(255,138,0,0.5)_0%,_rgba(255,255,255,0)_70%)] md:block"
      ></motion.div>

      <div className="mx-auto flex max-w-[1050px] items-center justify-between pb-5 pt-10">
        <motion.a
          href="/"
          className="ml-10 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-xl font-normal tracking-wider text-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          c.berry
        </motion.a>

        <div className="flex items-center justify-center gap-10 font-light">
          <ul className="relative hidden items-center justify-center gap-10 text-[#8E8E8E] md:flex">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.id}
                to={navLink.nav}
                smooth={true}
                duration={800}
              >
                <motion.button
                  className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={container(navLink.delay)}
                  initial="hidden"
                  animate="visible"
                >
                  {navLink.nav}
                </motion.button>
              </Link>
            ))}
            <motion.div
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="font-thin text-[#676767]"
            >
              |
            </motion.div>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-10 rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% px-5 py-[7px] text-base font-normal tracking-wide text-stone-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              Resume
            </motion.a>
          </ul>

          <div
            onClick={handleNav}
            className="mr-10 block text-[#c6c6c6] md:hidden"
          >
            {nav ? <CgClose size={20} /> : <CgMenu size={20} />}
          </div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={nav ? { x: 0 } : { x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={
              nav
                ? "fixed left-0 top-0 z-50 h-full w-[45%] border-r-[1px] border-r-[#3b3b3b] bg-[#030303]"
                : "fixed left-[-100%] top-0 h-full w-[45%]"
            }
          >
            <ul className="my-10 ml-10 flex flex-col items-start justify-center gap-8 text-xl text-[#8e8e8e]">
              <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-2xl tracking-wider text-transparent">
                c.berry
              </span>
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.id}
                  to={navLink.nav}
                  smooth={true}
                  duration={800}
                >
                  <motion.button
                    onClick={handleNav}
                    className="bg-gradient-to-r bg-clip-text font-thin hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {navLink.nav}
                  </motion.button>
                </Link>
              ))}
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.a>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

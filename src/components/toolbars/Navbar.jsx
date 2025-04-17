import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "../../../public/colinberry-resume-2025.pdf";
import logo from "../../assets/logo.png";

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
    <motion.div>
      {/* Gradient 1: Quarter-circle in the top-left corner */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute hidden md:block top-0 z-[-2] h-screen w-4/5 bg-[radial-gradient(ellipse_15%_35%_at_0%_-10%,rgb(254,112,3),rgba(255,255,255,0))]"
      ></motion.div>

      <div className="mx-auto flex max-w-7xl items-center justify-between pb-5 pt-10 sm:pt-16">
        <motion.a
          href="/"
          className="ml-10 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-xl font-normal tracking-wider text-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <img className="size-10 sm:size-12" src={logo} alt="Colin Berry Logo" />
        </motion.a>

        <div className="text-xl flex items-center justify-center">
          <ul className="relative hidden items-center justify-center gap-10 text-[#a7a7a7] md:flex">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.id}
                to={navLink.nav}
                smooth={true}
                duration={800}
              >
                <motion.button
                  className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent font-normal tracking-wide"
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
              className="font-normal text-[#8E8E8E]"
            >
              |
            </motion.div>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-[#030303] text-xl tracking-wide font-semibold mr-10 rounded-full bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% py-3 px-7"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              <span>Resume</span>
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
            <ul className="my-10 ml-10 flex flex-col items-start justify-center gap-8 text-2xl text-[#cdcdcd]">
              <img className="size-6" src={logo} alt="Colin Berry Logo" />
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.id}
                  to={navLink.nav}
                  smooth={true}
                  duration={800}
                >
                  <motion.button
                    onClick={handleNav}
                    className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
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
                className="bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-2xl font-semibold tracking-wide text-transparent"
                whileTap={{ scale: 0.9 }}
              >
                <span>Resume</span>
              </motion.a>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

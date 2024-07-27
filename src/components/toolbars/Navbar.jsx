import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "../../../public/colin-berry-resume-2024.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  const navLinks = ["About", "Interests", "Projects", "Work"];

  return (
    <div>
      {/* Gradient 1: Quarter-circle in the top-left corner */}
      <div className="absolute left-0 top-0 z-20 hidden h-2/6 w-1/6 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,138,0,0.5)_0%,_rgba(255,255,255,0)_70%)] md:block"></div>

      <div className="mx-auto flex max-w-[1050px] items-center justify-between pb-5 pt-10">
        <motion.a
          href="/"
          className="ml-10 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-xl font-normal tracking-wider text-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          c.berry
        </motion.a>

        <div className="flex items-center justify-center gap-10 font-light">
          <ul className="relative hidden items-center justify-center gap-10 text-[#8E8E8E] md:flex">
            {navLinks.map((navLink, index) => (
              <Link to={navLink} smooth={true} duration={800}>
                <motion.button
                  key={index}
                  className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {navLink}
                </motion.button>
              </Link>
            ))}
            <div className="font-thin text-[#676767]">|</div>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-10 rounded-xl bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% px-5 py-[7px] text-base font-normal tracking-wide text-stone-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.a>
          </ul>

          <div
            onClick={handleNav}
            className="mr-10 block text-[#c6c6c6] md:hidden"
          >
            {nav ? <CgMenu size={20} /> : <CgClose size={20} />}
          </div>

          <div
            className={
              nav
                ? "duration-900 fixed left-[-100%] top-0 h-full w-[45%] ease-out"
                : "fixed left-0 top-0 z-50 h-full w-[45%] border-r-[1px] border-r-[#3b3b3b] bg-[#030303] duration-700 ease-in-out"
            }
          >
            <ul className="my-10 ml-10 flex flex-col items-start justify-center gap-5 text-[#8e8e8e]">
              <span className="bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-xl font-normal tracking-wider text-transparent">
                c.berry
              </span>
              {navLinks.map((navLink, index) => (
                <Link to={navLink} smooth={true} duration={800}>
                  <motion.button
                    onClick={handleNav}
                    key={index}
                    className="bg-gradient-to-r bg-clip-text hover:from-orange-500 hover:to-[#FF0000] hover:text-transparent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {navLink}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

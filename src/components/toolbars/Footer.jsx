import React from "react";
import { Link } from "react-scroll";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import network from "../../../public/colin-berry-neural-network-project.pdf";
import lego from "../../../public/colin-berry-lego-calculus-project.pdf";
import dashboard from "../../../public/colin-berry-dashboard-project.pdf";

const Footer = () => {
  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: delay },
    },
  });

  const projects = [
    { id: 1, name: "Metric Dashboard", href: dashboard },
    {
      id: 2,
      name: "Blockchain Technical Analysis",
      href: "https://www.youtube.com/watch?v=msh0eyI1kGk",
    },
    { id: 3, name: "Digit Recognition Neural Network", href: network },
    { id: 4, name: "Bicycle Weed Eater", href: "/" },
    { id: 5, name: "Calculus w/ Lego", href: lego },
    { id: 6, name: "Personal Portfolio", href: "/" },
  ];

  const listProjects = projects.map((project) => (
    <a
      href={project.href}
      key={project.id}
      className="hover:cursor-pointer hover:text-[#808080]"
    >
      {project.name}
    </a>
  ));

  const navs = [
    { id: 1, nav: "Home", icon: GoHomeFill },
    { id: 2, nav: "About", icon: IoPerson },
    { id: 3, nav: "Interests", icon: RiLightbulbFlashFill },
    { id: 4, nav: "Projects", icon: FaTools },
    { id: 5, nav: "Work", icon: FaLaptopCode },
  ];

  const listNavs = navs.map((nav) => {
    const IconComponent = nav.icon;
    return (
      <Link
        to={nav.nav}
        smooth={true}
        duration={800}
        key={nav.id}
        className="flex items-center hover:cursor-pointer hover:text-[#808080]"
      >
        <IconComponent className="mr-2" />
        {nav.nav}
      </Link>
    );
  });

  const contacts = [
    {
      id: 1,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/colintberry/",
      icon: SiLinkedin,
    },
    {
      id: 2,
      label: "Instagram",
      link: "https://www.instagram.com/berxzy_/",
      icon: FaInstagram,
    },
  ];

  const listContacts = contacts.map((contact) => {
    const IconComponent = contact.icon;
    return (
      <a
        key={contact.id}
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:cursor-pointer hover:text-[#808080]"
      >
        <IconComponent className="mr-2" />
        {contact.label === "Email" || contact.label === "Phone"
          ? contact.contact
          : contact.label}
      </a>
    );
  });

  return (
    <div>
      <div className="mb-12 h-[1px] w-full bg-gradient-to-r from-orange-500 to-[#FF0000]"></div>
      <div className="mx-10 mb-20 flex max-w-[1050px] flex-wrap items-baseline justify-between gap-8 md:mb-56 xl:mx-auto">
        <motion.div
          variants={container(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mr-5 text-sm font-light tracking-wider text-[#8E8E8E]"
        >
          © colinthomasberry.com
        </motion.div>
        <div className="flex flex-col gap-8 sm:max-md:mr-12 md:mr-0 md:flex-row md:gap-16">
          <motion.div
            variants={container(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xl font-medium tracking-wider text-transparent">
              Current projects
            </div>
            <ul className="flex flex-col items-start space-y-3 text-sm font-light tracking-wider text-[#8E8E8E]">
              {listProjects}
            </ul>
          </motion.div>
          <motion.div
            variants={container(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xl font-medium tracking-wider text-transparent">
              Jump to
            </div>
            <ul className="flex flex-col items-start space-y-3 text-sm font-light tracking-wider text-[#8E8E8E]">
              {listNavs}
            </ul>
          </motion.div>
          <motion.div
            variants={container(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 bg-gradient-to-r from-orange-500 to-[#FF0000] bg-clip-text text-xl font-medium tracking-wider text-transparent">
              Connect with me
            </div>
            <ul className="flex flex-col items-start space-y-3 text-sm font-light tracking-wider text-[#8E8E8E]">
              {listContacts}
              <li className="flex items-center">
                <HiOutlineMail className="mr-2" />
                ctberry21@gmail.com
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                (618) 420-9789
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={container(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-12 flex justify-center pb-10 text-center text-sm font-normal tracking-wide text-[#8E8E8E]"
      >
        Prototyped in Figma and designed using React + Tailwind by Colin Berry
      </motion.div>
    </div>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import reactIcon from "../../assets/interests-icons/react-icon.png";
import securityIcon from "../../assets/interests-icons/security-icon.png";
import softwareIcon from "../../assets/interests-icons/software-icon.png";
import hardwareIcon from "../../assets/interests-icons/hardware-icon.png";
import {
  INTEREST_TEXT_UI,
  INTEREST_TEXT_HARDWARE,
  INTEREST_TEXT_SECURITY,
  INTEREST_TEXT_SOFTWARE,
} from "../../constants";
import InterestBox from "../boxes/InterestBox";

const Interests = () => {
  return (
    <div className="mx-10 mb-28 flex max-w-[950px] flex-col items-start pt-20 sm:items-center md:h-screen md:justify-center lg:mx-auto lg:pt-0">
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mb-10 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-medium tracking-wide text-transparent md:mb-10 md:text-5xl lg:mb-16"
      >
        Interests
      </motion.h3>
      <div className="flex w-full flex-wrap justify-between gap-8 placeholder:sm:gap-4">
        <InterestBox
          icon={reactIcon}
          title="UI/UX Design"
          text={INTEREST_TEXT_UI}
          delay={0}
        />
        <InterestBox
          icon={securityIcon}
          title="Cybersecurity"
          text={INTEREST_TEXT_SECURITY}
          delay={0.2}
        />
        <InterestBox
          icon={hardwareIcon}
          title="Computer Architecture"
          text={INTEREST_TEXT_HARDWARE}
          delay={0}
        />
        <InterestBox
          icon={softwareIcon}
          title="Software Engineering"
          text={INTEREST_TEXT_SOFTWARE}
          delay={0.2}
        />
      </div>
    </div>
  );
};

export default Interests;

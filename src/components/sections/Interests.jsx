import React from "react";
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
    <div className="mx-10 mb-28 flex max-w-[1050px] flex-col items-start pt-20 sm:items-center md:h-screen md:justify-center lg:mx-auto lg:pt-0">
      <h3 className="mb-10 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-light tracking-wider text-transparent md:mb-10 md:text-4xl lg:mb-16">
        Interests
      </h3>
      <div className="flex w-full flex-wrap justify-between gap-8 placeholder:sm:gap-4">
        <InterestBox
          icon={reactIcon}
          title="UI/UX Design"
          text={INTEREST_TEXT_UI}
        />
        <InterestBox
          icon={securityIcon}
          title="Cybersecurity"
          text={INTEREST_TEXT_SECURITY}
        />
        <InterestBox
          icon={hardwareIcon}
          title="Computer Architecture"
          text={INTEREST_TEXT_HARDWARE}
        />
        <InterestBox
          icon={softwareIcon}
          title="Software Engineering"
          text={INTEREST_TEXT_SOFTWARE}
        />
      </div>
    </div>
  );
};

export default Interests;

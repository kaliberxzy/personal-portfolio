import React from "react";
import WorkBox from "../boxes/WorkBox";
import { WORK_TEXT_1, WORK_TEXT_2, WORK_TEXT_3 } from "../../constants";

const Projects = () => {
  return (
    <div className="mx-10 mb-28 flex max-w-[1050px] flex-col justify-center pt-20 md:mb-64 md:h-screen md:items-center lg:pt-0 xl:mx-auto">
      <h3 className="mb-12 bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-3xl font-light tracking-wider text-transparent md:mb-10 md:text-4xl lg:mb-16">
        Technical Work Experience
      </h3>
      <div className="flex w-full flex-wrap items-center gap-14">
        <WorkBox
          date="May 2024 - August 2024"
          title="Technology Product Development Intern - Stifel"
          subtitle={WORK_TEXT_1}
          skills={["React + Vite", "TailwindCSS", "Javascript", "HTML"]}
        />
        <WorkBox
          date="May 2023 - August 2023"
          title="Technology Product Development Intern - Stifel"
          subtitle={WORK_TEXT_2}
          skills={["Jira", "Sharepoint Design", "Visio", "Process Mapping"]}
        />
        <WorkBox
          date="August 2021 - May 2024"
          title="Technician and Shift Lead - SalukiTech Service Center"
          subtitle={WORK_TEXT_3}
          skills={["Windows", "MacOS", "Troubleshooting", "Active Directory"]}
        />
      </div>
    </div>
  );
};

export default Projects;

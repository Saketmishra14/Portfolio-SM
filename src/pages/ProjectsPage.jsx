import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import banner from "../assets/projects-page-banner.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState } from "react";

const Accordion = ({ title, projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-2 py-4 border-b border-gray-200 w-full">
      <div
        className="w-full flex items-center cursor-pointer select-none px-4 sm:px-6"
        onClick={toggleAccordion}
      >
        <ArrowDropDownIcon
          fontSize="large"
          color="primary"
          className={`transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "" : "-rotate-90"
          }`}
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-600 flex items-center flex-wrap gap-2">
          <span>{title}</span>
          <span className="text-base sm:text-lg md:text-xl text-neutral-800 font-normal">
            ({projects.length})
          </span>
        </h2>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6 ${
          isOpen ? "max-h-[2000px] py-4 sm:py-5" : "max-h-0 py-0"
        }`}
      >
        <ul className="list-disc marker:text-blue-600 marker:text-lg sm:marker:text-xl space-y-8 sm:space-y-10 py-2 pl-5 sm:pl-10">
          {projects.map((project, index) => (
            <li key={index} className="font-light">
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg sm:text-xl [&>a]:text-blue-500 [&>a]:text-sm">
                  <p className="break-words">{project.title}</p>
                  <div className="flex gap-4">
                    <a href={project.link} className="hover:underline whitespace-nowrap">
                      View
                    </a>
                    <a href={project.source} className="hover:underline whitespace-nowrap">
                      Source code
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm">
                    <span className="font-semibold mr-1 sm:mr-2">Tech Stack:</span>
                    {project.stack.join(", ")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const projectsData = [
  {
    domain: "Web Development",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "App Development",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React Native", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "AI/ML",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "Web 3.0",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "Other",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <img
        src={banner}
        alt="projects page banner"
        className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] object-cover object-center"
      />

      <div className="flex justify-center items-start px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl -mt-10 sm:-mt-14 md:-mt-20">
          <p className="text-6xl sm:text-7xl md:text-8xl">🛠️</p>

          <div className="mt-8 sm:mt-12">
            <div className="w-full border-b-2 border-gray-200 dark:border-gray-700 pb-4 sm:pb-5 space-y-3 sm:space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Projects
                  </h1>
                  <span className="text-base sm:text-lg md:text-xl ml-3 sm:ml-5 font-normal text-gray-600 dark:text-gray-400">
                    (100+)
                  </span>
                </div>

                <div className="flex items-center justify-end sm:justify-start space-x-2 sm:space-x-3 [&>a]:transition-transform [&>a]:hover:scale-110">
                  <a
                    href="https://github.com/ronak-pal1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    title="Github"
                  >
                    <GitHub className="text-xl sm:text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ronak-pal1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    title="LinkedIn"
                  >
                    <LinkedIn className="text-xl sm:text-2xl text-blue-600" />
                  </a>
                  <a
                    href="https://twitter.com/ronak_pal1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    title="Twitter"
                  >
                    <Twitter className="text-xl sm:text-2xl text-blue-400" />
                  </a>
                </div>
              </div>

              <p className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-300">
                Love building projects. Breaking and building things ✌️
              </p>
            </div>

            <div className="my-10 sm:my-16 md:my-20 space-y-6 sm:space-y-9">
              {projectsData.map((project, index) => (
                <Accordion
                  key={index}
                  title={project.domain}
                  projects={project.projects}
                />
              ))}
            </div>

            <div className="w-full text-center py-8 sm:py-12">
              <p className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
                More to come 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

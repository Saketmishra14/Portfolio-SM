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
  return ( <div className="w-full h-screen flex justify-center">
      <Helmet>
        <title>Saket Mishra: Not Found</title>
        <meta name="description" content="Not found page" />
      </Helmet>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="lg:text-4xl text-xl">Page Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="font-poppins bg-blue-500 text-gray-100 py-2 px-3 font-semibold rounded-full text-xs mt-6"
        >
          Back to Home
        </button>
      </div>
    </div>  );
};

export default ProjectsPage;

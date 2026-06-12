import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import SEO, { createProjectListSchema, projectBanner } from "../components/SEO";

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
        title: "Sovonics India Private Limited",
        link: "https://www.sovonicsindia.com/",
        source: "https://www.sovonicsindia.com/",
        stack: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
      },
      {
        title: "Manny Landscaping Services",
        link: "https://saketmishra14.github.io/mannylandscaping-final",
        source: "https://github.com/Saketmishra14/mannylandscaping-final",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      },
      {
        title: "Code Image Generator",
        link: "https://saketmishra14.github.io/Code-Frame",
        source: "https://github.com/Saketmishra14/Code-Frame",
        stack: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Link_Meet",
        link: "https://linkmeet-ymkj.onrender.com",
        source: "https://github.com/Saketmishra14/Link_Meet",
        stack: ["React.js", "Express.js", "MongoDB", "JavaScript"],
      },
    ],
  },
];

const ProjectsPage = () => {
  const allProjects = projectsData.flatMap((group) => group.projects);

  return (
    <main className="w-full min-h-screen px-4 py-10 sm:px-8">
      <SEO
        title="Projects | Saket Mishra"
        description="Browse Saket Mishra's web development projects, including client websites, developer tools, code utilities, and full-stack React and MERN stack applications."
        path="/projects"
        image={projectBanner}
        schema={[createProjectListSchema(allProjects)]}
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <h1 className="text-center text-2xl font-semibold text-neutral-900 sm:text-4xl">
          Saket Mishra Projects
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm text-neutral-600 sm:text-base">
          Selected frontend, full-stack, and client website work built with modern web technologies.
        </p>
        <div className="mt-10 w-full">
          {projectsData.map((projectGroup) => (
            <Accordion
              key={projectGroup.domain}
              title={projectGroup.domain}
              projects={projectGroup.projects}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

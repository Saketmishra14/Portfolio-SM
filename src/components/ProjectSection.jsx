import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Devices,
} from "@mui/icons-material";
import ProjectCard from "./ProjectCard";
import mannylandscaping from "../assets/projectCovers/Manny'slandscaping.png";
import codeCasingCover from "../assets/projectCovers/CodeCasing.jpg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const windowWIDTH = window.innerWidth;

const ProjectSection = () => {
  const navigate = useNavigate();
  const projectContainer = useRef(null);
  let scrollPos = 0;

  const moveRight = () => {
    if (windowWIDTH - scrollPos + 800 < 0) return;
    scrollPos += 800;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  const moveLeft = () => {
    if (scrollPos <= 0) return;

    scrollPos -= 800;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  return (
    <div className="mt-28" id="projects">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Projects
        </p>
        <Devices fontSize="large" className="dark:text-white" />
      </div>

      <div className="relative">
        <div
          className="absolute left-4 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveLeft}
        >
          <ArrowLeftRounded fontSize="large" />
        </div>
        <div
          className="absolute right-4 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveRight}
        >
          <ArrowRightRounded fontSize="large" />
        </div>
        <div
          className="px-5 py-7 flex justify-start lg:justify-center overflow-x-scroll no-scrollbar"
          ref={projectContainer}
        >
          <ProjectCard
            imgUrl={mannylandscaping}
            title="Manny Landscaping Services Website"
            desp="A fully responsive, real-world client website developed for Manny Landscaping to showcase services, portfolio, and contact details. Designed with a professional, user-friendly interface to enhance the company’s online presence"
            sourceLink="https://github.com/Saketmishra14/mannylandscaping-final"
            techStacks={[ "html5","css3","javascript","bootstrap"]}
            status={"completed"}
          />
          
          <ProjectCard
            imgUrl={codeCasingCover}
            title="Code Image Genrator"
            desp="CodeCasing is a code to image generator app. You just have to give the code and your will get an customizable image in return."
            sourceLink="https://github.com/Saketmishra14/Code-Frame"
            techStacks={["html5", "css3", "javascript"]}
            status={"Completed"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

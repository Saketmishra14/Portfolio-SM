import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Devices,
} from "@mui/icons-material";
import ProjectCard from "./ProjectCard";
import mannylandscaping from "../assets/projectCovers/Manny'slandscaping.png";
import codeFrameCover from "../assets/codeframe-banner.png";
import linkMeetCover from '../assets/linkmeet-banner.png'
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
            liveLink="https://saketmishra14.github.io/mannylandscaping-final"
          />
          
          <ProjectCard
            imgUrl={codeFrameCover}
            title="Code Image Genrator"
            desp="CodeFrame is a code to image generator app. You just have to give the code and your will get an customizable image in return."
            sourceLink="https://github.com/Saketmishra14/Code-Frame"
            techStacks={["html5", "css3", "javascript"]}
            status={"Completed"}
            liveLink="https://saketmishra14.github.io/Code-Frame"
          />
          <ProjectCard
            imgUrl={linkMeetCover}
            title="Link_Meet"
            desp="Link-Meet is a real-time video conferencing web app inspired by Zoom, allowing users to join meetings via secure links with live video, audio, and chat using WebRTC and modern web technologies."
            sourceLink="https://github.com/Saketmishra14/Link_Meet"
            techStacks={["css3", "javascript","express","mongodb","reactjs"]}
            status={"Completed"}
            liveLink="https://linkmeet-ymkj.onrender.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

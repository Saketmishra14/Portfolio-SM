import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import heroImage2 from "../assets/profile-img.jpeg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/BlinkEffect.css";
import TypingEffect from "./TypingEffect";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const profileRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const profile = profileRef.current;

    if (!profile) return;

    const profileDiv = profile.getBoundingClientRect();
    const breakpointX = profileDiv.x + profile.width / 2;
    const breakpointY = profileDiv.top + profile.height / 2;
    console.log(breakpointX, breakpointY);

    const mouseMoveController = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (x > breakpointX && y < breakpointY) {
        console.log("top right");
        profile.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(-15deg)";
      } else if (x > breakpointX && y > breakpointY) {
        console.log("down right");
        profile.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(-15deg)";
      } else if (x < breakpointX && y < breakpointY) {
        console.log("top left");
        profile.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(15deg)";
      } else if (x < breakpointX && y > breakpointY) {
        console.log("down left");
        profile.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(15deg)";
      }
    };

    const mouseLeaveController = () => {
      profile.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    profile.addEventListener("mousemove", mouseMoveController);
    profile.addEventListener("mouseleave", mouseLeaveController);

    return () => {
      profile.removeEventListener("mousemove", mouseMoveController);
      profile.removeEventListener("mouseleave", mouseLeaveController);
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center md:justify-evenly mt-20">
      <div className="md:w-1/3 w-3/4" data-aos="slide-right">
        {/* big text */}
        <div className=" bg-blue-300 p-5 rounded-md">
          <p className="lg:text-5xl text-2xl font-bold font-poppins leading-tight">
            Hello <span className="lg:text-4xl">👋</span>,<br /> I'm a{" "}
            <TypingEffect />
            <div className="h-8 w-1 bg-yellow-300 inline-block mx-3 blinkit"></div>
            , Technical Writer
          </p>
        </div>

        {/* small text */}
        <div className="py-4">
          <p className="font-poppins text-sm font-thin lg:text-lg dark:text-white">
            Welcome to my Portfolio! I’m Saket Mishra, a developer who loves turning imagination into experiences that people can truly connect with.
          </p>
        </div>

        {/* social media links */}
        <div className="lg:pt-5 pt-7 [&>*]:m-3 flex flex-wrap items-center">
          <a
            href="https://github.com/Saketmishra14"
            target="_blank"
            title="Github"
          >
            <GitHub fontSize="large" className="bg-white rounded-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/saket-mishra-5075aa2a6/"
            target="_blank"
            title="Linkedin"
          >
            <LinkedIn fontSize="large" className="text-blue-600" />
          </a>
          
          <a
            href="https://www.instagram.com/mishrasaket_14/"
            target="_blank"
            title="Instagram"
          >
            <Instagram fontSize="large" className="text-pink-600" />
          </a>

          <Link
            to={"/resume"}
            className="font-poppins bg-blue-800 text-gray-100 py-2 px-3 font-semibold rounded-md sm:text-sm text-xs"
          >
            View Resume
          </Link>
        </div>
      </div>

      <div className="bg-hero-background grid mt-14 " data-aos="slide-left">

        <img
          ref={profileRef}
          src={heroImage2}
          alt="profile"
          className="col-start-1 row-start-1  h-96 lg:h-[500px] rounded-full transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default HeroSection;

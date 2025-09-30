import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GetRequiredLogo from "./Logos";
import { Construction } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experiences = [
  {
    id: "1",
    company: "Dial For Web LLC",
    role: "Web Development/IT(as per project requirement)",
    type: "Intern",
    location: "Remote",
    startDate: "13/09/2025",
    endDate: undefined,
    current: true,
    description:
      "I will be actively involved in live projects, guided assignments,and collaborative activities.",
    techStack: [
      "reactjs",
      "Expressjs",
      "tailwindcss",
      "redux",
      "html5",
      "css3",
      "javascript",
    ],
  },
  {
    id: "2",
    company: "VG IT Solutions",
    role: "MERN Stack Developer",
    type: "Intern",
    location: "Hybrid",
    startDate: "15/09/2025",
    endDate: undefined,
    current: false,
    description:
      "Working as a MERN stack developer intern. Working on both frontend and backend of the project and some internal tools of the company.Training will focused on the MERN stack.",
    techStack: [
      "reactjs",
      "tailwindcss",
      "redux",
      "mongodb",
      "nodejs",
    ],
  },
];

const ExperienceNew = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-28">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Experiences
        </p>
        <Construction fontSize="large" className="dark:text-white" />
      </div>
      <div className="relative max-w-4xl mx-auto mt-20">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-neutral-400 dark:bg-neutral-600"></div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex items-start space-x-6 pl-[22px] md:pl-5"
            >
              {/* Timeline Node */}
              <div className="relative flex-shrink-0">
                <div
                  className={`
                  w-5 h-5 md:w-6 md:h-6 rounded-full border-1 border-white z-10 flex items-center justify-center
                  ${
                    exp.current
                      ? " bg-blue-700 glow-animate"
                      : " bg-slate-200 dark:bg-slate-400"
                  }
                `}
                />
              </div>

              {/* Experience Content */}
              <div
                className="flex-1 min-w-0 pb-12 pl-0 pr-8 md:pl-5 md:pr-0 border-b border-slate-200 dark:border-neutral-600"
                data-aos="fade-up"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3
                      className={`text-lg md:text-xl font-semibold ${
                        exp.current
                          ? "text-blue-700"
                          : "text-black dark:text-white"
                      } mb-1`}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-xs font-light dark:text-slate-300">
                      ( {exp.type} )
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-row flex-wrap items-center gap-3 my-5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <ApartmentIcon fontSize="small" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarMonthIcon fontSize="small" />
                    <span>
                      {exp.startDate} - {exp.endDate || "Present"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocationOnIcon fontSize="small" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="my-4 leading-relaxed text-xs font-light md:text-sm dark:text-slate-300">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-10">
                  <div className="flex flex-wrap gap-4">
                    {exp.techStack.map((tech) => (
                      <GetRequiredLogo
                        logoName={tech}
                        size={innerWidth < 600 ? 16 : 20}
                        key={tech}
                        color={tech == "nextjs" && "#000"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceNew;

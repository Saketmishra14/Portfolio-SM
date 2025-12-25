import { ElectricBolt } from "@mui/icons-material";
import SkillBox from "./SkillBox";

const SkillSection = () => {
  return (
    <div className="mt-28 py-10" id="skills">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Skills
        </p>
        <ElectricBolt fontSize="large" className="dark:text-white" />
      </div>

      <div className="flex flex-row justify-center mt-5">
        <p className="text-sm text-neutral-500">Click on the icon to know it's name</p>
      </div>

      <div className="py-7 flex justify-center flex-wrap divide-y-2 divide-gray-100 dark:divide-gray-900">
        <SkillBox
          title="Frontend Skills"
          skills={[
            { skill: "html5", level: "95%", label: "HTML" },
            { skill: "css3", level: "90%", label: "CSS" },
            { skill: "reactjs", color: "#000eaa", level: "75%", label:"React.js" },
            { skill: "tailwindcss", level: "60%", label:"Tailwind CSS" },
            { skill: "materialui", level: "70%", label:"Material UI" },
            { skill: "styled-components", level: "80%", label:"Styled Components" },
            { skill: "redux", level: "55%", label:"Redux" },
            { skill: "bootstrap", level: "65%", label:"Bootstrap" },
          ]}
        />
        <SkillBox
          title="Backend Skills"
          skills={[
            { skill: "nodejs", level: "75%", label: "Node.js" },
            { skill: "expressjs", level: "60%", label: "Express.js" },
            { skill: "javascript", level: "85%", label:"Javascript"},
          ]}
        />
        <SkillBox
          title="Database"
          skills={[
            { skill: "mongodb", level: "55%", label:"MongoDB" },
            { skill: "mysql", level: "50%", label: "MySQL" },
          ]}
        />
        <SkillBox
          title="Languages"
          skills={[
            { skill: "c", level: "85%", label:"C" },
            { skill: "cpp", level: "90%", label:"C++" },
          ]}
        />

       

        <SkillBox
          title="Cloud Skills"
          skills={[
            { skill: "salesforce", level: "40%", label:"SALESFORCE" },
          ]}
        />
        <SkillBox
          title="DevOps Skills"
          skills={[
            { skill: "git", level: "85%", label:"Git" },
            { skill: "github", level: "85%", label:"Github & Github Actions" },
          ]}
        />
      </div>
    </div>
  );
};

export default SkillSection;

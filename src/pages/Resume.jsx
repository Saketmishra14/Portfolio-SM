import { Helmet } from "react-helmet";
import RESUME_IMG from "../assets/Saket-Mishra-resume.png";

const Resume = () => {
  return (
    <div className="mx-2 ">
      <Helmet>
        <title>Saket Mishra: Resume</title>
        <meta name="description" content="Resume of Saket Mishra" />
      </Helmet>
      <img
        src={RESUME_IMG}
        alt="resume"
        className="w-full h-screen object-contain"
      />
    </div>
  );
};

export default Resume;

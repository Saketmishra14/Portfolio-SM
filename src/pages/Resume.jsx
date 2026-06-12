import RESUME_IMG from "../assets/Saket-Mishra-resume.png";
import SEO from "../components/SEO";

const Resume = () => {
  return (
    <div className="mx-2 ">
      <SEO
        title="Resume | Saket Mishra"
        description="View the resume of Saket Mishra, a software engineer focused on React, MERN stack development, Salesforce, and technical writing."
        path="/resume"
        image={RESUME_IMG}
      />
      <img
        src={RESUME_IMG}
        alt="Resume of Saket Mishra"
        className="w-full h-screen object-contain"
      />
    </div>
  );
};

export default Resume;

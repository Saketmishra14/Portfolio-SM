import { DarkMode, LightMode } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import ProfileIMG from "../assets/profile-img.webp";

const Header = ({ setDark, currentMode }) => {
  const changeMode = () => {
    setDark(!currentMode);
  };

  const navigate = useNavigate()

  return (
    <header className="flex lg:flex-row items-center lg:justify-evenly justify-center flex-col space-y-4 lg:space-y-0 py-4 px-5 border-b border-gray-200 dark:border-gray-700 lg:sticky lg:top-0 backdrop-blur-lg lg:z-50">
      <div className="flex flex-row items-center space-x-6 cursor-pointer" onClick={() => {navigate("/")}}>
        <img
          src={ProfileIMG}
          alt="Saket Mishra Web-developer"
          loading="lazy"
          className="lg:w-10 lg:h-10 w-7 h-7 object-cover rounded-full object-top"
        />
        <p className="font-bold font-poppins sm:text-xl text-lg dark:text-white">
          Saket Mishra
        </p>
      </div>

      <div className="text-xs sm:text-base space-x-4 font-poppins font-medium dark:text-white items-center">
        <Link to="/" className=" hover:border-b border-blue-700">
          Home
        </Link>
        <a href="#projects" className=" hover:border-b border-blue-700">
          Projects
        </a>
        <a href="#skills" className=" hover:border-b border-blue-700">
          Skills
        </a>
        <a href="/blog" className=" hover:border-b border-blue-700">
          Blogs
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div
          onClick={changeMode}
          className="border border-gray-400 dark:border-white bg-gray-100 dark:bg-black p-1 rounded-full"
        >
          {currentMode ? (
            <LightMode className="text-white" />
          ) : (
            <DarkMode className="text-zinc-900" />
          )}
        </div>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=mishrasaket042@gmail.com&tf=cm"
          target="_blank"
          className="font-poppins bg-blue-600 text-gray-100 py-2 px-3 font-semibold rounded-full sm:text-sm text-xs"
        >
          Connect
        </a>
      </div>
    </header>
  );
};

export default Header;

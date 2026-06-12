const Footer = () => {
  return (
    <footer className=" py-10 border-t bg-gray-100 dark:bg-black border-gray-500 dark:border-gray-800 mt-10 w-full">
      <div className="flex sm:flex-row flex-col sm:items-baseline items-center justify-center space-y-6 sm:space-y-0 sm:justify-evenly">
        <div className="flex flex-col sm:items-baseline items-center">
          <p className="lg:text-xl text-base text-black font-poppins mb-4 font-thin border-b border-blue-600 w-fit pb-1 dark:text-white">
            Socials
          </p>
          <div className="flex flex-col sm:items-baseline items-center space-y-1 text-blue-500 hover:[&>a]:text-blue-400 lg:text-base text-xs">
            <a href="https://github.com/Saketmishra14" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://www.instagram.com/mishrasaket_14/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/saketmishra14" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://yashmishra.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              Hashnode
            </a>
            <a href="https://www.youtube.com/@yash4two" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </div>
        </div>

       

        <div className="flex flex-col sm:items-baseline items-center">
          <p className="lg:text-xl text-base text-black font-poppins mb-4 font-thin border-b border-blue-600 w-fit pb-1 dark:text-white">
            Blogs
          </p>

          <div className="flex flex-col sm:items-baseline items-center space-y-1 text-gray-600 hover:[&>a]:text-gray-500 lg:text-base text-xs">
            <a
              href="https://codewithme14.hashnode.dev/problem-solving-think-apply-and-build"
              target="_blank"
              rel="noopener noreferrer"
            >
              Problem Solving
            </a>
            <a
              href="https://yashmishra.hashnode.dev/touch-typing-learn-to-type-faster"
              target="_blank"
              rel="noopener noreferrer"
            >
              Touch Typing
            </a>
            <a
              href="https://yashmishra.hashnode.dev/git-and-github-introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git and GitHub: Introduction
            </a>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-end sm:pr-10 justify-center pt-5 sm:pt-0">
        <p className="font-poppins font-thin dark:text-white lg:text-base text-sm">
          Developed by Saket Mishra
        </p>
      </div>
    </footer>
  );
};

export default Footer;

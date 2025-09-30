import SlideAnimation from "./SlideAnimation";
import TransportationCard from "./TransportationCard";
import "./styles/Transportation.css";

const TransportationRow = () => {
  return (
    <div className="w-full lg:h-14 h-10 bg-zinc-900 dark:bg-black mt-10 -rotate-2 flex flex-row items-center px-5 space-x-14 overflow-hidden [&>div]:flex-shrink-0">
      <SlideAnimation>
        <TransportationCard title="React" logo="reactjs" />
        <TransportationCard title="Tailwind CSS" logo="tailwindcss" />
        <TransportationCard title="Bootstrap" logo="bootstrap" />
        <TransportationCard title="Redux" logo="redux" />
        <TransportationCard title="Git" logo="git" />
        <TransportationCard title="HTML5" logo="html5" />
        <TransportationCard title="Material UI" logo="materialui" />
        <TransportationCard title="MongoDB" logo="mongodb" />
        <TransportationCard title="MySQL" logo="mysql" />
        <TransportationCard title="NodeJS" logo="nodejs" />
        <TransportationCard title="Python" logo="python" />
        <TransportationCard title="Express.js" logo="expressjs" />

      </SlideAnimation>
    </div>
  );
};

export default TransportationRow;

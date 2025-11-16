import { Helmet } from 'react-helmet-async';
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";
import SocialPostsSection from "../components/SocialPostsSection";
import ExperienceNew from "../components/ExperienceNew";
import Preloader from "../components/Preloader";
import { useState,useEffect } from "react";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
   useEffect(()=>{
    const timer=setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return ()=>clearTimeout(timer)
   },[]);
  return (
    <>
      <Helmet>
       <title>Saket Mishra</title>
        <meta
          name="description"
          content="The portfolio of Saket Mishra. Where I showed my all relevent skills, experiances, blogs, videos and all the other stuffs of me as a developer"
        />
      </Helmet>

      {isLoading?(<Preloader/>) :(
        <>
        <HeroSection />

      <TransportationRow />


      <ExperienceNew />

      <ProjectSection />

      <SkillSection />

      <SocialPostsSection />

      <EventSection />

        </>
      )};

      
    </>
  );
};

export default HomePage;

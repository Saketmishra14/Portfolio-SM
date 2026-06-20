import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";
import SocialPostsSection from "../components/SocialPostsSection";
import ExperienceNew from "../components/ExperienceNew";
import Preloader from "../components/Preloader";
import { useState,useEffect } from "react";
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import SEO from "../components/SEO";

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
      <SEO
        title="Saket Mishra - Software Engineer & Salesforce"
        description="I am Saket Mishra, a Software Developer crafting high-performance web applications with React, MERN Stack, and Salesforce technologies. Explore my portfolio, innovative projects, technical insights, and continuous learning journey."
        path="/"
      />

      {isLoading?(<Preloader/>) :(
        <>
        <HeroSection />

      <TransportationRow />

      <ExperienceNew />

      <ProjectSection />

      <SkillSection />


      <SocialPostsSection />
      <TestimonialsSection/>

      <EventSection />

        </>
      )};
    </>
  );
};

export default HomePage;

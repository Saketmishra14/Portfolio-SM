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
        description="Explore Saket Mishra's portfolio, projects, Freelancer, skills, technical blogs, developer tools, and professional experience in React, MERN stack development, Salesforce, and modern web engineering."
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

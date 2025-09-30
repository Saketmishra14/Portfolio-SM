import { Helmet } from "react-helmet";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";
import SocialPostsSection from "../components/SocialPostsSection";
import ExperienceNew from "../components/ExperienceNew";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Saket Mishra</title>
        <meta
          name="description"
          content="The portfolio of Saket Mishra. Where I showed my all relevent skills, experiances and blogs and all the other stuffs of me as a developer"
        />
      </Helmet>

      <HeroSection />

      <TransportationRow />

      {/* <ExperianceSection /> */}

      <ExperienceNew />

      <ProjectSection />

      <SkillSection />

      <SocialPostsSection />

      {/* <WhatCanIDo /> */}


      <EventSection />
    </>
  );
};

export default HomePage;

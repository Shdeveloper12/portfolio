import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import SkillSection from "./SkillSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import ContactMe from "./ContactMe";
import Background from "./Background";

const Home = () => {
  return (
    <> 
    
    
    <div className="relative">
      <div>
        <div id="home">
          <HeroSection />
        </div>
      </div>

      <div id="about" className="scroll-mt-20">
        <AboutMe />
      </div>
      
      <div id="skills">
        <SkillSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  
    </>
    
   
  );
};

export default Home;

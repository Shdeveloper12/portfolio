import React from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutMe />
            <SkillSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ContactMe />
        </div>
    );
};

export default Home;
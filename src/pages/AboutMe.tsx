import { useState } from 'react';
import TerminalSection from '../components/AboutMe/TerminalSection/TerminalSection';
import HeroSection from '../components/AboutMe/HeroSection/HeroSection';
import SkillsSection from '../components/AboutMe/SkillsSection/SkillsSection';
import ProjectsSection from '../components/AboutMe/ProjectsSection/ProjectsSection';
import ContactSection from '../components/AboutMe/ContactSection/ContactSection';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className={styles.container}>
      {!showContent && (
        <TerminalSection onAnimationComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <section id="content-section" className={styles.contentSection}>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </section>
      )}
    </section>
  );
};

export default AboutMe;

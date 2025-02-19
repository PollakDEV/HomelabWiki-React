import { useState } from 'react';
import TerminalSection from './TerminalSection/TerminalSection';
import HeroSection from './HeroSection/HeroSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import GithubSection from './GithubSection/GithubSection';
import ContactSection from './ContactSection/ContactSection';
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
          <GithubSection />
          <ContactSection />
        </section>
      )}
    </section>
  );
};

export default AboutMe;

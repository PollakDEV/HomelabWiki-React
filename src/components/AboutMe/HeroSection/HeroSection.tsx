import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1>Kamil Polak</h1>
      <p className={styles.tagline}>Full-Stack Developer & AI Enthusiast</p>
      <p className={styles.bio}>
        Crafting digital solutions at the intersection of creativity and technology
      </p>
    </div>
  );
};

export default HeroSection;

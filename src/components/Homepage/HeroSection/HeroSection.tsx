import { Link } from 'react-router-dom';
import { useWordCycler } from './useWordCycler';
import styles from './HeroSection.module.css';

const WORDS = ['self-hosting', 'freedom', 'security', 'privacy', 'control'];

export const HeroSection = () => {
  const currentWord = useWordCycler(WORDS);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span>Homelab</span>
          <span>Wiki</span>
        </h1>
        <div className={styles.subtitle}>
          Your journey into
          <div className={styles.typing} key={currentWord}>
            {WORDS[currentWord]}
          </div>
          starts here
        </div>
        <div className={styles.buttons}>
          <Link to="/documentation" className={styles.primaryButton}>
            Explore Docs
          </Link>
          <Link to="/apps" className={styles.secondaryButton}>
            View Apps
          </Link>
        </div>
      </div>
    </section>
  );
};
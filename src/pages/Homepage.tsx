// Homepage.tsx
import { useState, useEffect } from 'react';
import styles from './Homepage.module.css';

export default function Homepage() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['self-hosting', 'freedom', 'security', 'privacy', 'control'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span>Homelab</span>
            <span>Wiki</span>
          </h1>
          <div className={styles.subtitle}>
            Your journey into
            <div className={styles.typing} key={currentWord}>
              {words[currentWord]}
            </div>
            starts here
          </div>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Explore Docs</button>
            <button className={styles.secondaryButton}>View Apps</button>
          </div>
        </div>
      </section>

      <button className={styles.scrollButton}>
        <span className={styles.scrollArrow}></span>
        Scroll Down
      </button>
    </div>
  );
}
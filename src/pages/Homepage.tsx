import { useEffect, useState, useMemo, useRef } from 'react';
import styles from './Homepage.module.css';

const Homepage = () => {
  const [typedText, setTypedText] = useState('');
  const commands = [
    'sudo apt-get update',
    'docker compose up -d',
    'kubectl get pod plex'
  ];
  const animationRef = useRef<number | null>(null);
  const stateRef = useRef({
    currentIndex: 0,
    charIndex: 0,
    isDeleting: false,
    typingSpeed: 100
  });

  useEffect(() => {
    const type = () => {
      const { currentIndex, charIndex, isDeleting } = stateRef.current;
      const currentCommand = commands[currentIndex];

      if (!isDeleting) {
        if (charIndex <= currentCommand.length) {
          setTypedText(currentCommand.slice(0, charIndex));
          stateRef.current.charIndex++;
          stateRef.current.typingSpeed = 100;
        } else {
          stateRef.current.typingSpeed = 2000;
          stateRef.current.isDeleting = true;
        }
      } else {
        if (charIndex >= 0) {
          setTypedText(currentCommand.slice(0, charIndex));
          stateRef.current.charIndex--;
          stateRef.current.typingSpeed = 50;
        } else {
          stateRef.current.currentIndex = (currentIndex + 1) % commands.length;
          stateRef.current.isDeleting = false;
          stateRef.current.charIndex = 0; // Reset charIndex when switching commands
          stateRef.current.typingSpeed = 500;
        }
      }

      animationRef.current = requestAnimationFrame(() => 
        setTimeout(type, stateRef.current.typingSpeed)
      );
    };

    animationRef.current = requestAnimationFrame(type);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const particles = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => {
      const animationDelay = Math.random() * -20;
      const animationDuration = 10 + Math.random() * 15;
      const startX = Math.random() * 100;

      return (
        <span 
          key={`particle-${i}`}
          className={styles.particle}
          style={{
            left: `${startX}%`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      );
    }),
  []);

  return (
    <section className={styles.hero}>
      <div className={styles.particleField}>{particles}</div>
      
      <div className={styles.glassContainer}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Homelab</span>Wiki
        </h1>
        
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <span className={styles.closeButton} />
              <span className={styles.minimizeButton} />
              <span className={styles.expandButton} />
            </div>
          </div>
      <pre className={styles.terminalContent}>
        <span className={styles.textContainer}>
        <span className={styles.prompt}>$ </span> {typedText || '\u00A0'}
        <span className={styles.caret} /></span>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
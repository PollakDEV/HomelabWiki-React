import { useEffect, useRef, useState } from 'react';
import styles from './TerminalSection.module.css';

interface TerminalSectionProps {
  onAnimationComplete: () => void;
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ onAnimationComplete }) => {
  const terminalRef = useRef<HTMLPreElement>(null);
  const terminalSectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isProcessing = useRef(false);
  const animationQueue = useRef<Promise<void>>(Promise.resolve());

  useEffect(() => {
    // Detect mobile devices.
    const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    checkMobile();

    const terminal = terminalRef.current;

    async function typeText(
      text: string,
      speed = 40,
      elementClass = styles.terminalCommand
    ) {
      if (!terminal) return;
      const span = document.createElement('span');
      span.className = elementClass;
      terminal.appendChild(span);

      for (const char of text) {
        span.textContent += char;
        await new Promise(resolve => setTimeout(resolve, speed));
      }
    }

    async function startTerminalAnimation() {
      if (!terminal) return;
      terminal.textContent = '';
      isProcessing.current = true;

      animationQueue.current = animationQueue.current.then(async () => {
        await typeText('./portfolio.sh');
        await new Promise(resolve => setTimeout(resolve, 1000));

        const error = document.createElement('div');
        error.className = styles.terminalError;
        error.textContent = 'Error: This script requires sudo privileges';
        terminal.appendChild(error);
        await new Promise(resolve => setTimeout(resolve, 2000));

        terminal.appendChild(document.createTextNode('\n$ '));
        await typeText('sudo ./portfolio.sh');
        await new Promise(resolve => setTimeout(resolve, 1000));

        terminal.appendChild(document.createTextNode('\n\nLaunching portfolio in '));
        const countdown = document.createElement('span');
        countdown.className = styles.terminalCommand;
        terminal.appendChild(countdown);

        for (let i = 3; i > 0; i--) {
          countdown.textContent += `${i}..`;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Once the animation is complete, call the callback.
        onAnimationComplete();
      }).finally(() => {
        isProcessing.current = false;
      });
    }

    function handleActivation() {
      if (isProcessing.current || !terminal) return;
      startTerminalAnimation();
      document.removeEventListener('keypress', handleKeyPress);
      terminal.removeEventListener('click', handleActivation);
    }

    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        handleActivation();
      }
    }

    if (terminal) {
      terminal.textContent = isMobile ? 'Tap here to continue...' : 'Press Enter to continue...';
      if (isMobile) {
        terminal.style.cursor = 'pointer';
        terminal.addEventListener('click', handleActivation);
      } else {
        document.addEventListener('keypress', handleKeyPress);
      }
    }

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      if (terminal) {
        terminal.removeEventListener('click', handleActivation);
      }
    };
  }, [isMobile, onAnimationComplete]);

  return (
    <section ref={terminalSectionRef} className={styles.terminalSection}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <div className={`${styles.terminalButton} ${styles.close}`} />
          <div className={`${styles.terminalButton} ${styles.minimize}`} />
          <div className={`${styles.terminalButton} ${styles.expand}`} />
        </div>
      </div>
      <div className={styles.terminalContent}>
        <pre ref={terminalRef} id="terminal" />
      </div>
    </section>
  );
};

export default TerminalSection;

import { useEffect, useState, useRef } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isProcessing = useRef(false);
  const animationQueue = useRef<Promise<void>>(Promise.resolve());
  const projectCardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    checkMobile();

    const terminal = document.getElementById('terminal');
    const terminalSection = document.getElementById('terminal-section');
    const contentSection = document.getElementById('content-section');

    async function typeText(text: string, speed = 40, elementClass = styles.terminalCommand) {
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
      if (!terminalSection || !contentSection || !terminal) return;

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

        terminalSection.classList.add(styles.hidden);
        contentSection.style.display = 'block';
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
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--x', `${e.clientX - rect.left}px`);
      target.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    const projectCards = projectCardRefs.current.filter(Boolean) as HTMLElement[];
    projectCards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <section>
      <section id="terminal-section" className={styles.terminalSection}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <div className={`${styles.terminalButton} ${styles.close}`} />
            <div className={`${styles.terminalButton} ${styles.minimize}`} />
            <div className={`${styles.terminalButton} ${styles.expand}`} />
          </div>
        </div>
        <div className={styles.terminalContent}>
          <pre id="terminal" />
        </div>
      </section>

      <section id="content-section" style={{ display: 'none' }}>
        <div className={styles.hero}>
          <h1>Kamil Polak</h1>
          <p className={styles.tagline}>Full-Stack Developer & AI Enthusiast</p>
          <p className={styles.bio}>Crafting digital solutions at the intersection of creativity and technology</p>
        </div>

        <div className={styles.skillsGrid}>
  {[95, 80, 65, 60].map((width, index) => (
    <div key={index} className={styles.skillItem}>
      <h4>{['Cloud Computing', 'Web Development', 'Machine Learning', 'Cybersecurity'][index]}</h4>
      <div className={styles.skillBar}>
        <div
          className={styles.skillProgress}
          style={{ '--targetWidth': `${width}%` } as React.CSSProperties}
        />
      </div>
    </div>
  ))}
</div>

        <section className={styles.projectsSection}>
          <h2>Operation Portfolio</h2>
          <div className={styles.projectGrid}>
            {[1, 2].map((item, index) => (
              <article 
                key={item} 
                ref={el => { projectCardRefs.current[index] = el; }}
                className={styles.projectCard}
              >
                <div className={styles.cardHover} />
                <div className={styles.previewContainer}>
                  <div className={styles.previewOverlay} />
                  <img
                    src="https://blob.cloudcomputing.id/images/0ce11f98-2aad-483f-8e73-371313e8da81/ilustrasi-ai-l-v1-min.jpg"
                    alt="AI Assistant Project"
                    className={styles.projectPreview}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3>Neural Nexus</h3>
                  <p>AI-powered assistant with natural language processing capabilities</p>
                  <div className={styles.techStack}>
                    {['Python', 'TensorFlow', 'React'].map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a href="#" className={`${styles.linkButton} ${styles.demo}`}>
                      Live Demo
                      <div className={styles.linkTrail} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.contactSection}>
          <h2>Initiate Connection</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard} data-type="github">
              <div className={styles.cardIcon}>
                <svg aria-hidden="true" viewBox="0 0 16 16" width="24">
                  <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <h3>Code Repository</h3>
              <p>Explore my digital workshop</p>
              <a href="https://github.com/PollakDEV" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                Connect <span>→</span>
              </a>
            </div>

            <div className={styles.contactCard} data-type="email">
              <div className={styles.cardIcon}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3>Secure Channel</h3>
              <p>Direct encrypted communication</p>
              <a href="mailto:owner@homelabwiki.pl" className={styles.cardLink}>
                Initialize <span>↗</span>
              </a>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input type="text" id="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className={styles.formGroup}>
                <input type="email" id="email" required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className={styles.formGroup}>
                <textarea id="message" rows={3} required />
                <label htmlFor="message">Message Payload</label>
              </div>
              <button type="submit" className={styles.glowButton}>
                Transmit Data
                <div className={styles.buttonPulse} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
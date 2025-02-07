import { useEffect, useState, useRef } from 'react';
import './AboutMe.css';
import '../global.css';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isProcessing = useRef(false);
  const animationQueue = useRef<Promise<void>>(Promise.resolve());

  useEffect(() => {
    const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    checkMobile();
    
    const terminal = document.getElementById('terminal');
    const terminalSection = document.getElementById('terminal-section');
    const contentSection = document.getElementById('content-section');

    async function typeText(text: string, speed = 40, elementClass = 'terminal-command') {
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
      
      // Clear previous content
      terminal.textContent = '';
      isProcessing.current = true;

      // Wrap animation steps in queue
      animationQueue.current = animationQueue.current.then(async () => {
        // Initial command
        await typeText('./portfolio.sh');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Error message
        const error = document.createElement('div');
        error.className = 'terminal-error';
        error.textContent = 'Error: This script requires sudo privileges';
        terminal.appendChild(error);
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sudo command
        terminal.appendChild(document.createTextNode('\n$ '));
        await typeText('sudo ./portfolio.sh');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Countdown
        terminal.appendChild(document.createTextNode('\n\nLaunching portfolio in '));
        const countdown = document.createElement('span');
        countdown.className = 'terminal-command';
        terminal.appendChild(countdown);

        for (let i = 3; i > 0; i--) {
          countdown.textContent += `${i}..`;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Transition
        terminalSection.classList.add('hidden');
        contentSection.style.display = 'block';
      }).finally(() => {
        isProcessing.current = false;
      });
    }

    function handleActivation() {
      if (isProcessing.current || !terminal) return;
      startTerminalAnimation();
      
      // Remove listeners
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
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
  
    function handleMouseMove(e: Event) {
      const mouseEvent = e as MouseEvent;
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--x', `${mouseEvent.clientX - rect.left}px`);
      target.style.setProperty('--y', `${mouseEvent.clientY - rect.top}px`);
    }
  
    projectCards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as EventListener);
    });
  
    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
      });
    };
  }, []);

  return (
    <section>
      <section id="terminal-section">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button expand" />
          </div>
        </div>
        <div className="terminal-content">
          <pre id="terminal" />
        </div>
      </section>
      
      <section id="content-section" style={{ display: 'none' }}>
        <div className="hero">
          <h1>Kamil Polak</h1>
          <p className="tagline">Full-Stack Developer & AI Enthusiast</p>
          <p className="bio">Crafting digital solutions at the intersection of creativity and technology</p>
        </div>

        {/* Skills section */}
        <div className="skills-grid">
          {[95, 80, 65, 60].map((width, index) => (
            <div key={index} className="skill-item">
              <h4>{['Cloud Computing', 'Web Development', 'Machine Learning', 'Cybersecurity'][index]}</h4>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ '--target-width': `${width}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Projects section */}
        <section className="projects-section">
          <h2>Operation Portfolio</h2>
          <div className="project-grid">
            {[1, 2].map((item) => (
              <article key={item} className="project-card">
                <div className="card-hover" />
                <div className="preview-container">
                  <div className="preview-overlay" />
                  <img
                    src="https://blob.cloudcomputing.id/images/0ce11f98-2aad-483f-8e73-371313e8da81/ilustrasi-ai-l-v1-min.jpg"
                    alt="AI Assistant Project"
                    className="project-preview"
                  />
                </div>
                <div className="project-info">
                  <h3>Neural Nexus</h3>
                  <p>AI-powered assistant with natural language processing capabilities</p>
                  <div className="tech-stack">
                    {['Python', 'TensorFlow', 'React'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" className="link-button demo">
                      Live Demo
                      <div className="link-trail" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <div className="contact-section">
          <h2>Initiate Connection</h2>
          <div className="contact-grid">
            <div className="contact-card" data-type="github">
              <div className="card-icon">
                <svg aria-hidden="true" viewBox="0 0 16 16" width="24">
                  <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <h3>Code Repository</h3>
              <p>Explore my digital workshop</p>
              <a href="https://github.com/PollakDEV" target="_blank" rel="noopener noreferrer" className="card-link">
                Connect <span>→</span>
              </a>
            </div>

            <div className="contact-card" data-type="email">
              <div className="card-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3>Secure Channel</h3>
              <p>Direct encrypted communication</p>
              <a href="mailto:owner@homelabwiki.pl" className="card-link">
                Initialize <span>↗</span>
              </a>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <textarea id="message" rows={3} required />
                <label htmlFor="message">Message Payload</label>
              </div>
              <button type="submit" className="glow-button">
                Transmit Data
                <div className="button-pulse" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
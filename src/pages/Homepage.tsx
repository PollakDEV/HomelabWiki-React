// Homepage.tsx
import { useState, useEffect, useRef } from 'react';
import styles from './Homepage.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export default function Homepage() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const words = ['self-hosting', 'freedom', 'security', 'privacy', 'control'];
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Word cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // Particle Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const createParticles = () => {
      particles.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      }));
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

      particles.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Resources data
  const resources = [
    {
      id: 1,
      icon: '🚀',
      title: 'Nextcloud Setup Guide',
      description: 'Complete walkthrough for deploying your private cloud storage solution',
      tags: ['Storage', 'Beginner', 'Docker'],
      link: '/docs/nextcloud'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Network Security',
      description: 'Essential security practices for your homelab environment',
      tags: ['Security', 'Networking', 'Firewall'],
      link: '/docs/security'
    },
    {
      id: 3,
      icon: '📦',
      title: 'Proxmox VE',
      description: 'Virtualization platform for enterprise-grade home labs',
      tags: ['Virtualization', 'Hypervisor', 'Bare-metal'],
      link: '/apps/proxmox'
    }
  ];

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
      
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

      {showScrollButton && (
        <button className={styles.scrollButton}>
          <span className={styles.scrollArrow}></span>
          Scroll Down
        </button>
      )}

      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Essential Resources</h2>
        <div className={styles.resourceGrid}>
          {resources.map((resource, index) => (
            <div 
              className={styles.resourceCard}
              key={resource.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{resource.icon}</div>
                <h3>{resource.title}</h3>
              </div>
              <p className={styles.cardDescription}>{resource.description}</p>
              <div className={styles.cardTags}>
                {resource.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
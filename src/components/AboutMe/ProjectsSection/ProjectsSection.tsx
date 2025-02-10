import { useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const projectCardRefs = useRef<Array<HTMLElement | null>>([]);

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

  const projects = [
    {
      title: 'HomelabWiki',
      description: 'A great librery of knowledge for homelabbers',
      techStack: ['React', 'Typescript', 'SCSS'],
      imageUrl:
        'https://i.ibb.co/hFKgvGCg/Homelab-Wiki-project.png',
    },
    {
      title: 'Neural Nexus',
      description: 'AI-powered assistant with natural language processing capabilities',
      techStack: ['Python', 'TensorFlow', 'React'],
      imageUrl:
        'https://blob.cloudcomputing.id/images/0ce11f98-2aad-483f-8e73-371313e8da81/ilustrasi-ai-l-v1-min.jpg',
    },
    
  ];

  return (
    <section className={styles.projectsSection}>
      <h2>Operation Portfolio</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <article
            key={index}
            ref={el => {
              projectCardRefs.current[index] = el;
            }}
            className={styles.projectCard}
          >
            <div className={styles.cardHover} />
            <div className={styles.previewContainer}>
              <div className={styles.previewOverlay} />
              <img
                src={project.imageUrl}
                alt={`${project.title} Project`}
                className={styles.projectPreview}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map(tech => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
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
  );
};

export default ProjectsSection;

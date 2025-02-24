import styles from './DocumentationSection.module.css';

const documentationFeatures = [
  {
    id: 1,
    title: 'Comprehensive Guides',
    description: 'Step-by-step tutorials covering everything from basic setup to advanced configurations',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Best Practices',
    description: 'Industry-standard security measures and optimization techniques for your homelab',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Real-world Examples',
    description: 'Practical scenarios and configurations from experienced homelab enthusiasts',
    icon: '💡'
  },
  {
    id: 4,
    title: 'Troubleshooting',
    description: 'Common issues and their solutions to keep your services running smoothly',
    icon: '🔧'
  }
];

export const DocumentationShowcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Extensive Documentation
          <span className={styles.subtitle}>Everything you need to know, all in one place</span>
        </h2>

        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Tutorials</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Configuration Examples</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Users Helped</span>
          </div>
        </div>

        <div className={styles.features}>
          {documentationFeatures.map(feature => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
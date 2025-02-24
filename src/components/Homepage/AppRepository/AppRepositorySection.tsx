import styles from './AppRepositorySection.module.css';

const APPS = [
  {
    id: 1,
    name: 'Nextcloud',
    description: 'A self-hosted productivity platform for file sharing, collaboration, and more.',
    icon: '☁️',
    tags: ['Self-Hosting', 'Productivity', 'Cloud'],
    link: '/app-repository/nextcloud',
  },
  {
    id: 2,
    name: 'Jellyfin',
    description: 'A media server for organizing and streaming your media collection.',
    icon: '🎬',
    tags: ['Media', 'Streaming', 'Self-Hosting'],
    link: '/app-repository/jellyfin',
  },
  {
    id: 3,
    name: 'Home Assistant',
    description: 'Open-source home automation platform for smart home integration.',
    icon: '🏠',
    tags: ['IoT', 'Automation', 'Self-Hosting'],
    link: '/app-repository/home-assistant',
  },
  {
    id: 4,
    name: 'Portainer',
    description: 'A lightweight management UI for Docker environments.',
    icon: '🐳',
    tags: ['DevOps', 'Docker', 'Management'],
    link: '/app-repository/portainer',
  },
  {
    id: 5,
    name: 'Portainer',
    description: 'A lightweight management UI for Docker environments.',
    icon: '🐳',
    tags: ['DevOps', 'Docker', 'Management'],
    link: '/app-repository/portainer',
  },
  {
    id: 6,
    name: 'Portainer',
    description: 'A lightweight management UI for Docker environments.',
    icon: '🐳',
    tags: ['DevOps', 'Docker', 'Management'],
    link: '/app-repository/portainer',
  },
];

export const AppRepositorySection = () => {
  return (
    <section className={styles.repository}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>App Repository</h2>
        <p className={styles.sectionDescription}>
          Explore a curated collection of self-hosted applications to power your homelab.
        </p>
        <div className={styles.appGrid}>
          {APPS.map((app, index) => (
            <a
              href={app.link}
              className={styles.appCard}
              key={app.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{app.icon}</div>
                <h3>{app.name}</h3>
              </div>
              <p className={styles.cardDescription}>{app.description}</p>
              <div className={styles.cardTags}>
                {app.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
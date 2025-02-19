// GitHubSection.tsx
import styles from './GithubSection.module.css';

const GithubSection = () => {
  // Test data for 51 weeks (357 days)
  const testContributions = Array.from({ length: 357 }, (_, i) => {
    // Create a pattern with more activity on weekdays
    const dayOfWeek = i % 7;
    const baseValue = dayOfWeek >= 1 && dayOfWeek <= 5 ? 2 : 0;
    return Math.min(4, baseValue + Math.floor(Math.random() * 3));
  });

  return (
    <div className={styles.githubProfile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileBanner}>
          <div className={styles.bannerGradient}></div>
        </div>
        
        <div className={styles.profileInfo}>
          <div className={styles.avatarContainer}>
            <img 
              src="https://github.com/PollakDEV.png" 
              alt="Avatar" 
              className={styles.avatar}
            />
          </div>
          <h1 className={styles.profileName}>PollakDEV</h1>
          <p className={styles.profileBio}>Cloud Architect | Cybersecurity Specialist | Self-Hosting Evangelist</p>
        </div>
      </div>

      <div className={styles.profileStats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>2.5k</span>
          <span className={styles.statLabel}>Contributions</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>48</span>
          <span className={styles.statLabel}>Repositories</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1.2k</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
      </div>

      <div className={styles.pinnedRepos}>
        <h2 className={styles.sectionTitle}>Pinned Repositories</h2>
        <div className={styles.repoGrid}>
          <div className={styles.repoCard}>
            <div className={styles.repoHeader}>
              <h3 className={styles.repoTitle}>HomelabWiki</h3>
              <span className={styles.repoVisibility}>Public</span>
            </div>
            <p className={styles.repoDescription}>Your comprehensive guide to self-hosted solutions and infrastructure automation</p>
            <div className={styles.repoMeta}>
              <span className={styles.repoLanguage}>
                <span className={styles.languageColor}></span>
                TypeScript
              </span>
              <span className={styles.repoStars}>⭐ 356</span>
            </div>
          </div>

          <div className={styles.repoCard}>
            <div className={styles.repoHeader}>
              <h3 className={styles.repoTitle}>SecureCloud</h3>
              <span className={styles.repoVisibility}>Public</span>
            </div>
            <p className={styles.repoDescription}>Zero-trust architecture implementation for hybrid cloud environments</p>
            <div className={styles.repoMeta}>
              <span className={styles.repoLanguage}>
                <span className={styles.languageColor}></span>
                Python
              </span>
              <span className={styles.repoStars}>⭐ 198</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.activityGraph}>
        <h2 className={styles.sectionTitle}>Contribution Graph</h2>
        <div className={styles.graphContainer}>
          <div className={styles.contributionsGrid}>
            {testContributions.map((level, index) => (
              <div 
                key={index}
                className={`${styles.contributionDay} ${styles[`level-${level}`]}`}
                data-count={level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSection;
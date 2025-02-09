import { Resource } from '../data/resources';
import styles from './FeaturedResources.module.css';

interface FeaturedResourcesProps {
  resources: Resource[];
}

export const FeaturedResources = ({ resources }: FeaturedResourcesProps) => {
  return (
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
  );
};
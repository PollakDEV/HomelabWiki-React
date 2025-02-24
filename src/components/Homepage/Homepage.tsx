import { ParticleBackground } from './ParticleBackground/ParticleBackground';
import { HeroSection } from './HeroSection/HeroSection';
import { FeaturedResources } from './FeaturedResources/FeaturedResources';
import { ScrollButton } from './ScrollButton/ScrollButton';
import { resources } from './data/resources';
import { DocumentationShowcase } from './Documentation/DocumentationSection';
import { AppRepositorySection } from './AppRepository/AppRepositorySection';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.container}>
      <ParticleBackground />
      <HeroSection />
      <ScrollButton />
      <FeaturedResources resources={resources} />
      <AppRepositorySection />
      <DocumentationShowcase />
    </div>
  );
}
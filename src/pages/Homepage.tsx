import { ParticleBackground } from '../components/Homepage/ParticleBackground/ParticleBackground';
import { HeroSection } from '../components/Homepage/HeroSection/HeroSection';
import { FeaturedResources } from '../components/Homepage/FeaturedResources/FeaturedResources';
import { ScrollButton } from '../components/Homepage/ScrollButton/ScrollButton';
import { resources } from '../components/Homepage/data/resources';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.container}>
      <ParticleBackground />
      <HeroSection />
      <ScrollButton />
      <FeaturedResources resources={resources} />
    </div>
  );
}
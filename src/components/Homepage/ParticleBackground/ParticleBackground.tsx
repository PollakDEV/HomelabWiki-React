import { useParticles } from '../hooks/useParticles';
import styles from './ParticleBackground.module.css';

export const ParticleBackground = () => {
  const canvasRef = useParticles();
  return <canvas ref={canvasRef} className={styles.canvas} />;
};
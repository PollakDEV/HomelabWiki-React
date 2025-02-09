import { useScrollVisibility } from './useScrollVisibility';
import styles from './ScrollButton.module.css';

export const ScrollButton = () => {
  const visible = useScrollVisibility();

  return (
    <button className={`${styles.scrollButton} ${!visible ? styles.hidden : ''}`}>
      <span className={styles.scrollArrow}></span>
      Scroll Down
    </button>
  );
};
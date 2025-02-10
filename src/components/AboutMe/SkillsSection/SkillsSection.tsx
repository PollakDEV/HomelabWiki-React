import React from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  const skills = [
    { name: 'Cloud Computing', width: 95 },
    { name: 'Web Development', width: 80 },
    { name: 'Networks', width: 75 },
    { name: 'Machine Learning', width: 65 },
    { name: 'DevOps', width: 65 },
    { name: 'Cybersecurity', width: 60 },
  ];

  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <h4>{skill.name}</h4>
          <div className={styles.skillBar}>
            <div
              className={styles.skillProgress}
              style={{ '--targetWidth': `${skill.width}%` } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

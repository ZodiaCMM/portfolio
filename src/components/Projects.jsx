import { PROJECTS } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>04 — Projects</div>
        <h2 className={`${styles.title} reveal`}>Featured Work</h2>
        <p className={`${styles.sub} reveal`}>
          Academic and personal projects that showcase my technical skills.
        </p>
        <div className={styles.grid}>
          {PROJECTS.map(({ num, type, title, desc, tech }) => (
            <div key={num} className={`${styles.card} reveal`}>
              <div className={styles.cardNum}>{num}</div>
              <div className={styles.cardType}>{type}</div>
              <div className={styles.cardTitle}>{title}</div>
              <p className={styles.cardDesc}>{desc}</p>
              <div className={styles.tech}>
                {tech.map(t => (
                  <span key={t} className={styles.badge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

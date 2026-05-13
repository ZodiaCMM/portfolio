import { EXPERIENCES } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>03 — Experience</div>
        <h2 className={`${styles.title} reveal`}>Work History</h2>
        <p className={`${styles.sub} reveal`}>Professional and internship experience.</p>
        <div className={styles.timeline}>
          {EXPERIENCES.map(({ period, title, org, bullets }) => (
            <div key={title} className={`${styles.item} reveal`}>
              <div className={styles.dot} />
              <div className={styles.period}>{period}</div>
              <div className={styles.jobTitle}>{title}</div>
              <div className={styles.org}>{org}</div>
              <ul className={styles.bullets}>
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EDUCATION } from '../data/portfolio';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>05 — Education</div>
        <h2 className={`${styles.title} reveal`}>Academic Background</h2>
        <p className={`${styles.sub} reveal`}>Where my journey in technology began.</p>
        <div className={styles.grid}>
          {EDUCATION.map(({ degree, school, field, period }) => (
            <div key={degree} className={`${styles.card} reveal`}>
              <div>
                <div className={styles.degree}>{degree}</div>
                <div className={styles.school}>{school}</div>
                <div className={styles.field}>{field}</div>
              </div>
              <div className={styles.period}>{period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

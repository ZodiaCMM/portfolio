import { STATS } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>01 — About</div>
        <div className={styles.grid}>
          <div className={`${styles.text} reveal`}>
            <h2 className={styles.title}>Who I Am</h2>
            <p>
              I'm a software developer student at{' '}
              <strong>Songkhla Rajabhat University</strong>, specializing in
              Information Technology and Digital Innovation (ITDI). I'm expected
              to graduate in 2026.
            </p>
            <p>
              I have a keen interest in developing{' '}
              <strong>applications and websites</strong>, with a foundational
              knowledge of coding and system development. I also have experience
              in <strong>design and media creation</strong>, crafting visually
              appealing and user-friendly solutions.
            </p>
            <p>
              During my cooperative education at <strong>CHUBB</strong>, I worked
              on an Agentic AI system for quality control and developed a
              Speech-to-Text solution for AI agent interactions — combining both
              my technical and analytical skills.
            </p>
          </div>

          <div className={`${styles.stats} reveal`}>
            {STATS.map(({ num, label }) => (
              <div key={label} className={styles.statCard}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SKILL_GROUPS } from '../data/portfolio';
import styles from './Skills.module.css';

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>02 — Skills</div>
        <h2 className={`${styles.title} reveal`}>Tools & Technologies</h2>
        <p className={`${styles.sub} reveal`}>
          Languages, frameworks, and tools I work with.
        </p>
        <div className={styles.grid}>
          {SKILL_GROUPS.map(({ icon, title, tags }) => (
            <div key={title} className={`${styles.group} reveal`}>
              <div className={styles.groupTitle}>
                {ICONS[icon]}
                {title}
              </div>
              <div className={styles.tags}>
                {tags.map(({ label, skillicon }) => (
                  <span key={label} className={styles.tag}>
                    {skillicon && (
                      <img
                        src={`https://skillicons.dev/icons?i=${skillicon}`}
                        alt={label}
                        className={styles.tagIcon}
                      />
                    )}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

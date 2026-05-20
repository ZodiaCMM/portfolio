import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <h2 className={`${styles.title} reveal`}>Let's Build Something</h2>
        <p className={`${styles.sub} reveal`}>
          Open to internships, part-time roles, and collaborative projects.
          Feel free to reach out!
        </p>
        <div className="reveal">
          <a href="mailto:malexpaduka@gmail.com" className={styles.email}>
            malexpaduka@gmail.com
          </a>
        </div>
        <div className={`${styles.links} reveal`}>
          <a
            href="https://github.com/ZodiaCMM"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            github.com/ZodiaCMM
          </a>
          <a href="tel:0657712750" className={styles.link}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 17z"/>
            </svg>
            065-7712750
          </a>
        </div>
      </div>
    </section>
  );
}

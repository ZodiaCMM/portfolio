import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>© 2025 Abdolmalek Paduka</span>
      <span className={styles.right}>Built with React + Vite</span>
    </footer>
  );
}

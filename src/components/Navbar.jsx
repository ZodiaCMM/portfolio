import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolio';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        A<span>.</span>Paduka
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

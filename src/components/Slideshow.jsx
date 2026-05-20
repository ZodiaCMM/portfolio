import { useState, useEffect, useCallback } from 'react';
import { PROJECT_SLIDES } from '../data/portfolio';
import styles from './Slideshow.module.css';

export default function Slideshow() {
    const [current, setCurrent] = useState(0);
    const total = PROJECT_SLIDES.length;

    const prev = () => setCurrent(i => (i - 1 + total) % total);
    const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);

    // Auto slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section id="slideshow" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.label}>05 — Gallery</div>
                <h2 className={`${styles.title} reveal`}>Project Gallery</h2>

                <div className={styles.slider}>
                    {/* Slides */}
                    <div className={styles.track}>
                        {PROJECT_SLIDES.map((slide, i) => (
                            <div
                                key={i}
                                className={`${styles.slide} ${i === current ? styles.active : ''}`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={styles.image}
                                />
                                <div className={styles.caption}>
                                    <span className={styles.captionTitle}>{slide.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <button className={`${styles.btn} ${styles.btnLeft}`} onClick={prev} aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className={`${styles.btn} ${styles.btnRight}`} onClick={next} aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className={styles.dots}>
                        {PROJECT_SLIDES.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Counter */}
                <div className={styles.counter}>
                    {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>
            </div>
        </section>
    );
}
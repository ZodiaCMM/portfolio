// import styles from './Hero.module.css';

// export default function Hero() {
//   return (
//     <section id="hero" className={styles.hero}>
//       <div className={styles.gridBg} />
//       <div className={styles.glow} />
//       <div className={styles.glow2} />

//       <div className={styles.content}>
//         <div className={styles.tag}>Available for opportunities</div>

//         <h1 className={styles.heading}>
//           Abdolmalek<br />
//           <span className={styles.outline}>Paduka</span>
//           <span className={styles.sub}>
//             Software Developer · ITDI · Songkhla Rajabhat University
//           </span>
//         </h1>

//         <p className={styles.desc}>
//           Building applications, websites, and AI-powered systems. Passionate about
//           clean code, great design, and creating technology that makes a difference.
//         </p>

//         <div className={styles.cta}>
//           <a href="#projects" className={styles.btnPrimary}>
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//             View Projects
//           </a>
//           <a href="#contact" className={styles.btnOutline}>
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="2" y="4" width="20" height="16" rx="2" />
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//             </svg>
//             Get in Touch
//           </a>
//         </div>
//       </div>

//       <div className={styles.scrollHint}>
//         <div className={styles.scrollLine} />
//         scroll
//       </div>
//     </section>
//   );
// }

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glow} />
      <div className={styles.glow2} />

      <div className={styles.inner}>
        {/* LEFT — Text */}
        <div className={styles.content}>
          <div className={styles.tag}>Available for opportunities</div>

          <h1 className={styles.heading}>
            Abdolmalek<br />
            <span className={styles.outline}>Paduka</span>
            <span className={styles.sub}>
              Software Developer · ITDI
            </span>
          </h1>

          <p className={styles.desc}>
            Building applications, websites, and AI-powered systems. Passionate about
            clean code, great design, and creating technology that makes a difference.
          </p>

          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className={styles.btnOutline}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className={styles.photoWrap}>
          <img
            src="public/Avatar/Me.JPG"
            alt="Abdolmalek Paduka"
            className={styles.photo}
          />
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        scroll
      </div>
    </section>
  );
}
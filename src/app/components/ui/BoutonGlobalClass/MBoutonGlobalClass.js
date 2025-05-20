
import React from 'react';
import styles from './MBoutonGlobalClass.module.css';

export default function MBoutonGlobalClass({ success, average, fail }) {
  return (
    <div className={styles.container}>

      {/* Taux de réussite */}
      <div className={`${styles.card} ${styles.success}`}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" transform="rotate(-45 12 12)" />
          </svg>
        </div>
        <div className={styles.text}>
          <div className={styles.value}>{success}%</div>
          <div className={styles.label}>Taux de réussite</div>
        </div>
      </div>

      {/* Moyenne de la classe */}
      <div className={`${styles.card} ${styles.average}`}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        <div className={styles.text}>
          <div className={styles.value}>{average}%</div>
          <div className={styles.label}>Moyenne de la classe</div>
        </div>
      </div>

      {/* Élèves en échec */}
      <div className={`${styles.card} ${styles.failure}`}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" transform="rotate(45 12 12)" />
          </svg>
        </div>
        <div className={styles.text}>
          <div className={styles.value}>{fail}%</div>
          <div className={styles.label}>Élèves en échec</div>
        </div>
      </div>

    </div>
  );
}

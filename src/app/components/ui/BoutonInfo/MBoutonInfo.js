import React from 'react';
import styles from './MBoutonInfo.module.css';

export default function MBoutonInfo({ periode, matricule, level }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Période</div>
        <div className={`${styles.box} ${styles.periode}`}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M7 10h5v5H7z" opacity=".3" />
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z" />
          </svg>
          {periode}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.title}>Matricule</div>
        <div className={`${styles.box} ${styles.matricule}`}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#06003b" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 0 0-5 11.9V22l5-3 5 3v-8.1A7 7 0 0 0 12 2zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
          </svg>
          {matricule}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.title}>Level</div>
        <div className={`${styles.box} ${styles.level}`}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#06003b" viewBox="0 0 24 24">
            <path d="M5 9h2v10H5zm6-4h2v14h-2zm6 6h2v8h-2z" />
          </svg>
          {level}
        </div>
      </div>
    </div>
  );
}

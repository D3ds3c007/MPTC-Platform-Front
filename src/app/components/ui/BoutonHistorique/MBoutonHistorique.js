import React from 'react';
import styles from './MBoutonHistorique.module.css';

export default function MBoutonHistorique({ level, average, period, year }) {
  const levelClass = styles[`level-${level}`] || styles['level-default'];

  // Texte blanc uniquement pour A1, sinon texte bleu
  const textColorClass = level === 'A1' ? styles['text-white'] : styles['text-blue'];

  return (
    <div className={`${styles.card} ${levelClass}`}>
      <div className={styles.top}>
        <div className={styles.section}>
          <div className={styles.label}>
            <span className={styles.icon}>☑️</span> Average
          </div>
          <div className={styles.value}>{average}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.label}>
            <span className={styles.icon}>📅</span> Period
          </div>
          <div className={styles.value}>{period}</div>
        </div>
      </div>
      <div className={`${styles.bottom} ${textColorClass}`}>
        <h2>Level {level}</h2>
        <p>Year: {year}</p>
      </div>
    </div>
  );
}

import React from 'react';
import styles from "./MBoutonGlobale.module.css";


export default function MBoutonGlobale({ average, mention, classAverage }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.averagesButton}`}>
        <div className={styles.label}>Average</div>
        <div className={styles.value}>{average}%</div>
      </div>

      <div className={`${styles.card} ${styles.mentionButton}`}>
        <div className={styles.label}>Mention</div>
        <div className={styles.value}>{mention}</div>
      </div>

      <div className={`${styles.card} ${styles.classAverageButton}`}>
        <div className={styles.label}>Class average</div>
        <div className={styles.value}>{classAverage}%</div>
      </div>
    </div>
  );
}
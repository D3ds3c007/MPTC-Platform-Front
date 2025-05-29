import React from 'react';
import styles from './MBoutonPDF.module.css';

export function MBoutonPDF() {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.btn} ${styles.csv}`}>CSV</button>
      <button className={`${styles.btn} ${styles.pdf}`}>PDF</button>
      <button className={`${styles.btn} ${styles.email}`}>Email</button>
    </div>
  );
}

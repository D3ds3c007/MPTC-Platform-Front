import React from 'react';
import styles from './MBoutonCSV.module.css';

export function MBoutonCSV({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      CSV
    </button>
  );
}

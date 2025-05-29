import React from 'react';
import styles from './MBoutonPDF.module.css';

export function MBoutonPDF({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      PDF
    </button>
  );
}

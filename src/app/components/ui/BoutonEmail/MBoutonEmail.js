import React from 'react';
import styles from './MBoutonEmail.module.css';

export function MBoutonEmail({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Email
    </button>
  );
}

import React from 'react';
import styles from './MBoutonEmail.module.css';

export function MBoutonEmail({ onClick, isLoading = false }) {
  return (
    <button className={`${styles.btn} ${styles.email}`} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Please wait ..." : "Email"}
    </button>
  );
}


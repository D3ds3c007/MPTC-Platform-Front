

import React from 'react';
import styles from './MBoutonMoyenne.module.css';

export default function MboutonMoyenne({ moyenne }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Statistics of grade distribution</h2>
      <div className={styles.card}>
        {moyenne}/20
      </div>
    </div>
  );
}


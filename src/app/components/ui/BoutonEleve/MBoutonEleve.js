"use client";

import React from 'react';
import styles from './MBoutonEleve.module.css';

export default function MBoutonEleve({ line1 = "Averages", line2 = "consultation", onClick }) {
  return (
    <button className={styles.averagesButton} onClick={onClick}>
      <span className={styles.textContainer}>
        <span className={styles.text}>{line1}</span>
        <span className={styles.text}>{line2}</span>
      </span>
      <span className={styles.iconContainer}>
        <div className={styles.circleButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M7 7H17V17"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </span>
    </button>
  );
}

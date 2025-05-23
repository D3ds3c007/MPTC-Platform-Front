"use client";

import React from 'react';
import styles from './MBoutonEleve.module.css';

export default function MBoutonEleve({ line1 = "Averages", line2 = "consultation", onClick, bgcolor , fgcolor}) {
  return (
    <button className={styles.averagesButton} onClick={onClick} style={{
      backgroundColor: bgcolor,
    }}>
      <span className={styles.textContainer}>
        <span className={styles.text} style={{color:fgcolor}}>{line1}</span>
        <span className={styles.text}  style={{color:fgcolor}}>{line2}</span>
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

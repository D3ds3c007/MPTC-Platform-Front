"use client";

import React, { useState } from 'react';
import styles from './MFolderCardNa.module.css';

export function MFolderCardNa({ level = "A1", variant = 'primary', title = "Exam Term 1", session = "OCT 2024", subtitle = "Top 10 of resources" }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles["box"]}>
      <div className={`${styles["folder"]} ${styles[variant]}`}>
        <div className={styles["folder-content"]}>
          <div className={styles["level"]}>
            <h6>{level}</h6>
          </div>
          <h5>{title}</h5>
          <p>Session : {session}</p>
          <h6>{subtitle}</h6>
        </div>
        <div className={`${styles["three-dot-button"]} ${styles[variant]}`} onClick={togglePopup}>
          <div className={`${styles["dots"]} ${styles[variant]}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles["corner-icon"]}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#01F073" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
        </svg>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className={styles["popup"]}>
          <button className={styles["popup-item"]}>📥 Télécharger</button>
          <button className={styles["popup-item"]}>❤️ Favoris</button>
          <button className={styles["popup-item"]}>🚫 Signaler</button>
        </div>
      )}
    </div>
   
  );
}

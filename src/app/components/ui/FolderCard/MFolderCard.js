import React from 'react';
import styles from'./MFolderCard.module.css'; // Import the CSS for styling
import Image from 'next/image';
import logo from './logo.png';

export function MFolderCard({level="A1", title="Exam Term 1", session="OCT 2024"}) {
  return (
    <div className={styles["box"]}>
        <div className={styles["folder"]}>
            <div className={styles["folder-content"]}>
                <div className={styles["level"]}>
                    <h6>{level}</h6>
                </div>
                <br></br>
                <h5>{title}</h5>
                <p>Session : {session}</p>
                <div className={styles["three-dot-button"]}>
                    <div className={styles["dots"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["corner-icon"]}>
          {/* <i className={`bx bx-arrow-back ${styles.icon}`}></i> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#01F073" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
          </svg>
        </div>
    </div>
  );
};


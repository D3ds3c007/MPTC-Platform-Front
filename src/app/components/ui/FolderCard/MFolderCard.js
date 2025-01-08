import React from 'react';
import styles from './MFolderCard.module.css'; // Import the CSS for styling

export function MFolderCard({ exam, variant = 'primary' }) {
  // Conditionally set the fill color based on the variant
  const svgColor = variant === 'success' ? '#00119D' : '#01F073'; // Set to blue if success, else keep default color

  return (
    <div className={styles["box"]}>
        <div className={`${styles["folder"]} ${styles[variant]}`}>
            <div className={styles["folder-content"]}>
                <div className={styles["level"]}>
                    <h6>{exam.level}</h6>
                </div>
                <h5>{exam.subject} Exam <br /> {exam.session} </h5>
                <p>{exam.period}</p>
                <div className={`${styles["three-dot-button"]} ${styles[variant]}`}>
                    <div className={`${styles["dots"]} ${styles[variant]}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["corner-icon"]}>
          <a href={`exam/info?parameter_id=${exam.idExam}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="35" 
              height="35" 
              fill={svgColor}  // Dynamically set the color based on the variant
              className="bi bi-arrow-up-right-circle-fill" 
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
            </svg>
          </a>
        </div>
    </div>
  );
}

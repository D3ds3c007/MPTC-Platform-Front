"use client";
import React from 'react';
import styles from'./MButtonVoirPlus.module.css';

export function  MButtonVoirPlus({link}) {
    
    const handleClick = (e) => {
        // e.preventDefault(); // Empêche le comportement par défaut du lien
        console.log("View button clicked!");
      };
  
    return (
      <div className={styles["file-action"]}>
        <a href={link} className={styles["btn-view"]} onClick={handleClick} aria-label="View">
          {/* L'icône de vue sera générée par le CSS ::before */}
        </a>
      </div>
    );
  }
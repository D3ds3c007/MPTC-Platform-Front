'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './MBoutonDeroulantExam.module.css';

export default function MBoutonDeroulantExam() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [actif, setActif] = useState(null);
  const dropdownRef = useRef(null);
  const boutonRef = useRef(null);

  const toggleDropdown = () => {
    setMenuOuvert((prev) => !prev);
  };

  const choisirTerme = (terme) => {
    setActif(terme);
    setMenuOuvert(false); // ferme le menu après sélection
  };

  useEffect(() => {
    const gererClickExterieur = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !boutonRef.current.contains(e.target)
      ) {
        setMenuOuvert(false);
      }
    };

    window.addEventListener('click', gererClickExterieur);
    return () => window.removeEventListener('click', gererClickExterieur);
  }, []);

  return (
    <div className={styles.examContainer}>
      <button
        ref={boutonRef}
        className={`${styles.examButton} ${menuOuvert ? styles.selected : ''}`}
        onClick={toggleDropdown}
      >
        Exam ▾
    </button>


      <div
        ref={dropdownRef}
        className={`${styles.dropdown} ${menuOuvert ? styles.show : ''}`}
      >
        {['Term One', 'Term Two', 'Term Three'].map((terme, index) => {
          const isActive = actif === terme;
          const boutonClasse = `${styles.dropdownButton} ${isActive ? styles.active : ''}`;
          return (
            <button
              key={index}
              onClick={() => choisirTerme(terme)}
              className={boutonClasse}
            >
              {terme}
            </button>
          );
        })}
      </div>
    </div>
  );
}

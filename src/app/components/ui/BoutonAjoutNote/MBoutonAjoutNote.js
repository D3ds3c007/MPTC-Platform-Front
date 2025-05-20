"use client";

import React, { useState } from "react";
import styles from "./MBoutonAjoutNote.module.css";

export default function MBoutonAjoutNote({ competences = [], onChange }) {
  const [errors, setErrors] = useState({});

  const handleInput = (e, competence) => {
    const value = e.target.value.trim();
    const numericValue = parseFloat(value);

    let errorMessage = "";

    if (value === "") {
      e.target.classList.remove(styles.filled);
      setErrors((prev) => ({ ...prev, [competence.nom]: "" }));
      if (onChange) onChange(competence.nom, null);
      return;
    }

    if (numericValue < 0) {
      errorMessage = "La note ne peut pas être négative.";
    } else if (numericValue > competence.max) {
      errorMessage = `La note ne peut pas dépasser ${competence.max}.`;
    }

    if (errorMessage) {
      e.target.classList.remove(styles.filled);
    } else {
      e.target.classList.add(styles.filled);
    }

    setErrors((prev) => ({ ...prev, [competence.nom]: errorMessage }));

    if (onChange) {
      onChange(competence.nom, errorMessage ? null : numericValue);
    }
  };

  return (
    <div className={styles.noteSection}>
      {competences.map((competence, index) => (
        <div className={styles.noteItem} key={index}>
          <div className={styles.competenceLabel}>{competence.nom}</div>
          <div className={styles.noteBox}>
            <div className={styles.noteWrapper}>
              <input
                type="number"
                min="0"
                max={competence.max}
                step="0.01"
                className={styles.noteInput}
                onInput={(e) => handleInput(e, competence)}
              />
              <span className={styles.noteUnit}>/{competence.max}</span>
            </div>
            {errors[competence.nom] && (
              <div className={styles.errorMessage}>{errors[competence.nom]}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

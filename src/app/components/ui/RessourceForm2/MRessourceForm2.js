"use client";

import React, { useState } from 'react';
import styles from './MRessourceForm2.module.css';

export function MRessourceForm2() {
  const [resourceTitle, setResourceTitle] = useState('');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [level, setLevel] = useState('');
  const [competence, setCompetence] = useState({
    Listening: false,
    Reading: false,
    Writing: false,
    Grammar: false,
    Vocabulary: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      resourceTitle,
      category,
      keyword,
      level,
      competence,
    });
    // Ajouter ici la logique pour envoyer les données ou réinitialiser les champs
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleCompetenceChange = (event) => {
    const { name, checked } = event.target;
    setCompetence((prevCompetence) => ({
      ...prevCompetence,
      [name]: checked,
    }));
  };

  return (
   
      

      <form onSubmit={handleSubmit}>
        
        <div className={styles.formGroup}>
          <label htmlFor="keyword">Keyword for this file</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            placeholder="Enter a keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Learning level</label>
          <div className={styles.learningLevel}>
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((lvl) => (
              <React.Fragment key={lvl}>
                <input
                  type="radio"
                  id={lvl}
                  name="level"
                  value={lvl}
                  checked={level === lvl}
                  onChange={handleLevelChange}
                  required
                />
                <label htmlFor={lvl}>{lvl}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Linguistic competence</label>
          <div className={styles.competenceOptions}>
            {Object.keys(competence).map((comp) => (
              <label key={comp}>
                <input
                  type="checkbox"
                  name={comp}
                  checked={competence[comp]}
                  onChange={handleCompetenceChange}
                />
                <span></span>{comp}
              </label>
            ))}
          </div>
        </div>

        
      </form>
   
  );
}

"use client";

import React, { useState } from 'react';
import styles from './MZonetexte.module.css';

export function MZonetexte() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="title" className={styles.label}>Titre :</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Entrez le titre ici" 
          value={title} 
          onChange={handleTitleChange} 
          className={styles.input}
        />

        <label htmlFor="description" className={styles.label}>Description :</label>
        <textarea 
          id="description" 
          name="description" 
          placeholder="Entrez la description ici" 
          value={description} 
          onChange={handleDescriptionChange} 
          className={styles.textarea}
        />
      </form>
    </div>
  );
}

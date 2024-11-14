"use client";
import React from 'react';
import { MButtonVoirPlus } from "@/app/components/ui/ButtonVoirPlus/MButtonVoirPlus";
import { MExamForm1 } from "@/app/components/ui/ExamForm1/MExamForm1";
import { MBouttonUpload } from "@/app/components/ui/ButtonUpload/MBouttonUpload";
import styles from './Page.module.css';

export default function AddForm() {
  return (
    <div className={`container mt-4`}>
      {/* Titre principal */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Add Form</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className={styles.allResources}>Resource adding form</h2>
      </div>

      {/* Fond blanc pour le contenu principal */}
      <div className={`bg-white p-4 rounded`}>
        
      <div className={styles.buttonSection}>
            <div className={styles.uploadSection}>
                <MExamForm1 /> {/* Le composant de formulaire pour uploader les fichiers */}
            </div>

            <div className={styles.buttonGroup}>
                <MBouttonUpload variant="primary">Reset</MBouttonUpload>
                <MBouttonUpload variant="secondary">Upload File</MBouttonUpload>
            </div>
      </div>
        

      <div className={styles.formGroup}>
        <label htmlFor="title">Title of the resource</label>
        <input type="text" id="title" name="title" required className={styles.textInput} />
    </div>

    <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required className={styles.textarea}></textarea>
    </div>
        <MButtonVoirPlus />
    </div>
</div>
        

        
   
  );
}

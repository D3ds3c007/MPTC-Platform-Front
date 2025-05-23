"use client";
import React from "react";
import { MButtonVoirPlus } from "@/app/components/ui/ButtonVoirPlus/MButtonVoirPlus";
import { MExamForm1 } from "@/app/components/ui/ExamForm1/MExamForm1";
import { MBouttonUpload } from "@/app/components/ui/ButtonUpload/MBouttonUpload";
import styles from "./Page.module.css";

export default function AddForm() {
  return (
    <div className={`container mt-4`}>
      {/* Titre principal */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Add Form</h1>
      </div>
      
      <div className={`bg-white p-4 rounded`}>
        
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className={styles.allResources}>Resource adding form</h2>
        </div>

        {/* Fond blanc pour le contenu principal */}
        <div className={styles.formContainer}>
          {/* Section gauche: Formulaire d'upload */}
          <section className={styles.resourcesSection} aria-label="Upload Section">
          <label htmlFor="description" className={styles.label}>Field to upload a file</label>
            <div>
              <MExamForm1 />
            </div>

            <div className={styles.buttonGroup}>
              <MBouttonUpload variant="primary" aria-label="Reset Button">
                Reset
              </MBouttonUpload>
              <MBouttonUpload variant="secondary" aria-label="Upload File Button">
                Upload File
              </MBouttonUpload>
            </div>
          </section>

          {/* Section droite: Formulaire pour titre et description */}
          <section className={styles.coterDroit} aria-label="Form Section for Title and Description">
            <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}> Title of the resource</label>
              
              <input
                type="text"
                id="title"
                name="title"
                required
                className={styles.textInput}  
                aria-label="Resource Title"
              />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>Description</label>
              <textarea
                id="description"
                name="description"
                required
                className={styles.textInput}  
                aria-label="Resource Description"
              ></textarea>
            </div>
          </section>

          {/* Section du bouton Voir Plus aligné en bas */}
          <section className={styles.buttonGroupe} aria-label="See More Button Section">
            <div className={styles.voirPlu}>
                <MButtonVoirPlus aria-label="See More Button" link="/dashboard/professor/resource/addForm2" />
            </div>
          </section>  
        </div>
      </div>
    </div>
  );
}

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
          <section className={styles.resourcesSection}>
            <div >
              <MExamForm1 />
            </div>

            <div className={styles.buttonGroup}>
              <MBouttonUpload variant="primary">Reset</MBouttonUpload>
              <MBouttonUpload variant="secondary">Upload File</MBouttonUpload>
            </div>
          </section>

          {/* Section droite: Formulaire pour titre et description */}
          <section className={styles.coterDroit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title of the resource</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className={styles.textInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                required
                className={styles.textarea}
              ></textarea>
            </div>

            <div className={styles.voirPlu}>
              <MButtonVoirPlus />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

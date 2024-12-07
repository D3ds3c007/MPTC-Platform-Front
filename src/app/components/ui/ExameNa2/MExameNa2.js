"use client";
import React from "react";
import { MRessourceForm2 } from "@/app/components/ui/RessourceForm2/MRessourceForm2";
import { MDropdownsFilter } from "@/app/components/ui/DropdownsFilter/MDropdownsFilter";
import styles from "./Page.module.css";

export default function AddResourcePage() {
  const categories = ["Category 1", "Category 2", "Category 3"]; // Exemple de données pour MDropdownsFilter
  const resourceTitles = ["Resource 1", "Resource 2", "Resource 3"]; // Exemple de données pour MDropdownsFilter

  return (
    <div className={`container mt-4`}>
    {/* Titre principal */}
    <div className="d-flex justify-content-between align-items-center">
      <h1 className={styles.grandTitre}>Exam Folders</h1>
    </div>

    {/* Fond blanc pour le contenu principal */}
    <div className={`bg-white p-4 rounded `}>

    
       
          <h2 className={styles.title}>Resource Adding Form</h2>
          
          <form className={styles.form}>
            {/* Titre de ressource */}
            <div className={styles.formGroup}>
              <label htmlFor="resource-title">Title of the resource</label>
              <MDropdownsFilter selector="Select a resource" data={resourceTitles} />
           
              <label htmlFor="category">Category</label>
              <MDropdownsFilter selector="Select a category" data={categories} />
            </div>

            {/* MRessourceForm2 gère le niveau et les compétences linguistiques */}
            <div className={styles.ressourceForm2}>
              <MRessourceForm2 />
            </div>

            <button type="submit" className={styles.publishButton}>
              Publish
            </button>
          </form>
        
     
    </div>
    </div>
  );
}

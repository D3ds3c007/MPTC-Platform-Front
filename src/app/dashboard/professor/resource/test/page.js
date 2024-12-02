"use client";

import React, { useState } from "react";
import {  MFolderCardNa  } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import {  MFiltreNaProfilAutre  } from "@/app/components/ui/FiltreNaProfilAutre/MFiltreNaProfilAutre";

import styles from "./Page.module.css";

const mockData = [
  {
    id: 1,
    fileType: "PDF",
    title: "Document PDF 1",
    session: "OCT 2024",
    subtitle: "Important Exam",
    views: 150,
    date: "2024-10-01",
  },
  {
    id: 2,
    fileType: "Video",
    title: "Video Tutorial 1",
    session: "SEP 2024",
    subtitle: "Learning React",
    views: 300,
    date: "2024-09-20",
  },
  {
    id: 3,
    fileType: "Link",
    title: "External Link 1",
    session: "OCT 2024",
    subtitle: "Useful Resource",
    views: 500,
    date: "2024-10-05",
  },
  {
    id: 4,
    fileType: "PDF",
    title: "Document PDF 2",
    session: "OCT 2024",
    subtitle: "Top 10 Resources",
    views: 100,
    date: "2024-10-15",
  },
];

export default function PageTest() {
  const [filteredResults, setFilteredResults] = useState(mockData); // État pour les résultats filtrés

  // Fonction pour gérer le filtrage des résultats depuis MFiltreNaProfilAutre
  const handleFilter = (filteredData) => {
    setFilteredResults(filteredData);
  };

  return (
    <div className={styles["page-test"]}>
      {/* Le composant de filtre qui met à jour les résultats filtrés */}
      <MFiltreNaProfilAutre data={mockData} onFilter={handleFilter} />

      {/* Affichage des cartes filtrées */}
      <div className={styles["results-container"]}>
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <MFolderCardNa
              key={item.id}
              fileType={item.fileType}
              title={item.title}
              session={item.session}
              subtitle={item.subtitle}
              views={item.views}
              date={item.date}
            />
          ))
        ) : (
          <div className={styles["no-results"]}>Aucun résultat trouvé</div>
        )}
      </div>
    </div>
  );
}

"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import { MFiltreNaProfilAutre } from "@/app/components/ui/FiltreNaProfilAutre/MFiltreNaProfilAutre";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MButtonAjoutResource } from "@/app/components/ui/ButtonAjoutResource/MButtonAjoutResource";
import { MButtonAjout } from "@/app/components/ui/ButtonAjout/MButtonAjout";
import { MListe } from "@/app/components/ui/Liste/MListe";

import photo from './photo.png';
import styles from "./Page.module.css";

// Données fictives pour tester
const mockData = [
  {
    id: 1,
    fileType: "PDF",
    title: "Document PDF 1",
    session: "OCT 2024",
    subtitle: "Important Exam",
    views: 150,
    date: "2015-10-01",
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
  {
    id: 5,
    fileType: "Image",
    title: "Infographic 1",
    session: "AUG 2024",
    subtitle: "Data Insights",
    views: 250,
    date: "2024-08-12",
  }
];


const recentFiles = [
    { fileName: "Exam A1", session: "OCT 2024", size: "5.265 KB", fileType: "pdf" },
    { fileName: "Exam B2", session: "JUL 2023", size: "3.512 KB", fileType: "word" },
    { fileName: "Exam C1", session: "SEP 2022", size: "4.789 KB", fileType: "image" },
    { fileName: "Exam D1", session: "DEC 2021", size: "6.100 KB", fileType: "video" },
    { fileName: "Link to Resource", session: "N/A", size: "N/A", fileType: "lien" },
  ];




// Données fictives de profil
const userProfile = {
  name: "Nantenaina RAKOTONIRINA",
  profilePicture: photo, // Remplacez avec le chemin réel de l'image
};

export default function PageTest() {
  const [filteredResults, setFilteredResults] = useState(mockData); // État pour les résultats filtrés

  // Fonction pour gérer le filtrage des résultats depuis MFiltreNaProfilAutre
  const handleFilter = (filteredData) => {
    setFilteredResults(filteredData);
  };

  return (
    <div className={`container mt-4`}>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Exam Folders</h1>
      </div>

      <div className={`bg-white p-4 rounded `}>
      {/* Section Profil */}
      <div className={styles["profile-section"]}>
        <div className={styles["profile-picture"]}>
          <Image
            src={userProfile.profilePicture} // Utiliser userProfile ici
            alt={`${userProfile.name}'s profile`} // Utiliser userProfile ici
            width={300}
            height={300}
          />
        </div>
        <div className={styles["user-name"]}>
          <h2>{userProfile.name}</h2> {/* Utiliser userProfile ici */}
        </div>
      </div>

      <div className={styles.AjoutResource}>
        <MButtonAjoutResource />
      </div>

        <section className={styles.searchSection}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <MFiltreNaProfilAutre data={mockData} onFilter={handleFilter} />
            <MSearchBar placeholder="Search" />
          </div>
        </section>
        
      {/* Affichage des résultats filtrés */}
        <section className={styles.resourcesSection}>
        <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div className="col-md-4" key={item.id}>
                <MFolderCardNa
                  fileType={item.fileType}
                  title={item.title}
                  session={item.session}
                  subtitle={item.subtitle}
                  views={item.views}
                  date={item.date}
                />
              </div>
            ))
          ) : (
            <div className={styles["no-results"]}>Aucun résultat trouvé</div>
          )}

        <section className={styles.boutonAjout}>
              <MButtonAjout />
        </section>
        </div>
      </section>
     </div>
     <section className={styles.fileListSection}>
        <h3 className={styles.topResources}>Favorites</h3>
        <div className={`row mt-1`}>
          {recentFiles.map((file, index) => (
            <div key={index} className={`col-md-12 mb-1`}>
              <MListe fileName={file.fileName} session={file.session} size={file.size} fileType={file.fileType} />
            </div>
          ))}
        </div>
      </section>

      <div className={`bg-white p-4 rounded `}>
       
        {/* Section des ressources filtrées */}
        <section className={styles.resourcesSection}>
        <h3 className={styles.topResources}>Downloaded file</h3>
        <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div className="col-md-4" key={item.id}>
                <MFolderCardNa
                  fileType={item.fileType}
                  title={item.title}
                  session={item.session}
                  subtitle={item.subtitle}
                  views={item.views}
                  date={item.date}
                />
              </div>
            ))
          ) : (
            <div className={styles["no-results"]}>Aucun résultat trouvé</div>
          )}

        </div>
      </section>
      </div>

    </div>

    
  );
}

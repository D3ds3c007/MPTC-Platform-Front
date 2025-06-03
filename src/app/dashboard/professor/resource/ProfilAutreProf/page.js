"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import { MFiltreRecherche } from "@/app/components/ui/FiltreRecherche/MFiltreRecherche";
import MProfilEleve from "@/app/components/ui/ProfilEleve/MProfilEleve";

import profile from "./profile.jpg"; // à partir de /public
import couverture from "./couverture.png";
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
  },
  {
    id: 6,
    fileType: "Word",
    title: "Word Document 1",
    session: "JUL 2024",
    subtitle: "Project Proposal",
    views: 75,
    date: "2024-07-20",
  },
  {
    id: 7,
    fileType: "PDF",
    title: "Document PDF 3",
    session: "NOV 2024",
    subtitle: "Technical Guide",
    views: 325,
    date: "2024-11-01",
  },
  {
    id: 8,
    fileType: "Video",
    title: "Video Tutorial 2",
    session: "MAR 2024",
    subtitle: "CSS Advanced",
    views: 400,
    date: "2024-03-15",
  },
  {
    id: 9,
    fileType: "Link",
    title: "External Link 2",
    session: "DEC 2024",
    subtitle: "Upcoming Events",
    views: 600,
    date: "2024-12-10",
  },
  {
    id: 10,
    fileType: "Image",
    title: "Infographic 2",
    session: "JAN 2025",
    subtitle: "Yearly Overview",
    views: 150,
    date: "2025-01-05",
  },
  {
    id: 11,
    fileType: "Word",
    title: "Word Document 2",
    session: "FEB 2025",
    subtitle: "Meeting Notes",
    views: 50,
    date: "2025-02-14",
  },
  {
    id: 12,
    fileType: "PDF",
    title: "Document PDF 4",
    session: "APR 2024",
    subtitle: "Market Analysis",
    views: 450,
    date: "2024-04-18",
  },
  {
    id: 13,
    fileType: "Video",
    title: "Video Tutorial 3",
    session: "MAY 2024",
    subtitle: "JavaScript Basics",
    views: 275,
    date: "2024-05-22",
  },
  {
    id: 14,
    fileType: "Image",
    title: "Infographic 3",
    session: "JUN 2024",
    subtitle: "Team Achievements",
    views: 125,
    date: "2024-06-10",
  },
  {
    id: 15,
    fileType: "Link",
    title: "External Link 3",
    session: "SEP 2024",
    subtitle: "Developer Tools",
    views: 700,
    date: "2024-09-25",
  },
];


// Données fictives de profil
  const userProfile = {
    name: "Lova Rakotozafy",
    coverImage: couverture,         // attention : string, pas importé
    profilePicture: profile,
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
      <section>
                      <MProfilEleve userProfile={userProfile} />
      </section>
      {/* Le composant de filtre */}
      
        <section className={styles.searchSection}>
          
          <MFiltreRecherche data={mockData} onFilter={handleFilter} />
            {/* <MFiltreNaProfilAutre data={mockData} onFilter={handleFilter} />
            <MSearchBar placeholder="Search" /> */}
        
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
        </div>
      </section>
    </div>
    </div>
  );
}

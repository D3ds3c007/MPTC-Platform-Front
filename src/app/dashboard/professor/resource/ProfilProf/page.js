"use client";

import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import { MButtonAjoutResource } from "@/app/components/ui/ButtonAjoutResource/MButtonAjoutResource";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MfiltreNa } from "@/app/components/ui/filtreNa/MfiltreNa";
import { MButtonAjout } from "@/app/components/ui/ButtonAjout/MButtonAjout";
import { MListe } from "@/app/components/ui/Liste/MListe";

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ExamFoldersPage() {
  // Données des ressources
  const resources = [
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Grammar", publishedDate: "2024-11-27"},
    { fileType: "Link", title: "Lesson A1", session: "OCT 2024", subtitle: "Speaking activities", level: "A1", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-11-20"},
  ];

  const recentFiles = [
    { fileName: "Exam A1", session: "OCT 2024", size: "5.265 KB", fileType: "pdf" },
    { fileName: "Exam B2", session: "JUL 2023", size: "3.512 KB", fileType: "word" },
    { fileName: "Exam C1", session: "SEP 2022", size: "4.789 KB", fileType: "image" },
    { fileName: "Exam D1", session: "DEC 2021", size: "6.100 KB", fileType: "video" },
    { fileName: "Link to Resource", session: "N/A", size: "N/A", fileType: "lien" },
  ];

  // États pour les filtres
  const [filteredResources, setFilteredResources] = useState(resources);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Filtrage dynamique
  useEffect(() => {
    const filtered = resources.filter((resource) => {
      // const matchesLevel = !selectedLevel || resource.level === selectedLevel;
      const matchesType = !selectedType || resource.fileType === selectedType;
      // const matchesCategory = !selectedCategory || resource.category === selectedCategory;
      // const matchesYear = !selectedYear || resource.year === selectedYear;
      // return matchesLevel && matchesType && matchesCategory && matchesYear;
    });
    setFilteredResources(filtered);
  }, [selectedLevel, selectedType, selectedCategory, selectedYear]);

  return (
    <div className={`container mt-4`}>
      {/* Titre principal */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Exam Folders</h1>
      </div>

      {/* Fond blanc pour le contenu principal */}
      <div className={`bg-white p-4 rounded `}>
        {/* Section de la barre de recherche */}
        <section className={styles.searchSection}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className={styles.allResources}>All resources</h2>
            <MButtonAjoutResource />
            <MSearchBar placeholder="Search" />
          </div>
        </section>

        {/* Section des filtres */}
        <section className={styles.filtersSection}>
          <MfiltreNa
              files={resources}
              onFilter={setFilteredResources} // Mettre à jour les ressources filtrées
              selectedLevel={selectedLevel}
              selectedType={selectedType}
              selectedCategory={selectedCategory}
              selectedYear={selectedYear}
              setSelectedLevel={setSelectedLevel}  // Passer les setters pour les filtres
              setSelectedType={setSelectedType}
              setSelectedCategory={setSelectedCategory}
              setSelectedYear={setSelectedYear}
          />
        </section>

        {/* Section des ressources filtrées */}
        <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>My recently added resources</h3>
          <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <div key={index} className={`col-md-4 mb-4`}>
                  <MFolderCardNa
                    fileType={resource.fileType}
                    title={resource.title}
                    session={resource.session}
                    subtitle={resource.subtitle}
                  />
                </div>
              ))
            ) : (
              <p>No resources match the selected filters.</p>
            )}
            <section className={styles.boutonAjout}>
              <MButtonAjout />
            </section>
          </div>
        </section>
      </div>

      {/* Section des fichiers récents */}
      <section className={styles.fileListSection}>
        <h3 className={styles.topResources}>List of my resources</h3>
        <div className={`row mt-1`}>
          {recentFiles.map((file, index) => (
            <div key={index} className={`col-md-12 mb-1`}>
              <MListe fileName={file.fileName} session={file.session} size={file.size} fileType={file.fileType} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

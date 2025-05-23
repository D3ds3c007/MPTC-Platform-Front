"use client";

import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import { MButtonAjoutResource } from "@/app/components/ui/ButtonAjoutResource/MButtonAjoutResource";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MfiltreNa } from "@/app/components/ui/FiltreNa/MfiltreNa";
import { MButtonAjout } from "@/app/components/ui/ButtonAjout/MButtonAjout";
import { MListe } from "@/app/components/ui/Liste/MListe";
import { MLoading } from "@/app/components/ui/Loading/MLoading";

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ExamFoldersPage() {
  const [loading, setLoading] = useState(false);

  const handleTriggerLoading = () => {
    setLoading(true);
    const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1–3 seconds

    setTimeout(() => {
      setLoading(false);
      console.log("Done loading after", randomDelay, "ms");
    }, randomDelay);
  };

  // Données des ressources
  const resources = [
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Grammar", publishedDate: "2024-11-27"},
    { fileType: "Link", title: "Lesson A1", session: "OCT 2024", subtitle: "Speaking activities", level: "A1", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-11-20"},
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Grammar", publishedDate: "2024-11-27"},
    { fileType: "Link", title: "Lesson A1", session: "OCT 2024", subtitle: "Speaking activities", level: "A1", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-11-20"},
  ];


  const allResources = [
    { fileType: "PDF", title: "Lesson B1", session: "NOV 2024", subtitle: "Intermediate grammar rules", level: "B1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-12-01" },
    { fileType: "Image", title: "Test B2", session: "NOV 2024", subtitle: "Advanced vocabulary test", level: "B2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-11-15" },
    { fileType: "Video", title: "Lesson B2", session: "NOV 2024", subtitle: "Advanced listening comprehension", level: "B2", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-12-05" },
    { fileType: "Word", title: "Exercise B1", session: "NOV 2024", subtitle: "Writing skills practice", level: "B1", year: "2024", type: "Exercise", category: "Writing", publishedDate: "2024-12-10" },
    { fileType: "Link", title: "Lesson B2", session: "NOV 2024", subtitle: "Role-play exercises", level: "B2", year:"2024", type: "Lesson", category: "Speaking", publishedDate: "2024-12-02" },
    { fileType: "PDF", title: "Lesson C1", session: "DEC 2024", subtitle: "Advanced sentence structures", level: "C1", year: "2024", type: "Lesson", categor: "Grammar", publishedDate: "2024-12-15" },
    { fileType: "Image", title: "Test C1", session: "DEC 2024", subtitle: "Comprehensive grammar test", level: "C1", year: "2024", type: "Exam", category: "Grammar", publishedDate: "2024-12-01" },
    { fileType: "Video", title: "Lesson C2", session: "DEC 2024", subtitle: "Fluent speech techniques", level: "C2", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-12-18" },
    { fileType: "Word", title: "Exercise C1", session: "DEC 2024", subtitle: "Complex sentence formation", level: "C1", year: "2024", type: "Exercise", categor: "Writing", publishedDate: "2024-12-20" },
    { fileType: "Link", title: "Lesson C2", session: "DEC 2024", subtitle: "Advanced conversation topics", level: "C2", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-12-22" },
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
      const matchesLevel = !selectedLevel || resource.level === selectedLevel;
      const matchesType = !selectedType || resource.fileType === selectedType;
      const matchesCategory = !selectedCategory || resource.category === selectedCategory;
      const matchesYear = !selectedYear || resource.year === selectedYear;
      return matchesLevel && matchesType && matchesCategory && matchesYear;
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
            <a href="resource/addForm" style={{ textDecoration: 'none' }}>
              <MButtonAjoutResource /> 
            </a>
            <MSearchBar placeholder="Search" />
          </div>
        </section>

        {/* Section des filtres */}
        <section className={styles.filtersSection}>
          <MfiltreNa
              files={resources}
              onFilter={setFilteredResources} // Mettre à jour les ressources filtrées
              onAction={handleTriggerLoading}
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
          {/* <h3 className={styles.topResources}>Top 10 of resource</h3> */}
          <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
          {loading ? (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px", // adjust as needed
              width: "100%"
            }}>
              <MLoading />
            </div>
          ) : filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <div key={index} className="col-md-4 mb-4">
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
        <h3 className={styles.topResources}>Add recently</h3>
        <div className={`row mt-1`}>
          {recentFiles.map((file, index) => (
            <div key={index} className={`col-md-12 mb-1`}>
              <MListe fileName={file.fileName} session={file.session} size={file.size} fileType={file.fileType} />
            </div>
          ))}
        </div>
      </section>


      {/* <div className={`bg-white p-4 rounded `}>   
      <div> 
      <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>Top 10 of resource</h3>
          <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
            {allResources.length > 0 ? (
              allResources.map((allResource, index) => (
                <div key={index} className={`col-md-4 mb-4`}>
                  <MFolderCardNa
                    fileType={allResource.fileType}
                    title={allResource.title}
                    session={allResource.session}
                    subtitle={allResource.subtitle}
                  />
                </div>
              ))
            ) : (
              <p>No resources match the selected filters.</p>
            )}
          </div>
        </section>
      </div>
      </div> */}

    </div>
  );
}

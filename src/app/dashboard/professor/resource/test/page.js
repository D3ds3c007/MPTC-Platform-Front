"use client";

import React, { useState, useEffect } from "react";
import { MfiltreNa } from "@/app/components/ui/filtreNa/MfiltreNa";

export default function Page() {
  // Liste des fichiers avec "resourceType"
  const files = [
    { id: 1, type: "Image", level: "A1", year: "2023", name: "Image 1", resourceType: "Examen" },
    { id: 2, type: "PDF", level: "A2", year: "2023", name: "PDF 1", resourceType: "Leçon" },
    { id: 3, type: "Video", level: "B1", year: "2022", name: "Video 1", resourceType: "Exercice" },
    { id: 4, type: "Image", level: "A1", year: "2022", name: "Image 2", resourceType: "Examen" },
    { id: 5, type: "Listening", level: "B2", year: "2021", name: "Audio 1", resourceType: "Leçon" },
  ];

  // États pour les filtres
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedResourceType, setSelectedResourceType] = useState(""); // Déclaration de selectedResourceType

  // Callback pour récupérer les résultats filtrés
  const handleFilterResults = (results) => {
    if (JSON.stringify(results) !== JSON.stringify(filteredFiles)) {
      setFilteredFiles(results);
    }
  };

  useEffect(() => {
    const filtered = files.filter((file) => {
      const matchesType = activeFilter === "All" || file.type === activeFilter;
      const matchesLevel = !selectedLevel || file.level === selectedLevel;
      const matchesYear = !selectedYear || file.year === selectedYear;
      const matchesResourceType = !selectedResourceType || file.resourceType === selectedResourceType;
      return matchesType && matchesLevel && matchesYear && matchesResourceType;
    });
    handleFilterResults(filtered);
  }, [activeFilter, selectedLevel, selectedYear, selectedResourceType]); // Ajout de selectedResourceType aux dépendances

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filtre les fichiers</h1>

      {/* Composant MfiltreNa */}
      <MfiltreNa
        files={files}
        onFilter={handleFilterResults}
        activeFilter={activeFilter}
        selectedLevel={selectedLevel}
        selectedYear={selectedYear}
        selectedResourceType={selectedResourceType} // Passage de selectedResourceType
        setActiveFilter={setActiveFilter}
        setSelectedLevel={setSelectedLevel}
        setSelectedYear={setSelectedYear}
        setSelectedResourceType={setSelectedResourceType} // Ajout de setSelectedResourceType
      />

      {/* Afficher les résultats filtrés */}
      <div style={{ marginTop: "20px" }}>
        <h2>Résultats filtrés :</h2>
        {filteredFiles.length > 0 ? (
          <ul>
            {filteredFiles.map((file) => (
              <li key={file.id}>
                {file.name} - {file.type} - {file.level} - {file.year} - {file.resourceType}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun fichier correspondant aux filtres.</p>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import filtre from "./filtre.png";
import styles from "./MfiltreNa.module.css";

export function MfiltreNa({ files, onFilter }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [selectedResourceType, setSelectedResourceType] = useState(""); // Nouvel état pour le type de ressource

  const filters = ["All", "Word", "Video", "PDF", "Image", "Link", "Grammar", "Writing", "Vocabulary"];

  // Options de types de ressources à sélectionner
  const resourceTypes = ["Exam", "Lesson", "Exercise"];

  // Fonction pour basculer l'affichage du popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Gérer les changements de niveau, année et type de ressource
  const handleLevelChange = (e) => setSelectedLevel(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleResourceTypeChange = (e) => {
    const value = e.target.value;
    setSelectedResourceType(value);
  };

  // Gérer la sélection des filtres principaux
  const handleFilterClick = (filter) => {
    // console.log(filter + "barajiiiii");
    if (filter === "All") {
      setActiveFilter("All");
      setSelectedLevel("");
      setSelectedYear("");
      setSelectedType("");
      setSelectedResourceType(""); // Réinitialise le type de ressource
    } else {
      setActiveFilter(filter);
      setSelectedType(filter);
      
    }
  };

  // Filtrer les fichiers
  const getFilteredFiles = () => {
    return files.filter((file) => {
      const matchesType = activeFilter === "All" || file.type === activeFilter;

      if(selectedType === "Recent")
      {
          //filter file by publisehdDate, show only the files that are published in the last 7 days
          const publishedDate = new Date(file.publishedDate);
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - publishedDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 7;
          
      }
    
      const matchesLevel = !selectedLevel || file.level === selectedLevel;
      const matchesYear = !selectedYear || file.year === selectedYear;
      const matchesResourceType = !selectedResourceType || file.type === selectedResourceType; // Filtrage par type de ressource
      const matchesFileType = !selectedType || file.fileType === selectedType || file.category === selectedType;

      // console.log(file.title + " " + matchesFileType);
      return matchesLevel && matchesYear && matchesResourceType && matchesFileType;
    });
  };

  // Use `useEffect` to trigger the `onFilter` callback when dependencies change
  useEffect(() => {
    // console.log("Selected Type : " + selectedType);
    if (onFilter) {
      const filteredFiles = getFilteredFiles();
      // console.log(filteredFiles);
      onFilter(filteredFiles);
    }
  }, [files, activeFilter, selectedLevel, selectedYear, selectedType, selectedResourceType, onFilter]); // Dependencies

  // Fonction pour gérer le clic à l'intérieur de la popup (empêcher la fermeture du popup)
  const handlePopupClick = (e) => e.stopPropagation();

  return (
    <div className={styles["filter-container"]}>
      {/* Icône avec le popup */}
      <div className={styles["icon"]} onClick={togglePopup}>
        <Image src={filtre} alt="filtre" className={styles["icone"]} />

        {/* Popup pour les sélections */}
        {showPopup && (
          <div
            className={styles["popup"]}
            onClick={handlePopupClick} // Empêche la fermeture du popup lors du clic dans la popup
          >
            <select
              className={styles["popup-item"]}
              value={selectedLevel}
              onChange={handleLevelChange}
            >
              <option className={styles["select-option"]} value="">All Levels</option>
              <option className={styles["select-option"]} value="A1">A1</option>
              <option className={styles["select-option"]} value="A2">A2</option>
              <option className={styles["select-option"]} value="B1">B1</option>
              <option className={styles["select-option"]} value="B2">B2</option>
              <option className={styles["select-option"]} value="C1">C1</option>
              <option className={styles["select-option"]} value="C2">C2</option>
            </select>

            <select
              className={styles["popup-item"]}
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option className={styles["select-option"]} value="">All Years</option>
              <option className={styles["select-option"]} value="2024">2024</option>
              <option className={styles["select-option"]} value="2023">2023</option>
              <option className={styles["select-option"]} value="2022">2022</option>
              <option className={styles["select-option"]} value="2021">2021</option>
              <option className={styles["select-option"]} value="2020">2020</option>
              <option className={styles["select-option"]} value="2019">2019</option>
            </select>

            {/* Ajout du select pour le type de ressource */}
            <select
              className={styles["popup-item"]}
              value={selectedResourceType}
              onChange={handleResourceTypeChange}
            >
              <option className={styles["select-option"]} value="">All Resources</option>
              {resourceTypes.map((resourceType) => (
                <option key={resourceType} className={styles["select-option"]} value={resourceType}>
                  {resourceType}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {filters.map((filter) => {
  const isAll = filter === "All";

  const handleClick = () => {
    handleFilterClick(filter);
    // Ne fait rien de plus si c'est "All"
  };

  return isAll ? (
    // Si "All", pas de lien et reste sur la même page
    <button
      key={filter}
      className={`${styles["filter-btn"]} ${activeFilter === filter ? styles["active"] : ""} ${filter === "All" ? styles["all-btn"] : ""}`}
      onClick={handleClick}
    >
      {filter}
    </button>
  ) : (
    // Pour tous les autres filtres, on redirige vers la page ResultatFiltre
    <a
      key={filter}
      href={`#`} // Redirection vers la page avec le filtre comme paramètre
      style={{ textDecoration: "none" }}
    >
      <button
        className={`${styles["filter-btn"]} ${activeFilter === filter ? styles["active"] : ""}`}
        onClick={handleClick}
      >
        {filter}
      </button>
    </a>
  );
})}


      {/* Boutons des filtres */}
      {/* {filters.map((filter) => {
        const isAll = filter === "All";

        const handleClick = () => {
          handleFilterClick(filter);
          window.location.href = "http://localhost:3000/dashboard/professor/resource/ResultatFiltre?filtre="+filter;
          // Ne fait rien de plus si c'est "All"
        };

  return isAll ? (
    // Si "All", pas de lien et reste sur la même page
    <button
      key={filter}
      className={`${styles["filter-btn"]} ${activeFilter === filter ? styles["active"] : ""} ${filter === "All" ? styles["all-btn"] : ""}`}
      onClick={handleClick}
    >
      {filter}
    </button>
  ) : (
    // Pour tous les autres filtres, on redirige vers la page ResultatFiltre
    // <a
    //   key={filter}
    //   href={`/resource/ResultatFiltre?filter=${filter}`} // Redirection vers la page avec le filtre comme paramètre
    //   style={{ textDecoration: "none" }}
    // >
      <button
        className={`${styles["filter-btn"]} ${activeFilter === filter ? styles["active"] : ""}`}
        onClick={handleClick}
      >
        {filter}
      </button>
    // </a>
  );
})} */}

    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import styles from "./MFiltreNaProfilAutre.module.css";

export function MFiltreNaProfilAutre({ data, onFilter }) {
  // Liste des filtres principaux
  const mainFilters = ["All", "Video", "PDF", "Image", "Word", "Link"];

  // Liste des filtres secondaires
  const subFilters = ["Lasted", "Popular", "Older"];

  const [activeMainFilter, setActiveMainFilter] = useState(mainFilters[0]);
  const [activeSubFilter, setActiveSubFilter] = useState(subFilters[0]);

  // Fonction pour gérer le clic sur un filtre principal
  const handleMainFilterClick = (filter) => {
    setActiveMainFilter(filter);
    setActiveSubFilter(subFilters[0]); // Réinitialise le filtre secondaire au premier lorsque le filtre principal change
  };

  // Fonction pour gérer le clic sur un filtre secondaire
  const handleSubFilterClick = (filter) => {
    setActiveSubFilter(filter);
  };

  // Fonction pour trier les résultats par date ou popularité
  const sortResults = (filteredData) => {
    switch (activeSubFilter) {
      case "Lasted":
        return filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)); // Trier par date, les plus récents d'abord
      case "Popular":
        return filteredData.sort((a, b) => b.views - a.views); // Trier par popularité (nombre de vues)
      case "Older":
        return filteredData.sort((a, b) => new Date(a.date) - new Date(b.date)); // Trier par date, les plus anciens d'abord
      default:
        return filteredData;
    }
  };

  // Filtrer les résultats
  const getFilteredResults = () => {
    let filteredData = data.filter((item) => {
      const matchesMainFilter =
        activeMainFilter === "All" || item.fileType === activeMainFilter;

      return matchesMainFilter;
    });

    // Trier les résultats en fonction du filtre secondaire
    return sortResults(filteredData);
  };

  // Utilisation de useEffect pour appeler onFilter seulement lorsque les filtres changent
  useEffect(() => {
    const filteredResults = getFilteredResults();
    onFilter(filteredResults); // Appel de la fonction pour mettre à jour les résultats filtrés dans le parent
  }, [activeMainFilter, activeSubFilter, data, onFilter]); // Les filtres et les données changent, donc on met à jour les résultats

  return (
    <div className={styles["filter-container"]}>
      {/* Filtres principaux */}
      <div className={styles["main-filters"]}>
        {mainFilters.map((filter) => (
          <button
            key={filter}
            className={`${styles["filter-btn"]} ${activeMainFilter === filter ? styles["active-main-filter"] : ""}`}
            onClick={() => handleMainFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Filtres secondaires */}
      {activeMainFilter !== "All" && (
        <div className={styles["sub-filters"]}>
          {subFilters.map((filter) => (
            <button
              key={filter}
              className={`${styles["sub-filter"]} ${activeSubFilter === filter ? styles["active-sub-filter"] : ""}`}
              onClick={() => handleSubFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

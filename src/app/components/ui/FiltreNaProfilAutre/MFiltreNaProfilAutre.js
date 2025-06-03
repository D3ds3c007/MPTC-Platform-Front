"use client";

import React, { useState, useEffect } from "react";
import styles from "./MFiltreNaProfilAutre.module.css";

export function MFiltreNaProfilAutre({ data, onFilter }) {
  // Liste des filtres principaux
  const mainFilters = ["All", "Video", "PDF", "Image", "Word", "Link"];

  // Liste des filtres secondaires
  const subFilters = ["Lasted", "Older"];

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

  // Fonction pour filtrer les résultats
  const getFilteredResults = () => {
    // Si "All" est sélectionné, afficher tous les fichiers
    if (activeMainFilter === "All") {
      return data;
    }

    // Appliquer les filtres principaux
    let filteredData = data.filter((item) => {
      const matchesMainFilter = item.fileType === activeMainFilter;
      return matchesMainFilter;
    });

    // Appliquer les filtres secondaires
    switch (activeSubFilter) {
      case "Lasted":
        // Filtrer pour ne garder que les fichiers les plus récents
        const maxDate = Math.max(...filteredData.map((item) => new Date(item.date)));
        return filteredData.filter((item) => new Date(item.date).getTime() === maxDate);

      case "Older":
        // Filtrer pour ne garder que les fichiers les plus anciens
        const minDate = Math.min(...filteredData.map((item) => new Date(item.date)));
        return filteredData.filter((item) => new Date(item.date).getTime() === minDate);

      case "Popular":
        // Filtrer pour ne garder que les fichiers les plus populaires
        const maxViews = Math.max(...filteredData.map((item) => item.views));
        return filteredData.filter((item) => item.views === maxViews);

      default:
        return filteredData;
    }
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
            className={`${styles["filter-btn"]} ${
              activeMainFilter === filter ? styles["active-main-filter"] : ""
            }`}
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
              className={`${styles["sub-filter"]} ${
                activeSubFilter === filter ? styles["active-sub-filter"] : ""
              }`}
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

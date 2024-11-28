"use client";
import React, { useState } from "react";
import Image from "next/image";
import filtre from "./filtre.png";
import styles from "./MfiltreNa.module.css";

export function MfiltreNa() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false); // Contrôle l'affichage du popup
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [selectedYear, setSelectedYear] = useState("2023");

  const filters = [
    "All",
    "Video",
    "PDF",
    "Image",
    "Link",
    "Listening",
    "Grammar",
  ];

  // Fonction de gestion des clics sur les filtres
  const handleFilterClick = (filter) => {
    if (filter === "All") {
      // Réinitialisation complète
      setActiveFilter("All");
      setSelectedLevel("A1");
      setSelectedYear("2023");
    } else if (filter === "Video" || filter === "Image") {
      // Si Vidéo ou Image est sélectionné, on peut choisir un autre filtre de type "Niveau" ou "Année"
      if (activeFilter === "Video" || activeFilter === "Image") {
        return; // Si le même type de filtre est déjà sélectionné, ne rien faire
      }
      setActiveFilter(filter); // Sélectionner Vidéo ou Image
    } else {
      // Sélectionner les autres filtres (Niveau, Année) si Vidéo/Image n'est pas déjà sélectionné
      if (activeFilter !== "All" && activeFilter !== "Video" && activeFilter !== "Image") {
        setActiveFilter(filter);
      } else {
        setActiveFilter(filter); // Permet de sélectionner Niveau ou Année si Vidéo/Image n'est pas sélectionné
      }
    }
  };

  // Fonction pour basculer l'affichage du popup
  const togglePopup = () => {
    setShowPopup(!showPopup); // Basculer l'état d'affichage du popup
  };

  return (
    <div className={styles["filter-container"]}>
      {/* Bouton avec une icône d'image */}
      <div
        className={styles["icon"]}
        onClick={togglePopup} // Affiche/Masque la popup
      >
        <Image src={filtre} alt="filtre" className={styles["image"]} />

        {/* Popup qui apparaît sous l'icône */}
        {showPopup && (
          <div className={styles["popup"]}>
            <select
              className={styles["popup-item"]}
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)} // Mise à jour du niveau
            >
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>

            <select
              className={styles["popup-item"]}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)} // Mise à jour de l'année
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        )}
      </div>

      {/* Boutons des filtres */}
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles["filter-btn"]} ${
            activeFilter === filter ? styles["active"] : ""
          } ${filter === "All" ? styles["all-btn"] : ""}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

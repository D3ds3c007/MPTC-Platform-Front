
"use client";
import Image from "next/image";
import telechargements from "./telechargements.png";
import favori from "./favori.png";
import arretez from "./arretez.png";
import deposer from './deposer.png';
import fichier from './fichier.png';
import fond from './fond.png';
import video from './video.png';
import www from './www.png';
import React, { useState } from "react";
import styles from "./MFolderCardNa.module.css";

export function MFolderCardNa({
  fileType = "pdf", // Type du fichier, par exemple : 'pdf', 'image', 'video'
  title = "Exam Term 1",
  session = "OCT 2024",
  subtitle = "Top 10 of resources",
}) {
  const [showPopup, setShowPopup] = useState(false);

  // Définir les icônes et les variantes par type de fichier
  const fileConfig = {
    PDF: { icon: fichier, variant: "rouge" },
    Image: { icon: fond, variant: "dark" },
    Video: { icon: video, variant: "primary" },
    Word: { icon: deposer, variant: "purple" },
    Link: { icon: www, variant: "secondary" },
    default: { icon: fichier, variant: "rouge" },
  };

  // Récupérer la configuration pour le type de fichier
  const { icon, variant } = fileConfig[fileType] || fileConfig.default;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles["box"]}>
      <div className={`${styles["folder"]} ${styles[variant]}`}>
        <div className={styles["folder-content"]}>
          {/* Icône dynamique */}
          <div className={styles["level-icon"]}>
            <Image
              src={icon} // L'icône dynamique
              alt={`${fileType} icon`}
              width={40}
              height={40}
            />
          </div>
          <h5>{title}</h5>
          <p>Session: {session}</p>
          <h6>{subtitle}</h6>
        </div>
        <div className={styles["Bouton"]}>
          <div
            className={`${styles["three-dot-button"]} ${styles[variant]}`}
            onClick={togglePopup}
          >
            <div className={`${styles["dots"]} ${styles[variant]}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["corner-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#01F073"
          className="bi bi-arrow-up-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
        </svg>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className={styles["popup"]}>
          <button className={styles["popup-item"]}>
            <Image
              src={telechargements}
              alt="telechargements"
              width={25}
              height={25}
              className={styles["icon"]}
            />{" "}
            Télécharger
          </button>
          <button className={styles["popup-item"]}>
            <Image
              src={favori}
              alt="favori"
              width={25}
              height={25}
              className={styles["icon"]}
            />
            Favoris
          </button>
          <button className={styles["popup-item"]}>
            <Image
              src={arretez}
              alt="arretez"
              width={25}
              height={25}
              className={styles["icon"]}
            />
            Signaler
          </button>
        </div>
      )}
    </div>
  );
}

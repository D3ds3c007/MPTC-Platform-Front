import styles from './MViewFolder.module.css';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import filtre from "./filtre.png";

export function MViewFolder({ files, onFilter }) {
  const [showPopup, setShowPopup] = useState(false);

  // Toggle popup and reset filters when closing
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleViewChange = (view) => {
    onFilter(view);  // Pass the selected view to the parent
    setShowPopup(false);  // Close the popup after selection
  };

  return (
    <div className={styles["filter-container"]}>
      <div className={styles["icon"]} onClick={togglePopup}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00119D" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
      </svg>

        {showPopup && (
          <div className={styles["popup"]}>
            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("folder")}>
              View Folder
            </div>

            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("bigfolder")}>
              View Big Folder
            </div>

            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("list")}>
              View List
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

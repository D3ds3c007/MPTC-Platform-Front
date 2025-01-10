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
        <Image src={filtre} alt="filtre" className={styles["icone"]} />

        {showPopup && (
          <div className={styles["popup"]}>
            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("folder")}>
              View Folder
            </div>

            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("list")}>
              View List
            </div>

            <div
              className={styles["popup-item"]} onClick={() => handleViewChange("table")}>
              View Table
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

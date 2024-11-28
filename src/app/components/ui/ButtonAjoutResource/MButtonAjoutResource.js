import React from "react";
import Image from "next/image"; // Import de l'élément Image pour Next.js
import plus from './plus.png'; 
import styles from "./MButtonAjoutResource.module.css"; // CSS en module pour éviter les conflits


export function MButtonAjoutResource (){
  return (
    <button className={styles["custom-button"]}>
      <div className={styles["icon-container"]}>
        <Image 
          src={plus} 
          alt="plus" 
          className={styles["icon"]} 
        />
      </div>
      <span className={styles["text"]}>New ressource</span>
    </button>
  );
};


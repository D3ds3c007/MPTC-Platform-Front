// MProfil.jsx
import React from "react";
import Image from "next/image";
import styles from "./MProfil.module.css";
import { MButtonAjoutResource } from "../ButtonAjoutResource/MButtonAjoutResource";

export default function MProfil({ userProfile }) {
  return (
    <div className={styles["profile-wrapper"]}>
      {/* Image de couverture */}
      <Image
        src={userProfile.coverImage}
        alt="cover"
        className={styles["cover-image"]}
        width={1000}
        height={250}
        priority
      />

      {/* Photo de profil + nom + bouton */}
      <div className={styles["profile-content"]}>
        <div className={styles["profile-picture"]}>
          <Image
            src={userProfile.profilePicture}
            alt={`${userProfile.name}'s profile`}
            width={150}
            height={150}
          />
        </div>

        <div className={styles["user-info"]}>
          <h2 className={styles["user-name"]}>{userProfile.name}</h2>
          <MButtonAjoutResource />
        </div>
      </div>
    </div>
  );
}





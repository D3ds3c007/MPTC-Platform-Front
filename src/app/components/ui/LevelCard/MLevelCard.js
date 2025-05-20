"use client";
import React, { useState } from "react";
import styles from "./MLevelCard.module.css";

export function MLevelCard({
  level = "Level A1",
  session = "Session : OCT 2024",
  variant = "blue", // Par défaut
}) {
  const [hovered, setHovered] = useState(false);

  // Couleurs du bouton selon la variante
  const circleColorClass = {
    green: styles.circleBlue,
    blue: styles.circleGreen,
    lightblue: styles.circleBlue,
    yellow: styles.circleBlue,
    purple: styles.circleBlue,
    pink: styles.circleBlue,
  };

  // Couleur de la flèche dans le SVG
  const arrowFillColor = {
    green: "#01F073",
    blue: "#00119D",
    lightblue: "#CFD4FA",
    yellow: "#FFC536",
    purple: "#C688FF",
    pink: "#FF498C",
  };

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div
        className={`${styles.circleButton} ${circleColorClass[variant]} ${hovered ? styles.hovered : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => alert("Clicked!")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
                >
            <path
              d="M7 17L17 7M7 7H17V17"
              stroke={arrowFillColor[variant] || "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>

      </div>
      <div className={styles.level}>{level}</div>
      <div className={styles.session}>{session}</div>
    </div>
  );
}

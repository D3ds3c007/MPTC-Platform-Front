"use client";
import React from "react";
import { MLevelCard } from "@/app/components/ui/LevelCard/MLevelCard";
import { MListeNote } from "@/app/components/ui/ListeNote/MListeNote";

import styles from "./page.module.css";



export default function PageLevelCards() {
    const cards = [
      { level: "Level A2", session: "Session : OCT 2024", variant: "green" },
      { level: "Level A1", session: "Session : OCT 2024", variant: "blue" },
      { level: "Level B1", session: "Session : OCT 2024", variant: "lightblue" },
     
    ];

    const langues = [
      { langue: 'Anglais', niveau: 'Intermédiaire', description: 'Vous pouvez tenir une conversation simple.' },
      { langue: 'Français', niveau: 'Avancé', description: 'Vous maîtrisez les structures complexes.' },
      { langue: 'Espagnol', niveau: 'Débutant', description: 'Vous connaissez les bases élémentaires.' },
      { langue: 'Allemand', niveau: 'Élémentaire', description: 'Vous comprenez des expressions familières.' },
      { langue: 'Japonais', niveau: 'Maîtrise', description: 'Vous parlez couramment avec fluidité.' }
  ];


  return (
    <div className={`container mt-4`}>
    {/* Titre principal */}
    <div className="d-flex justify-content-between align-items-center">
      <h1 className={styles.grandTitre}>Note management</h1>
    </div>
  
    <div className={`bg-white p-4 rounded `}>


    <section style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <h3 className={styles.topResources}>My three lists for this period</h3>

        <div className={`row mt-2`} >

            {cards.map((card, index) => (
                <MLevelCard
                  key={index}
                  level={card.level}
                  session={card.session}
                  variant={card.variant}
                />
              ))}
        </div>
    </section>

    </div>

              {/* Section des fichiers récents */}
      <section className={styles.fileListSection}>
        <h3 className={styles.topResources}>Add recently</h3>
        <div className={`row mt-1`}>
          {langues.map((item, index) => (
            <div key={index}>
              <MListeNote
                  key={index}
                  langue={item.langue}
                  niveau={item.niveau}
                  description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
    
  );
}




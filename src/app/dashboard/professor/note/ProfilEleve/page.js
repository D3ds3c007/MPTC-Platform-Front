"use client";

import React from "react";
import MProfil from "@/app/components/ui/ProfilEleve/MProfilEleve";
import  MBoutonInfo  from "@/app/components/ui/BoutonInfo/MBoutonInfo";
import MBoutonHistorique  from "@/app/components/ui/BoutonHistorique/MBoutonHistorique";
import   MBoutonDeroulantExam   from "@/app/components/ui/BoutonDeroulantExam/MBoutonDeroulantExam";
import  MBadge  from "@/app/components/ui/Badge/MBadge";
import  MTableauDetailleNote   from "@/app/components/ui/TableauDetailleNote/MTableauDetailleNote";
import MBoutonGlobale from "@/app/components/ui/BoutonGlobale/MBoutonGlobale";
import MBoutonSave from '@/app/components/ui/BoutonSave/MBoutonSave';
import styles from "./Page.module.css";
import profile from "./profile.jpg"; // à partir de /public
import cover from "./cover.JPG";

export default function PageProfil() {
  const userProfile = {
    name: "Jane Doe",
    coverImage: cover,         // attention : string, pas importé
    profilePicture: profile,
  };

  const studentInfo = {
    periode: "Jan- Mar 2024",
    matricule: "20230099",
    level: "A1",
  };

  const historyLevels = [
    { level: "A1", average: "14.2", period: "Jan - Mar", year: "2024" },
    { level: "A2", average: "13.6", period: "Apr - Jun", year: "2024" },
    { level: "B1", average: "15.1", period: "Jul - Sep", year: "2024" },
  ];


  const notes = [
    { competence: 'grammar', note: 17 },
    { competence: 'reading', note: 14 },
    { competence: 'vocabulary', note: 16 },
    { competence: 'oral', note: 13 }
  ];

  // Simule la moyenne de la classe
  const classAverage = 13.5;

  // Calcule la moyenne de l’élève
  const average =
    notes.reduce((acc, curr) => acc + curr.note, 0) / notes.length;

  // Détermine la mention
  const getMention = (avg) => {
    if (avg >= 16) return 'Excellent';
    if (avg >= 14) return 'Very Good';
    if (avg >= 12) return 'Good';
    if (avg >= 10) return 'Satisfactory';
    return 'Needs Improvement';
  };

  const mention = getMention(average);



  return (
<div className={`container mt-4`}>
        
    <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Student profile</h1>
      </div>

      <div className={`bg-white p-4 rounded margin-bottom=30`}style={{ marginBottom: "30px"}}>
      <section>
                <MProfil userProfile={userProfile} />
      </section>

      <section>
      <div className={styles["section-info"]}>
        <MBoutonInfo
          periode={studentInfo.periode}
          matricule={studentInfo.matricule}
          level={studentInfo.level}
        />
      </div>
      </section>

      <section >
      <h3 className={styles.topResources}>History of past levels</h3>
      <div className={styles["history-wrapper"]}>
        {historyLevels.map((item, index) => (
          <MBoutonHistorique
            key={index}
            level={item.level}
            average={item.average}
            period={item.period}
            year={item.year}
          />
        ))}
      </div>
      </section>
    </div>




    <div className={`bg-white p-4 rounded `} style={{ paddingTop: "40px"}}>

            <section>
            <h3 className={styles.topResourcesExamen}>Exam results</h3>
            <div style={{ marginLeft: '100px' }}>
                <MBoutonDeroulantExam />
            </div>

            </section>

            <section>
            <h3 className={styles.topResourcesbleu}>Merit badges</h3>
                <div className={styles.badgeSection}>
                    {notes
                    .filter((note) => note.note >= 16)
                    .map((note) => (
                        <MBadge key={note.competence} type={note.competence} />
                    ))}
                </div>
            </section>

            <section>
            <h3 className={styles.topResourcesbleu}>Details Note</h3>
               <div style={{ marginBottom: '50px' }}>
                  <MTableauDetailleNote notes={notes} />
                </div>
            </section>
            
            <section>
            <h3 className={styles.topResourcesbleu}>Overall result</h3>
                <MBoutonGlobale
                    average={average.toFixed(1)}
                    mention={mention}
                    classAverage={classAverage}
                />
            </section>  


            <div className={styles.commentSection}>
            <h3 className={styles.topResourcesbleu}>Teacher's overall assessment</h3>
            
                  <textarea
                  id="teacherComment"
                  className={styles.textarea}
                  placeholder="Write a personalized comment here..."
                />

            </div>

            <div style={{ marginLeft:'75px', marginBottom: '40px' }}>
                    <MBoutonSave />
            </div>
            

    </div>
</div>
  );
};

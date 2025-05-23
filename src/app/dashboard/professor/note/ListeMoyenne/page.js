"use client";

import React from 'react';
import MBoutonEleve from '@/app/components/ui/BoutonEleve/MBoutonEleve';
import { MTableauListeMoyenne } from '@/app/components/ui/TableauListeMoyenne/MTableauListeMoyenne'; // adapte le chemin si besoin
import styles from './Page.module.css';

const mockStudents = [
  { name: "Alice", exams: [12, 15, 14] },
  { name: "Bob", exams: [9, 8, 10] },
  { name: "Charlie", exams: [16, 17, 18] },
  { name: "Alice", exams: [12, 15, 14] },
  { name: "Bob", exams: [9, 8, 10] },
  { name: "Charlie", exams: [16, 17, 18] },
  { name: "Alice", exams: [12, 15, 14] },
  { name: "Bob", exams: [9, 8, 10] },
  { name: "Charlie", exams: [16, 17, 18] },
];

export default function PageEleves() {
  return (
    <div>
      <h1 className={styles.grandTitre}>Note management</h1>
      
      <div style={{
        marginRight: '25px',
        marginLeft: '20px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        gap: '90px'
      }}>
        
        <MBoutonEleve
                      line1=""
                      line2="Student list"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ListeEleve")}
                    />
                    <MBoutonEleve
                      line1="Averages "
                      line2="consultation"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ListeMoyenne")}
                      bgcolor="#00119D"
                      fgcolor="white"
                    />
                    <MBoutonEleve
                      line1="Overall "
                      line2="class results"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ResultatGlobale")}
                    />
      </div>

      <div style={{ padding: '20px' }}>
        <MTableauListeMoyenne students={mockStudents} />
      </div>
    </div>
  );
}

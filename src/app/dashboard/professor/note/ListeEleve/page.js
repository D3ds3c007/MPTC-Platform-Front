"use client";

import React from 'react';
import MBoutonEleve from '@/app/components/ui/BoutonEleve/MBoutonEleve';
import { MTableauListeEleve } from '@/app/components/ui/TableauListeEleve/MTableauListeEleve';

import styles from './Page.module.css';

export default function PageEleves() {
  const students = [
    { name: 'Jean Dupont', matricule: 'A123', status: 'Non validé', icon: '❌' },
    { name: 'Marie Curie', matricule: 'B456', status: 'Validé', icon: '✅' },
    { name: 'Albert Camus', matricule: 'C789', status: 'Non validé', icon: '❌' },
    { name: 'Jean Dupont', matricule: 'A123', status: 'Non validé', icon: '❌' },
    { name: 'Marie Curie', matricule: 'B456', status: 'Validé', icon: '✅' },
    { name: 'Albert Camus', matricule: 'C789', status: 'Non validé', icon: '❌' },
    { name: 'Jean Dupont', matricule: 'A123', status: 'Non validé', icon: '❌' },
    { name: 'Marie Curie', matricule: 'B456', status: 'Validé', icon: '✅' },
    { name: 'Albert Camus', matricule: 'C789', status: 'Non validé', icon: '❌' },
  ];

  return (
    <div>
      <h1 className={styles.grandTitre}>Note management</h1>
      <h3 className={styles.topResources}>List of A1 students English</h3>

      <div style={{ marginRight: '25px', marginLeft: '20px', padding: '10px', display: 'flex', flexDirection: 'row', gap: '90px' }}>
        <MBoutonEleve line1="" line2="Student list" onClick={() => alert("Student list")} />
        <MBoutonEleve line1="Averages " line2="consultation" onClick={() => alert("Averages consultation")} />
        <MBoutonEleve line1="Overall " line2="class results" onClick={() => alert("Overall class results")} />
      </div>

      <div style={{ marginTop: '40px', marginLeft: '20px', marginRight: '25px' }}>
        <MTableauListeEleve students={students} />
      </div>
    </div>
  );
}

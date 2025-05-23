"use client";

import React from 'react';
import MBoutonEleve from '@/app/components/ui/BoutonEleve/MBoutonEleve';
import { MTableauListeEleve } from '@/app/components/ui/TableauListeEleve/MTableauListeEleve';

import styles from './Page.module.css';

export default function PageEleves() {
  const students = [
    { name: 'Jean Dupont', matricule: 'A123' },
    { name: 'Marie Curie', matricule: 'B456'},
    { name: 'Albert Camus', matricule: 'C789' },
    { name: 'Jean Dupont', matricule: 'A123' },
    { name: 'Marie Curie', matricule: 'B456'},
    { name: 'Albert Camus', matricule: 'C789' },
    { name: 'Jean Dupont', matricule: 'A123' },
    { name: 'Marie Curie', matricule: 'B456'},
    { name: 'Albert Camus', matricule: 'C789' },
  ];

  return (
    <div>
      <h1 className={styles.grandTitre}>Note management</h1>
      <h3 className={styles.topResources}>List of A1 students English</h3>

      <div style={{ marginRight: '25px', marginLeft: '20px', padding: '10px', display: 'flex', flexDirection: 'row', gap: '90px' }}>
        <MBoutonEleve
                      line1=""
                      line2="Student list"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ListeEleve")}
                      bgcolor="#00119D"
                      fgcolor="white"
                    />
                    <MBoutonEleve
                      line1="Averages "
                      line2="consultation"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ListeMoyenne")}
                    />
                    <MBoutonEleve
                      line1="Overall "
                      line2="class results"
                      onClick={() =>  (window.location.href = "/dashboard/professor/note/ResultatGlobale")}
                    />
      </div>

      <div style={{ marginTop: '40px', marginLeft: '20px', marginRight: '25px' }}>
        <MTableauListeEleve students={students} />
      </div>
    </div>
  );
}

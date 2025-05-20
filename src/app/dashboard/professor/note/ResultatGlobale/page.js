'use client';

import React from 'react';
import MBoutonDeroulantExam from "@/app/components/ui/BoutonDeroulantExam/MBoutonDeroulantExam";
import MBoutonGlobalClass from "@/app/components/ui/BoutonGlobalClass/MBoutonGlobalClass";
import MChart from "@/app/components/ui/Chart/MChart";
import MBoutonMoyenne from "@/app/components/ui/BoutonMoyenne/MBoutonMoyenne";
import MBoutonEleve from '@/app/components/ui/BoutonEleve/MBoutonEleve';



import styles from './Page.module.css';

export default function ResultatClassePage() {
  // Simulons des données de test :
  const successRate = 85;
  const average = 14.2;
  const failRate = 15;
  const moyenneGlobale = 14.2;
  const labels = ['Speaking', 'Writing', 'Listening', 'Reading'];
  const scores = [15, 13.5, 16, 12.8];

  return (

    
    <div>

    
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
              onClick={() => alert("Student list")}
            />
            <MBoutonEleve
              line1="Averages "
              line2="consultation"
              onClick={() => alert("Averages consultation")}
            />
            <MBoutonEleve
              line1="Overall "
              line2="class results"
              onClick={() => alert("Overall class results")}
            />
          </div>

        <div className={`bg-white p-4 rounded `} style={{ marginTop: "40px"}}>
            <div className={styles.page}>
            {/* En-tête avec le bouton déroulant */}
            <div style={{ marginLeft: '70px' }}>
                            <MBoutonDeroulantExam />
            </div>

            {/* Section de résultats globaux */}
            <div className={styles.globalResults}>
                <MBoutonGlobalClass success={successRate} average={average} fail={failRate} />
            </div>

            {/* Section graphique et moyenne */}
            <div className={styles.statsSection}>
                <MChart labels={labels} scores={scores} />
                <MBoutonMoyenne moyenne={moyenneGlobale} />
            </div>
            </div>
        </div>
    </div>
  );
}

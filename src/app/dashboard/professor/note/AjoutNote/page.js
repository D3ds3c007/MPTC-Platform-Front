import React from 'react';
import styles from './page.module.css';

import MBoutonInfo from '@/app/components/ui/BoutonInfo/MBoutonInfo';
import MBoutonDeroulantExam from '@/app/components/ui/BoutonDeroulantExam/MBoutonDeroulantExam';
import MBoutonAjoutNote from '@/app/components/ui/BoutonAjoutNote/MBoutonAjoutNote';
import MBoutonSave from '@/app/components/ui/BoutonSave/MBoutonSave';


// import Link from 'next/link'; // ou 'react-router-dom' selon ton projet

export default function PageAjoutNote() {
  const competences = [
    { nom: 'Reading', max: 20 },
    { nom: 'Grammar', max: 20 },
    { nom: 'Vocabulary', max: 20 },
    { nom: 'Listening', max: 20 },
    { nom: 'Oral', max: 20 },
  ];

  return (
    <div className={styles.pageContainer}>
       <h1 className={styles.grandTitre}>Add note</h1>

      <div className={styles.headerSection}>
        <div className={styles.nameAndLink}>
        <h3 className={styles.topResources}>RAKOTONIRINA Nantenaina</h3>
          {/* <Link href="/results" className={styles.viewLink}>view results</Link> */}
        </div>

        <MBoutonInfo 
          periode="Janvier - Mars"
          matricule="ETU 001713"
          level="A1"
        />
      </div>

      <div className={styles.formSection}>
        <h3 className={styles.formTitle}>Add note form</h3>
        
        <div style={{ marginLeft: '75px' }}>
            <MBoutonDeroulantExam />
        </div>

        <div style={{ marginTop: '50px', marginBottom: '40px' }}>
           <MBoutonAjoutNote competences={competences} />
        </div>
        <div style={{ marginLeft:'75px', marginBottom: '40px' }}>
        <MBoutonSave />
        </div>
      </div>
    </div>
  );
}

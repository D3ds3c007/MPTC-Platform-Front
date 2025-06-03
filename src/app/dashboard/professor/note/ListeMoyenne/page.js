"use client";

import {React, useState, useEffect} from 'react';
import MBoutonEleve from '@/app/components/ui/BoutonEleve/MBoutonEleve';
import { MTableauListeMoyenne } from '@/app/components/ui/TableauListeMoyenne/MTableauListeMoyenne';
import { MBoutonCSV } from '@/app/components/ui/BoutonCSV/MBoutonCSV';
import { MBoutonPDF } from '@/app/components/ui/BoutonPDF/MBoutonPDF';
import { MBoutonEmail } from '@/app/components/ui/BoutonEmail/MBoutonEmail';
import MPopupMessage from '@/app/components/ui/PopupMessage/MPopupMessage';
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

const handleCSV = () => console.log('CSV Exporté');
  const handlePDF = () => console.log('PDF Exporté');
 
  


export default function PageEleves() {
  const [isVisible, setIsVisible] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


//   useEffect(() => {
//         setPopupType("success")
//         setMessage("Login successful. Redirecting ...");
//         showPopup("success");


// })
const handleEmail = async () => {
  setIsLoading(true); // start loading

  const subject = encodeURIComponent("Exported Notes");
  const message = encodeURIComponent("Please check your email");


  try {
    const response = await fetch(`http://localhost:5193/api/v1/Mailing/send-mail`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de l'envoi");
    }

    setMessage("Batch mail sent!");
    showPopup('success');
  } catch (error) {
    console.error(error);
    setMessage("Échec de l'envoi de l'email.");
    showPopup('error');
  } finally {
    setIsLoading(false); // end loading
  }
};

  const showPopup = (type) => {
    setPopupType(type);
    setIsVisible(true);

  };
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


      <div className={styles.pageContainer}>
      <div className={styles.buttonGroup}>
        <MBoutonCSV onClick={handleCSV} />
        <MBoutonPDF onClick={handlePDF} />
        <MBoutonEmail onClick={handleEmail} isLoading={isLoading} />
      </div>
    </div>




      <div style={{ padding: '20px' }}>
        <MTableauListeMoyenne students={mockStudents} />
      </div>
      {isVisible && (
        <MPopupMessage
          type={popupType}
          title={popupType === "success" ? "Well done!" : "Oh snap!"}
          message={message}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
    </div>
  );
}

"use client"; // Ajout pour indiquer que c'est un composant client

import { useState } from 'react';
import Image from 'next/image';
import dossier from './dossier.png'; // Assurez-vous que ce chemin est correct
import styles from './MExamForm1.module.css'; // Lien avec le fichier CSS

export function MExamForm1() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleReset = () => {
    setSelectedFiles([]);
    document.getElementById('file-upload').value = null;
  };

  const handleFileUpload = () => {
    if (selectedFiles.length > 0) {
      console.log('Files uploaded:', selectedFiles);
    } else {
      alert('No files selected');
    }
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['upload-wrapper']}>
        <div
          className={styles['file-upload']}
          id="drop-area"
          onClick={() => document.getElementById('file-upload').click()}
        >
          <Image src={dossier} alt="Upload Icon" className={styles['upload-icon']} />
          <p>Drag file(s) here to upload</p>
          <small>
            Alternatively, you can select a file by <strong>clicking here</strong>
          </small>
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {/* Ajout d'une section pour les boutons sur le côté */}
        <div className={styles['button-group']}>
          <button className={styles['reset-button']} onClick={handleReset}>Reset</button>
          <button className={styles['upload-button']} onClick={handleFileUpload}>Upload File</button>
        </div>

        <div className={styles['form-fields']}>
          <label htmlFor="resource-title">Title of the resource</label>
          <input type="text" id="resource-title" placeholder="Enter title" className={styles['input-field']} />

          <label htmlFor="resource-description">Description</label>
          <textarea id="resource-description" placeholder="Enter description" className={styles['textarea-field']}></textarea>
        </div>
      </div>
    </div>
  );
}

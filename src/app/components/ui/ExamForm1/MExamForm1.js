"use client"; // Ajout pour indiquer que c'est un composant client

// pages/index.js

import React, { useState } from 'react';
import Image from 'next/image';
import dossier from './dossier.png';
import styles from'./MExamForm1.module.css';

export function MExamForm1() {
 
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e, isDragging) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(isDragging);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = e.dataTransfer.files;
    console.log('Files dropped:', files);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    console.log('Files selected:', files);
  };

  const resetFileInput = () => {
    document.getElementById('file-upload').value = '';
    console.log('File input reset');
  };

  const handleUpload = () => {
    const fileInput = document.getElementById('file-upload');
    if (fileInput.files.length > 0) {
      console.log('Uploading files:', fileInput.files);
    } else {
      console.log('No files selected');
    }
  };

  return (
   
     

        <div className={styles.formSection}>
          {/* File upload section */}
          <div className={styles.fileUploadSection}>
            <div
              className={`${styles.fileUpload} ${dragging ? styles.dragover : ''}`}
              onDragEnter={(e) => handleDrag(e, true)}
              onDragOver={(e) => handleDrag(e, true)}
              onDragLeave={(e) => handleDrag(e, false)}
              onDrop={handleDrop}
              id="drop-area"
            >
              <div className={styles["icon"]} >
                <Image src={dossier} alt={dossier} width={60} height={60} />
            </div>
              <p>Drag file(s) here to upload</p>
              <p>
                <small onClick={() => document.getElementById('file-upload').click()}>
                  Alternatively, you can select a file by <strong>clicking here</strong>
                </small>
              </p>
              <input
                type="file"
                id="file-upload"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>
     
  
  );
};


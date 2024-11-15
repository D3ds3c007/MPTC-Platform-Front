"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import dossier from './dossier.png';
import styles from './MExamForm1.module.css';

export function MExamForm1() {
  const [dragging, setDragging] = useState(false);

  // Utiliser useRef pour référencer le fichier input
  const fileInputRef = useRef(null);

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

  // Utiliser le ref pour réinitialiser l'input
  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Réinitialiser l'input
      console.log('File input reset');
    } else {
      console.log('File input not found');
    }
  };

  const handleUpload = () => {
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      console.log('Uploading files:', fileInputRef.current.files);
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
          <div className={styles["icon"]}>
            <Image src={dossier} alt="Dossier" width={60} height={60} />
          </div>
          <p>Drag file(s) here to upload</p>
          <p>
            <small onClick={() => fileInputRef.current.click()}>
              Alternatively, you can select a file by <strong>clicking here</strong>
            </small>
          </p>
          <input
            type="file"
            ref={fileInputRef}
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

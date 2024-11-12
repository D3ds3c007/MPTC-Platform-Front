import { useState } from 'react';
import styles from '../styles/MUpload.module.css'; // Assure-toi de créer ce fichier

export function MUpload({ placeholder = "Drag file(s) here to upload", buttonText = "Upload File" }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleReset = () => {
    setSelectedFiles([]);
    document.getElementById('file-upload').value = null; // Réinitialiser l'input file
  };

  const handleFileUpload = () => {
    if (selectedFiles.length > 0) {
      console.log('Files uploaded:', selectedFiles);
    } else {
      alert('No files selected');
    }
  };

  return (
    <>
      <div className={styles['upload-wrapper']}>
        <div className={styles['file-upload']} id="drop-area" onClick={() => document.getElementById('file-upload').click()}>
          <img src="/images/upload-icon.png" alt="Upload Icon" className={styles['upload-icon']} />
          <p>{placeholder}</p>
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

        <div className={styles['button-group']}>
          <button className={styles['reset-button']} onClick={handleReset}>Reset</button>
          <button className={styles['upload-button']} onClick={handleFileUpload}>{buttonText}</button>
        </div>

        <div className={styles['form-fields']}>
          <label htmlFor="resource-title">Title of the resource</label>
          <input type="text" id="resource-title" placeholder="Enter title" className={styles['input-field']} />

          <label htmlFor="resource-description">Description</label>
          <textarea id="resource-description" placeholder="Enter description" className={styles['textarea-field']}></textarea>
        </div>
      </div>
    </>
  );
}

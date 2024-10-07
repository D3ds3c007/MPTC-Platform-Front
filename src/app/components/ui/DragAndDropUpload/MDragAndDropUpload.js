import React, { useState } from 'react';
import styles from './MDragAndDropUpload.module.css';

export function MDragAndDropUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const openFileDialog = () => {
    document.querySelector(`.${styles.fileInput}`).click();
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => {
      URL.revokeObjectURL(prevFiles[index].preview);
      return prevFiles.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <div 
        className={styles.dropzone} 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
        onClick={openFileDialog}
      >
        <div className={styles.icon}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="blue" 
            className={styles.iconSVG}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
        </div>
        <p>Drag and drop your files here or click to select files</p>
        <input 
          type="file" 
          multiple 
          className={styles.fileInput} 
          onChange={handleFileChange} 
        />
      </div>

      <div className={styles.preview}>
        {files.length > 0 && 
          files.map((file, index) => (
            <div key={index} className={styles.previewItem}>
              <img 
                src={file.preview} 
                alt={`preview-${index}`} 
                className={styles.previewImage} 
              />
              {/* Close Icon (X) */}
              <span 
                className={styles.closeIcon} 
                onClick={() => removeFile(index)}
              >
                &times;
              </span>
              <p>{file.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

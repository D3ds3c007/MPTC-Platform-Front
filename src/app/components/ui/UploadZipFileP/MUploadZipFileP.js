import React, { useState } from 'react';
import styles from './MUploadZipFileP.module.css';
import { useFormContext } from 'react-hook-form';

export function MUploadZipFileP() {
  const formContext = useFormContext();
  const { register, setValue } = formContext || {}; // Safely destructure form context
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    readFilesAsBase64(droppedFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    readFilesAsBase64(selectedFiles);
  };

  const readFilesAsBase64 = (selectedFiles) => {
    const filesWithBase64 = selectedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ ...file, preview: reader.result });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filesWithBase64).then((updatedFiles) => {
      setFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...updatedFiles];
        if (setValue) setValue('picture', newFiles); // Only call setValue if it's defined
        return newFiles;
      });
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFileDialog = () => {
    document.querySelector(`.${styles.fileInput}`).click();
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
          <br></br>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00119D" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
          </svg>
        </div>
        <p>Drag and drop your zip files here or click to select files</p>
        <input 
          type="file" 
          {...(register ? register("picture") : {})} // Only spread if register is defined
          multiple
          accept=".zip"
          className={styles.fileInput}
          onChange={handleFileChange} 
        />
      </div>

      <div className={styles.preview}>
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className={styles.previewItem}>
              <div className={styles.zipIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#00119D" class="bi bi-file-earmark-zip-fill" viewBox="0 0 16 16">
                  <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243"/>
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1"/>
                </svg>
              </div>
              <div className={styles.fileInfo}>
                <p>{file.name}</p>
                <small>{(file.size / 1024).toFixed(2)} KB</small>
              </div>
              <span 
                className={styles.closeIcon}
                onClick={() => removeFile(index)}
              >
                &times;
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

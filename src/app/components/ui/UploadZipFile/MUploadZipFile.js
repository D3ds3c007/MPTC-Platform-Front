import React, { useState } from 'react';
import styles from './MUploadZipFile.module.css';
import { useFormContext } from 'react-hook-form';

export function MUploadZipFile() {
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
          {...(register ? register("picture") : {})} // Only spread if register is defined
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

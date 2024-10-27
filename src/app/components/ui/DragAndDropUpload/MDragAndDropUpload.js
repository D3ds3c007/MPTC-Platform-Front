import React, { useState } from 'react';
import styles from './MDragAndDropUpload.module.css';
import { useFormContext } from 'react-hook-form';

export function MDragAndDropUpload() {
  const { register, setValue } = useFormContext(); // Import setValue from React Hook Form
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
          resolve({ ...file, preview: reader.result }); // Set base64 string in preview
        };
        reader.onerror = reject;
        reader.readAsDataURL(file); // Read file as base64 string
      });
    });

    Promise.all(filesWithBase64).then((updatedFiles) => {
      setFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...updatedFiles];
        setValue('picture', newFiles); // Sync with the complete files array
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
    setFiles((prevFiles) => {
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
          {...register("picture")}
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
                src={file.preview} // Now using the base64 string as the src
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

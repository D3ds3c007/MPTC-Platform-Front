import React, { useState } from 'react';
import styles from './MUploadZipFileP.module.css';
import { useFormContext } from 'react-hook-form';

export function MUploadZipFileP() {
  const formContext = useFormContext();
  const { register, setValue } = formContext || {}; // Safely destructure form context
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      readFilesAsBase64(selectedFiles);
    }
  };

const handleDrop = (e) => {
  e.preventDefault();
  const droppedFile = e.dataTransfer.files[0];
  if (droppedFile) {
    readFilesAsBase64([droppedFile]); // Wrap in array
  }
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
      if (setValue) setValue('picture', updatedFiles);
      setFiles(updatedFiles); // ✅ Overwrite with new single file
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
        <p>Drag and drop your resource files here or click to select files</p>
        <input 
          type="file" 
          {...(register ? register("picture") : {})} // Only spread if register is defined
          // multiple
          accept="*/*"
          className={styles.fileInput}
          onChange={handleFileChange} 
        />
      </div>

      <div className={styles.preview}>
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className={styles.previewItem}>
              <div className={styles.zipIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#E91112" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
              </svg>
              </div>
              <div className={styles.fileInfo}>
                <p>{file.name} haha.pdf</p>
                {/* <small>{(file.size / 1024).toFixed(2)} KB</small> */}
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

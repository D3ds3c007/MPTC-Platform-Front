import React from 'react';
import fichier from './fichier.png';
import Image from 'next/image';
import styles from'./MListe.module.css';

const FileItem = () => {
    return (
        <div className="file-item">
            <div className="file-icon">
                <Image src={fichier} alt="fichier" width={40} height={40} />;
            </div>
            <div className="file-details">
                <h3>Exam A1</h3>
                <p>Session : OCT 2024</p>
            </div>
            <div className="file-size">
                5.265 KB
            </div>
            <div className="file-action">
                <a href="#" className="btn-view"></a>
            </div>
        </div>
    );
};

export default FileItem;

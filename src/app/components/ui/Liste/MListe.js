import React from 'react';
import styles from'./MListe.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';
import deposer from './deposer.png';
import fichier from './fichier.png';
import fond from './fond.png';
import video from './video.png';
import www from './www.png';


export function MListe({ fileName, session, size, fileType }) {
    // Définir dynamiquement l'icône et la couleur de fond en fonction du type de fichier
    let fileIcon;
    let backgroundColor;

    switch (fileType) {
        case 'pdf':
            fileIcon = fichier;
            backgroundColor = '#FCE1E1'; // Fond rouge pour les PDF
            break;
        case 'word':
            fileIcon = deposer;
            backgroundColor = '#959CD2'; // Fond bleu pour les fichiers Word
            break;
        case 'image':
            fileIcon = fond;
            backgroundColor = '#FFE299'; // Fond vert pour les fichiers Excel
            break;
        case 'video':
            fileIcon = video;
            backgroundColor = '#959CD2'; // Fond vert pour les fichiers Excel
            break;
        case 'lien':
            fileIcon = www;
            backgroundColor = '#B4FFD8'; // Fond vert pour les fichiers Excel
            break;
        default:
            fileIcon = fichier; // Icône par défaut
            backgroundColor = '#FCE1E1'; // Couleur de fond par défaut
            break;
    }

    return (
        <div className={styles["file-item"]}>
            <div className={styles["file-icon"]} style={{ backgroundColor }}>
                <Image src={fileIcon} alt={fileType} width={40} height={40} />
            </div>
            <div className={styles["file-details"]}>
                <h5>{fileName}</h5>
                <p>Session : {session}</p>
            </div>
            <div className={styles["file-size"]}>                                                                                                           
                {size}
            </div>
            <div className={styles["file-action"]}>
                <a href="#" className={styles["btn-view"]}></a>
            </div>
        </div>
    );
}

MListe.propTypes = {
    fileName: PropTypes.string.isRequired,
    session: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    fileType: PropTypes.oneOf(['pdf', 'word', 'image', 'video', 'lien']).isRequired
};
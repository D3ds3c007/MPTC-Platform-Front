// components/LangueNiveauListe.jsx
import React from 'react';
import styles from './MListeNote.module.css';
import PropTypes from 'prop-types';

export function MListeNote({ niveau, langue, description }) {
    let backgroundColor;
    let cecrLabel;

    switch (niveau) {
        case 'Débutant':
            backgroundColor = '#2638CB';
            cecrLabel = 'A1';
            break;
        case 'Élémentaire':
            backgroundColor = '#01F073';
            cecrLabel = 'A2';
            break;
        case 'Intermédiaire':
            backgroundColor = '#CFD4FA';
            cecrLabel = 'B1';
            break;
        case 'Avancé':
            backgroundColor = '#FF498C';
            cecrLabel = 'B2';
            break;
        case 'Maîtrise':
            backgroundColor = '#FFC536';
            cecrLabel = 'C1';
            break;
            
        default:
            backgroundColor = '#EEE';
            cecrLabel = niveau;
            break;
    }

    return (
        <div className={styles["langue-item"]}>
            <div className={styles["langue-niveau"]} style={{ backgroundColor }}>
                {cecrLabel}
            </div>
            <div className={styles["langue-details"]}>
                <h5>{langue}</h5>
                <p>{description}</p>
            </div>
            <div className={styles["file-action"]}>
                <a href="#" className={styles["btn-view"]}></a>
            </div>
        </div>
    );
}

MListeNote.propTypes = {
    niveau: PropTypes.string.isRequired,
    langue: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

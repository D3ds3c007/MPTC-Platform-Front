import React from 'react';
import styles from'./MFileListItem.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';
import deposer from './deposer.png';
import pdf from './pdf.png';
import fond from './fond.png';
import video from './video.png';
import www from './www.png';

export function MFileListItem() {
    const getFileIcon = () => {
        switch (fileType) {
            case 'pdf':
                return <Image src={pdf} alt="pdf" width={40} height={40} />;
                
            case 'document':
                return <Image src={deposer} alt="deposer" width={40} height={40} />;

            case 'image':
                return <Image src={fond} alt="fond" width={40} height={40} />;

            case 'video':
                return <Image src={video} alt="video" width={40} height={40} />;

            case 'lien':
                  return <Image src={www} alt="www" width={40} height={40} />;    
            default:
                return <i className="bi bi-file-earmark-fill text-secondary"></i>;
        }
    };

    return (
        <div className={styles["d-flex align-items-center p-3 bg-light border rounded shadow-sm mb-3"]}>
            <div className={styles["file-card-icon me-3 fs-3"]}>
                {/* {getFileIcon()} */}
              <Image src={pdf} alt="pdf" width={40} height={40} />;

            </div>
            <div className={styles["file-card-info flex-grow-1"]}>
                <h5 className={styles["file-card-title mb-1"]}>Title</h5>
                <p className={styles["file-card-subtitle text-muted mb-0"]}>subtitle</p>
            </div>
            <button className={styles["btn btn-primary btn-sm rounded-circle"]} >
                <i className={styles["bi bi-arrow-right"]}></i>
            </button>
        </div>
    );
}

FileCard.propTypes = {
    fileType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};



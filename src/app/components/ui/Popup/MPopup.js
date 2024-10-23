'use client';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io'; // Import a close icon from react-icons
import styles from './MPopup.module.css';

export function MPopup({ children, title, onClose, popupWidth }) {
    const [fadeState, setFadeState] = useState('fadeIn');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains(styles.overlay)) {
                handleClose();
            }
        };

        const handleClose = () => {
            setFadeState('fadeOut'); // Trigger the fadeOut animation
            setTimeout(() => onClose(), 300); // Wait for animation before closing
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const popupStyle = {
        width: popupWidth || 'auto',
    };

    return (
        <div className={`${styles.overlay} ${styles.popupContainer}`}>
            <div 
                className={`${styles.popup} ${styles[fadeState]}`}
                style={popupStyle}
                onClick={(event) => event.stopPropagation()} // Prevents closing when clicking inside the popup
            >
                <div className={styles.popupHeader}>
                    <button className={styles.closeButton} onClick={onClose}>
                        <IoMdClose className={styles.icon} />
                    </button>
                </div>
                <div className={styles.popupBody}>
                    {children}
                </div>
            </div>
        </div>
    );
}

'use client';
import { useEffect, useState } from 'react';
import styles from './MPopup.module.css';

export function MPopup({ children, title, onClose }) {
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

    return (
        <div className={`${styles.overlay} ${styles.popupContainer}`}>
            <div className={`${styles.popup} ${styles[fadeState]}`}>
                <div className={styles.popupHeader}>
                    <button className={styles.closeButton} onClick={onClose}>X</button>
                </div>
                <div className={styles.popupBody}>
                    {children}
                </div>
            </div>
        </div>
    );
}

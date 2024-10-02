'use client';
import styles from './MPopup.module.css';
import { useState, useEffect, use } from 'react';

export function MPopup({children, title, onClose}) {
 
   useEffect(() => {
         const handleClickOutside = (event) => {
               if (event.target.classList.contains(styles.overlay)) {
                  onClose();
               }
            }

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
            
      }, [onClose]);
      
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                {/* <div className={styles.popupHeader}>
                    <button onClick={onClose}>X</button>
                </div> */}
                <div className={styles.popupBody}>
                    {children}
                </div>
            </div>
        </div>

    );
}
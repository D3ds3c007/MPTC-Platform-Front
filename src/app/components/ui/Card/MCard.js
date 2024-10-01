'use client';
import { useState, useEffect } from 'react';
import styles from './MCard.module.css';

export function MCard({ children, width = '100%', height = 'auto', bgColor = 'white', padding = '20px', title = '', toggle = false, isIn = false, description = '', alignment = '' }) {
    const [isToggled, setIsToggled] = useState(false);
    const [isClockIn, setIsClockIn] = useState({isIn});

    const handleToggle = () => {
        setIsToggled(!isToggled);
        console.log(isIn);
        
        
    };

    useEffect(() => {
        console.log(isClockIn);
    }, [isClockIn]);



    return (
        <div className={`card ${styles.card} p-3`} style={{ width, height, backgroundColor: bgColor, padding }}>
            {title && (
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    {toggle && (
                        <label className={styles.switch}>
                            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    )}
                </div>
            )}
            {description != '' && <p>{description}</p>}

          {/* Create div for children prop and make it flexible and responsive */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1.2em',
                padding: '5px',
                justifyContent : 'center',
                
            }}>
                {children}
            </div>
        </div>
    );
}

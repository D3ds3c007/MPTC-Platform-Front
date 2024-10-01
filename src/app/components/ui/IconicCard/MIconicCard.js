import styles from './MIconicCard.module.css';
import { Container } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import clsx from 'clsx';

export function MIconicCard({
    data = '2024',
    icon = 'bi bi-arrow-up-right-circle-fill',
    bootstrapClass = 'col-md-6',
    label = 'This is a card',
    variant = 'default'
}){
    return (
        <>
                <div className={bootstrapClass}>
                    <div className={`${clsx(styles[variant])}  ${styles.iconiccard}`}>
                        <div className={styles.icon}>
                            <i className={icon} style={{
                                fontSize: '40px',
                                marginRight: '10px'
                            }}></i>
                        </div>
                        <div className={styles.content}>
                            <b><h4 className={styles.data}>{data}</h4></b>
                            <p style={{
                                fontSize: '14px'
                            }}>{label}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
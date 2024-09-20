import styles from './MIconicCard.module.css';
import { Container } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

export function MIconicCard({
    data = '2024',
    icon = 'bi bi-arrow-up-right-circle-fill',
    bootstrapClass = 'col-md-3',
    label = 'This is a card',
    bgColor = '#CFD4FA',
    color = '--primary-color'
}){
    return (
        <>
        <Container>
            <div className="row">
                <div className={bootstrapClass}>
                    <div className={styles.iconiccard}>
                        <div className={styles.icon}>
                            <i class="bi bi-arrow-up-right-circle-fill" style={{
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
            </div>
        </Container>
        </>
    )
}
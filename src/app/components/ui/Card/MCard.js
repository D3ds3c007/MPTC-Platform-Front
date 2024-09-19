import styles from './MCard.module.css';
import clsx from 'clsx';

export function MCard({children, width = '100%', height = 'auto', bgColor = 'white', padding = '20px', title = ''}, display = 'flex', flexDirection = 'column') {
    return (
        <>
            <div className={styles.card} style={{width, height, backgroundColor: bgColor, padding}}>
                {title && <h1 className={styles.title}>{title}</h1>}
                {children}
            </div>
        </>
        
    );
}
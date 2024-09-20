import styles from './MCard.module.css';


export function MCard({children, width = '100%', height = 'auto', bgColor = 'white', padding = '20px', title = ''}, display = 'flex', flexDirection = 'column') {
    return (
        <>
            <div className={`card ${styles.card} p-3 bg-light`} style={{width, height, backgroundColor: bgColor, padding}}>
                {title && <h1 className={styles.title}>{title}</h1>}
                {children}
            </div>
        </>
        
    );
}
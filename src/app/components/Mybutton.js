import styles from './base-button.module.css';
export function MyButton({onClick})
{
    return(
        
        <button className={styles.primary} onClick={onClick}>Click me</button>
    )
}
import styles from './MButton.module.css';
import clsx from 'clsx';
export function MButton({children, onClick, variant = 'primary', bootstrapClass = ''}) {
    return (
        <button className={`${clsx(styles[variant])}  ${styles.button} btn-sm`} onClick={onClick}>
            {children}
        </button>
    );
}
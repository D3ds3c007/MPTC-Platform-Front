import styles from './MButton.module.css';
import clsx from 'clsx';
export function MButton({children, onClick, variant = 'primary', bootstrapClass = '', type=''}) {
    return (
        <button className={`${clsx(styles[variant])}  ${styles.button} btn-sm`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
import styles from './MButton.module.css';
import clsx from 'clsx';
export function MButton({children, onClick, variant = 'primary'}) {
    return (
        <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
            {children}
        </button>
    );
}
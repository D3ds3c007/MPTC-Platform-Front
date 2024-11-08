import styles from './MButton.module.css';
import clsx from 'clsx';
export function MButton({children, onClick, variant = 'primary', bootstrapClass = '', type='', disabled=false}) {
    return (
        <>
         {disabled ? 

            <button disabled className={`${clsx(styles['disabled'])}  ${styles.button} btn-sm`} onClick={onClick} type={type}>
                {children}
            </button>
         :  <button  className={`${clsx(styles[variant])}  ${styles.button} btn-sm`} onClick={onClick} type={type}>
                {children}
            </button>
       }
         
        </>
      
    );
}
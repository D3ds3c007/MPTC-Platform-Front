import styles from './MButtonProfilProf.module.css';

export function MButtonProfilProf({ variant = 'primary', children }) {
  return (
    <button className={`${styles["button"]} ${styles[variant]}`}>
      {children}
    </button>
  );
}

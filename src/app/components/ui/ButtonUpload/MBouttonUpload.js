import Image from 'next/image';
import telechargements from './telechargements.png'; 
import styles from './MBouttonUpload.module.css';

export function MBouttonUpload({ variant = 'primary', children }) {
  return (
    <button className={`${styles["button"]} ${styles[variant]}`}>
      {/* Afficher l'icône seulement si le bouton est de type 'secondary' */}
      {variant === 'secondary' && (
        <Image
          src={telechargements}
          alt="telechargements"
          width={20}
          height={20}
          className={styles["icon"]}
        />
      )}
      {children}
    </button>
  );
}

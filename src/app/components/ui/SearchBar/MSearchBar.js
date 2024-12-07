import Image from 'next/image';
import chercher from './chercher.png'; 
import styles from'./MSearchBar.module.css'; // Import the CSS for styling

export function MSearchBar() {
  return (
    <>
      <div className={styles["search-container"]}>
          <input type="text" placeholder="Search" className={styles["search-input"]}></input>
          <button className={styles["search-button"]}>
          <Image
          src={chercher}
          alt="chercher"
          className={styles["icon"]}
        />
          </button>
      </div>
    </>
  );
};



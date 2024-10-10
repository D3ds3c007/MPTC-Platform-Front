// components/AddButton.js
import styles from './MAddButton.module.css'; // Import the CSS module

export function MAddButton({ onClick }) {
    return (
        <button className={styles.addButton} onClick={onClick}>
          +
        </button>
      );
}

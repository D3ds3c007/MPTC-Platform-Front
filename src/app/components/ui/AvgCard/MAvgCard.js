// components/AddButton.js
import styles from './MAvgCard.module.css'; // Import the CSS module

export function MAvgCard({ average='15.29' }) {
    return (
        <div className={styles["average-card"]}>AVG : {average}</div>
      );
}

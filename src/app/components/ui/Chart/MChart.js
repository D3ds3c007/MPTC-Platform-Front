import styles from'./MChart.module.css'; // Import the CSS for styling

export function MChart() {
  return (
    <div className={styles["chart-container"]}>
    <div className={`${styles["chart-container"]} ${styles["bart"]}`} data-value="15">
        <div className={`${styles["chart-container"]} ${styles["value-label"]}`}>15</div>
        <div className={`${styles["chart-container"]} ${styles["tooltip"]}`}>AVG: 15,00</div>
        <div className={`${styles["chart-container"]} ${styles["fill"]}`}></div>
        <div className={`${styles["chart-container"]} ${styles["label"]}`}>READING</div>
    </div>
    </div>
  );
};



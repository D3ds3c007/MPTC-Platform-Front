import styles from'./MChart.module.css'; // Import the CSS for styling

export function MChart() {
  return (
    <div className={styles["chart-container"]}>
    <div className={styles["bart"]} data-value="15">
        <div className={styles["value-label"]}>15</div>
        <div className={styles["tooltip"]}>AVG: 15,00</div>
        <div className={styles["fill"]}></div>
        <div className={styles["label"]}>READING</div>
    </div>
    </div>
  );
};



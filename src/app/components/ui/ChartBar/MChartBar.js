import styles from'./MChartBar.module.css'; // Import the CSS for styling

export function MChartBar() {
  return (
    <>
    <div className={styles["box"]}>
      <div className={styles["chart-title"]}>Average notes per Section</div>

          <div className={styles["chart-container"]}>
            <div className={styles["bart"]} data-value="15">
                <div className={styles["hehe"]}>Read : 15</div>
                <div className={styles["fill"]}></div>
                <div className={styles["label"]}>READING</div>
            </div>
            <div className={styles["bart"]} data-value="15">
                <div className={styles["value-label"]}>15</div>
                <div className={styles["tooltip"]}>AVG: 15,00</div>
                <div className={styles["fill"]}></div>
                <div className={styles["label"]}>GRAMMAR</div>
            </div>
            <div className={styles["bart"]} data-value="15">
                <div className={styles["value-label"]}>15</div>
                <div className={styles["tooltip"]}>AVG: 15,00</div>
                <div className={styles["fill"]}></div>
                <div className={styles["label"]}>WRITING</div>
            </div>
            <div className={styles["bart"]} data-value="15">
                <div className={styles["value-label"]}>15</div>
                <div className={styles["tooltip"]}>AVG: 15,00</div>
                <div className={styles["fill"]}></div>
                <div className={styles["label"]}>LISTENING</div>
            </div>
            <div className={styles["bart"]} data-value="15">
                <div className={styles["value-label"]}>15</div>
                <div className={styles["tooltip"]}>AVG: 15,00</div>
                <div className={styles["fill"]}></div>
                <div className={styles["label"]}>VOCABULAR</div>
            </div>
          </div>
    </div>
        </>

  );
};



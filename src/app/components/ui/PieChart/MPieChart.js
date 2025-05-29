
import styles from'./MPieChart.module.css'; // Import the CSS for styling

export function MPieChart() {
  return (
    <div className={styles["chart-container"]}>
          <div className={styles["chart-title"]}>Fail & Pass rate</div>

    <div className={styles["pie-chart"]}></div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Pass successfully</span>
      <span className={styles["percentage"]}>75%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={`${styles["progress-fill"]} ${styles["progress-ready"]}`}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Fail and must return class</span>
      <span className={styles["percentage"]}>25%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={`${styles["progress-fill"]} ${styles["progress-pending"]}`}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Others</span>
      <span className={styles["percentage"]}>0%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={`${styles["progress-fill"]} ${styles["progress-in-use"]}`}></div>
    </div>

    {/* <div className={styles["status"]}>
      <span className={styles["label"]}>Stock</span>
      <span className={styles["percentage"]}>80%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-stock"]}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Deployed</span>
      <span className={styles["percentage"]}>80%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-deployed"]}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>In process</span>
      <span className={styles["percentage"]}>80%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-in-process"]}></div>
    </div> */}
  </div>
  );
};




import styles from'./MPieChart.module.css'; // Import the CSS for styling

export function MPieChart() {
  return (
    <div className={styles["chart-container"]}>
    <h2>Assets by Status</h2>

    <div className={styles["pie-chart"]}></div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Ready to Deploy</span>
      <span className={styles["percentage"]}>40%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-ready"]}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>Pending</span>
      <span className={styles["percentage"]}>25%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-pending"]}></div>
    </div>

    <div className={styles["status"]}>
      <span className={styles["label"]}>In use</span>
      <span className={styles["percentage"]}>50%</span>
    </div>
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-fill progress-in-use"]}></div>
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



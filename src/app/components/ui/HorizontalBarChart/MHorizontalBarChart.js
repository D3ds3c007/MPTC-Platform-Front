// components/AddButton.js
import styles from './MHorizontalBarChart.module.css'; // Import the CSS module

export function MHorizontalBarChart() {
    return (
        <>
        <div className={styles["chart-container"]}>
            <div className={styles["chart-title"]}>Question types error rate</div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Complete the blanks</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["complete"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>84%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>True or False</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["true-false"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>70%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Original sentences</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["original"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>65%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Essay</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["essay"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>46%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Reading</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["reading"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>75%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Describe pictures</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["describe"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>70%</div>
            </div>

            <div className={styles["bar-group"]}>
                <div className={styles["bar-label"]}>Listening</div>
                <div className={styles["bar"]}>
                    <div className={`${styles["bar-fill"]} ${styles["listening"]}`}></div>
                </div>
                <div className={styles["bar-percentage"]}>68%</div>
            </div>
        </div>
        </>

      );
}

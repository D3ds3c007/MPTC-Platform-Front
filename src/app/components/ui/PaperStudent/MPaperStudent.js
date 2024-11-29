// components/AddButton.js
import styles from './MPaperStudent.module.css'; // Import the CSS module

export function MPaperStudent() {
    return (
        <>
        <div className={styles["folder-container"]}>
            <div className={styles["folder"]}>
            <div className={styles["paper"]}>
                <div className={styles["line"]}></div>
                <div className={styles["line"]}></div>
                <div className={styles["line"]}></div>
            </div>
            </div>
            <div className={styles["label"]}>ETU002231</div>
        </div>
        </>
    );
}

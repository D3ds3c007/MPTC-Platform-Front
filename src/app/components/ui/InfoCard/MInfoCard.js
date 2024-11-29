import styles from'./MInfoCard.module.css'; // Import the CSS for styling

export function MInfoCard() {
  return (
    <>
      <div className={styles["exam-card"]}>
        <div className={styles["exam-header"]}>
        <h2>Exam Info</h2>
        <button className={styles["edit-button"]}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg>
        </button>
        </div>
        <div className={styles["exam-details"]}>
        <p>Subject: <strong>English</strong></p>
        <p>Level: <strong>A1</strong></p>
        <p>Period: <strong>OCT-DEC 2024</strong></p>
        <p>Term: <strong>First</strong></p>
        <p>Date: <strong>25/11/2024</strong></p>

        </div>
        <a href="exam/process">
        <button className={styles["correct-exam-button"]}>
        <i class="correct-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
        </svg></i> Correct Exam
        </button>
        </a>
    </div>
    </>
  );
};



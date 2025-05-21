import styles from'./MInfoCard.module.css'; // Import the CSS for styling

export function MInfoCard({exam}) {

  return (
    <>
      <div className={styles["exam-card"]}>
        <div className={styles["exam-header"]}>
          <p className={styles["subtitle"]}>Informations</p>
        </div>

        <div className={styles["exam-details"]}>
          <br />
          {exam ? (
            <>
              <table>
                <tbody>
                  <tr>
                    <td className={styles["label-cell"]}>Subject:</td>
                    <td><strong>{exam.subject}</strong></td>
                  </tr>
                  <tr>
                    <td>Level:</td>
                    <td><strong>{exam.level}</strong></td>
                  </tr>
                  <tr>
                    <td>Period:</td>
                    <td><strong>{exam.period}</strong></td>
                  </tr>
                  <tr>
                    <td>Term:</td>
                    <td><strong>{exam.session}</strong></td>
                  </tr>
                  <tr>
                    <td>Date:</td>
                    <td><strong>{exam.dateExam}</strong></td>
                  </tr>
                </tbody>
              </table>

            </>
          ) : (
            <p>Loading exam data...</p>
          )}
        </div>
        <br></br>
        <br></br>

        <a href="../exam/process">
        <button className={styles["correct-exam-button"]}>
          Correct Exam
        </button>
        </a>
    </div>
    </>
  );
};



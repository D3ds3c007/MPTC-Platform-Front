import styles from'./MInfoCard.module.css'; // Import the CSS for styling

export function MInfoCard({exam}) {

  return (
    <>
      <div className={styles["exam-card"]}>
        <div className={styles["exam-header"]}>
          <p className={styles["subtitle"]}>Exam Informations</p>
        </div>

        <div className={styles["exam-details"]}>

          {/* <div style={{
            float: 'right',
          }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00119D" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div> */}
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

    </div>
    </>
  );
};



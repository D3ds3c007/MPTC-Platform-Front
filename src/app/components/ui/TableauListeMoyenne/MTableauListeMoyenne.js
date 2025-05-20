import React from 'react';
import styles from './MTableauListeMoyenne.module.css';

export function MTableauListeMoyenne({ students }) {
  return (
    <div >
      
      <table className={styles['student-table']}>
        <thead>
          <tr>
            <th className={styles.center}>Nom</th>
            <th className={styles.center}>Exam 1</th>
            <th className={styles.center}>Exam 2</th>
            <th className={styles.center}>Exam 3</th>
            <th className={styles.center}>Moyenne</th>
            <th className={styles.center}>Statut</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const exams = student.exams;
            const avg = (
              exams.reduce((a, b) => a + b, 0) / exams.length
            ).toFixed(1);
            const allFilled = exams.every(score => score > 0);
            const isValid = allFilled && avg >= 10;
            const icon = isValid ? '✅' : avg < 10 ? '❌' : '⚠️';
            const statusText = isValid ? 'Validé' : 'Non validé';
            const statusClass = isValid ? 'valid' : 'invalid';
            const colorClass = avg < 10 ? 'red' : avg >= 15 ? 'green' : 'gray';

            return (
              <tr key={index}>
                <td className={styles.center}>{student.name}</td>
                {exams.map((score, idx) => {
                  const cls =
                    score < 10 ? 'red' : score >= 15 ? 'green' : 'gray';
                  const textColor = cls === 'red' ? '#ffffff' : '#15004F';
                  return (
                    <td className={styles.center} key={idx}>
                      <span
                        className={`${styles.badge} ${styles[cls]}`}
                        style={{ color: textColor }}
                      >
                        {score.toString().padStart(2, '0')}
                      </span>
                    </td>
                  );
                })}
                <td className={styles.center}>
                  <span
                    className={`${styles.badge} ${styles[colorClass]}`}
                    style={{
                      color: colorClass === 'red' ? '#ffffff' : '#15004F',
                    }}
                  >
                    {avg}
                  </span>
                </td>
                <td className={styles.center}>
                  <span
                    className={`${styles.status} ${styles[statusClass]}`}
                  >
                    <span className={styles['status-icon']}>{icon}</span>
                    {statusText}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

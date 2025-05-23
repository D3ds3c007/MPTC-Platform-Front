import React from 'react';
import styles from './MTableauListeEleve.module.css'; // Assurez-vous de lier votre fichier CSS module

export function MTableauListeEleve({ students }) {
  return (
    <div>
      
      <table className={styles['student-table']}>
        <thead>
          <tr>
            <th className={styles.center}>Nom</th>
            <th className={styles.center}>Matricule</th>
            {/* <th className={styles.center}>Statut</th> */}
            <th className={styles.center}>Ajouter une note</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className={styles.center}><a className={styles.a} href='/dashboard/professor/note/ProfilEleve'>{student.name}</a></td>
              <td className={styles.center}><a className={styles.a} href='/dashboard/professor/note/ProfilEleve'>{student.matricule}</a></td>
              {/* <td className={styles.center}>
                <span className={styles.status}>
                  <span className={styles['status-icon']}>{student.icon}</span>
                  {student.status}
                </span>
              </td> */}
              <td className={styles.center}>
                <button className={styles['add-note-btn']}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

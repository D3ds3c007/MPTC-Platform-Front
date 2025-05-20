import React from 'react';
import styles from './MTableauDetailleNote.module.css';

function generateComment(note) {
  if (note >= 16) {
    return "Excellent performance. You have a strong command of this skill. Keep it up!";
  } else if (note >= 12) {
    return "Good effort! You're doing well, just a bit more work to reach excellence.";
  } else if (note >= 10) {
    return "Fair result. You're on the right track—consider reviewing some key points.";
  } else {
    return "This area still needs improvement. With regular practice, you can make great progress.";
  }
}

export default function MTableauDetailleNote({ notes }) {
  return (
    <div className={styles['table-container']}>
      <div className={styles['table-header']}>
        <div>Skill</div>
        <div>Grade (/20)</div>
        <div>Assessment</div>
        <div>Comment</div>
      </div>
      {notes.map((note, index) => {
        const assessment =
          note.note >= 16
            ? 'Excellent'
            : note.note >= 12
            ? 'Good'
            : note.note >= 10
            ? 'Satisfactory'
            : 'Needs Improvement';

        const gradeClass =
          note.note >= 16
            ? styles['grade-high']
            : note.note >= 12
            ? styles['grade-medium']
            : styles['grade-low'];

        const comment = generateComment(note.note);

        return (
          <div key={index} className={styles['table-row']}>
            <div>{note.competence}</div>
            <div>
              <div className={`${styles['grade-circle']} ${gradeClass}`}>
                {note.note}
              </div>
            </div>
            <div>{assessment}</div>
            <div className={styles['comments']}>{comment}</div>
          </div>
        );
      })}
    </div>
  );
}

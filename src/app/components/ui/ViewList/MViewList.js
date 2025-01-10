import React from 'react';
import styles from'./MViewList.module.css';

export function MViewList({ exam }) {

    return (
        <div className={styles["file-item"]}>
            <div className={styles["file-icon"]}>
                <h4>{exam.level}</h4>
            </div>
            <div className={styles["file-details"]}>
                <h5>{exam.subject} Exam {exam.session}</h5>
                <p>Sesion : {exam.session}</p>
            </div>
            <div className={styles["file-size"]}> 
                <p>Date : {exam.dateExam}</p>                                                                                                          
            </div>
            <div className={styles["file-action"]}>
                <a href="#" className={styles["btn-view"]}></a>
            </div>
        </div>
    );
}

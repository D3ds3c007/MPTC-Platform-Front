import styles from'./MExamForm.module.css'; // Import the CSS for styling
import { MButton } from '../Button/MButton';

export function MExamForm() {
  return (
    <>
    <div className={styles["chart-container"]}>
        <form className={styles["exam-form"]}>

            <div className={styles["form-group"]}>
                <label for="subject">Subject of the exam</label>
                <select id="subject" required>
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="MATH">MATH</option>
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-date">Date of the exam</label>
                <div className={styles["input-with-icon"]}>
                    <input type="date" id="exam-date" required/>
                </div>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-period">Period of the exam</label>
                <select id="exam-period" required>
                    <option value="OCT 2024 - DEC 2024">OCT 2024 - DEC 2024</option>
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-session">Session of the exam</label>
                <select id="exam-session" required>
                    <option value="TERM 1">TERM 1</option>
                    <option value="TERM 2">TERM 2</option>
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label>Learning level</label>
                <div className={styles["learning-levels"]}>
                    <button type="button" className={[styles.level, styles.active].join(' ')}>A1</button>
                    <button type="button" className={styles["level"]}>A2</button>
                    <button type="button" className={styles["level"]}>B1</button>
                    <button type="button" className={styles["level"]}>B2</button>
                    <button type="button" className={styles["level"]}>C1</button>
                    <button type="button" className={styles["level"]}>C2</button>
                </div>
            </div>

            <br/>

            <div className={styles["form-group"]}>
                <label for="subject-file">Add Subject exam</label>
                <div className={styles["file-upload"]}>
                    <input type="file" id="subject-file" accept=".pdf" required/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15004F" class="bi bi-upload" viewBox="0 0 16 16" >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
            

            <div className={styles["form-group"]}>
                <label for="modal-answer-file">Add corresponding Asset Note</label>
                <div className={styles["file-upload"]}>
                    <input type="file" id="modal-answer-file" accept=".pdf" required/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15004F" class="bi bi-upload" viewBox="0 0 16 16" >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                </div>
            </div>

            <MButton children="Create" />


            {/* <div className={styles["form-group"]}>
                <button type="submit" className={styles["submit-button"]}>Create</button>
            </div> */}
        </form>
    </div>
    </>
  );
};



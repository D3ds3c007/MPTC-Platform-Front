import { useState } from 'react';
import styles from'./MExamForm.module.css'; // Import the CSS for styling
import { MButton } from '../Button/MButton';
import axios from '@/app/lib/axiosInstance';

export function MExamForm({ levels, subjects, periods }) {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [subjectFile, setSubjectFile] = useState(null);
    const [assetnoteFile, setAssetnoteFile] = useState(null);

    const [subjectFileName, setSubjectFileName] = useState('No file selected'); // State to store subject file name
    const [assetnoteFileName, setAssetnoteFileName] = useState('No file selected'); // State to store modal answer file name

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
      };

    const handleFileChange = (event, setFile, setFileName) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedLevel) {
            alert("Please select a learning level.");
            return;
        }
    
        // Step 1: Upload the files to the server
        const formData = new FormData();
        formData.append('Subject', subjectFile); // Match with DTO property name
        formData.append('Assetnote', assetnoteFile); // Match with DTO property name
    
        formData.append('Session', e.target['exam-session'].value);
        formData.append('SubjectId', e.target['subject'].value);
        formData.append('DateExam', e.target['exam-date'].value);
        formData.append('PeriodId', e.target['exam-period'].value);
        formData.append('LevelId', selectedLevel.idLevel); // Include selected level ID

        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        
        try {
            // Send the form data directly to your backend
            const response = axios.post('Exam/create-exam', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
    
            if (!response.ok) {
                throw new Error('File upload failed');
            }
    
            const result = await response.json();
            console.log('Data sent successfully:', result);
            alert('Exam created successfully!');
    
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };
    
  return (
    <>
    <div className={styles["chart-container"]}>
        <form className={styles["exam-form"]} onSubmit={handleSubmit}>

            <div className={styles["form-group"]}>
                <label for="subject">Subject of the exam</label>
                <select id="subject" name="Subject" required>
                {subjects.map(subject => (
                    <option key={subject.idSubject} value={subject.idSubject}>{subject.name}</option>
                ))}
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-date">Date of the exam</label>
                <div className={styles["input-with-icon"]}>
                    <input type="date" id="exam-date" name="DateExam" required/>
                </div>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-period">Period of the exam</label>
                <select id="exam-period" name="Period" required>
                {periods.map(period => (
                    <option key={period.idPeriod} value={period.idPeriod}>{period.name}</option>
                ))}
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label for="exam-session">Session of the exam</label>
                <select id="exam-session" name="Session" required>
                    <option value="1">TERM 1</option>
                    <option value="2">TERM 2</option>
                    <option value="3">FINAL</option>
                </select>
            </div>

            <div className={styles["form-group"]}>
                <label>Learning level</label>
                <div className={styles["learning-levels"]}>
                        {levels.map(level => (
                            <button
                                key={level.idLevel}
                                type="button"
                                className={`${styles["level"]} ${selectedLevel === level ? styles["active"] : ""}`} // Use 'active' class
                                onClick={() => handleLevelSelect(level)}
                            >
                                {level.name}
                            </button>
                        ))}
                </div>
            </div>

            <br/>

            <div className={styles["form-group"]}>
                <label for="subject-file">Add Subject exam</label>
                <div className={styles["file-upload"]}>
                    <input 
                        type="file" 
                        id="subject-file" 
                        name="UriPath" 
                        accept=".pdf" 
                        required 
                        onChange={(e) => handleFileChange(e, setSubjectFile, setSubjectFileName)} 
                    />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15004F" class="bi bi-upload" viewBox="0 0 16 16" >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                    {subjectFileName && <span className={styles["file-name"]}>{subjectFileName}</span>} {/* Display file name */}
                    
                </div>
            </div>
            

            <div className={styles["form-group"]}>
                <label for="modal-answer-file">Add corresponding Asset Note</label>
                <div className={styles["file-upload"]}>
                    <input 
                        type="file" 
                        id="modal-answer-file" 
                        name="UriPathAssetNote" 
                        accept=".pdf" 
                        required 
                        onChange={(e) => handleFileChange(e, setAssetnoteFile, setAssetnoteFileName)} 
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15004F" class="bi bi-upload" viewBox="0 0 16 16" >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                    {assetnoteFileName && <span className={styles["file-name"]}>{assetnoteFileName}</span>} {/* Display file name */}

                </div>
            </div>

            <MButton>Create</MButton>

            {/* <div className={styles["form-group"]}>
                <button type="submit" className={styles["submit-button"]}>Create</button>
            </div> */}
        </form>
    </div>
    </>
  );
};



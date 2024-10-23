import { useState } from 'react';
import axios from '@/app/lib/axiosInstance';
import styles from './MAttendanceForm.module.css';

export function MAttendanceForm() {
  const [formData, setFormData] = useState({
    date: '',
    clockIn: '',
    clockOut: '',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format clockIn and clockOut to "hh:mm:ss"
    const formattedData = {
     
        Date: formData.date,
        ClockIn: formData.clockIn ? `${formData.clockIn}:00` : null, // Add seconds for TimeSpan compatibility
        ClockOut: formData.clockOut ? `${formData.clockOut}:00` : null,
        Remarks: formData.remarks
      
    };

    axios.post("Attendance/record", formattedData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response?.data || error.message);
      });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.iconContainer}>
        <span className={styles.clockIcon}>🕒</span>
      </div>
      <h2 className={styles.title}>Record Employee Attendance</h2>
      <p className={styles.description}>
        Enter the employee's Clock In and Clock Out times, along with any relevant remarks. Double-check for accuracy before submitting.
      </p>

      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Date</label>
          <input
            type="date"
            name="date"
            className={styles.input}
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label>Clock In</label>
            <input
              type="time"
              name="clockIn"
              className={styles.input}
              value={formData.clockIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Clock Out</label>
            <input
              type="time"
              name="clockOut"
              className={styles.input}
              value={formData.clockOut}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Remarks</label>
          <textarea
            name="remarks"
            className={styles.textarea}
            value={formData.remarks}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

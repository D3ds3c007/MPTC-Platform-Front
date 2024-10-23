import { useState } from 'react';
import axios from '@/app/lib/axiosInstance';
import styles from './MAttendanceForm.module.css';

export function MAttendanceForm({onAddRecord}) {
  const [formData, setFormData] = useState({
    matricule: '',  // New field for Staff Matricule
    date: '',
    clockIn: '',
    clockOut: '',
    remarks: ''
  });

  const [suggestions, setSuggestions] = useState([]);  // To store auto-suggest results

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'matricule') {
      fetchMatriculeSuggestions(value);
    }
  };

  // Fetch Matricule suggestions based on user input
  const fetchMatriculeSuggestions = (query) => {
    if (query.length >= 3) {
      axios.get(`/Staff/matricule-suggestions?query=${query}`)
        .then(response => {
          console.log(response.data);
          setSuggestions(response.data);
        })
        .catch(error => {
          console.error(error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);  // Clear suggestions if query is too short
    }
  };

  // Handle selection of a suggestion
  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, matricule: suggestion });
    setSuggestions([]);  // Clear suggestions after selection
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format clockIn and clockOut to "hh:mm:ss"
    const formattedData = {
      Matricule: formData.matricule,
      Date: formData.date,
      ClockIn: formData.clockIn ? `${formData.clockIn}:00` : null, // Add seconds for TimeSpan compatibility
      ClockOut: formData.clockOut ? `${formData.clockOut}:00` : null,
      Remarks: formData.remarks
    };

    axios.post("Attendance/record", formattedData)
      .then(response => {
        // Clear the form after submission if necessary
        setFormData({
          matricule: '',
          date: '',
          clockIn: '',
          clockOut: '',
          remarks: ''
        });

        //update the data state with the new record
        onAddRecord(response.data);
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
        {/* Staff Matricule Input */}
        <div className={styles.inputGroup}>
          <label>Staff Matricule</label>
          <input
            type="text"
            name="matricule"
            className={styles.input}
            value={formData.matricule}
            onChange={handleChange}
            required
            placeholder="Enter Staff Matricule"
            autoComplete="off"
          />
          
          {/* Dropdown for suggestions */}
          {suggestions.length > 0 && (
            <div className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date Input */}
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

        {/* Clock In and Clock Out Inputs */}
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

        {/* Remarks Input */}
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

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

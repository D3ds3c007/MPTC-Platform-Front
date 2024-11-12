import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./MTimeOffCalendar.module.css"; // Import the CSS Module
import { FaRegCalendarAlt } from "react-icons/fa"; // Import calendar icon
import { MButton } from "../Button/MButton";

export function MTimeOffCalendar() {
  const [timeOffEvents, setTimeOffEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [employeeName, setEmployeeName] = useState("");
  const [matricule, setMatricule] = useState("");
  const [startTimeOff, setStartTimeOff] = useState("");
  const [endTimeOff, setEndTimeOff] = useState("");

  const handleDateSelect = (selectInfo) => {
    setSelectedRange({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setShowForm(true);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (employeeName && matricule && startTimeOff && endTimeOff) {
      const isFutureEvent = new Date(startTimeOff) >= new Date();
      const newEvent = {
        id: String(Date.now()),
        title: `${employeeName} (${matricule})`,
        start: startTimeOff,
        end: endTimeOff,
        color: isFutureEvent ? "green" : "gray",
      };
      setTimeOffEvents((prevEvents) => [...prevEvents, newEvent]);
      setShowForm(false);
      setEmployeeName("");
      setMatricule("");
      setStartTimeOff("");
      setEndTimeOff("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className={styles.calendarWrapper}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={timeOffEvents}
        eventContent={(eventInfo) => (
          <span
            className={styles.eventContent}
            style={{
              backgroundColor: eventInfo.event.extendedProps.color,
            }}
          >
            {eventInfo.event.title}
          </span>
        )}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        className={styles.fullCalendar}
      />

      {/* Custom Form Modal */}
      {showForm && (
        <div className={styles.formModal}>
          <div className={styles.formContainer}>
            <button
              onClick={() => setShowForm(false)}
              className={styles.closeButton}
            >
              &times;
            </button>
            {/* <div className={styles.iconContainer}>
              <FaRegCalendarAlt className={styles.icon} />
            </div> */}
            <h3 className={styles.formTitle}>Request Time Off</h3>

            <p className={styles.description}>
                Fill in the form to request your time off. Provide your name, and select the dates for your leave            </p>
            <form onSubmit={handleSubmitForm}>
              <div className={styles.formField}>
                <label>Staff Matricule:</label>
                <input
                  type="text"
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Employee Name:</label>
                <input
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.formField}>
                    <label>Start Date:</label>
                    <input
                    type="date"
                    value={startTimeOff}
                    onChange={(e) => setStartTimeOff(e.target.value)}
                    required
                    />
                </div>
                <div className={styles.formField}>
                    <label>End Date:</label>
                    <input
                    type="date"
                    value={endTimeOff}
                    onChange={(e) => setEndTimeOff(e.target.value)}
                    required
                    />
                </div>
              </div>
              
                <button type="submit" className={styles.submitButton}>Submit</button>
                
            </form>
            
          </div>
        </div>
      )}
    </div>
  );
}

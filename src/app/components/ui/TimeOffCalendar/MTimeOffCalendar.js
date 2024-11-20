import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./MTimeOffCalendar.module.css"; // Import the CSS Module
import axios from "@/app/lib/axiosInstance";

import MPopupMessage from "../PopupMessage/MPopupMessage";
import { MButton } from "../Button/MButton";

export function MTimeOffCalendar({ data, setData }) {
  const [timeOffEvents, setTimeOffEvents] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [employeeName, setEmployeeName] = useState("");
  const [matricule, setMatricule] = useState("");
  const [startTimeOff, setStartTimeOff] = useState("");
  const [endTimeOff, setEndTimeOff] = useState("");

  const [suggestions, setSuggestions] = useState([]);  // To store auto-suggest results

  //popup const

  const [isVisible, setIsVisible] = useState(false);

  const [popupType, setPopupType] = useState("success");
  const [message, setMessage] = useState("")


  const handleDateSelect = (selectInfo) => {
    const start = selectInfo.startStr;
    // const end = selectInfo.endStr;

    //minus the end date by 1 day
    const end = new Date(new Date(selectInfo.endStr).getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    console.log(end + "end date");

    setSelectedRange({ start, end });
    setStartTimeOff(start); // Auto-update startTimeOff
    setEndTimeOff(end); // Auto-update endTimeOff
    setShowForm(true);
  };

  const handleDeleteEvent = (eventId) => {
    console.log(eventId);
    if (window.confirm("Are you sure you want to delete this event?")) {
      setData((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatricule(value);  // Update matricule state

    if (name === 'matricule') {
      fetchMatriculeSuggestions(value);
    }
  };

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
    setMatricule(suggestion);  // Update matricule state
    setSuggestions([]);  // Clear suggestions after selection
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

      //send data to the server via axios
      axios.post('Timeoff/timeoff', {
        idTimeoff: 0,
        employeeName: employeeName,
        staffMatricule: matricule,
        beginTimeOff: startTimeOff,
        endTimeOff: endTimeOff
      }).then(response => {
        console.log(response.data);
        setMessage(response.data);
        showPopup("success");
      }).catch(error => {
        console.error(error);
        setMessage(response.data);
        showPopup("error");
      });

      setTimeOffEvents((prevEvents) => [...prevEvents, newEvent]);
      setData((prevEvents) => [...prevEvents, newEvent]);
      setShowForm(false);
      setEmployeeName("");
      setMatricule("");
      setStartTimeOff("");
      setEndTimeOff("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const showPopup = (type) => {
    setPopupType(type);
    setIsVisible(true);
  };

  return (
    <>
    {/* show the data received from prop here */}
    {console.log(timeOffEvents)}
    <div className={styles.calendarWrapper}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={data}
        eventContent={(eventInfo) => (
          <div className={styles.eventContainer}>
            <span
              className={styles.eventTitle}
              style={{
                backgroundColor: eventInfo.event.extendedProps.color,
              }}
            >
              {eventInfo.event.title}
            </span>
            <button
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the event click
                handleDeleteEvent(eventInfo.event.id);
              }}
            >
              &times;
            </button>
          </div>
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
            <h3 className={styles.formTitle}>Request Time Off</h3>
            <p className={styles.description}>
              Fill in the form to request your time off. Provide your name, and
              select the dates for your leave.
            </p>
            <form onSubmit={handleSubmitForm}>
              <div className={styles.formField}>
                <label>Staff Matricule:</label>
                <input
                  type="text"
                  name="matricule"
                  value={matricule}
                  onChange={handleChange}
                  required
                />
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
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

      <MPopupMessage
        type={popupType}
        title={popupType === "success" ? "Well done!" : "Oh snap!"}
        message={message}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>

    
  );
}

import React, { useState } from 'react';

export  function MSchedule() {
  const [schedule, setSchedule] = useState({
    Monday: { open: true, from: '09:00', to: '17:00' },
    Tuesday: { open: true, from: '09:00', to: '17:00' },
    Wednesday: { open: true, from: '09:00', to: '17:00' },
    Thursday: { open: true, from: '09:00', to: '17:00' },
    Friday: { open: true, from: '09:00', to: '17:00' },
    Saturday: { open: false, from: '', to: '' },
  });

  const handleToggle = (day) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], open: !prev[day].open }
    }));
  };

  const handleTimeChange = (day, field, value) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  return (
    <>  
      <form>
        {Object.keys(schedule).map((day) => (
          <div className="schedule-row" key={day}>
            <label>{day}</label>
            <div className="toggle">
              <input
                type="checkbox"
                id={`toggle-${day}`}
                checked={schedule[day].open}
                onChange={() => handleToggle(day)}
              />
              <label className="slider" htmlFor={`toggle-${day}`}></label>
            </div>
            {schedule[day].open ? (
              <>
                <input
                  type="time"
                  value={schedule[day].from}
                  onChange={(e) => handleTimeChange(day, 'from', e.target.value)}
                />
                <span>to</span>
                <input
                  type="time"
                  value={schedule[day].to}
                  onChange={(e) => handleTimeChange(day, 'to', e.target.value)}
                />
              </>
            ) : (
              <span>Closed</span>
            )}
          </div>
        ))}
       
      </form>

      <style jsx>{`
        .schedule-form {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          text-align: center;
        }

        p {
          font-size: 14px;
          color: #666;
          text-align: center;
        }

        .schedule-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap : 70px;
        }

        label {
          flex: 1;
          font-size: 14px;
          color: #333;
        }

        .toggle {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .toggle input {
          display: none;
        }

        .slider {
          width: 34px;
          height: 20px;
          background: #ccc;
          border-radius: 34px;
          position: relative;
          transition: background 0.2s;
        }

        .slider:before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          left: 2px;
          bottom: 2px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        input:checked + .slider {
          background: #0070f3;
        }

        input:checked + .slider:before {
          transform: translateX(14px);
        }

        input[type='time'] {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px;
          font-size: 14px;
          width: 100px;
          text-align: center;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }

        .cancel-button,
        .save-button {
          padding: 8px 12px;
          border-radius: 4px;
          border: none;
          font-size: 14px;
          cursor: pointer;
        }

        .cancel-button {
          background-color: #f5f5f5;
          margin-right: 10px;
          color: #333;
        }

        .save-button {
          background-color: #007bff;    
          color: white;
        }
      `}</style>
      </>
  );
}

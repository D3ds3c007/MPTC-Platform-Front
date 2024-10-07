import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export function MSchedule() {
  const { register, setValue } = useFormContext(); // Import setValue from React Hook Form
  const [schedule, setSchedule] = useState({
    Monday: { open: true, from: '09:00', to: '17:00' },
    Tuesday: { open: true, from: '09:00', to: '17:00' },
    Wednesday: { open: true, from: '09:00', to: '17:00' },
    Thursday: { open: true, from: '09:00', to: '17:00' },
    Friday: { open: true, from: '09:00', to: '17:00' },
    Saturday: { open: false, from: '', to: '' },
  });

  const handleToggle = (day) => {
    // Update the local state
    setSchedule((prev) => {
      const newSchedule = {
        ...prev,
        [day]: { ...prev[day], open: !prev[day].open },
      };
      // Sync with React Hook Form
      setValue(`${day}.open`, newSchedule[day].open); // Sync with form data
      return newSchedule;
    });
  };

  const handleTimeChange = (day, field, value) => {
    setSchedule((prev) => {
      const newSchedule = {
        ...prev,
        [day]: { ...prev[day], [field]: value },
      };
      // Sync with React Hook Form
      setValue(`${day}.${field}`, value); // Sync with form data
      return newSchedule;
    });
  };

  useEffect(() => {
    // Sync schedule state with form data on component mount
    Object.keys(schedule).forEach((day) => {
      setValue(`${day}.open`, schedule[day].open);
      setValue(`${day}.from`, schedule[day].from);
      setValue(`${day}.to`, schedule[day].to);
    });
  }, [schedule, setValue]); // Dependency on schedule state and setValue

  return (
    <>
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
          <input
            type="hidden"
            {...register(`${day}.open`)} // Register the open status
            value={schedule[day].open}
          />
          {schedule[day].open ? (
            <>
              <input
                type="time"
                {...register(`${day}.from`)} // Register the opening time
                value={schedule[day].from}
                onChange={(e) => handleTimeChange(day, 'from', e.target.value)}
              />
              <span>to</span>
              <input
                type="time"
                {...register(`${day}.to`)} // Register the closing time
                value={schedule[day].to}
                onChange={(e) => handleTimeChange(day, 'to', e.target.value)}
              />
            </>
          ) : (
            <span>Closed</span>
          )}
        </div>
      ))}
      <style jsx>{`
        .schedule-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 70px;
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
      `}</style>
    </>
  );
}

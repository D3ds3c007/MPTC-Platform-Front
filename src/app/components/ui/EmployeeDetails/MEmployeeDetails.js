import React from 'react';
import Image from 'next/image';
import styles from './MEmployeeDetails.module.css'; // Assuming you have CSS module for styling
import defaultPic from './picture1.png';

export function MEmployeeDetails({ employee }) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fullSchedule = daysOfWeek.map((day, index) => {
        const schedule = employee.schedule.find(s => s.dayOfWeek === index + 1);
        return schedule
            ? { day, begin: schedule.begin, end: schedule.end }
            : { day, begin: null, end: null };
    });

    return (
        <div className={styles.employeeDetailsContainer}>
            {/* Header */}
            <div className={styles.header}>
                <Image 
                    src={employee.picture?.[0]?.base64Image || defaultPic}
                    alt="Profile"
                    className={styles.profilePicture}
                    width={100}
                    height={100}
                />
                <div className={styles.headerInfo}>
                    <h2>{employee.fullName}</h2>
                    <p>{employee.privilege} | Attendance-ID : {employee.matricule}</p>
                </div>
            </div>

            {/* Basic Details */}
            <div className={styles.basicDetails}>
                <h3 className={styles.title}>Basic Details</h3>
                <div className={styles.detailsGrid}>
                    <div>
                        <p> Gender:</p> <strong>{employee.gender}</strong>
                    </div>
                    <div>
                        <p> Date of birth:</p> <strong>{employee.birth}</strong>
                    </div>
                    <div>
                        <p> Nationality:</p> <strong>{employee.nationality}</strong>
                    </div>
                    <div>
                        <p> National ID:</p> <strong>{employee.nationalId}</strong> 
                    </div>
                    <div>
                        <p> Email:</p><strong>{employee.email}</strong>
                    </div>
                    <div>
                        <p> Phone:</p><strong>{employee.phoneNumber}</strong>
                    </div>
                </div>
                {/* Staff Picture */}
                <div className={styles.imagesContainer}>
                    {employee.picture?.map((img, index) => (
                        <Image 
                            key={index}
                            src={img.base64Image}
                            alt={`Employee Image ${index + 1}`}
                            className={styles.employeeImage}
                            width={200}
                            height={200}
                        />
                    ))}
                </div>
            </div>

            {/* Schedule */}
            <div className={styles.schedule}>
                <h3 className={styles.title}>Schedule</h3>
                <div className={styles.scheduleGrid}>
                    {fullSchedule.map((schedule, index) => (
                        <div key={index} className={styles.scheduleItem}>
                            <strong>{schedule.day}</strong>
                            {schedule.begin ? (
                                <>
                                    <span className={styles.timeGreen}>{schedule.begin}</span>
                                    <span className={styles.timeRed}>{schedule.end}</span>
                                </>
                            ) : (
                                <span className={styles.dayOff}>Day Off</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

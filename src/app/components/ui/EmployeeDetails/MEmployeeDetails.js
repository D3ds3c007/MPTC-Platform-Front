import React from 'react';
import Image from 'next/image';
import styles from './MEmployeeDetails.module.css'; // Assuming you have CSS module for styling
import picture1 from './picture1.png';
import {MLoading} from "@/app/components/ui/Loading/MLoading";
import defaultPic from './picture1.png';

export function MEmployeeDetails({ employee }) {    
    // Map dayOfWeek number to day names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Create the full week schedule (with missing days marked as 'Day Off')
    const fullSchedule = daysOfWeek.map((day, index) => {
        const schedule = employee.schedule.find(s => s.dayOfWeek === index + 1); // dayOfWeek is 1-indexed (1=Monday, ..., 7=Sunday)
        return schedule
            ? { day, begin: schedule.begin, end: schedule.end }
            : { day, begin: null, end: null }; // Mark as Day Off if no schedule found
    });

    return (
        <div className={styles.employeeDetailsContainer}>
            {/* Header */}
            <div className={styles.header}>
                {employee.picture && employee.picture.length > 0 && employee.picture[0].base64Image ? 
                    <Image src={employee.picture[0].base64Image} alt="Profile" className={styles.profilePicture} width={100} height={100} /> : 
                    <Image src={defaultPic} alt="Profile" className={styles.profilePicture} />
                }
                <div className={styles.headerInfo}>
                    <h2>{employee.fullName}</h2>
                    <p>{employee.privilege} | Attendance-ID : {employee.matricule}</p>
                </div>
            </div>

            {/* Basic Details */}
            <div className='card' style={{
                margin: '20px',
                padding: '25px',
                borderRadius: '10px',
            }}>
                <h3 className={styles.title}>Basic Details</h3>
                <table style={{ width: '100%', marginBottom: '1rem' }} className='table'>
                    <tbody>
                        <tr>
                            <td><strong>Gender</strong></td>
                            <td>{employee.gender}</td>
                            <td><strong>Date of birth</strong></td>
                            <td>{employee.birth}</td>
                        </tr>
                        <tr>
                            <td><strong>Nationality</strong></td>
                            <td>{employee.nationality}</td>
                            <td><strong>National ID</strong></td>
                            <td>{employee.nationalId}</td>
                        </tr>
                        <tr>
                            <td><strong>Email Address</strong></td>
                            <td>{employee.email}</td>
                            <td><strong>Phone Number</strong></td>
                            <td>{employee.phoneNumber}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.imagesContainer}>
                    {employee.picture && employee.picture.length > 0 && employee.picture[0].base64Image ?
                        employee.picture.map((img, index) => (
                            <Image key={index} src={img.base64Image} alt={`Employee Image ${index + 1}`} className={styles.employeeImage} width={200} height={200} />
                        )) : null
                    }
                </div>
            </div>

            {/* Schedule */}
            <div className={styles.schedule}>
                <h3 className={styles.title}>Schedule</h3>
                <div className={styles.scheduleGrid}>
                    {fullSchedule.map((schedule, index) => (
                        <div key={index} className={styles.scheduleItem}>
                            <strong style={{ fontSize: "12px", width: "60px" }}>{schedule.day}</strong>
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

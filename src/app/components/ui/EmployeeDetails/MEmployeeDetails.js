import React from 'react';
import Image from 'next/image';
import styles from './MEmployeeDetails.module.css'; // Assuming you have CSS module for styling
import picture1 from './picture1.png';

const employee = {
    picture: picture1, // replace with the correct image path
    name: 'John Doe',
    role: 'Professor',
    attendanceID: 'A-1012',
    gender: 'Male',
    dob: '12/07/2003',
    nationality: 'Malagasy',
    nationalID: '10100012000',
    email: 'raitra007@gmail.com',
    phone: '+261 34 60 879 41',
    schedule: {
        Mon: { start: null, end: null }, // Day off
        Tue: { start: '08:00 AM', end: '07:30 PM' },
        Wed: { start: '08:00 AM', end: '07:30 PM' },
        Thu: { start: '08:00 AM', end: '07:30 PM' },
        Fri: { start: '08:00 AM', end: '07:30 PM' },
        Sat: { start: '08:00 AM', end: '07:30 PM' },
    },
    images: [
        '/path-to-image1.jpg',
        '/path-to-image2.jpg',
        '/path-to-image3.jpg',
    ]
};

export  function MEmployeeDetails() {
    return (
        <div className={styles.employeeDetailsContainer}>
            {/* Header */}
            <div className={styles.header}>
                <Image src={employee.picture} alt="Profile" className={styles.profilePicture} width={100} height={100} />
                <div className={styles.headerInfo}>
                    <h2>{employee.name}</h2>
                    <p>{employee.role} | Attendance-ID : {employee.attendanceID}</p>
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
                            <td>{employee.dob}</td>
                        </tr>
                        <tr>
                            <td><strong>Nationality</strong></td>
                            <td>{employee.nationality}</td>
                            <td><strong>National ID</strong></td>
                            <td>{employee.nationalID}</td>
                        </tr>
                        <tr>
                            <td><strong>Email Address</strong></td>
                            <td>{employee.email}</td>
                            <td><strong>Phone Number</strong></td>
                            <td>{employee.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.imagesContainer}>
                    {employee.images.map((img, index) => (
                        <Image key={index} src={picture1} alt={`Employee Image ${index + 1}`} className={styles.employeeImage} width={200} height={200} />
                    ))}
                </div>
            </div>

            {/* Schedule */}
             <div className={styles.schedule}>
                <h3 className={styles.title}>Schedule</h3>
                <div className={styles.scheduleGrid}>
                    {Object.entries(employee.schedule).map(([day, times], index) => (
                        <div key={index} className={styles.scheduleItem}>
                            <strong style={{
                                fontSize:"12px"
                            }}>{day}</strong>
                            {times.start ? (
                                <>
                                    <span className={styles.timeGreen}>{times.start}</span>
                                    <span className={styles.timeRed}>{times.end}</span>
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

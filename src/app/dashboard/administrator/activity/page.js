'use client';

import { MAttendanceRecord } from "@/app/components/ui/AttendanceRecord/MAttendanceRecord";
import { useEffect, useState } from "react";
import axios from '@/app/lib/axiosInstance';
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import { MPopup } from "@/app/components/ui/Popup/MPopup";
import { MAttendanceForm } from "@/app/components/ui/pages/AttendanceForm/MAttendanceForm";

export default function ActivityPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null); // Track current record for editing
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch data using axios
        const fetchData = async () => {
            try {
                const response = await axios.get("Attendance/records");
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Ensure loading state is updated
            }
        };

        fetchData();
    }, []);

    const handleAddButtonClick = () => {
        setIsEditing(false)
        setIsPopupVisible(true);
    };

    const handleEditButtonClick = (record) => {
        setIsEditing(true); // We are editing a record
        setCurrentRecord(record); // Set the record to be edited
        setIsPopupVisible(true);
    };

    const handleAddRecord = (newRecord) => {
        setData((prevData) => [...prevData, newRecord]); // Add new record to the state
        setIsPopupVisible(false); // Close the popup
    };

    const handleEditRecord = (updatedRecord) => {
        console.log(data + "Before updated ");
        
        setData((prevData) =>
            prevData.map((item => item.attendanceId === updatedRecord.attendanceId ? updatedRecord : item))
        );
        console.log(data + "updated ");
        setIsPopupVisible(false); // Close the popup after editing
    };

    const onClose = () => {
        setIsPopupVisible(false);
    };

    return (
        <>

            <h1 style={{
                color : "var(--dark-blue)",
                fontWeight: "600"
            }}>Attendance Records</h1>  
            {isPopupVisible && 
                <MPopup title="Add Employee" onClose={onClose}>
                    <MAttendanceForm onAddRecord={handleAddRecord} onEditRecord={handleEditRecord} initialData={currentRecord} isEditing={isEditing} setIsEditing={setIsEditing} />
                </MPopup>}
                
            {loading ? <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}><MLoading /></div> : <MAttendanceRecord productsData={data} onClick={handleAddButtonClick} onEditClick={handleEditButtonClick}/>}
        </>
    );
}

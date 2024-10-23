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
        setIsPopupVisible(true);
    };

    const handleAddRecord = (newRecord) => {
        setData((prevData) => [...prevData, newRecord]); // Add new record to the state
        setIsPopupVisible(false); // Close the popup
    };

    const onClose = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            {isPopupVisible && 
                <MPopup title="Add Employee" onClose={onClose}>
                    <MAttendanceForm onAddRecord={handleAddRecord} />
                </MPopup>}
            {loading ? <MLoading /> : <MAttendanceRecord productsData={data} onClick={handleAddButtonClick} />}
        </>
    );
}

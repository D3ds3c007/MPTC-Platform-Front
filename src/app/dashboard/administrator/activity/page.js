'use client';

import  {MAttendanceRecord}  from "@/app/components/ui/AttendanceRecord/MAttendanceRecord";
import {useEffect, useState} from "react";
import  axios from '@/app/lib/axiosInstance';
import { MLoading } from "@/app/components/ui/Loading/MLoading";


export default function ActivityPage(){
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //fetch data using axios
         axios.get("Attendance/records")
        .then(response => {
            console.log(response.data);
            setData(response.data);
            setLoading(false);  // Set fetched data to the state
        })
        .catch
        (error => {
            console.log(error);
            setLoading(false);
        });
        
    }, []);


    return(
        <>
            {loading ? <MLoading /> : <MAttendanceRecord productsData={data} />}
        </>
    )
}

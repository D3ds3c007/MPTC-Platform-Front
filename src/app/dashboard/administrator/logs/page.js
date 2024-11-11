'use client';

import { use, useEffect, useState } from "react";
import axios from '@/app/lib/axiosInstance';
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import { MLogsRecord } from "@/app/components/ui/LogsRecord/MLogsRecord";

export default function LogsPage() {
    const [logData, setLogData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      
        const fetchData = async () => {
        console.log("Fetching leaderboard data");
        try {
            setIsLoading(true);
            const response = await axios.get(`/attendance/activity-logs`);
            setData(response.data);
            setIsLoading(false);
        }
        catch (error) {
            setLoading(false);
            console.error('Error fetching leaderboard data:', error);
        }
        };
        fetchData();
    
    }, []);

    useEffect(() => {
        console.log(logData);
    }, [logData]);



    return (
        <>

            <h1 style={{
                color : "var(--dark-blue)",
                fontWeight: "600"
            }}>Logs Records</h1>  
           
                
            {loading ? <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}><MLoading /></div> : <MLogsRecord 
                                data={logData} 
                                setLogData={setLogData} 
                            />}
        </>
    );
}

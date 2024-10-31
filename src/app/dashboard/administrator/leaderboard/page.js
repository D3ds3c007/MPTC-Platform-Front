'use client';   
import MAttendanceLeaderboard from "@/app/components/ui/AttendanceLeaderBoard/MAttendanceLeaderBoard";
import React, { useState, useEffect, useRef } from "react";
import axios from "@/app/lib/axiosInstance";
import { MLoading } from "@/app/components/ui/Loading/MLoading";

export default function LeaderboardPage() {

    const [leaderboardData, setLeaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
      
            const fetchData = async () => {
            console.log("Fetching leaderboard data");
            try {
                setIsLoading(true);
                const response = await axios.get(`/attendance/leaderboard`);
                setLeaderboardData(response.data);
                setIsLoading(false);
            }
            catch (error) {
                setIsLoading(false);
                console.error('Error fetching leaderboard data:', error);
            }
            };
            fetchData();
        
    }, []);
    

    return(
        <>
        {isLoading ? <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}><MLoading /></div> : 
            <MAttendanceLeaderboard 
                data={leaderboardData} 
                setLeaderboardData={setLeaderboardData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                />
    }
        </>
    )
}
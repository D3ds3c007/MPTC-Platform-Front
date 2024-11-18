'use client';   
import MAttendanceLeaderboard from "@/app/components/ui/AttendanceLeaderBoard/MAttendanceLeaderBoard";
import React, { useState, useEffect, useRef } from "react";
import axios from "@/app/lib/axiosInstance";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import { MTimeOffCalendar } from "@/app/components/ui/TimeOffCalendar/MTimeOffCalendar";

export default function TimeOffPage() {

    



    // useEffect(() => {
      
    //         const fetchData = async () => {
    //         console.log("Fetching leaderboard data");
    //         try {
    //             setIsLoading(true);
    //             const response = await axios.get(`/attendance/leaderboard`);
    //             setLeaderboardData(response.data);
    //             setIsLoading(false);
    //         }
    //         catch (error) {
    //             setIsLoading(false);
    //             console.error('Error fetching leaderboard data:', error);
    //         }
    //         };
    //         fetchData();
        
    // }, []);
    

    return(
        <>
            <MTimeOffCalendar />
        </>
    )
}
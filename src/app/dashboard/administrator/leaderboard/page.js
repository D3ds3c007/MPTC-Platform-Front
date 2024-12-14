'use client';   
import MAttendanceLeaderboard from "@/app/components/ui/AttendanceLeaderBoard/MAttendanceLeaderBoard";
import MTopLeaderBoard from "@/app/components/ui/AttendanceLeaderBoard/MTopLeaderBoard";

import React, { useState, useEffect, useRef } from "react";
import axios from "@/app/lib/axiosInstance";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import defaultPic from './picture1.png';


export default function LeaderboardPage() {

    const [leaderboardData, setLeaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const topThree = [
        {
          name: "Ulama Rehan",
          points: "0 lateness, 0 absence",
          username: "username",
          image: defaultPic,
        },
        {
          name: "Ulama R.",
          points: "3 lateness, 0 absence",
          username: "username2",
          image: defaultPic,
        },
        {
          name: "Ulama R.",
          points: "4   lateness, 0 absence",
          username: "username3",
          image: defaultPic,
        },
      ];



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
        <h1 style={{
                color : "var(--dark-blue)",
                fontWeight: "600"
            }}>Leaderboard Page</h1>  
        {isLoading ? <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}><MLoading /></div> :
         
            <>
                <MTopLeaderBoard data={topThree}/>
            
            <MAttendanceLeaderboard
                    data={leaderboardData}
                    setLeaderboardData={setLeaderboardData}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading} />
            </>
    }
        </>
    )
}
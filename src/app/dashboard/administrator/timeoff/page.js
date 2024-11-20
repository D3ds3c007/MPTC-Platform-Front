'use client';   
import MAttendanceLeaderboard from "@/app/components/ui/AttendanceLeaderBoard/MAttendanceLeaderBoard";
import React, { useState, useEffect, useRef } from "react";
import axios from "@/app/lib/axiosInstance";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import { MTimeOffCalendar } from "@/app/components/ui/TimeOffCalendar/MTimeOffCalendar";

export default function TimeOffPage() {

    const [timeOffEvents, setTimeOffEvents] = useState([]);
    const [isLoaading, setIsLoading] = useState(false);

    const getRandomVividColor = () => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 50%)`;
    };

    useEffect(() => {
      
            const fetchData = async () => {
            console.log("Fetching timeoff data");
            try {
                setIsLoading(true);
                const response = await axios.get(`/Timeoff/timeoffs`);

                setTimeOffEvents(response.data);

                const formattedEvents = response.data.map(event => ({
                    id: event.idTimeOff,
                    title: `${event.employeeName} (${event.staffMatricule})`,
                    start: new Date(new Date(event.beginTimeOff).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    end: new Date(new Date(event.endTimeOff).getTime() +  48 * 60 * 60 * 1000).toISOString().split('T')[0],
                    color: getRandomVividColor()
                }));

                setTimeOffEvents(formattedEvents);
                console.log(timeOffEvents);
                setIsLoading(false);
            }
            catch (error) {
                setIsLoading(false);
                console.error('Error fetching time off events data:', error);
            }
            };
            fetchData();
        
    }, []);
    

    return(
        <>
            {isLoaading ? 
                <MLoading /> : <MTimeOffCalendar data={timeOffEvents} setData={setTimeOffEvents}/>
            }
        </>
    )
}
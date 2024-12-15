'use client';   
import MTopLeaderBoard from "@/app/components/ui/AttendanceLeaderBoard/MTopLeaderBoard";
import MLeaderBoardList from "@/app/components/ui/AttendanceLeaderBoard/MLeaderBoardList";
import React, { useState, useEffect, useRef } from "react";
import axios from "@/app/lib/axiosInstance";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import defaultPic from './picture1.png';
import styles from './style.module.css';


export default function LeaderboardPage() {

    const [leaderboardData, setLeaderboardData] = useState([]);
    const [topThree, setTopThree] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [search, setSearch] = useState('');
    const hasFetched = useRef(false);
    



    useEffect(() => {
      
            const fetchData = async () => {
            console.log("Fetching leaderboard data");
            try {
                setIsLoading(true);
                const response = await axios.get(`/attendance/leaderboard`);
                setLeaderboardData(response.data);

                //set top3 data and respect the attributes
                const topThree = response.data.slice(0, 3);
                //create a new array with the top3 data
                const topThreeData = topThree.map((user, index) => {
                    return {
                        name: user.staffName,
                        points: `${user.latenessCount} lateness, ${user.absenceCount} absence`,
                        username: user.matricule,
                        image: user.image64 || defaultPic
                        
                    }
                });
                setTopThree(topThreeData);

                setIsLoading(false);
            }
            catch (error) {
                setIsLoading(false);
                console.error('Error fetching leaderboard data:', error);
            }
            };
            fetchData();
        
    }, []);


    useEffect(() => {
        if (hasFetched.current) {
            // Skip fetch if it's the initial render
            const fetchData = async () => {
                try {
                    setIsLoading(true);
                    const response = await axios.get(`/attendance/leaderboard?month=${selectedMonth}`);
                    setLeaderboardData(response.data);

                    const topThree = response.data.slice(0, 3);
                    //create a new array with the top3 data
                    const topThreeData = topThree.map((user, index) => {
                        return {
                            name: user.staffName,
                            points: `${user.latenessCount} lateness, ${user.absenceCount} absence`,
                            username: user.matricule,
                            image: user.image64 || defaultPic
                            
                        }
                    });
                    setTopThree(topThreeData);


                } catch (error) {
                    console.error('Error fetching leaderboard data:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchData();
        } else {
            hasFetched.current = true; // Set to true after the initial render
        }
    }, [selectedMonth]);

    const filteredData = leaderboardData.filter(item => {
        const matchesSearch = item.staffName.toLowerCase().includes(search.toLowerCase());
        // const itemMonth = new Date(item.date).getMonth() + 1; // Month is zero-indexed
        // const matchesMonth = !selectedMonth || itemMonth === parseInt(selectedMonth);

        return matchesSearch;
    });
    

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
            
            {/* <MAttendanceLeaderboard
                    data={leaderboardData}
                    setLeaderboardData={setLeaderboardData}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading} /> */}

            <div className={styles['form-group']} name="test">
                <select
                    select
                    label="Select Month"
                    value={selectedMonth}
                    onChange={e => setSelectedMonth(e.target.value)}
                    SelectProps={{ native: true }}
                >
                    <option value="">All Months</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {new Date(0, i).toLocaleString('default', { month: 'long' })}
                        </option>
                    ))}
                    
                </select>
                <input
                    type="text"
                    placeholder="Search by Employee Name ... "
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <MLeaderBoardList data={filteredData}/>

            </>
    }
        </>
    )
}
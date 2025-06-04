'use client';
import { MCard } from "@/app/components/ui/Card/MCard";
import { MActivity } from "@/app/components/ui/Activity/MActivity";
import { MVideoFeed } from "@/app/components/ui/VideoFeed/MVideoFeed";
import { useState, useEffect } from "react";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import axios from "@/app/lib/axiosInstance";
import * as signalR from '@microsoft/signalr';
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend,
    ResponsiveContainer
  } from 'recharts';

  const data = [
    { day: 'Monday', averageLate: 6 },
    { day: 'Tuesday', averageLate: 3 },
    { day: 'Wednesday', averageLate: 2 },
    { day: 'Thursday', averageLate: 3 },
    { day: 'Friday', averageLate: 4 },
    { day: 'Saturday', averageLate: 0 },
  ];


const CustomBar = ({ x, y, width, height, fill, onClick, onMouseEnter, onMouseLeave }) => {
  const barHeight = height - 20; // Adding bottom padding
  const radius = 37;

  return (
    <g onClick={onClick}
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
     cursor="pointer">
      <rect
        x={x}
        y={y + 10}
        width={width}
        height={barHeight}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

export default function AdminPage() {
    const [activities, setActivities] = useState([]);
    const [currentDate, setCurrentDate] = useState('');
    const [cardStats, setCardStats] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    

     const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    useEffect(() => {
        setCurrentDate(getCurrentDate());
        setIsLoading(true);
        axios.get('/attendance/stats')
            .then((res) => {
                console.log(res);
                setCardStats(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const getCurrentDate = () => {
        const now = new Date();
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(now);
    };

    const mapToActivityFormat = (data) => {
        return data.map(item => {
            const staffName = item.staff.firstName;
            const role = item.staff.privilegeName;
            const variant = item.eventType.toLowerCase() === "clockin" ? "clock-in" : "clock-out"; // Map eventType to variant
    
            return {
                attendance: staffName,
                time: new Date(item.eventTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                role: role.charAt(0).toUpperCase() + role.slice(1), // Capitalize the role
                type: variant,
                variant:variant,
                show: true
            };
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5193/attendancehub")
                .withAutomaticReconnect()
                .configureLogging(signalR.LogLevel.Information)
                .build();
            
            connection.start()
                .then(() => {
                    console.log('Connected!');
                    connection.on("ReceiveRecentActivities", (recentLogs) => {
                        console.log('Received recent logs : ', recentLogs);
                        const activities = mapToActivityFormat(recentLogs);
                        console.log('Mapped activities : ', activities);
                        setActivities(activities);
                    });
                })
                .catch(err => console.error(err.toString()));

            return () => {
                if (connection) {
                    connection.stop();
                }
            };
        }
    }, []);

    return (
        <>   
        <h1 style={{
            color : "var(--dark-blue)",
            fontWeight: "600"
        }}>Administrator Dashboard</h1> 

        {/* METRICS  */}
         
        <div className="row" style={{gap:0, margin:0}}>
            <div className="col-md-4">
                {/* <MIconicCard data={isLoading ? <MLoading /> : cardStats.totalStaff} label="This number indicates the total staff number at MPTC" bootstrapclassName="col-md-4" variant="primary" bootstrapClass="col-md-12"/> */}
                <MIconicCard data={"6/20"} label="Staff present vs. expected at MPTC" bootstrapclassName="col-md-4" variant="primary" bootstrapClass="col-md-12"/>

            </div>
            <div className="col-md-4">
                {/* <MIconicCard data={isLoading ?  <MLoading /> : cardStats.punctualityRate + " %"} label="Punctuality rate indicator" bootstrapclassName="col-md-4" variant="warning" bootstrapClass="col-md-12" icon="bi bi-hourglass-split"/> */}
                <MIconicCard data={"98.25%"} label="Punctuality rate indicator" bootstrapclassName="col-md-4" variant="warning" bootstrapClass="col-md-12" icon="bi bi-hourglass-split"/>

            </div>
            <div className="col-md-4">
                {/* <MIconicCard data={isLoading ?  <MLoading /> : cardStats.latenessDurationAVG + " min"} label="Average lateness (mins)." bootstrapclassName="col-md-4" variant="danger" bootstrapClass="col-md-12" icon="bi bi-clock-history"/> */}
                <MIconicCard data={"4.6 min"} label="Average lateness (mins)." bootstrapclassName="col-md-4" variant="danger" bootstrapClass="col-md-12" icon="bi bi-clock-history"/>

            </div>
        </div>  

        {/* METRICS */}

        {/* Camera FEED */}

        <div className="row">
            <div className="col-md-6" style={{ justifyContent:"center" }}>
                <MVideoFeed title="Clock In Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-in tracking." isIn="wsIn"/>
            </div>
            <div className="col-md-6">
                <MVideoFeed title="Clock Out Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-out tracking." isIn="wsOut"/>
            </div>
        </div>

        {/* Camera FEED */}


        <div className="row">
            <div className="col-md-6">
                <MCard title="Live Activities">
                    {activities.slice().reverse().map((activity, index) => (
                        <MActivity 
                            key={index} 
                            {...activity} 
                            show={activity.show} // Pass the individual show prop
                        />
                    ))}
                </MCard>
            </div>

            <div className="col-md-6">
                    {/* <div style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:'40px'
                    }}>
                        <i className={`bx bx-calendar`} style={{ fontSize: '160px' }}></i>
                        <h4>Today is {currentDate}</h4>
                    </div> */}
                    <ResponsiveContainer width="100%"  style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' }} height={450}>    
                        <BarChart data={data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar 
                            dataKey="averageLate" 
                            fill="#0000a0"
                            radius={[50, 50, 0, 0]} 
                            shape={(props) => (
                            <CustomBar
                                {...props}
                                fill={hoveredIndex === props.index ? '#0000a0' : '#d3d3f8'}
                                onMouseEnter={() => handleMouseEnter(props.index)}
                                onMouseLeave={handleMouseLeave}
                            />
                            )}
                            name="Avg Lateness (min)" />
                        </BarChart>
                    </ResponsiveContainer>
                  
            </div>
        </div>
        </>
    );
}

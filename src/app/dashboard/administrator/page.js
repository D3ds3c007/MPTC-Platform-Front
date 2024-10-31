'use client';
import { MCard } from "@/app/components/ui/Card/MCard";
import { MActivity } from "@/app/components/ui/Activity/MActivity";
import { MVideoFeed } from "@/app/components/ui/VideoFeed/MVideoFeed";
import { useState, useEffect } from "react";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import * as signalR from '@microsoft/signalr';


export default function AdminPage() {
    const [activities, setActivities] = useState([]);
    const [currentDate, setCurrentDate] = useState('');


    useEffect(() => {
        setCurrentDate(getCurrentDate());
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
        if(typeof window !== 'undefined')
        {
            const connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5193/attendancehub")
                .withAutomaticReconnect()
                .configureLogging(signalR.LogLevel.Information)
                .build();
            
            connection.start().then(() => {
                console.log('Connected!');

                connection.on("ReceiveRecentActivities", (recentLogs) => {
                    console.log('Received recent logs : ', recentLogs);
                    const activities = mapToActivityFormat(recentLogs);

                    console.log('Mapped activities : ', activities);

                    setActivities(activities);
                });
            }).catch(err => console.error(err.toString()));

            return () => {
                if(connection)
                {
                    connection.stop();
                }
            }
        }
        }, []);

    return (
        <>   
        <h1 style={{
            color : "var(--dark-blue)",
            fontWeight: "600"
        }}>Administrator Dashboard</h1>    
         
        <div className="row" style={{gap:0,
            margin:0,
        }}>
                <div className="col-md-4" >
                        <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-4" variant="primary" bootstrapClass="col-md-12"/>
                </div>
                <div className="col-md-4">
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-4" variant="warning"  bootstrapClass="col-md-12"/>
                </div>
                <div className="col-md-4">
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-4" variant="danger"  bootstrapClass="col-md-12"/>
                </div>


        </div>  
            <div className="row">
                <div className="col-md-6" style={{
                    justifyContent:"center"
                }}>
                    <MVideoFeed title="Clock In Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-in tracking." isIn="wsIn"/>
                </div>

                <div className="col-md-6">
                    <MVideoFeed title="Clock Out Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-out tracking." isIn="wsOut"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <MCard title="Live Activities" >
                        {activities.slice().reverse().map((activity, index) => (
                            <MActivity 
                                key={index} 
                                {...activity} 
                                show={activity.show} // Pass the individual show prop
                            />
                        ))}
                    </MCard>
                </div>
                <div className="col-md-6" >
                    <MCard title="" >
                            <div style={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                alignItems:'center',
                                gap:'40px'

                            }}>
                                <i className={`bx bx-calendar `} style={{
                                    fontSize: '160px',
                                }}></i>
                                <h4>
                                    Today is {currentDate}
                                </h4>
                            </div>
                            
                    </MCard>
                 </div>
                

            </div>
                
        </>
    );
}

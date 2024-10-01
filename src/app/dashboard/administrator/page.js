'use client';
import { MCard } from "@/app/components/ui/Card/MCard";
import { MActivity } from "@/app/components/ui/Activity/MActivity";
import { MVideoFeed } from "@/app/components/ui/VideoFeed/MVideoFeed";
import { useState, useEffect } from "react";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";

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


    // Simulate adding new activity
    useEffect(() => {
        const interval = setInterval(() => {
            const newActivity = {
                attendance: "New Activity",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time
                role: "Role",
                variant: "clock-in",
                show: true, // Set show to true for new activity
            };

            // Add new activity to the top of the list
            setActivities((prev) => {
                const updatedActivities = [newActivity, ...prev]; // Prepend the new activity

                // Limit the number of activities to 2
                if (updatedActivities.length > 2) {
                    return updatedActivities.slice(0, 2); // Keep only the first two
                }
                return updatedActivities;
            });

            // Set a timeout to remove the animation state after the animation duration
            setTimeout(() => {
                setActivities((prev) => {
                    // Set show to false for the newly added activity after animation
                    return prev.map((activity, index) =>
                        index === 0 ? { ...activity, show: true, variant: "clock-out" } : activity // Set the first activity's show to false
                    );
                });
            }, 500); // Match this with the duration of the CSS transition
        }, 5000); // Change this interval to your preference

        return () => clearInterval(interval); // Cleanup interval on unmount
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
                    <MVideoFeed title="Clock In Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-in tracking." isIn="true"/>
                </div>

                <div className="col-md-6">
                    <MVideoFeed title="Clock Out Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-out tracking." isIn="false"/>
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

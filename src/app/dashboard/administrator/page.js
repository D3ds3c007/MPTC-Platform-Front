'use client';
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MActivity } from "@/app/components/ui/Activity/MActivity";
import { MVideoFeed } from "@/app/components/ui/VideoFeed/MVideoFeed";
import { useState, useEffect } from "react";

export default function AdminPage() {
    const [activities, setActivities] = useState([]);

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
            <div className="row">
                <div className="col-md-6">
                    <MVideoFeed title="Clock In Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-in tracking." isIn="true"/>
                </div>

                <div className="col-md-6">
                    <MVideoFeed title="Clock Out Camera Feed" description="Live Camera Feed: Real-time face recognition for accurate clock-out tracking." isIn="false"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <MCard title="Live Activities" description="This Table Displays real-time clock-in and clock-out status for employees.">
                        {activities.slice().reverse().map((activity, index) => (
                            <MActivity 
                                key={index} 
                                {...activity} 
                                show={activity.show} // Pass the individual show prop
                            />
                        ))}
                    </MCard>
                </div>
            </div>
        </>
    );
}

'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MUploadZipFile } from "@/app/components/ui/UploadZipFile/MUploadZipFile";
import { MInfoCard } from "@/app/components/ui/InfoCard/MInfoCard";
import { MLittleCard } from "@/app/components/ui/LittleCard/MLittleCard";
import { useState, useEffect } from "react";

export default function Info(){
    const [examId, setExamId] = useState(null);

    useEffect(() => {

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('parameter_id');
      
        if (id) {
          // console.log('Parameter ID:', id);
          setExamId(id);
        }

    }, []);

    const handleClick = async () => {
        console.log('Delete Exam');
        try {
            const response = await fetch(`http://localhost:5193/api/v1/Exam/delete-exam/${examId}`, {
                method: 'DELETE',
            }); // Update the URL if needed
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // const data = await response.json();
            // console.log("Data fetched successfully:", data);

            window.location.href = '/dashboard/professor/exam';

        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    

    return(
        <>
            <div className="row">
                <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '20px',
                }}>

                    <MInfoCard examId={examId}></MInfoCard>

                    <div>
                    <a onClick={handleClick}>
                        <button style={{
                            border: 'solid 2px #E91112',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            float: 'right',
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E91112" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        </button>
                    </a>

                    <br></br>
                    <br></br>
                    
                    <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>Upload Scanned Papers</p>
                        <MCard title="">
                            
                        <MUploadZipFile></MUploadZipFile>

                        </MCard>
                        <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>Exam Related Files</p>

                        <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '20px',
                        }}>
                            <MLittleCard></MLittleCard>
                            <MLittleCard type="Assetnote"></MLittleCard>
                        </div>
                    </div>
                        
                </div>
            </div>
            
        </>
    )
}
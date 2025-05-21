'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MUploadZipFile } from "@/app/components/ui/UploadZipFile/MUploadZipFile";
import { MInfoCard } from "@/app/components/ui/InfoCard/MInfoCard";
import { MLittleCard } from "@/app/components/ui/LittleCard/MLittleCard";
import { MNaming } from "@/app/components/ui/Naming/MNaming";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
import { useState, useEffect } from "react";

export default function Info(){
    const [exam, setExam] = useState(null);

    useEffect(() => {

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('parameter_id');
      
        if (id) {
            console.log('Exam ID:', id);
            
            const examsData = JSON.parse(localStorage.getItem('examsData'));
            console.log('Exams Data:', examsData);

            // Retrieve the single exam dynamically
            const numericId = Number(id);
            const singleExam = examsData ? examsData.find(exam => exam.idExam === numericId) : null;
            
            if (singleExam) {
            console.log('Retrieved Single Exam:', singleExam);
            setExam(singleExam);  // Set your state with the retrieved exam data
            }
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
    
    if (!exam) {
        return             <MLoading />;  // Or return null, or a spinner, etc.
    }
    return(
        <MCard title="Exam Information">
            <br></br>

            <div className="row">
                <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                }}>

                    <MNaming name={exam.name} url="/dashboard/professor/exam"></MNaming>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '10px',
                        }}>
                        <a href={`../exam/update?parameter_id=${exam.idExam}`}>
                        <button style={{
                            background: '#01F073',
                            border: 'none',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                        </button>
                    </a>

                    <a onClick={handleClick}>
                        <button style={{
                            border: 'solid 2px #E91112',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E91112" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        </button>
                    </a>
                    </div>
                    
                
                </div>
            </div>

            <br></br>

            <div className="row">
                <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                }}>
                    <MInfoCard exam={exam}></MInfoCard>
                <div>

                    <br></br>
                    
                <p style={{
                    fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                    fontWeight: '600',
                    marginBottom: '0.625rem', /* 10px equivalent in rem */
                    color: '#7D06EA',
                    }}>Upload Scanned Papers</p>
                    <br></br>
                        
                    <MUploadZipFile></MUploadZipFile>

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
                        <MLittleCard title="A1finalterm22024" type="Subject"></MLittleCard>
                        <MLittleCard title="A1finalterm22024" type="Assetnote"></MLittleCard>
                    </div>
                </div>
                        
                </div>
            </div>
        </MCard>
            
    )
}
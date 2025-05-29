'use client';

import { MCard } from "@/app/components/ui/Card/MCard";
import { MLoadingProcess } from "@/app/components/ui/LoadingProcess/MLoadingProcess";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

import Image from "next/image";
import logo from "./Folder.gif";
import logo2 from "./Extractor.gif";
import { MProgressBar } from "@/app/components/ui/ProgressBar/MProgressBar";
import { MStudentForm } from "@/app/components/ui/StudentForm/MStudentForm";
import { set } from "react-hook-form";

export default function Process(){
    const [examId, setExamId] = useState(null);
    const [data, setData] = useState(null);
    const [step, setStep] = useState(1);

    useEffect(() => {

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('parameter_id');
      
        if (id) {
            // console.log('Parameter ID Process :', id);
            setExamId(id);
        }
    }, []);

    const handleFormSubmit = async (formData) => {
        console.log("Received in parent:", formData);
        setData(data);
        // console.log("Data in parent:", data);
        // console.log("Data in parent:", data.picture);
        // console.log("Data in parent:", data.picture[0].preview);

        await new Promise(resolve => setTimeout(resolve, 3000));
        setStep(2);

        await new Promise(resolve => setTimeout(resolve, 4000));
        setStep(3);

        // console.log('Inserting Student Papers');
        // try {
        //     const response = await fetch(`http://localhost:5193/api/v1/Exam/insert-student-paper/${examId}`); // Update the URL if needed
    
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! Status: ${response.status}`);
        //     }
    
        //     const data = await response.json();
        //     console.log("Data fetched successfully:", data);

        // } catch (error) {
        //     console.error("Failed to fetch data:", error);
        // }
    };

    return(
        <>
            <MCard title="Loading Process" >
                <div className={styles["progress-container"]}>
                    <MProgressBar time={2000} delay={1500} stepNumber={1} />
                    <MProgressBar time={2000} delay={4500} stepNumber={2} />
                    <MProgressBar time={2000} delay={7500} stepNumber={3} />
                </div>
        
                {/* Folder and Info */}
                <div className={styles["folder-container"]}>

                {/* Step 1 */}
                {step === 1 && (
                    <>
                        <h4 className={styles["step-name"]}>Step 1 : Insert Student Papers</h4>
                        <br></br>
                        <MStudentForm onSubmit={handleFormSubmit}></MStudentForm>
                    </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <>
                        <h4 className={styles["step-name"]}>Step 2 : Extract Student Writing</h4>
                        <Image src={logo2} alt="Logo" width={400} height={300} />
                        <div className={styles["timer"]}>
                            <p>Time left : <strong> 1min30s </strong></p>
                        </div>
                    </>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <>
                        <h4 className={styles["step-name"]}>Step 3 : Automatic Correction </h4>
                        <Image src={logo} alt="Logo" width={400} height={300} />
                        {/* <div className={styles["timer"]}>
                            <p>Time left : <strong> 1min27s </strong></p>
                        </div> */}
                    </>
                )}
        
        
                {/* <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '20px',
                    marginLeft: '20%',
                }} >
                    <a href="../exam/result" className={styles["text-link"]}>
                        <button className={styles["button-one"]}>
                            See Result
                        </button>
                    </a>
                    <a href="../exam/stats" className={styles["text-link"]}>
                        <button className={styles["button-one"]}>
                            See Stats
                        </button>
                    </a>
                </div> */}
                
                </div>
            </MCard>
                
            
        </>
    )
}
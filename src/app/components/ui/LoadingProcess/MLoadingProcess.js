import React, { useEffect, useState } from "react";
import styles from "@/app/components/ui/LoadingProcess/MLoadingProcess.module.css";
import Image from "next/image";
import logo from "./Folder.gif";
import logo2 from "./Extractor.gif";
import { MProgressBar } from "@/app/components/ui/ProgressBar/MProgressBar";
import { MUploadZipFileP } from "@/app/components/ui/UploadZipFileP/MUploadZipFileP";

export function MLoadingProcess({idExam}) {
  const [examId, setExamId] = useState(null);

  useEffect(() => {

      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('parameter_id');
    
      if (id) {
          console.log('Parameter ID Process :', id);
          setExamId(id);
      }
  }, []);

  return (
    <>
          
      <div className={styles["progress-container"]}>
        <MProgressBar time={4000} delay={1500} stepNumber={1} />
        <MProgressBar time={4000} delay={4500} stepNumber={2} />
        <MProgressBar time={4000} delay={7500} stepNumber={3} />
      </div>

      {/* Folder and Info */}
      <div className={styles["folder-container"]}>

        {/* Step 1 */}
        <h4 className={styles["step-name"]}>Step 1 : Step Insert Student Papers</h4>
        <br></br>
        <MUploadZipFileP></MUploadZipFileP>

        {/* Step 2 */}
        {/* <h4 className={styles["step-name"]}>Step 2 : Extract Student Writing</h4>
        <Image src={logo} alt="Logo" width={400} height={300} /> */}

        {/* Step 3 */}
        {/* <h4 className={styles["step-name"]}>Step 3 : Automatic Correction </h4>
        <Image src={logo} alt="Logo" width={400} height={300} /> */}

        
        {/* <div className={styles["timer"]}>
          <p>Time left : <strong> 1min30s </strong></p>
        </div> */}

        <button className={styles["button-one"]}>
            Correct Exam
        </button>

        <div className={styles["step-name"]}>
          {/* {isLinkVisible ? (
            <a href="../exam/result" className={styles["see-result-link"]}>
              See Result
            </a>
          ) : (
            stepName
          )} */}
        </div>
        
      </div>
      
    </>
  );
}

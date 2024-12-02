import React, { useEffect, useState } from "react";
import styles from "@/app/components/ui/LoadingProcess/MLoadingProcess.module.css";
import Image from "next/image";
import logo from "./Folder.gif";
import { MProgressBar } from "@/app/components/ui/ProgressBar/MProgressBar";

export function MLoadingProcess() {
  const [stepsCompleted, setStepsCompleted] = useState(false); // Tracks if all steps are completed
  const [progressText, setProgressText] = useState("60%"); // Default progress text
  const [stepName, setStepName] = useState("Step Name"); // Default step name
  const [isLinkVisible, setIsLinkVisible] = useState(false); // Tracks visibility of the link

  useEffect(() => {
    // Wait 2000ms and then mark all steps as completed
    const timer = setTimeout(() => {
      setStepsCompleted(true);
      setProgressText("Terminated"); // Change progress text to "Terminated"
      setStepName("See Result"); // Change step name to "See Result"
      setIsLinkVisible(true); // Make the link visible after 2000ms
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      <div className={styles["progress-container"]}>
        {/* Step 1 */}
        <div className={`${styles["step-bar"]} ${styles["step-bar-inactive"]}`}>
          <MProgressBar />
        </div>
        <div className={styles["step"]}>
          <div
            className={`${styles["step-circle"]} ${
              stepsCompleted ? styles["step-active"] : styles["step-inactive"]
            }`}
          >
            {stepsCompleted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              "1"
            )}
          </div>
        </div>

        {/* Step 2 */}
        <div className={`${styles["step-bar"]} ${styles["step-bar-inactive"]}`}>
          <MProgressBar />
        </div>
        <div className={styles["step"]}>
          <div
            className={`${styles["step-circle"]} ${
              stepsCompleted ? styles["step-active"] : styles["step-inactive"]
            }`}
          >
            {stepsCompleted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              "2"
            )}
          </div>
        </div>

        {/* Step 3 */}
        <div className={`${styles["step-bar"]} ${styles["step-bar-inactive"]}`}>
          <MProgressBar />
        </div>
        <div className={styles["step"]}>
          <div
            className={`${styles["step-circle"]} ${
              stepsCompleted ? styles["step-active"] : styles["step-inactive"]
            }`}
          >
            {stepsCompleted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              "3"
            )}
          </div>
        </div>
      </div>

      {/* Folder and Info */}
      <div className={styles["folder-container"]}>
        <Image src={logo} alt="Logo" width={400} height={300} />
      </div>
      <div className={styles["step-name"]}>
        {isLinkVisible ? (
          <a href="../exam/result" className={styles["see-result-link"]}>
            See Result
          </a>
        ) : (
          stepName
        )}
      </div>
      <div className={styles["progress-bar"]}>{progressText}</div>
      <div className={styles["timer"]}>
        Time left : <span>1min30s</span>
      </div>
    </>
  );
}

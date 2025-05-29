import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/components/ui/ProgressBar/MProgressBar.module.css";

export function MProgressBar({ time = 1000, stepNumber = 1, delay = 1000, percentage = "100%" }) {
  const progressBarRef = useRef(null);
  const [stepCompleted, setStepCompleted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      if (progressBarRef.current) {
        progressBarRef.current.style.transition = `width ${time}ms ease-in-out`;
        progressBarRef.current.style.width = percentage;

        const completeTimer = setTimeout(() => {
          setStepCompleted(true);
        }, time);

        // Cleanup for second timeout
        return () => clearTimeout(completeTimer);
      }
    }, delay);

    // Cleanup for initial delay
    return () => clearTimeout(startTimer);
  }, [time, delay]);

  return (
    <div className={styles["progress-container"]}>
      <div className={styles["progress-bar"]}>
        <div ref={progressBarRef} className={styles["progress"]}></div>
      </div>
      <div className={styles["step"]}>
        <div className={styles["step-circle"]}>
          {stepCompleted ? (
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
            stepNumber
          )}
        </div>
      </div>
    </div>
  );
}

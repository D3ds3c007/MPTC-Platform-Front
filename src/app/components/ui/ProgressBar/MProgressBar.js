import React, { useEffect, useRef } from "react";
import styles from "@/app/components/ui/ProgressBar/MProgressBar.module.css"; // Ensure this path is correct

export function MProgressBar() {
  const progressBarRef = useRef(null); // Reference to the progress bar element

  useEffect(() => {
    // Function to animate the progress bar
    const animateProgressBarOnce = () => {
      if (progressBarRef.current) {
        // Start the animation
        progressBarRef.current.style.width = "100%"; // Fill the bar

        // Reset the progress bar after 2 seconds
        setTimeout(() => {
          progressBarRef.current.style.width = "0"; // Reset to start
        }, 2000);
      }
    };

    animateProgressBarOnce(); // Run the animation once on mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className={styles["progress-bar"]}>
      <div ref={progressBarRef} className={styles["progress"]}></div>
    </div>
  );
}

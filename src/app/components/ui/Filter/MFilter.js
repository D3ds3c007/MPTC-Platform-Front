import styles from './MFilter.module.css';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import filtre from "./filtre.png";

export function MFilter({ files, onFilter }) {
  const [showPopup, setShowPopup] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const [levels, setLevels] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [periods, setPeriods] = useState([]);

  // Toggle popup and reset filters when closing
  const togglePopup = () => {
    if (showPopup) {
      // If closing the popup, reset filters
      resetFilters();
    }
    setShowPopup(!showPopup);
  };

  // Reset all filters to 'All' and show all files
  const resetFilters = () => {
    setSelectedLevel("All");
    setSelectedPeriod("All");
    // setSelectedSubject("All");
    onFilter(files); // Show all files
  };

  // Handle changes for each filter
  const handleLevelChange = (e) => {
    const selectedLevelName = e.target.value;
    setSelectedLevel(selectedLevelName);
    applyFilter(selectedLevelName, selectedSubject, selectedPeriod);
  };

  const handlePeriodChange = (e) => {
    const selectedPeriodName = e.target.value;
    setSelectedPeriod(selectedPeriodName);
    applyFilter(selectedLevel, selectedSubject, selectedPeriodName);
  };

  // const handleSubjectChange = (e) => {
  //   const selectedSubjectName = e.target.value;
  //   setSelectedSubject(selectedSubjectName);
  //   applyFilter(selectedLevel, selectedSubjectName, selectedPeriod);
  // };

  // Apply the filter based on selected options
  const applyFilter = (level, subject, period) => {
    const filteredFiles = files.filter((file) => {
      const matchesLevel = level === "All" || file.level === level;
      // const matchesSubject = subject === "All" || file.subject === subject;
      const matchesPeriod = period === "All" || file.period === period;
      return matchesLevel && matchesPeriod;
    });

    onFilter(filteredFiles);
  };

  // Prevent closing popup when clicking inside
  const handlePopupClick = (e) => e.stopPropagation();

  // Fetch levels, subjects, and periods
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5193/api/v1/Data/exam-data');
        const data = await response.json();

        setLevels(data[0]);
        // setSubjects(data[1]);
        setPeriods(data[2]);

      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles["filter-container"]}>
      <div className={styles["icon"]} onClick={togglePopup}>
        <Image src={filtre} alt="filtre" className={styles["icone"]} />

        {showPopup && (
          <div className={styles["popup"]} onClick={handlePopupClick}>
            {/* Level select */}
            <select
              className={styles["popup-item"]}
              value={selectedLevel}
              onChange={handleLevelChange}
            >
              <option value="All">All Levels</option>
              {levels.map(level => (
                <option key={level.idLevel} value={level.name}>
                  {level.name}
                </option>
              ))}
            </select>

            {/* Period select */}
            <select
              className={styles["popup-item"]}
              value={selectedPeriod}
              onChange={handlePeriodChange}
            >
              <option value="All">All Periods</option>
              {periods.map(period => (
                <option key={period.idPeriod} value={period.name}>
                  {period.name}
                </option>
              ))}
            </select>

            {/* Subject select */}
            {/* <select
              className={styles["popup-item"]}
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              <option value="All">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject.idSubject} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select> */}
          </div>
        )}
      </div>
    </div>
  );
};

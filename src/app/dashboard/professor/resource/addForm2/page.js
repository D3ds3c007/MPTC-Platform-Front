import React from "react";
import Head from "next/head";
import { MButton } from "@/app/components/ui/Button/MButton";
import styles from "./Page.module.css";


export default function ResourceForm() {
  return (
    <div className={`container mt-4`}>
     {/* Titre principal */}
     <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Add Form</h1>
      </div>

      <div className={`bg-white p-4 rounded`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className={styles.allResources}>Resource adding form</h2>
        </div>

      <form className={styles["form"]}>
      <div className={styles["row"]}>
        <div className={styles["form-group"]}>
            <label className={styles.label} htmlFor="resource-title">
            Title of the resource
            </label>
            <select id="resource-title" className={styles.select} required>
            <option value="">Select</option>
            <option value="Video">Video</option>
            <option value="PDF">PDF</option>
            <option value="Quiz">Quiz</option>
            </select>
        </div>
        <div className={styles["form-group"]}>
            <label className={styles.label} htmlFor="category">
            Category
            </label>
            <select id="category" className={styles.select} required>
            <option value="">Select</option>
            <option value="Grammar">Grammar</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Speaking">Speaking</option>
            </select>
        </div>
        </div>

        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label className={styles.label} htmlFor="keyword">Keyword for this file</label>
            <input type="text" id="keyword" className={styles.input} placeholder="Enter a keyword" />
          </div>
          <div className={styles["form-group"]}>
            <label className={styles.label} htmlFor="type">Type of resource</label>
            <select id="type" className={styles.select} required>
              <option value="">Select</option>
              <option value="Exercise">Exercise</option>
              <option value="Theory">Theory</option>
              <option value="Test">Test</option>
            </select>
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>Learning level</label>
          <div className={styles["learning-level"]}>
            {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
              <React.Fragment key={level}>
                <input type="radio" id={level} name="level" value={level} required />
                <label htmlFor={level} className={styles.label}>{level}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>Linguistic competence</label>
          <div className={styles["competence-options"]}>
            {["Listening", "Reading", "Writing", "Grammar", "Vocabulary"].map((comp) => (
              <label key={comp} className={styles.label}>
                <input type="checkbox" name="competence" value={comp} />
                <span></span>{comp}
              </label>
            ))}
          </div>
        </div>
        <MButton type="submit" className={styles["btn-publish"]}>
          Publish
        </MButton>
      </form>
      </div>
    </div>
  );
}

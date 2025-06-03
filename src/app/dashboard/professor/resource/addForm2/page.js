"use client";

import React, { useState } from 'react';
import Head from "next/head";
import { MButton } from "@/app/components/ui/Button/MButton";
import MPopupMessage from '@/app/components/ui/PopupMessage/MPopupMessage';
import styles from "./Page.module.css";
import { MLoading } from "@/app/components/ui/Loading/MLoading";

export default function ResourceForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ ajout

  const handlePublish = async () => {
    setMessage("Resource published!");
    showPopup("success");

    setTimeout(() => {
    setLoading(true); // ✅ démarre le chargement

      window.location.href = "/dashboard/professor/resource/ProfilProf";
    }, 1500);
  };

  const showPopup = (type) => {
    setPopupType(type);
    setIsVisible(true);
  };

  return (
    <>
      {loading ? (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          width: "100%",
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          <MLoading />
          Loading...
        </div>
      ) : (
        <div className={`container mt-4`}>
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
                  <label className={styles.label} htmlFor="resource-title">Type of resource</label>
                  <select id="resource-title" className={styles.select} required>
                    <option value="">Select</option>
                    <option value="Video">Video</option>
                    <option value="PDF">PDF</option>
                    <option value="Image">Image</option>
                    <option value="Link">Link</option>
                    <option value="Word">Word</option>
                  </select>
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles.label} htmlFor="category">Section</label>
                  <select id="category" className={styles.select} required>
                    <option value="">Select</option>
                    <option value="Grammar">Grammar</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Speaking">Speaking</option>
                    <option value="Listening">Listening</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                  </select>
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label className={styles.label} htmlFor="keyword">Keyword for this file</label>
                  <input type="text" id="keyword" className={styles.input} placeholder="Enter a keyword" />
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles.label} htmlFor="type">Category</label>
                  <select id="type" className={styles.select} required>
                    <option value="">Select</option>
                    <option value="Exercise">Exercise</option>
                    <option value="Theory">Exam</option>
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

              <MButton onClick={handlePublish} className={styles["btn-publish"]}>
                Publish
              </MButton>
            </form>
          </div>

          {isVisible && (
            <MPopupMessage
              type={popupType}
              title={popupType === "success" ? "Well done!" : "Oh snap!"}
              message={message}
              isVisible={isVisible}
              onClose={() => setIsVisible(false)}
            />
          )}
        </div>
      )}
    </>
  );
}

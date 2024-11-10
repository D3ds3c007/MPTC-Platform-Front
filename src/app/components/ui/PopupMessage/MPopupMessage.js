// components/PopupMessage.js
import { useState, useEffect } from "react";
import styles from "./MPopupMessage.module.css";

const MPopupMessage = ({ type = "success", title, message, isVisible, onClose }) => {
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          onClose();
        }, 3000); // Auto-close after 3 seconds
        return () => clearTimeout(timer);
      }
    }, [isVisible, onClose]);
  
    return (
      <div
        className={`${styles.popup} ${
          type === "success" ? styles.success : styles.error
        } ${isVisible ? styles.show : ""}`}
      >
        <button className={styles.close} onClick={onClose}>
          <i className="bi bi-x-circle"></i>
        </button>
        <div className={styles.content}>
          <span className={styles.icon}>
            <i className={`bi ${type === "success" ? "bi-check-circle" : "bi-exclamation-circle"}`}></i>
          </span>
          <div className={styles.text}>
            <h4>{title}</h4>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default MPopupMessage;

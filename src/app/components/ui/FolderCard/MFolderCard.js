import React from 'react';
import './MFolderCard.css'; // Import the CSS for styling
import Image from 'next/image';
import logo from './logo.png';

export function MFolderCard() {
  return (
    <div className="folder-card">
      <div className="folder-header">
        <Image
          className="profile-pic"
          width={40} height={40}
          src={logo}
          alt="Profile"
        />
      </div>
      <div className="folder-body">
        <h2>Jane Doe</h2>
        <p>Marketing Director at Microsoft</p>
        <div className="source">
          <button className="linkedin-btn">LinkedIn</button>
          <button className="email-btn">Email</button>
        </div>
        <div className="status">
          <span>Hot Client:</span>
          <div className="heat-indicator">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <div className="expand-icon">
        <span>&#x2197;</span>
      </div>
    </div>
  );
};


'use client';
import { useState, useEffect, useRef } from 'react';  // Add useRef here
import styles from './MVideoFeed.module.css';
import { MCard } from '../Card/MCard';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import nosignal from './NoSignal.png';

export function MVideoFeed({ title, description, isIn = "isIns"}) {
    const [imageData, setImageData] = useState(null);  // State to store the image URL
    const [isOn, setIsOn] = useState(false);  // State to store the WebSocket connection status
    const socketRef = useRef(null); // WebSocket reference
    const [endPoint, setEndPoint] = useState('ws://localhost:5193/'+isIn);

    // Close the WebSocket connection based on the state isOn
    useEffect(() => {
        if (isOn) {
            console.log(endPoint);
            socketRef.current = new WebSocket(endPoint); // Use appropriate WebSocket URL

            socketRef.current.onopen = () => {
                console.log('WebSocket connection established');
            };

            // Handle incoming WebSocket messages
            socketRef.current.onmessage = (event) => {
                // event.data will be binary (not JSON)
                const binaryData = event.data;
  
                // Create a Blob from the binary data and create a URL for it
                const imageBlob = new Blob([binaryData], { type: 'image/jpeg' });
                const imageUrl = URL.createObjectURL(imageBlob);

                // Update the state with the image URL
                setImageData(imageUrl);
            };

            socketRef.current.onerror = (error) => {
                console.error('WebSocket error:', error);
            };

            socketRef.current.onclose = () => {
                setImageData(null); // Clear the image data on WebSocket close
                console.log('WebSocket connection closed');
            };

            // Cleanup WebSocket connection on component unmount
            return () => {
                if (socketRef.current) {
                    socketRef.current.close();
                }
            };
        }
    }, [isOn, isIn]);

    return (
        <>
            <MCard title={title} toggle="true" isIn={isIn} alignment='center' description={description} setOn={setIsOn}>
                <div className={styles["image-container"]} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                }}>
                    {/* Conditionally display the stream or "No Signal" image */}
                    {imageData ? (
                        <img 
                            src={imageData}  // Use the Blob URL here
                            alt="Live Video Stream" 
                            className={styles.image}
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    ) : (
                        <Image 
                            src={nosignal} 
                            className={styles.image} 
                            alt="No Signal" 
                            layout="responsive" 
                        />
                    )}
                </div>
            </MCard>
        </>
    );
}

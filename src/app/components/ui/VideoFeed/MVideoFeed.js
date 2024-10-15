'use client';
import { useState, useEffect, useRef } from 'react';  // Add useRef here
import styles from './MVideoFeed.module.css';
import { MCard } from '../Card/MCard';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import nosignal from './NoSignal.png';
import { set } from 'react-hook-form';

export function MVideoFeed({ title, description, isIn = false, isOut = false }) {
    const [imageData, setImageData] = useState(null);  // State to store the base64 image data
    const [isOn, setIsOn] = useState(false);  // State to store the WebSocket connection status
    const socketRef = useRef(null); // WebSocket reference

    //close the websocket connection based on the state isOn
    useEffect(() => {
        if (isOn) {
            socketRef.current = new WebSocket('ws://localhost:5193/ws'); // Use appropriate WebSocket URL

            socketRef.current.onopen = () => {
                console.log('WebSocket connection established');
            };

            // Handle incoming WebSocket messages
            socketRef.current.onmessage = (event) => {
                const message = JSON.parse(event.data);
                if (message.type === 'frame') {
                    setImageData(message.data); // Set the base64 image data
                }
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
    }, [isOn]);

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
                            src={`data:image/jpeg;base64,${imageData}`} 
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

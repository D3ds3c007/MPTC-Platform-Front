'use client';
import styles from './MVideoFeed.module.css';
import { MCard } from '../Card/MCard';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import nosignal from './NoSignal.png';

export function MVideoFeed({title, description, isIn=false, isOut=false}) {
    return (
        <>
            <MCard title={title} toggle="true" isIn={isIn} alignment='center' description={description}>
                
                <div className={styles["image-container"]} style={{
                    display:'flex',
                    flexDirection: 'row',
                    gap:'20px',
                }}>
                    <Image 
                        src={nosignal} 
                        className={styles.image} 
                        alt="No Signal" 
                        layout="responsive" 
                    />
                </div>
                
            </MCard>
        </>
    );
}

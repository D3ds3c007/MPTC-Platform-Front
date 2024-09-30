'use client';
import styles from './MVideoFeed.module.css';
import { MCard } from '../Card/MCard';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import nosignal from './NoSignal.png';

export function MVideoFeed({title, description, isIn=false, isOut=false}) {
    return (
        <>
            <MCard title={title} toggle="true" isIn={isIn}>
                <p>
                    {description}
                </p>
                <div className={styles["image-container"]}>
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

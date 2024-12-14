// components/Leaderboard.js
import React from 'react';
import styles from './MTopLeaderBoard.module.css';
import Image from 'next/image';

export default function MTopLeaderBoard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.leaderboard}>
        <div className={styles.cardWrapper}>
          {/* Second Place */}
          <div className={`${styles.card} ${styles.second}`}>
            <Image src={data[1].image} alt={data[1].name} className={styles.image} />
            <p className={styles.rank}>2</p>
            <p className={styles.name}>{data[1].name}</p>
            <p className={styles.points}>{data[1].points} </p>
            <p className={styles.username}>@{data[1].username}</p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          {/* First Place */}
          <div className={`${styles.card} ${styles.first}`}>
            <div className={styles.crown}>👑</div>
            <Image src={data[0].image} alt={data[0].name} className={styles.image} />
            <p className={styles.rank}>1</p>
            <p className={styles.name}>{data[0].name}</p>
            <p className={styles.points}>{data[0].points} </p>
            <p className={styles.username}>@{data[0].username}</p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          {/* Third Place */}
          <div className={`${styles.card} ${styles.third}`}>
            <Image src={data[2].image} alt={data[2].name} className={styles.image} />
            <p className={styles.rank}>3</p>
            <p className={styles.name}>{data[2].name}</p>
            <p className={styles.points}>{data[2].points} </p>
            <p className={styles.username}>@{data[2].username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

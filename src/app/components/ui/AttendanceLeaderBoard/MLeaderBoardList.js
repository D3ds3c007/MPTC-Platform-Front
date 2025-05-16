import React from 'react';
import styles from './MLeaderBoardList.module.css';
import Image from 'next/image';
import defaultPic from './picture1.png';

const MLeaderBoardList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {data.map((user, index) => {
          const isTop3 = user.rank < 3;
          return (
            <div className={styles.cardWrapper} key={user.staffId}>
              <div className={styles.card}>
                {/* Medal for top 3 */}
                
                
                <div className={styles.userInfo}>
                    <Image src={user.image64 || defaultPic} alt={user.staffName} width={50} height={50} className={styles.image} />
                  
                  <div className={styles.textContainer}>
                    <div className={styles.name}>{user.staffName}</div>
                    {
                        isTop3 ? (
                            <div className={styles.medal}>
                            {user.rank === 1 && '🥇'}
                            {user.rank === 2 && '🥈'}
                            {user.rank === 3 && '🥉'}
                            </div>
                        ) : (
                            <div className={styles.rank}>{user.rank}</div>                            // Or whatever you want for else condition
                        )
                        }

                  </div>
                </div>

                <div className={styles.performance}>
                  <div className={styles.performanceItem}>
                    <strong>{user.latenessCount}</strong> Lateness
                  </div>
                  {/* <div className={styles.performanceItem}>
                    <strong>{user.onTimeCount}</strong> Punctuality
                  </div> */}
                  <div className={styles.performanceItem}>
                    <strong>{user.absenceCount}</strong> Absences
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MLeaderBoardList;

import React from 'react';
import styles from './MLeaderBoardList.module.css';
import Image from 'next/image';

const MLeaderBoardList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {data.map((user, index) => {
          const isTop3 = index < 3;
          return (
            <div className={styles.cardWrapper} key={user.id}>
              <div className={styles.card}>
                {/* Medal for top 3 */}
                
                
                <div className={styles.userInfo}>
                  <div className={styles.image}>
                    <Image src={user.image} alt={user.name} width={50} />
                  </div>
                  
                  <div className={styles.textContainer}>
                    <div className={styles.name}>{user.name}</div>
                    {
                        isTop3 ? (
                            <div className={styles.medal}>
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                            </div>
                        ) : (
                            <div className={styles.rank}>{index + 1}</div>                            // Or whatever you want for else condition
                        )
                        }

                  </div>
                </div>

                <div className={styles.performance}>
                  <div className={styles.performanceItem}>
                    <strong>{user.lateness}</strong> Lateness
                  </div>
                  <div className={styles.performanceItem}>
                    <strong>{user.punctuality}</strong> Punctuality
                  </div>
                  <div className={styles.performanceItem}>
                    <strong>{user.absences}</strong> Absences
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

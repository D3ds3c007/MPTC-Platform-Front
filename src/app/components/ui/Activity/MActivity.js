import styles from './MActivity.module.css';
import clsx from 'clsx';

export function MActivity({ variant='clock-in', type='Clock In', attendance='Joe Doe', time='07:36 AM', role='Professor', show }) {
    return (
        <div className={`${clsx(styles[variant], styles['activity-box'], { [styles['fade-in-down']]: show })}`}>
            <div className="profile-picture">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5em'
                }}>
                    <div className={styles["user-icon"]}>
                        <i className={`bx bx-user ${styles.icon}`}></i>
                    </div>
                    <span className="name"><b>{attendance}</b></span>
                </div>
            </div>
            <div className="user-info" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <span className="title"><b>{role}</b></span>
                <span className="title" style={{
                    fontSize: '0.8em',
                    fontWeight: 'lighter'
                }}>{type}</span>
            </div>
            <div className="clock-in-time">
                <b>{time}</b>
            </div>
        </div>
    );
}

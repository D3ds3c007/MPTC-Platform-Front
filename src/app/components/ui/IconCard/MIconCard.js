import { MCard } from "@/app/components/ui/Card/MCard";
import styles from './MIconCard.module.css';

import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

export function MIconCard({icon, title, data, children, width = '100%', height = 'auto', bgColor = 'red', padding = '20px'}) {
    return (
        <>
            <div className={styles.card} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <i class="bi bi-arrow-up-right-circle-fill"></i>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <p className="para">2024</p>
                    <p className="">Number of this year</p>
                </div>
            </div>
        </>

    );
}
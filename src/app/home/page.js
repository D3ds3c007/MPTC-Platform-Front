import { MCard } from "@/app/components/ui/Card/MCard";
import styles from "./page.module.css";
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import Image from "next/image";
import logo from "./prof.png";

export default function ProfessorPage()
{
    return(

        <div className={styles["card-container"]}>

            {/* First Row */}
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1.2em',
                padding: '5px',
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}
            >

                <div className="" style={{ gridColumn: 'span 1' }}>
                    <Image src={logo} alt="Logo" width={300} />
                </div>

                <div className={styles["boite"]}>
                    <div className={`${styles["folder"]} ${styles["primary"]}`}>
                        <div className={styles["folder-content"]}>
                            <div className={styles["level-icon"]}>
                                {/* <h4>{exam.level}</h4> */}
                            </div>
                            <h5><strong>Automatic Correction</strong></h5>
                            <p>Digital solution tailored for MPTC</p>
                        </div>
                    </div>
                    <div className={styles["corner-icon"]}>
                        <a href="/dashboard/professor/exam">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            fill="#01F073"
                            className="bi bi-arrow-up-right-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                        </svg>
                        </a>
                    </div>
                </div>

                <div className={styles["data-card"]}>
                    <div className={styles["card-header"]}>
                        <h2>Resources<br />Management</h2>
                        <a href="/dashboard/professor/resource" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles["plus-button"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00119D" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className={styles["card-body"]}>
                        <div className={styles["resource-count"]}>+99</div>
                        <p className={styles["description"]}>
                        Resources that are already uploaded. And you can add more by clicking the plus button.
                        </p>
                    </div>
                </div>

            </div>

            <br></br>

            {/* Secon Row */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1.2em',
                padding: '5px',
                justifyContent: 'center',
            }}
            >

                <div className="#" style={{ gridColumn: 'span 1' }}>
                    <div className={styles["note-card"]}>
                        <div className={styles["note-content"]}>
                            <h2>Student Note<br />Management</h2>

                            <a href="/dashboard/professor/note" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className={styles["note-plus"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00119D" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                    </svg>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                <div className={styles["service-card"]}>
                    <h6 style={{marginLeft:'-160px'}}>Platform Services</h6>
                    <div className={styles["services"]}>
                        <div className={styles["service-tag"]}>Data</div>
                        <div className={styles["service-tag"]}>Management</div>
                        <div className={styles["service-tag"]} style={{backgroundColor:'#01F073', color:'#15004F', border:'none'}}>Design</div>
                        <div className={styles["service-tag"]} style={{backgroundColor:'#FEB500', color:'#15004F', border:'none'}}>Video</div>
                        <div className={styles["service-tag"]}>Resources</div>
                        <div className={styles["service-tag"]}>Analytics</div>
                        <div className={styles["service-tag"]} style={{backgroundColor:'#15004F', border:'none'}}>Correction</div>
                        <div className={styles["service-tag"]} style={{backgroundColor:'white', color:'#15004F', border:'none'}}>Email</div>
                        <div className={styles["service-tag"]} style={{backgroundColor:'#15004F', border:'none'}}>Note</div>
                        <div className={styles["service-tag"]}>Development</div>
                    </div>
                </div>

                <div className={styles["stats-card"]}>
                    <h3>More Analytics for more Accuracy</h3>
                    <div className={styles["bar-chart"]}>
                        <div className={styles["bar-group"]}>
                            <div className={`${styles.bar} ${styles.short} ${styles.pink}`} data-label="20%" ></div>
                            <span>2020</span>
                        </div>
                        <div className={styles["bar-group"]}>
                            <div className={`${styles.bar} ${styles.medium} ${styles.purple}`} data-label="30%"></div>
                            <span>2021</span>
                        </div>
                        <div className={styles["bar-group"]}>
                            <div className={`${styles.bar} ${styles.tall} ${styles.pink}`} data-label="80%"></div>
                            <span>2022</span>
                        </div>
                        <div className={styles["bar-group"]}>
                            <div className={`${styles.bar} ${styles.medium} ${styles.purple}`} data-label="30%"></div>
                            <span>2024</span>
                        </div>
                        <div className={styles["bar-group"]}>
                            <div className={`${styles.bar} ${styles.short} ${styles.pink}`} data-label="20%"></div>
                            <span>2025</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
'use client';
import styles from './MSideBar.module.css';
import Image from 'next/image';
import logo from './logo.png';
import { Container } from "react-bootstrap";
import { usePathname } from 'next/navigation';


export function MSideBar({children, currentTitle, onMenuChange}) {

    const path = usePathname();
    
    const isAdministrator = path.startsWith('/dashboard/administrator');
    const isProfessor = path.startsWith('/dashboard/professor');
    

  return (
    
    <>

      <nav className={`${styles.sidebar} `}>
        <header>
          <div className={styles["image-text"]}>
            <span className={styles.image}>
            <Image src={logo} alt="Logo" width={160} height={60}  />
            </span>
        
          </div>

          <i className={`bx bx-chevron-right ${styles.toggle}`}></i>
        </header>

        <div className={styles["menu-bar"]}>
          <div className={styles.menu}>
            <li className={styles["search-box"]}>
              <i className={`bx bx-search ${styles.icon}`}></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className={styles["menu-links"]}>
              {isAdministrator && (
                <>
                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/administrator/" onClick={() => onMenuChange('Administrator Dashboard')}>
                      <i className={`bx bx-home-alt ${styles.icon}`}></i>
                      <span className={`${styles.text} ${styles['nav-text']}`}>Dashboard</span>
                    </a>
                  </li>

                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/administrator/revenue">
                      <i className={`bx bx-user ${styles.icon}`} onClick={() => onMenuChange('Revenue')}></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Employees</span>
                    </a>
                  </li>

                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/administrator/revenue">
                      <i className={`bx bx-list-ul ${styles.icon}`} onClick={() => onMenuChange('Revenue')}></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Activity Logs</span>
                    </a>
                  </li>

                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/administrator/leaderboard">
                      <i className={`bx bx-trophy ${styles.icon}`} onClick={() => onMenuChange('Revenue')}></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Ranking</span>
                    </a>
                  </li>
                </>
              )}

              {isProfessor && (
                <>
                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/professor/">
                      <i className={styles.icon}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                              </svg></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Home</span>
                    </a>
                  </li>

                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/professor/resource">
                      <i className={styles.icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-stack" viewBox="0 0 16 16">
  <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z"/>
</svg></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Resource</span>
                    </a>
                  </li>

                  {/* Dropdown for Note Management */}
                  
                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/professor/note">
                      <i className={styles.icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
                        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z"/>
                      </svg>
                      </i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Manage note</span>
                    </a>
                  </li>
                  <li className={styles["nav-link"]}>
                    <a href="/dashboard/professor/note/ListeEleve">
                      <i className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                        </i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Student List</span>
                    </a>
                  </li>
                </>
              )}

            </ul>
          </div>

          <div className={styles["bottom-content"]}>
            <li>
              <a href="#">
                <i className={`bx bx-log-out ${styles.icon}`}></i>
                <span className={`${styles.text} ${styles["nav-text"]}`}>Logout</span>
              </a>
            </li>

            <li className={styles.mode}>
              <div className={styles["sun-moon"]}>
                <i className={`bx bx-moon ${styles.icon} moon`}></i>
                <i className={`bx bx-sun ${styles.icon} sun`}></i>
              </div>
              <span className={`${styles["mode-text"]} ${styles.text}`}>Dark mode</span>

              <div className={styles["toggle-switch"]}>
                <span className={styles.switch}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      

      <section className={styles.home}>
        <Container className={styles.text} fluid>
            <div className={styles["navbar"]}>

                <div className={styles["navbar-left-content"]}>
                    <p>Welcome back, Dedsec</p>
                    {/* <h2>{currentTitle}</h2> */}
                </div>

                <div className={styles["navbar-right-content"]}>
                        <span className={styles["user-name"]}>Dedsec</span>
                        <div className={styles["user-icon"]}>
                            <i className={`bx bx-user ${styles.icon}`}></i>
                        </div>
                </div>
            </div>
            
     
            {children}

        </Container>
      </section>

      
      
    </>
  );
}

'use client';
import styles from './MSideBar.module.css';
import Image from 'next/image';
import logo from './logo.png';
import { Container } from "react-bootstrap";
import { usePathname } from 'next/navigation';
import { Link } from 'next/link';


export function MSideBar({children}) {

    const path = usePathname();
    
    const isAdministrator = path.startsWith('/dashboard/administrator');
    const isProfessor = path.startsWith('/dashboard/professor');
    

  return (
    
    <>

      <nav className={`${styles.sidebar} `}>
        <header>
          <div className={styles["image-text"]}>
            <span className={styles.image}>
            <Image src={logo} alt="Logo" width={40} height={40} />
            </span>
            <div className={styles["logo-text"]}>
              <span className={styles.name}>Codinglab</span>
              <span className={styles.profession}>Web developer</span>
            </div>
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
                    <a href="#">
                      <i className={`bx bx-home-alt ${styles.icon}`}></i>
                      <span className={`${styles.text} ${styles['nav-text']}`}>Dashboard</span>
                    </a>
                  </li>

                  <li className={styles["nav-link"]}>
                    <a href="#">
                      <i className={`bx bx-bar-chart-alt-2 ${styles.icon}`}></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Revenue</span>
                    </a>
                  </li>
                </>
              )}

              {isProfessor && (
                <>
                  <li className={styles["nav-link"]}>
                    <a href="#">
                      <i className={`bx bx-bell ${styles.icon}`}></i>
                      <span className={`${styles.text} ${styles["nav-text"]}`}>Notifications</span>
                    </a>
                  </li>
                </>
              )}

              {/* <li className={styles["nav-link"]}>
                <a href="#">
                  <i className={`bx bx-pie-chart-alt ${styles.icon}`}></i>
                  <span className={`${styles.text} ${styles["nav-text"]}`}>Analytics</span>
                </a>
              </li>

              <li className={styles["nav-link"]}>
                <a href="#">
                  <i className={`bx bx-heart ${styles.icon}`}></i>
                  <span className={`${styles.text} ${styles["nav-text"]}`}>Likes</span>
                </a>
              </li>

              <li className={styles["nav-link"]}>
                <a href="#">
                  <i className={`bx bx-wallet ${styles.icon}`}></i>
                  <span className={`${styles.text} ${styles["nav-text"]}`}>Wallets</span>
                </a>
              </li> */}
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
        <Container className={styles.text}>
            <div className={styles["navbar"]}>

                <div className={styles["navbar-left-content"]}>
                    <p>Welcome back, Dedsec</p>
                    <h2>Dashboard</h2>
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

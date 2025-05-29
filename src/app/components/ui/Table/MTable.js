import styles from'./MTable.module.css'; // Import the CSS for styling

export function MTable() {
  return (
      <div className={styles["table-container"]}>
        <div className={styles["table-header"]}>
          <div>Matricule</div>
          <div>Reading</div>
          <div>Grammar</div>
          <div>Vocabulary</div>
          <div>Writing</div>
          <div>Listening</div>
          <div>Score</div>
          <div>Accuracy</div>
          <div>Actions</div>
        </div>

        <br></br>

        <div className={styles["table-body"]}>
          <div className={styles["table-row"]}>
            <div>000021</div>
            <div><span className={styles["editable"]}>9.5</span>
              <span className={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>38</span>
              <span className={styles["arrow-up"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg>
              </span></div>
            <div><span className={styles["editable"]}>22.5</span></div>
            <div><span className={styles["editable"]}>5</span>
              <span className={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>18</span></div>
            <div><span className={styles["editable"]}><strong>15.29</strong></span></div>
            <div>89.66%</div>
            <div className={styles["actions"]}>
                <div className={styles["three-dot-button"]}>
                    <div className={styles["dots"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
          </div>

          <div className={styles["table-row"]}>
            <div>000022</div>
            <div><span className={styles["editable"]}>14</span>
              <span className={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>32</span></div>
            <div><span className={styles["editable"]}>19</span>
              <span className={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>15</span></div>
            <div><span className={styles["editable"]}>12</span>
              <span className={styles["arrow-down"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
                </span></div>
            <div><span className={styles["editable"]}><strong>13.14</strong></span></div>
            <div>88.21%</div>
            <div className={styles["actions"]}>
                <div className={styles["three-dot-button"]}>
                    <div className={styles["dots"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
          </div>

          <div className={styles["table-row"]}>
            <div>000023</div>
            <div><span className={styles["editable"]}>19.5</span>
              <span className={styles["arrow-up"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>32</span>
              <span className={styles["arrow-up"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg>
              </span></div>
            <div><span className={styles["editable"]}>19.5</span>
              <span className={styles["arrow-up"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}>17</span></div>
            <div><span className={styles["editable"]}>12</span></div>
            <div><span className={styles["editable"]}><strong>14.29</strong></span></div>
            <div>85.59%</div>
            <div className={styles["actions"]}>
                <div className={styles["three-dot-button"]}>
                    <div className={styles["dots"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
          </div>

          <div className={styles["table-row"]}>
            <div>000024</div>
            <div><span className={styles["editable"]}>11,5</span>
              </div>
            <div><span className={styles["editable"]}>30</span>
              <span className={styles["arrow-up"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg>
              </span></div>
            <div><span className={styles["editable"]}>14</span></div>
            <div><span className={styles["editable"]}>14</span></div>
            <div><span className={styles["editable"]}>7</span>
            <span className={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span className={styles["editable"]}><strong>10,92</strong></span></div>
            <div>87.69%</div>
            <div className={styles["actions"]}>
                <div className={styles["three-dot-button"]}>
                    <div className={styles["dots"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
  );
};


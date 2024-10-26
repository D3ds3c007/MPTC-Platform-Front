import styles from'./MTable.module.css'; // Import the CSS for styling

export function MTable() {
  return (
      <div class={styles["table-container"]}>
        <div class={styles["table-header"]}>
          <div><input type="checkbox" id="selectAll" /></div>
          <div>Matricule</div>
          <div>Reading</div>
          <div>Grammar</div>
          <div>Writing</div>
          <div>Vocabulary</div>
          <div>Score</div>
          <div>Accuracy</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        <br></br>

        <div class={styles["table-body"]}>
          <div class={styles["table-row"]}>
            <div><input type="checkbox" class={styles["row-checkbox"]} /></div>
            <div>ETU002231</div>
            <div><span class={styles["editable"]}>20</span>
              <span class={styles["arrow-down"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </span></div>
            <div><span class={styles["editable"]}>20</span>
              <span class={styles["arrow-up"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
              </svg>
              </span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div>70,00%</div>
            <div><span class={styles["status invalid"]}>Invalid</span></div>
            <div class={styles["actions"]}>
            </div>
          </div>

          <div class={styles["table-row"]}>
            <div><input type="checkbox" class={styles["row-checkbox"]} /></div>
            <div>ETU002231</div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div><span class={styles["editable"]}>20</span></div>
            <div>70,00%</div>
            <div><span class={styles["status valid"]}>Valid</span></div>
            <div class={styles["actions"]}>
            </div>
          </div>
        </div>
      </div>
  );
};


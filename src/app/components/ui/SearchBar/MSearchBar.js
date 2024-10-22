import styles from'./MSearchBar.module.css'; // Import the CSS for styling

export function MSearchBar() {
  return (
    <>
      <div className={styles["search-container"]}>
          <input type="text" placeholder="Search" className={styles["search-input"]}></input>
          <button className={styles["search-button"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" width="24" height="24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>


          </button>
      </div>
    </>
  );
};



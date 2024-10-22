import styles from'./MFilter.module.css'; // Import the CSS for styling

export function MFilter({selector="Select an option", data = ""}) {
  return (
    <>
      <div className={styles["select-wrapper"]}>
        <select className={styles["styled-select"]}>
            <option value="" disabled selected>{selector}</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
        </select>
        <div className={styles["triangle-icon"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12 2c.37 0 .713.202.895.527l9 16c.184.328.182.728-.005 1.055-.188.328-.538.528-.89.528h-18c-.353 0-.703-.2-.891-.527-.187-.327-.188-.727-.003-1.055l9-16c.184-.325.527-.528.894-.528zm-7.65 17h15.3l-7.65-13.6-7.65 13.6z" 
                fill="#00119D" stroke="#00119D" stroke-width="1"/>
            </svg>
        </div>
    </div>
    </>
  );
};



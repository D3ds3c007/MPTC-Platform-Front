import Image from "next/image";
import styles from "./page.module.css";
import { MButton } from "@/app/components/ui/Button/MButton";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1>List of components</h1>
        
      </div>
      <div style={{
        display: 'flex',
        gap: '10px',
        padding: '5px'
      }}>
        <MButton variant="primary">Primary</MButton>
        <MButton variant="danger">Danger</MButton>
        <MButton variant="warning">Warning</MButton>
      </div>
      

    </>
  );
}
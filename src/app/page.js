import Image from "next/image";
import styles from "./page.module.css";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1>List of components</h1>
        
      </div>
      
      <MCard title="Buttons" width="25%">
        <p>This is a card</p>
        <div style={{
          display: 'flex',
          gap: '1.2em',
          padding: '5px'
        }}>
          <MButton variant="primary">Primary</MButton>
          <MButton variant="danger">Danger</MButton>
          <MButton variant="warning">Warning</MButton>
        </div>

        <p>Some text here</p>
      
        
      </MCard>

      

      

    </>
  );
}
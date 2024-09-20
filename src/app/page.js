import Image from "next/image";
import styles from "./page.module.css";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { Container } from "react-bootstrap";
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1>List of components</h1>
      </div>

      <Container>
        <div className="row">
          <div className="col-md-6">
            <MCard title="Buttons">
              <p>This is a card</p>
              <div style={{
                display: 'flex',
                gap: '1.2em',
                padding: '5px'
              }}>
                <MButton variant="primary" bootstrapClass="btn-block">Primary</MButton>
                <MButton variant="danger">Danger</MButton>
                <MButton variant="warning">Warning</MButton>
              </div>

              <p>Some text here</p>
            </MCard>
          </div>

          <div className="col-md-6">
            <MCard title="Buttons">
              <p>This is a card</p>
              <div style={{
                display: 'flex',
                gap: '1.2em',
                padding: '5px'
              }}>
                <MButton variant="primary" bootstrapClass="btn-block">Primary</MButton>
                <MButton variant="danger">Danger</MButton>
                <MButton variant="warning">Warning</MButton>
              </div>

              <p>Some text here</p>
            </MCard>
          </div>
        </div>


      </Container>

      

      

    </>
  );
}
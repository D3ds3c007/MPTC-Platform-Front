import Image from "next/image";
import styles from "./page.module.css";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { Container } from "react-bootstrap";
export default function Page() {
  return (
    <>

      <Container>
      <h1>List of components</h1>

        <div className="row">
          <div className="col-md-6">
            <MCard title="Buttons" >
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
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
                  <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapClass="col-md-6" variant="warning"/>
                  <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapClass="col-md-6" variant="success"/>
                  <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapClass="col-md-6" variant="success"/>

              </div>
            </MCard>


          </div>

        </div>


      </Container>

      

      

    </>
  );
}
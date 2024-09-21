import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MSideBar} from "@/app/components/ui/SideBar/MSideBar";
export default function Page() {
  return (
    <>
      <MSideBar>

          <div className="row">
            <div className="col-md-5">
              <MCard title="Buttons" >
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                  gap: '1.2em',
                  padding: '5px'
                }}>
                  <MButton variant="primary" bootstrapclassName="btn-block">Primary</MButton>
                  <MButton variant="danger">Danger</MButton>
                  <MButton variant="warning">Warning</MButton>
                  <MButton variant="success">Success</MButton>

                </div>

                <p>Some text here</p>
              </MCard>

              <MCard title="Buttons" >
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                  gap: '1.2em',
                  padding: '5px'
                }}>
                  <MButton variant="primary" bootstrapclassName="btn-block">Primary</MButton>
                  <MButton variant="danger">Danger</MButton>
                  <MButton variant="warning">Warning</MButton>
                  <MButton variant="success">Success</MButton>

                </div>

              </MCard>
            </div>

            <div className="col-md-6">
              <MCard title="Iconic Card">   
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="primary"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="warning"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="success"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="secondary"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="pink"/>
                </div>
              </MCard>
            </div>
          </div>
      </MSideBar>
      

      

      

    </>
  );
}
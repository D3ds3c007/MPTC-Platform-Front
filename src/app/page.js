import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MSideBar} from "@/app/components/ui/SideBar/MSideBar";
import { MExamForm } from "@/app/components/ui/ExamForm/MExamForm";
import { MChart } from "@/app/components/ui/Chart/MChart";
import { MTable } from "@/app/components/ui/Table/MTable";
import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";

export default function Page() {
  return (
    <>
      <MSideBar>

          <div className="row">
            <div className="col-md-5">
              {/* <MCard title="Buttons" >
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

              </MCard> */}
            </div>

            {/* <div className="col-md-6">
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
            </div> */}






            <div className="col-md-11">
              <MCard title="Add Exam Form">   
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                    <MExamForm></MExamForm>
                </div>
              </MCard>
              
            </div>

            <div className="col-md-11">
              <MCard title="Exam Informations">   
                  <div className="row">

                        <div className="col-md-3" style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}>
                          <MFolderCard></MFolderCard>
                        </div>

                        <div className="col-md-4" style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          border: '1px solid #CFD4FA',
                          borderRadius: '10px',
                        }}>
                          
                        </div>

                        <div className="col-md-1" style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}>
                          
                        </div>


                        <div className="col-md-3" style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          backgroundColor: '#CFD4FA',
                          borderRadius: '10px',
                          padding: '20px',
                        }}>
                          <h4>Action</h4>
                          <p><i></i> Update Informations</p>
                          <p><i></i> Delete Folder</p>

                        </div>


                  </div>

              </MCard>
              
            </div>



            <div className="col-md-11">
              <MCard title="Exam Result">   
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                      <MTable></MTable>
                  
                </div>
              </MCard>
              
            </div>



            <div className="col-md-11">
              <MCard title="System Performance">   
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>

                      <MIconicCard data="50" label="Scanned Paper" bootstrapclassName="col-md-6" variant="success"/>
                      <MIconicCard data="1mn 30s" label="Total Execution time" bootstrapclassName="col-md-6" variant="warning"/>
                      <MIconicCard data="70,00%" label="General Accuracy" bootstrapclassName="col-md-6" />

                </div>

                <div className="row">

                  <div className="col-md-6" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                      <MChart></MChart>

                  </div>

                  <div className="col-md-3" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: '#15004F',
                    borderRadius: '10px',
                  }}>

                  </div>
                </div>

                
              </MCard>
              
            </div>
          </div>
      </MSideBar>
      

      

      

    </>
  );
}
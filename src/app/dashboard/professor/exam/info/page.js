import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";

export default function Info(){
    return(
        <>
            <div className="row">
                <div className="col-md-8">
                    <MCard title="Exam Information" >
                        <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap:'wrap',
                        gap: '1.2em',
                        }}>
                            
                            <MFolderCard />

                            <div className="col-md-6" style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              border: '1px solid #CFD4FA',
                              borderRadius: '10px',
                            }}>
                              
                            </div>
                        </div>
                    
                    </MCard>
                </div>
                <div className="col-md-4">
                    <MCard title="Actions" >
                        
                    </MCard>
                </div>
            </div>


            <div className="col-md-11">
              <MCard title="Stats Overview">   
                  <div className="row">


                  </div>

              </MCard>
              
            </div>
        </>
    )
}
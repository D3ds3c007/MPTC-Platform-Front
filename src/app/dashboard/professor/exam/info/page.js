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
                        </div>
                    
                    </MCard>
                </div>
                <div className="col-md-4">
                    <MCard title="Actions" >
                        
                    </MCard>
                </div>
            </div>


            <div className="col-md-11">
              <MCard title="Exam Informations">   
                  <div className="row">

                        <div className="col-md-4" style={{
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
                          {/* <MDragAndDropUpload/> This now has form context */}
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
        </>
    )
}
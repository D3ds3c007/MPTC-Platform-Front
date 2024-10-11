import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAddButton } from "@/app/components/ui/AddButton/MAddButton";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MChart } from "@/app/components/ui/Chart/MChart";

export default function ExamPage(){
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
                        padding: '5px'
                        }}>
                            <MFolderCard />
                        </div>
                    
                    </MCard>
                </div>
                <div className="col-md-4">
                    <MCard title="" >
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </MCard>
                </div>
            </div>
            <div className="row">
                <MCard title="Exam Result" >
                    <p>These are temporary results. Please validate each entry to save them as the final exam results.</p>
                </MCard>
            </div>
            <div className="row">
                <MCard title="System Performance" >
                    <div className="" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        }}>

                            <MIconicCard data="50" label="Number of Scanned papers" bootstrapClass="col-md-3" variant="primary"/>
                            <MIconicCard data="70,00%" label="General Accuracy of the System" bootstrapClass="col-md-3" variant="success"/>
                            <MIconicCard data="1mn30s" label="Total of Performing Time" bootstrapClass="col-md-3" variant="secondary"/>
                            <MIconicCard data="2024" label="This is a card of this year" bootstrapClass="col-md-3" variant="pink"/>
                            {/* <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapClass="col-md-3" /> */}
                        
                    </div>

                    <br></br>
                    <div className="col-md-6">
                        <MChart></MChart>
                    </div>
                    
                </MCard>
                
            </div>
        </>
    )
}